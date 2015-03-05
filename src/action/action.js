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

    namespace = function (key, space) {
        return space ? key + '.' + space : key;
    },

    Action = function () {
        var self = this;
        
        // Create value repo
        self.values = {};
        
        // Create new property manager
        defaultProps.scope = this;
        self.props = new Repo(defaultProps);

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
        } else {
            this.queue.add.apply(this.queue, arguments);
        }
        
        this.playDirection = 1;

        return this.start('Play');
    },

    /*
        Run Action indefinitely
        
        Syntax
            .run(preset, [override])
                @param [string]: Name of preset
                @param [object]: (optional) Override object
                
            .run(params)
                @param [object]: Action properties
                
        @return [Action]
    */
    run: function () {
        this.set(parseArgs.generic.apply(this, arguments));
        return this.start('Run');
    },
    
    /*
        Track values to mouse, touch or custom Input
        
        Syntax
            .track(preset, [override], input)
                @param [string]: Name of preset
                @param [object]: (optional) Override object
                @param [event || Input]: Input or event to start tracking
                
            .track(params, input)
                @param [object]: Action properties
                @param [event || Input]: Input or event to start tracking
                
        @return [Action]
    */
    track: function () {
        this.set(parseArgs.track.apply(this, arguments));
        return this.start('Track');
    },
    
    /*
        Activate for one frame and set values to current
        
        @return [Action]
    */
    fire: function () {
        this.set(parseArgs.generic.apply(this, arguments));
        return this.start('Fire');
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
            currentProps = this.props.get(),
            values = this.values,
            linkToAngleDistance = { link: 'AngleAndDistance' },
            key = '';
            
        defaultProp = defaultProp || 'current';

        self.props.set(props);

        // Loop over new values and set
        routes.shard(function (route, bucket) {
            var baseValue = {
                    route: route.name
                },
                mergeIn = {},
                value;

            for (key in bucket) {
                if (bucket.hasOwnProperty(key) && route.preprocess) {
                    value = bucket[key];
                    
                    if (!utils.isObj(value)) {
                        mergeIn = { name: key };
                        mergeIn[defaultProp] = value;
                    } else {
                        mergeIn = value;
                        mergeIn.name = key;
                    }

                    route.preprocess(key, utils.merge(baseValue, mergeIn), self, currentProps);
                }
            }
        }, props);
        
        // Create radialX and radialY if we're tracking angle and distance
        if (values['angle'] && values['distance']) {
            self.setValue('radialX', linkToAngleAndDistance)
                .setValue('radialY', linkToAngleAndDistance);
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
            self.props.set('rubix', processType);
        }

        self.isActive(true);
        self.started = utils.currentTime() + self.props.get('delay');
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
        self.elapsed = 0;
        self.started = utils.currentTime();
        
        return self;
    },
    
    /*
	    Reverse Action progress and values
    */
    reverse: function () {
        this.playDirection *= -1;
    },
    
    /*
        Swap value origins and to
    */
    flip: function () {
	    var self = this,
	        values = self.values;
	    
	    self.progress = calc.difference(self.progress, 1);
        self.elapsed = calc.difference(self.elapsed, self.props.get('duration'));
        
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
        var stepTaken = false,
            step = this.props.get(key),
            count = this.props.get(key + 'Count'),
            forever = (step === true);

        if (forever || utils.isNum(step)) {
            ++count;
            this.props.set(key + 'Count', count);
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
            nextInQueue = this.queue.next();
console.log('checking');
        if (utils.isArray(nextInQueue)) {
            console.log('test');
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
        this.props.set(key, value);
        
        return this;
    },
    
    
    getProp: function (key) {
        return this.props.get(key);
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
        var props = this.props.store,
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
        var dom = this.props.store.dom,
            returnVal;
        
        if (dom) {
            returnVal = styler(dom, prop);
        }
        
        return returnVal == styler ? this : returnVal;
    }
    
};

module.exports = Action;