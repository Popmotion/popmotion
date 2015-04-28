"use strict";

var parseArgs = require('./parse-args.js'),
    Value = require('../types/value.js'),
    Repo = require('../types/repo.js'),
    Queue = require('./queue.js'),
    Process = require('../process/process.js'),
    processor = require('./processor.js'),
    routes = require('./routes.js'),
    defaultProps = require('../opts/action.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    styler = require('../routes/css/styler.js'),
    
    linkToAngleDistance = { link: 'AngleAndDistance' },

    namespace = function (key, space) {
        return (space && space !== routes.defaultRoute) ? key + '.' + space : key;
    },

    Action = function () {
        var self = this;
        
        // Create value repo
        self.values = {};
        
        // Create new property manager
        defaultProps.scope = this;
        self.props = new Repo();
        self.props(defaultProps);

        // Create data store
        self.data = new Repo();
        
        // Register process wth cycl
        self.process = new Process(function (framestamp, frameDuration) {
	        if (self.active) {
                processor(self, framestamp, frameDuration);
	        }
        });
        
        self.queue = new Queue();

        self.set(parseArgs.generic.apply(self, arguments));
    };

Action.prototype = {

    // [number]: Progress represented in a range of 0 - 1
    progress: 0,
    
    // [number]: Time elapsed in ms
    elapsed: 0,

    // [number]: Number of frames action has been inactive
    inactiveFrames: 0,
    
    // [number]: 1 = forward, -1 = backwards
    playDirection: 1,

    /*
        Play the provided actions as animations
        
        Syntax
            .play(playlist, [override])
                @param [string]: Playlist of presets
                @param [object]: (optional) Override object
                
            .play(params)
                @param [object]: Action properties
                
            .play(params, [duration, easing, onEnd])
                @param [object]: Action props
                @param [number]: Duration in ms
                @param [string]: Easing function to apply
                @param [function]: Function to run on end
                
        @return [Action]
    */
    play: function () {
        var props = parseArgs.play.apply(this, arguments);

        if (!this.isActive()) {
            this.set(props, 'to');
            this.playDirection = 1;
            this.start('play');
        } else {
            this.queue.add.apply(this.queue, arguments);
        }

        return this;
    },
    
    /*
        Set Action values and properties
        
        Syntax
            .set(params)
                @param [object]: Action properties
            
        @return [Action]
    */
    set: function (props, defaultProp) {
        var self = this,
            values = self.values;
        
        // Update current properties
        self.props(props);
        
        // Set default property to current if it isn't set
        defaultProp = defaultProp || 'current';
        
        // Loop over values and update
        routes.shard(function (route, routeValues) {
            var preprocessedValues = {},
                valueBase = {},
                value,
                base = {
                    route: route.name
                };

            for (var key in routeValues) {
                if (routeValues.hasOwnProperty(key)) {
                    value = routeValues[key];
                    
                    if (!utils.isObj(value)) {
                        valueBase = { name: key };
                        valueBase[defaultProp] = value;
                    } else {
                        valueBase = value;
                        valueBase.name = key;
                    }
                    
                    valueBase = utils.merge(base, valueBase);

                    // If no preprocess step, assign directly
                    if (!route.preprocess) {
                        self.setValue(key, valueBase, props, route.name);
                        
                    // Else preprocess and add each returned value
                    } else {
                        preprocessedValues = route.preprocess(key, valueBase, self, props);

                        for (var subKey in preprocessedValues) {
                            self.setValue(key, preprocessedValues[subKey], props, route.name);
                        }
                    }
                }
            }
        }, props);
        
        // Create radialX and radialY if we're tracking angle and distance
        if (values['angle'] && values['distance']) {
            self.setValue('radialX', linkToAngleDistance)
                .setValue('radialY', linkToAngleDistance);
        }
        
        self.resetOrigins();

        return self;
    },
    
    /*
        Loop through all values and create origin points
    */
    resetOrigins: function () {
        var values = this.values,
            key = '';

        for (key in values) {
            if (values.hasOwnProperty(key)) {
                values[key].origin = values[key].current;
            }
        }
    },

    /*
        Start Action

        @param [string]: Name of processing type to use
        @return [Action]
    */
    start: function (processType) {
	    var self = this;

        self.resetProgress();
        
        if (processType) {
            self.props('rubix', processType);
        }

        self.isActive(true);
        self.started = utils.currentTime() + self.props('delay');
        self.framestamp = self.started;
        self.firstFrame = true;
        
        self.process.start();

        return self;
    },
    
    /*
        Stop current Action process
    */
    stop: function () {
        this.queue.clear();
        this.pause();
        return this;
    },
    
    /*
        Pause current Action
    */
    pause: function () {
	    var self = this,
	        input = this.getProp('input');

        self.isActive(false);
        self.process.stop();

        if (input && input.stop) {
            input.stop();
        }

        return self;
    },
    
    /*
        Resume a paused Action
    */
    resume: function () {
	    var self = this;
	    
        self.started = utils.currentTime();
        self.framestamp = self.started;
        self.isActive(true);
        
        self.process.start();
        
        return self;
    },
    
    /*
        Reset Action progress and values
    */
    reset: function () {
	    var self = this,
	        values = self.values;

        self.resetProgress();
        
        for (var key in values) {
            values[key].reset();
        }
        
        return self;
    },
    
    /*
	    Reset Action progress
    */
    resetProgress: function () {
	    var self = this;

        self.progress = 0;
        self.elapsed = (self.playDirection === 1) ? 0 : self.props('duration');
        self.started = utils.currentTime();
        
        return self;
    },
    
    /*
	    Reverse Action progress and values
    */
    reverse: function () {
        var values = this.values;

        this.playDirection *= -1;
        
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                values[key].retarget();
            }
        }

        return this;
    },
    
    /*
        Swap value origins and to
    */
    flip: function () {
	    var self = this,
	        values = self.values;
	    
	    self.progress = calc.difference(self.progress, 1);
        self.elapsed = calc.difference(self.elapsed, self.props('duration'));
        
        for (var key in values) {
            values[key].flip();
        }

        return self;
    },
    
    toggle: function () {
        if (this.isActive()) {
            this.pause();
        } else {
            this.resume();
        }
        
        return this;
    },
    
    /*
        Check for next steps and perform, stop if not
    */
    next: function () {
        var self = this,
            nexts = [{
                key: 'loop',
                callback: self.reset
            }, {
                key: 'yoyo',
                callback: self.reverse
            }, {
                key: 'flip',
                callback: self.flip
            }],
            possibles = nexts.length,
            hasNext = false;
            
        for (var i = 0; i < possibles; ++i) {
            if (self.checkNextStep(nexts[i].key, nexts[i].callback)) {
                hasNext = true;
                break;
            }
        }

        if (!hasNext && !self.playNext()) {
            self.stop();
        } else {
            self.isActive(true);
        }
        
        return self;
    },
    
    /*
        Check next step
        
        @param [string]: Name of step ('yoyo' or 'loop')
        @param [callback]: Function to run if we take this step
    */
    checkNextStep: function (key, callback) {
        var COUNT = 'Count',
            stepTaken = false,
            step = this.props(key),
            count = this.props(key + COUNT),
            forever = (step === true);

        if (forever || utils.isNum(step)) {
            ++count;
            this.props(key + COUNT, count);
            if (forever || count <= step) {
                callback.call(this);
                stepTaken = true;
            }
        }

        return stepTaken;
    },
    
    /*
        Next in playlist
    */
    playNext: function () {
        var stepTaken = false,
            nextInQueue = this.queue.next(this.playDirection);

        if (utils.isArray(nextInQueue)) {
            this.set(parseArgs.generic.apply(this, nextInQueue), 'to')
                .reset();

            stepTaken = true;
        }

        return stepTaken;
    },
    
    setValue: function (key, value, inherit, space) {
        var existing = this.getValue(key, space);
        
        key = namespace(key, space);

        // Update if value exists
        if (existing) {
            existing.set(value, inherit);

        // Or create new if it doesn't
        } else {
            this.values[key] = new Value(key, value, inherit, this);
        }

        return this;
    },
    
    
    getValue: function (key, space) {
        key = namespace(key, space);

        return this.values[key];
    },
    
    
    setProp: function (key, value) {
        this.props(key, value);
        
        return this;
    },
    
    
    getProp: function (key) {
        return this.props(key);
    },
    
    /*
        Is Action active?
        
        @param [boolean] (optional): If provided, will set action to active/inactive
        @return [boolean]: Active status
    */
    isActive: function (active) {
        return this.active = (active !== undefined) ? active : this.active;
    },
    
    /*
        Update order of value keys
        
        @param [string]: Key of value
        @param [boolean]: Whether to move value to back
        @param [string] (optional): Name of order array (if not default)
    */
    updateOrder: function (key, moveToBack, orderName) {
        var props = this.props(),
            pos, order;
        
        orderName = orderName || 'order';
        order = props[orderName] = props[orderName] || [];
        pos = order.indexOf(key);
        
        if (pos === -1 || moveToBack) {
            order.push(key);
            
            if (pos !== -1) {
                order.splice(pos, 1);
            }
        }
    },
    
    /*
        Style our dom element
    */
    style: function (prop) {
        var dom = this.props('dom'),
            returnVal;
        
        if (dom) {
            returnVal = styler(dom, prop);
        }
        
        return returnVal == styler ? this : returnVal;
    }
    
};

module.exports = Action;