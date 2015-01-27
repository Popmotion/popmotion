(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
    Cycl  
*/
"use strict";

var shim = require('./shim.js'),
    Process = require('./process.js'),

    Cycl = function () {
        // Check if we need to shim rAF and indexOf
        shim.featureCheck();
    };
    
Cycl.prototype = {
    
    /*
        Create a new process in the loop
        
        @param [function]: Function to run every frame
    */
    newProcess: function () {
        return new Process(arguments[0], arguments[1]);
    }

};

// Only allow one instance of Cyclos to prevent multiple requestAnimationFrame loops
module.exports = new Cycl();
},{"./process.js":4,"./shim.js":5}],2:[function(require,module,exports){
/*
    The loop
*/
"use strict";

var Timer = require('./timer.js'),
    Loop = function () {
        this.timer = new Timer();
    },
    manager;
    
Loop.prototype = {
    
    /*
        [boolean]: Current status of animation loop
    */
    isRunning: false,
    
    /*
        Fire all active processes once per frame
    */
    frame: function () {
        var self = this;
        
        requestAnimationFrame(function () {
            var framestamp = self.timer.update(), // Currently just measuring in ms - will look into hi-res timestamps
                isActive = self.callback.call(self.scope, framestamp, self.timer.getElapsed());

            if (isActive) {
                self.frame(true);
            } else {
                self.stop();
            }
        });
    },
    
    /*
        Start loop
    */
    start: function () {
        // Make sure we're not already running a loop
        if (!this.isRunning) {
            this.isRunning = true;
            this.frame();
        }
    },
    
    /*
        Stop the loop
    */
    stop: function () {
        this.isRunning = false;
    },
    
    /*
        Set the callback to run every frame
        
        @param [Object]: Execution context
        @param [function]: Callback to fire
    */
    setCallback: function (scope, callback) {
        this.scope = scope;
        this.callback = callback;
    }
 
};

module.exports = new Loop();
},{"./timer.js":6}],3:[function(require,module,exports){
"use strict";

var theLoop = require('./loop.js'),
    ProcessManager = function () {
        this.all = {};
        this.active = [];
        this.deactivateQueue = [];
        theLoop.setCallback(this, this.fireActive);
    };
    
ProcessManager.prototype = {
    
    /*
        [int]: Used for process ID
    */
    processCounter: 0,
    
    /*
        [int]: Number of active processes
    */
    activeCount: 0,
    
    /*
        Get the process with a given index
        
        @param [int]: Index of process
        @return [Process]
    */
    getProcess: function (i) {
        return this.all[i];
    },
    
    /*
        Get number of active processes
        
        @return [int]: Number of active processes
    */
    getActiveCount: function () {
        return this.activeCount;
    },
    
    /*
        Get active tokens

        @return [array]: Active tokens
    */
    getActive: function () {
        return this.active;
    },
    
    /*
        Get the length of the deactivate queue
        
        @return [int]: Length of queue
    */
    getQueueLength: function () {
        return this.deactivateQueue.length;
    },
    
    /*
        Fire all active processes
        
        @param [int]: Timestamp of executing frames
        @param [int]: Time since previous frame
        @return [boolean]: True if active processes found
    */
    fireActive: function (framestamp, elapsed) {
        var process,
            activeCount = 0,
            activeProcesses = [];

        // Purge and check active count before execution
        this.purge();
        activeCount = this.getActiveCount();
        activeProcesses = this.getActive();
        
        // Loop through active processes and fire callback
        for (var i = 0; i < activeCount; i++) {
            process = this.getProcess(activeProcesses[i]);
            
            if (process) {
                process.fire(framestamp, elapsed);
            }
        }

        // Repurge and recheck active count after execution
        this.purge();
        activeCount = this.getActiveCount();
        
        return activeCount ? true : false;
    },
    
    /*
        Register a new process
        
        @param [Process]
        @return [int]: Index of process to be used as ID
    */
    register: function (process) {
        var id = this.processCounter;

        this.all[id] = process;
        
        this.processCounter++;
        
        return id;
    },
    
    /*
        Activate a process
        
        @param [int]: Index of active process
    */
    activate: function (i) {
        var queueIndex = this.deactivateQueue.indexOf(i),
            isQueued = (queueIndex > -1),
            isActive = (this.active.indexOf(i) > -1);
        
        // Remove from deactivateQueue if in there
        if (isQueued) {
            this.deactivateQueue.splice(queueIndex, 1);
        }
        
        // Add to active processes array if not already in there
        if (!isActive) {
            this.active.push(i);
            this.activeCount++;
            theLoop.start(this);
        }
    },
    
    /*
        Deactivate a process
        
        @param [int]: Index of process to add to deactivate queue
    */
    deactivate: function (i) {
        this.deactivateQueue.push(i);
    },
    
    /*
        Purge the deactivate queue
    */
    purge: function () {
        var activeIndex,
            queueLength = this.getQueueLength();
        
        while (queueLength--) {
            activeIndex = this.active.indexOf(this.deactivateQueue[queueLength]);
            
            // If process in active list deactivate
            if (activeIndex > -1) {
                this.active.splice(activeIndex, 1);
                this.activeCount--;
            }
        }
        
        this.deactivateQueue = [];
    },
    
    /*
        Remove the provided id and reindex remaining processes
    */
    kill: function (id) {
        delete this.all[id];
    }
    
};

module.exports = new ProcessManager();
},{"./loop.js":2}],4:[function(require,module,exports){
/*
    Process
    =======================
    
    
*/
"use strict";

var manager = require('./manager.js'),

    /*
        Process constructor
        
        Syntax
            var process = new Process(scope, callback);
            var process = new Process(callback);
    */
    Process = function () {
        var hasScope = (arguments[1] !== undefined),
            callback = hasScope ? arguments[1] : arguments[0],
            scope = hasScope ? arguments[0] : this;

        this.setCallback(callback);
        this.setScope(scope);

        this.setId(manager.register(this));
    };
    
Process.prototype = {
    
    /*
        [boolean]: Is this process currently active?
    */
    isActive: false,
    
    /*
        [boolean]: Has this process been killed?
    */
    isKilled: false,

    /*
        Fire callback
        
        @param [timestamp]: Timestamp of currently-executed frame
        @param [number]: Time since last frame
    */
    fire: function (timestamp, elapsed) {
        // Check timers
        if (this.isActive) {
            this.callback.call(this.scope, timestamp, elapsed);
        }
        
        if (this.isInterval) {
            this.deactivate();
        }
    },
    
    /*
        Set process callback
        
        @param [function]: Function to fire per frame
        @return [this]
    */
    setCallback: function (callback) {
        this.callback = callback;
        
        return this;
    },
    
    /*
        Set callback scope
        
        @param [function]: Fire callback in this context
        @return [this]
    */
    setScope: function (scope) {
        this.scope = scope;
        
        return this;
    },
    
    /*
        Start process
        
        @param [int]: Duration of process in ms, 0 if indefinite
        @return [this]
    */
    start: function (duration) {
        var self = this;
        
        self.reset();
        self.activate();
        
        if (duration) {
            self.stopTimer = setTimeout(function () {
                self.stop();
            }, duration);
        }

        return self;
    },
    
    /*
        Stop process
        
        @return [this]
    */
    stop: function () {
        this.reset();
        this.deactivate();
        
        return this;
    },
    
    /*
        Activate process
        
        @return [this]
    */
    activate: function () {
        if (!this.isKilled) {
            this.isActive = true;
            manager.activate(this.id);
        }

        return this;
    },
    
    /*
        Deactivate process
        
        @return [this]
    */
    deactivate: function () {
        this.isActive = false;
        manager.deactivate(this.id);
        
        return this;
    },
    
    /*
        Fire process every x ms
        
        @param [int]: Number of ms to wait between refiring process.
        @return [this]
    */
    every: function (interval) {
	    var self = this;

        this.reset();

        this.isInterval = true;

        this.intervalTimer = setInterval(function () {
            self.activate();
        }, interval);
    },
    
    /*
        Clear all timers
        
        @param 
    */
    reset: function () {
        this.isInterval = false;
        clearTimeout(this.stopTimer);
        clearInterval(this.intervalTimer);
        
        return this;
    },
    
    /*
        Kill function in manager, release for garbage collection
    */
    kill: function () {
        this.stop();
        this.isKilled = true;
        manager.kill(this.id);
    },
    
    setId: function (id) {
        this.id = id;
    }
};

module.exports = Process;
},{"./manager.js":3}],5:[function(require,module,exports){
"use strict";

var checkRequestAnimationFrame = function () {
        /*
            requestAnimationFrame polyfill
            
            For IE8/9 Flinstones
        
            Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
            
            http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
             
            requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
             
            MIT license
        */
        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'],
            vendorsLength = vendors.length;
        
        // Check for prefixed implementations
        for (var x = 0; x < vendorsLength && !window.requestAnimationFrame; x++) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        }
        
        // If there is, fo absolute shizzle, no rAF implementations, make one out of setTimeout and putty
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                
                lastTime = currTime + timeToCall;
                
                return id;
            }
        }
    },
    checkIndexOf = function () {
        /*
            indexOf polyfill
            
            For IE8 troglodites
            
            Taken from http://stackoverflow.com/questions/3629183/why-doesnt-indexof-work-on-an-array-ie8
        */
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (elt /*, from*/) {
                var len = this.length >>> 0,
                    from = Number(arguments[1]) || 0;
                    
                from = (from < 0) ? Math.ceil(from) : Math.floor(from);
                
                if (from < 0) {
                    from += len;
                }
                
                for (; from < len; from++) {
                    if (from in this && this[from] === elt) {
                        return from;
                    }
                }
                
                return -1;
            }
        }
    };

module.exports = {
    featureCheck: function () {
        checkRequestAnimationFrame();
        checkIndexOf();
    }
};
},{}],6:[function(require,module,exports){
"use strict";

var maxElapsed = 30,
    Timer = function () {
        this.update();
    };

Timer.prototype = {
    update: function () {
        this.prev = this.current;
        return this.current = new Date().getTime();
    },

    getElapsed: function () {
        return Math.min(this.current - this.prev, maxElapsed);
    }
};

module.exports = Timer;
},{}],7:[function(require,module,exports){
"use strict";

var cycl = require('cycl'),
    processor = require('./processor.js'),
    presets = require('./presets.js'),
    rubix = require('./rubix.js'),
    Pointer = require('../input/pointer.js'),
    KEY = require('../opts/keys.js'),
    defaultProps = require('../opts/action.js'),
    defaultValue = require('../opts/value.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Value = require('../types/value.js'),
    Repo = require('../types/repo.js'),

    Action = function (def, override) {
        var self = this;
        
        // Create value manager
        self.values = new Repo();
        
        // Create new property manager
        defaultProps.scope = this;
        self.props = new Repo(defaultProps);

        // Create data store
        self.data = new Repo();
        
        // Register process wth cycl
        self.process = cycl.newProcess(function (framestamp, frameDuration) {
	        if (self.active) {
            	processor.action(self, framestamp, frameDuration);
	        }
        });
        
        self.set(def, override);
    };

Action.prototype = {

    // [number]: Progress represented in a range of 0 - 1
    progress: 0,
    
    // [number]: Time elapsed in ms
    elapsed: 0,

    // [number]: Number of frames action has been inactive
    inactiveFrames: 0,

    /*
        Play the provided actions as animations
        
        Syntax
            .play(playlist, [override])
                @param [string]: Playlist of presets
                @param [object]: (optional) Override object
                
            .play(params)
                @param [object]: Action properties
                
        @return [Action]
    */
    play: function (defs, override) {
        this.set(defs, override);
        return this.start(KEY.RUBIX.TIME);
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
    run: function (defs, override) {
        this.set(defs, override);
        return this.start(KEY.RUBIX.RUN);
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
        var args = arguments,
            argLength = args.length,
            defs, override, input;
        
        // Loop backwards over arguments
        for (var i = argLength - 1; i >= 0; i--) {
            if (args[i] !== undefined) {
                // If input hasn't been defined, this is the input
                if (input === undefined) {
                    input = args[i];

                // Or if this is the second argument, these are overrides
                } else if (i === 1) {
                    override = args[i];
                    
                // Otherwise these are the defs
                } else if (i === 0) {
                    defs = args[i];
                }
            }
        }

        if (!input.current) {
            input = new Pointer(input);
        }

        this.set(defs, override, input);

        return this.start(KEY.RUBIX.INPUT);
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
            self.changeRubix(processType);
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
	    var self = this;

        self.isActive(false);
        self.process.stop();

        return self;
    },
    
    /*
        Pause current Action
    */
    pause: function () {
	    this.stop();
	    
	    return this;
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
	        values = self.values.get();

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
	    var self = this,
	        values = self.values.get();
	    
	    self.progress = calc.difference(self.progress, 1);
        self.elapsed = calc.difference(self.elapsed, self.props.get('duration'));
        
        for (var key in values) {
            values[key].reverse();
        }

        return self;
    },
    
    toggle: function () {
        if (this.isActive()) {
            this.pause();
        } else {
            this.resume();
        }
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
            playlist = this.props.get('playlist'),
            playlistLength = playlist.length,
            playhead = this.props.get('playhead'),
            next = {};

        // Check we have a playlist
        if (playlistLength > 1) {
            ++playhead;
            
            if (playhead < playlistLength) {
                next = presets.getDefined(playlist[playhead]);
                next.playhead = playhead;
                this.set(next);
                this.reset();
                stepTaken = true;
            }
        }

        return stepTaken;
    },
    
    /*
        Set Action values and properties
        
        Syntax
            .set(preset[, override, input])
                @param [string]: Name of preset to apply
                @param [object] (optional): Properties to override preset
            
            .set(params[, input])
                @param [object]: Action properties
            
        @return [Action]
    */
    set: function (defs, override, input) {
        var self = this,
            validDefinition = (defs !== undefined),
            base = {},
            values = {};

        if (validDefinition) {
            base = presets.createBase(defs, override);
        }
            
        if (input !== undefined) {
            base.input = input;
            base.inputOrigin = input.get();
        }
        
        self.props.set(base);
        
        if (base.values) {
        	self.setValues(base.values, self.props.get());
        }
        
        values = self.values.get();

        // Create origins
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                values[key].set('origin', values[key].get('current'));
            }
        }
        
        return self;
    },
    
    setValues: function (newVals, inherit) {
        var values = this.values.get();

        for (var key in newVals) {
            if (newVals.hasOwnProperty(key)) {
                this.setValue(key, newVals[key], inherit);
            }
        }
        
        // If angle and distance exist, create an x and y
        if (this.getValue('angle') && this.getValue('distance')) {
            this.setValue('x');
            this.setValue('y');
        }
    },
    
    
    setValue: function (key, value, inherit) {
        var existing = this.getValue(key),
            newVal;

        // Update if value exists
        if (existing) {
            existing.set(value, inherit);

        // Or create new if it doesn't
        } else {
            newVal = new Value(defaultValue);
            newVal.set(value, inherit);

            this.values.set(key, newVal);
        }

        return this;
    },
    
    
    getValue: function (key) {
        return this.values.get(key);
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
        if (active !== undefined) {
            this.active = active;
        }

        return this.active;
    },
    
    /*
        Change Action properties
        
        @param [string]: Type of processing rubix to use
        @param [object]: Base properties of new input
    */
    changeRubix: function (processType) {
        this.props.set('rubix', rubix[processType]);

        return this;
    }
    
};

module.exports = Action;
},{"../input/pointer.js":14,"../opts/action.js":15,"../opts/keys.js":16,"../opts/value.js":17,"../types/repo.js":21,"../types/value.js":22,"../utils/calc.js":23,"../utils/utils.js":26,"./presets.js":8,"./processor.js":9,"./rubix.js":10,"cycl":1}],8:[function(require,module,exports){
"use strict";

var KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),

    presetStore = {},
    Presets = function () {};

Presets.prototype = {

    /*
        Define a new Action preset
        
        Syntax
        
            .define(name, preset)
                @param [string]: Name of preset
                @param [object]: Preset options/properties
                
            .define(presets)
                @param [object]: Multiple presets as named object
                
        @return [Redshift]
    */
    define: function () {
        var props = {},
            key = '',
            chain = [],
            preset = {};
        
        // Check if supplied arguments are string/object or object map
        if (arguments[1] === undefined) {
            props = arguments[0];
        } else {
            props[arguments[0]] = arguments[1];
        }
        
        // Iterate over props and create presets
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                
                // If this preset already exists and forceOverride isn't set to true
                if (presetStore[key] && !props[key].forceOverride) {
                    throw KEY.ERROR.ACTION_EXISTS;
                
                // Otherwise create the preset
                } else {
                    chain = key.split('.');
                    
                    // If there's an inheritence chain, merge
                    // TODO: multilayered inheritence
                    if (chain.length > 1) {
                        
                        // Look for existing preset
                        if (presetStore[chain[0]]) {
                            presetStore[key] = utils.merge(presetStore[chain[0]], props[key]);
                            
                        // Otherwise throw error
                        } else {
                            throw KEY.ERROR.NO_ACTION;
                        }
                    
                    // Otherwise directly copy
                    } else {
                        presetStore[key] = props[key];
                    }
                }
                
            }
        } // end for
    },
    
    
    /*
        Create base action
        
        @param [string || array || object]:
            String: Name or space-delimited playlist of actions
            Array: Playlist of actions
            Object: Raw action
        @param [object]: Action override
    */
    createBase: function (defs, override) {
        var baseAction = {},
            actionList = [];

        // If this is a straight action
        if (utils.isObj(defs)) {
            baseAction = defs;
            baseAction.playlist = [];
            
        // These are previously defined actions
        } else {
            // Comma-delimited string or single action name
            if (utils.isString(defs)) {
                actionList = defs.split(" ");
                
            // Array of action names
            } else {
                actionList = defs;
            }
            
            baseAction = this.getDefined(actionList[0]);
            baseAction.playlist = actionList;
        }
        
        // Apply overrides if present
        if (utils.isObj(override)) {
            baseAction = this.merge(baseAction, override);
        }
        
        return baseAction;
    },
    
    
    /*
        Get defined action
        
        @param [string]: The name of the predefined action
    */
    getDefined: function (key) {
        return this.copy(presetStore[key]);
    },
    
    /*
        Copy an action
    */
    copy: function (action) {
        var newAction = {};

        for (var key in action) {
            if (action.hasOwnProperty(key)) {
                if (key !== 'values') {
                    newAction[key] = action[key];
                } else {
                    newAction.values = utils.copy(action.values);
                }
            }
        }
        
        return newAction;
    },
    
    /*
        Merge an action
    */
    merge: function (action, override) {
        for (var key in override) {
            if (override.hasOwnProperty(key)) {
                if (key !== 'values') {
                    action[key] = override[key];
                } else {
                    action.values = utils.merge(action.values, override.values);
                }
            }
        }
        
        return action;
    }
    
};

module.exports = new Presets();
},{"../opts/keys.js":16,"../utils/utils.js":26}],9:[function(require,module,exports){
/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
	calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Process = function () {},
    process;
    
Process.prototype = {
    
    /*
        Process an action
        
        @param [Action]: Action to process
        @param [number]: Timestamp of executing frame
        @param [number]: Duration, in ms, since last frame
    */
    action: function (action, framestamp, frameDuration) {
        var output = {},
            props = action.props.store,
            data = action.data.store,
            values = action.values.store,
            value,
            rubix = props.rubix,
            hasChanged = false;

        // Fire onStart if firstFrame
        if (action.firstFrame) {
            if (props.onStart) {
                props.onStart.call(props.scope, data);
            }

            action.firstFrame = false;
        }
        
        // Update associated Input
        if (props.input) {
	        output.input = props.input.onFrame(framestamp);
        }
        
        // Update progress
        action.progress = rubix.calcProgress(action, props, values, framestamp, frameDuration);

        // Calculate new values
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                value = values[key].store;

                // Ease value
                output[key] = rubix.easeValue(key, value, action, frameDuration);

                // Round
                if (value.round) {
                    output[key] = Math.round(output[key]);
                }

                // Check if has changed
                if (value.current != output[key]) {
                    hasChanged = true;
                    value.current = output[key];
                }
            }
        } // end value calculations

        // Calculate new x and y if angle and distance present
        output = this.angleAndDistance(values, output);

        // Fire onFrame callback
        if (props.onFrame) {
            props.onFrame.call(props.scope, output, data);
        }

        // Fire onChange callback
        if (hasChanged && props.onChange) {
            props.onChange.call(props.scope, output, data);
        }
        
        // Fire onEnd and deactivate if at end
        if (rubix.hasEnded(action, hasChanged)) {
            if (props.onEnd) {
                props.onEnd.call(props.scope, output, data);
            }

            action.next();
        }
        
        // Update Action framestamp
        action.framestamp = framestamp;
    },
    
    /*
        Update associated input
        
        @param [Input]: Bound input
        @param [number]: Framestamp of latest frame
    */
    updateInput: function (input, framestamp) {
        if (input) {
            input.updateInput(framestamp);
        }
    },
    
    /*
	    Process angle and distance
	    
	    @param [object]: Action origin point
	    @param [object]: Current output
	    @return [object]: Output with updated x and y
    */
    angleAndDistance: function (values, output) {
	    var point = {};

	    if (values.angle && values.distance) {
		    point = calc.pointFromAngleAndDistance({ x: values.x.get('current'), y: values.y.get('current') }, output.angle, output.distance);
		    output.x = point.x;
		    output.y = point.y;
	    }

	    return output;
    }
};

module.exports = new Process();
},{"../utils/calc.js":23,"../utils/utils.js":26,"./rubix.js":10}],10:[function(require,module,exports){
/*
    Rubix modules
    ----------------------------------------
    
    Rubix modules are used to process an action based on its .rubix property.
    
    Available rubix:
        'Time'
        'Pointer'
        'Speed'
        
    Processing functions:
        calcProgress
        hasEnded
        updateInput
        easeValue
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Easing = require('../utils/easing.js'),
    KEY = require('../opts/keys.js'),
    simulate = require('./simulate.js'),
    Rubix = function () {},
    rubixController;

Rubix.prototype = {

    Time: {
        /*
            Calc progress
            
            Calc action's progress through timelimit
            
            @param [Action]: action to measure
            @param [timestamp]: framestart timestamp
            @return [number]: 0 to 1 value representing how much time has passed
        */
        calcProgress: function (action, props, values, frameStart) {
            action.elapsed += calc.difference(action.framestamp, frameStart) * props.dilate;

            return calc.restricted(calc.progress(action.elapsed, props.duration + props.delay), 0, 1);
        },
        
        /*
            Has action ended
            
            True if progress is equal to or higher than 1. If looping is enabled
            we restart the action
            
            @param [Action]: action to analyse
            @return [boolean]: has action ended
        */
        hasEnded: function (action) {
            return action.progress >= 1 ? true : false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, value, action, frameDuration) {
            var progress = action.progress,
                newValue = 0;

            if (value.steps) {
                progress = utils.stepProgress(progress, 1, value.steps);
            }
            
            newValue = Easing.withinRange(progress, value.origin, value.to, value.ease);
            
            value.velocity = calc.speedPerSecond(calc.difference(value.current, newValue), frameDuration);
            
            return newValue;
        }
    },
    
    Input: {
        /*
            Get input key
        */
        getInputKey: function (key, link, inputOffset) {
            var inputKey = false;
            
            // If value is listening to a present input
            if (utils.isString(link) && inputOffset.hasOwnProperty(link)) {
                inputKey = link;

            // Of if value key actually exists in input
            } else if (inputOffset.hasOwnProperty(key)) {
                inputKey = key;
            }
            
            return inputKey;
        },
    
        /*
            Calc progress
            
            Calc the progress of each input metric. 
            
            @param [Action]: action to measure
            @return [object]: Object of all progresses
        */
        calcProgress: function (action, props, values, frameStart) {
            var progress = {},
                inputKey, value, offset,
                inputOffset = calc.offset(props.inputOrigin, props.input.current);

            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    value = values[key].get();
                    inputKey = this.getInputKey(key, value.link, inputOffset);

                    // If we have an input key we animate this property
                    if (inputKey !== false) {
                        
                        offset = inputOffset[inputKey];
                        progress[key] = {};

                        // If value has specified range
                        if (value.hasRange) {
                            progress[key].type = KEY.PROGRESS.RANGE;
                            progress[key].value = calc.progress(value.origin + offset, value.min, value.max);

                        // Or we're calculating progress directly
                        } else {
                            progress[key].type = KEY.PROGRESS.DIRECT;
                            progress[key].value = value.origin + offset;                   
                        }
                        
                    }
                }
            }

            return progress;
        },
        
        /*
            Has function ended?
            
            Tracking currently needs manually ending
        */
        hasEnded: function (action) {
            return false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress of pointer props
        */
        easeValue: function (key, value, action, frameDuration) {
            var progress = value.link ? action.progress[value.link] : action.progress[key],
                newValue = value.current;
                
            if (utils.isObj(progress)) {
                // If this is a range progress
                if (progress.type === KEY.PROGRESS.RANGE) {
                
                    // Step if steps - DRY it up
                    if (value.steps) {
                        progress.value = utils.stepProgress(progress.value, 1, value.steps);
                    }
                
                    newValue = Easing.withinRange(progress.value, value.min, value.max, 'linear', value.escapeAmp);
                // Or is a direct progress
                } else {
                    newValue = progress.value;
                }
                
            }
            
            value.velocity = calc.speedPerSecond(calc.difference(value.current, newValue), frameDuration);

            return newValue;
        }
    },
    
    Run: {
        /*
            Calc new velocity
            
            Calc new velocity based on simulation output
            
            @param [Action]: action to measure
            @return [object]: Object of all velocitys
        */
        calcProgress: function (action, props, values, frameStart, frameDuration) {
            var progress = {},
                point,
                value;

            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    value = values[key].get();
                    value.velocity = simulate[value.simulate](value, frameDuration);
                    progress[key] = calc.speedPerFrame(value.velocity, frameDuration);
                }
            }
            
            return progress;
        },
        
        /*
            Has this action ended?
            
            @return [boolean]: False for now - TODO create better default
        */
        hasEnded: function (action, hasChanged) {
            var hasEnded = false;
            
            if (hasChanged) {
                action.inactiveFrames = 0;
            } else {
                action.inactiveFrames++;
                
                if (action.inactiveFrames > 2) {
                    hasEnded = true;
                }
            }
            
            return hasEnded;
        },
        
        /*
            Add the velocity to the current value
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, value, action) {
            var newValue = value.current + action.progress[key];

            if (value.min !== undefined) {
                newValue = Math.max(value.min, newValue);
                
                if (value.bounce && newValue <= value.min) {
                    value.velocity = simulate.bounce(value);
                }
            }
            
            if (value.max !== undefined) {
                newValue = Math.min(value.max, newValue);
                
                if (value.bounce && newValue >= value.max) {
                    value.velocity = simulate.bounce(value);
                }
            }

            return newValue;
        }
    }
};

module.exports = new Rubix();;
},{"../opts/keys.js":16,"../utils/calc.js":23,"../utils/easing.js":24,"../utils/utils.js":26,"./simulate.js":11}],11:[function(require,module,exports){
"use strict";

var frictionStopLimit = .2,
    calc = require('../utils/calc.js'),
    speedPerFrame = calc.speedPerFrame,
    Simulate = function () {},
    simulate;

Simulate.prototype = {
    
    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    velocity: function (value, duration) {
        return value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
    },

    /*
        Gravity
        
        TODO: neaten this effect (due to rounding issues) and add clause that reduces velocity to 0
        
        @param [Value]
        @returns [number]: New velocity
    */
    gravity: function (value, duration) {
        return value.velocity + speedPerFrame(value.gravity, duration);
    },
    
    /*
        Friction
        
        @param [Value]
        @returns [number]: New velocity
    */
    friction: function (value, duration) {
        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);
        return (newVelocity < frictionStopLimit && newVelocity > -frictionStopLimit) ? 0 : calc.speedPerSecond(newVelocity, duration);
    },
    
    /*
        Spring
        
        @param [Value]
        @returns [number]: New velocity
    */
    spring: function (value, duration) {
        var distance = value.to - value.current,
            springDistance = distance * speedPerFrame(value.spring, duration);
            
        value.velocity += springDistance;
            
        return this.friction(value, duration);
    },
    
    /*
        Bounce
        
        Invert velocity and reduce by provided fraction
        
        @param [Value]
        @return [number]: New velocity
    */
    bounce: function (value) {
        return value.velocity *= -value.bounce;
    }
};

simulate = new Simulate();

module.exports = simulate;
},{"../utils/calc.js":23}],12:[function(require,module,exports){
"use strict";

var maxHistorySize = 3,
    utils = require('../utils/utils.js'),
    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */
    History = function (obj, max) {
        this.max = max || maxHistorySize;
        this.entries = [];
        this.add(obj);
    };
    
History.prototype = {
    
    /*
        Push new var to history
        
        Shift out oldest entry if we've reached maximum capacity
        
        @param [var]: Variable to push into history.entries
    */
    add: function (obj) {
        var currentSize = this.getSize();
        
        this.entries.push(obj);
        
        if (currentSize >= this.max) {
            this.entries.shift();
        }
    },
    
    /*
        Get variable at specified index

        @param [int]: Index
        @return [var]: Var found at specified index
    */
    get: function (i) {
        i = (utils.isNum(i)) ? i : this.getSize() - 1;

        return this.entries[i];
    },
    
    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */
    getPrevious: function () {
        var index = this.getSize() - 2;

        return this.get(index);
    },
    
    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */
    getSize: function () {
        return this.entries.length;
    }
    
};

module.exports = History;
},{"../utils/utils.js":26}],13:[function(require,module,exports){
/*
    Input controller
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    History = require('../bobs/history.js'),

    /*
        Input constructor
        
            Syntax
                newInput(name, value)
                    @param [string]: Name of to track
                    @param [number]: Initial value
                    
                newInput(props)
                    @param [object]: Object of values

        @return [Input]
    */
    Input = function () {
        this.current = {};
        this.offset = {};
        this.velocity = {};
        this.history = new History();
        this.update(arguments[0], arguments[1]);
    };

Input.prototype = {
    
    // [number]: Number of frames of inactivity before velocity is turned to 0
    maxInactiveFrames: 2,
    
    // [number]: Number of frames input hasn't been updated
    inactiveFrames: 0,
    
    /*
        Get latest input values
        
        @param [string] (optional): Name of specific property to return
        @return [object || number]: Latest input values or, if specified, single value
    */
    get: function (prop) {
        var latest = this.history.get(),
            val = (prop !== undefined) ? latest[prop] : latest;
        
        return val;
    },

    /*
        Update the input values
        
        Syntax
            input.update(name, value)
                @param [string]: Name of to track
                @param [number]: Initial value
                
            input.update(props)
                @param [object]: Object of values
                
        @return [Input]
    */
    update: function () {
        var values = {};

        if (utils.isNum(arguments[1])) {
            values[arguments[0]] = arguments[1];
        } else {
            values = arguments[0];
        }

        this.history.add(utils.merge(this.current, values));
        
        return this;
    },
    
    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
        @return [Input]
    */
    onFrame: function (timestamp) {
        var latest, hasChanged;
        
        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }
        
        latest = this.history.get();
        hasChanged = utils.hasChanged(this.current, latest);

        // If input has changed between frames  
        if (hasChanged) {
            this.velocity = calc.offset(this.current, latest);
            this.current = latest;
            this.inactiveFrames = 0;

        // Or it hasn't moved and our frame limit has been reached
        } else if (this.inactiveFrames >= this.maxInactiveFrames) {
            this.velocity = calc.offset(this.current, this.current);
        
        // Or input hasn't changed
        } else {
            this.inactiveFrames++;
        }
        
        this.lastFrame = timestamp;
        
        return this;
    }
    
};

module.exports = Input;
},{"../bobs/history.js":12,"../utils/calc.js":23,"../utils/utils.js":26}],14:[function(require,module,exports){
"use strict";

var Input = require('./input.js'),
    Point = require('../types/point.js'),
    History = require('../bobs/history.js'),
    KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    currentPointer, // Sort this crap out for multitouch
    
    /*
        Pointer constructor
    */
    Pointer = function (e) {
        var event = utils.getActualEvent(e), // In case of jQuery event
            isTouch = utils.isTouchEvent(event),
            startPoint = utils.convertEventIntoPoint(event, isTouch);
        
        this.update(new Point(startPoint));
        this.isTouch = isTouch;
        this.bindEvents();
    };

Pointer.prototype = new Input();

/*
    Bind move event
*/
Pointer.prototype.bindEvents = function (isTouch) {
    this.moveEvent = this.isTouch ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
    
    currentPointer = this;
    
    document.documentElement.addEventListener(this.moveEvent, this.onMove);
};

/*
    Unbind move event
*/
Pointer.prototype.unbindEvents = function () {
    document.documentElement.removeEventListener(this.moveEvent, this.onMove);
};

/*
    Pointer onMove event handler
    
    @param [event]: Pointer move event
*/
Pointer.prototype.onMove = function (e) {
    e = utils.getActualEvent(e);
    e.preventDefault();

    currentPointer.update(new Point(utils.convertEventIntoPoint(e, currentPointer.isTouch)));
};

Pointer.prototype.stop = function () {
    this.unbindEvents();
};

module.exports = Pointer;
},{"../bobs/history.js":12,"../opts/keys.js":16,"../types/point.js":20,"../utils/utils.js":26,"./input.js":13}],15:[function(require,module,exports){
"use strict";

var rubix = require('../action/rubix.js');

module.exports = {
    // Is this action active
    active: false,
    
    // What to use to process this aciton
    rubix: rubix['Time'],
    
    // Multiply output value by
    amp: 1,
    
    // Multiply output value outside min/max by
    escapeAmp: 0,
    
    // Delay this action by x ms
    delay: 0,
    
    // Time of animation (if animating) in ms
    duration: 400,
    
    // Ease animation
    ease: 'easeInOut',
    
    // Round output value?
    round: false,
    
    // Divide animation into this many steps
    steps: 0,
    
    // 
    dilate: 1,
    
    playhead: 0,
    
    // The object we're checking
    input: undefined,
    
    // Input origin on tracking start
    inputOrigin: undefined,
    
    // Use the progress of this property of linked input
    link: undefined,
    
    // Loop animation x number of times (true for ETERNALLY)
    loop: false,
    
    // Number of times animation has looped
    loopCount: 0,
    
    // Play animation and reverse x number of times (true for forever)
    yoyo: false,
    
    // Number of times animation has yoyoed
    yoyoCount: 0,
    
    // Run this callback on action start
    onStart: undefined,
    
    // Run this on action end
    onEnd: undefined,
    
    // Run this every frame
    onFrame: undefined,
    
    // Run this when action changes
    onChange: undefined
};
},{"../action/rubix.js":10}],16:[function(require,module,exports){
/*
    String constants
    ----------------------------------------
*/
"use strict";

module.exports = {
    REDSHIFT: 'redshift',
    EASING: {
        IN: 'In',
        IN_OUT: 'InOut',
        OUT: 'Out',
        LINEAR: 'linear'
    },
    RUBIX: {
        INPUT: 'Input',
        TIME: 'Time',
        RUN: 'Run'
    },
    ERROR: {
        ACTION_EXISTS: "Action already defined. Use forceOverride: true to override.",
        NO_ACTION: "No action defined to inherit from.",
        INVALID_EASING: ": Easing not defined",
    },
    EVENT: {
        MOUSE: 'mouse',
        MOUSEMOVE: 'mousemove',
        TOUCH: 'touch',
        TOUCHMOVE: 'touchmove',
    },
    PROGRESS: {
        DIRECT: 'Direct',
        RANGE: 'Range'
    }
};
},{}],17:[function(require,module,exports){
"use strict";

module.exports = {
    // Actual value
    current: 0,
    start: 0,

    // Current target
    to: 1,

    // Maximum range for value
    min: undefined,
    max: undefined,
    hasRange: false,

    // Simulation defaults
    simulate: 'velocity',
    velocity: 0,
    deceleration: 0,
    acceleration: 0,
    gravity: 30,
    bounce: 0,
    friction: 0,
    spring: 0.03,
    
    // Animation defaults
    duration: 400,
    delay: 0,
    ease: 'easeInOut',

    round: false,
    steps: 0,
    
    // Tracking defaults
    escapeAmp: 0,
    link: null // use the progress of this value
};
},{}],18:[function(require,module,exports){
"use strict";

var Action = require('./action/action.js'),
    Input = require('./input/input.js'),
    presets = require('./action/presets.js'),
    easing = require('./utils/easing.js'),
    calc = require('./utils/calc.js'),
    cycl = require('cycl'),
    Redshift = function () {};

Redshift.prototype = {
    
    /*
        Create a new Action controller
        
        @return [Action]: Newly-created Action
    */
    newAction: function (defs, override) {
        return new Action(defs, override);
    },
    
    /*
        Create a new Input controller
        
        @return [Input]: Newly-created Input
    */
    newInput: function () {
        return new Input(arguments[0], arguments[1]);
    },
    
    /*
        Define a new Action preset
        
        Syntax
        
            .define(name, preset)
                @param [string]: Name of preset
                @param [object]: Preset options/properties
                
            .define(presets)
                @param [object]: Multiple presets as named object
                
        @return [Redshift]
    */
    define: function () {
        presets.define.apply(presets, arguments);
        
        return this;
    },

    /*
        Add bezier curve function
        
        Add the specified bezier curve the EasingFunction's available easings
        My favourite bezier curve generator is Lea Verou's excellent http://cubic-bezier.com/
        
        @param [string]: Name of the new easing function 
        @params [number]: x/y coordinates of handles
    */
    addBezier: function () {
        easing.addBezier.apply(easing, arguments);
        
        return this;
    },
    
    calc: calc,
    
    cycl: cycl
    
};

module.exports = new Redshift();
},{"./action/action.js":7,"./action/presets.js":8,"./input/input.js":13,"./utils/calc.js":23,"./utils/easing.js":24,"cycl":1}],19:[function(require,module,exports){
(function (global){
/*
    Bezier function generator
        
    Gaëtan Renaudeau's original BezierEasing
    You're a hero
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var newtonIterations = 8,
    newtonMinSlope = 0.001,
    subdivisionPrecision = 0.0000001,
    subdivisionMaxIterations = 10,
    kSplineTableSize = 11,
    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
    float32ArraySupported = 'Float32Array' in global,

    Bezier = function (mX1, mY1, mX2, mY2) {
        var self = this;
        
        this.precompute(mX1, mY1, mX2, mY2);

        return function (t) {
            return self.calcBezier(self.getTForX(t, mX1, mX2), mY1, mY2);
        }
    };
    
Bezier.prototype = {

    precompute: function (mX1, mY1, mX2, mY2) {
        this.mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        this.calcSampleValues(mX1, mX2);
    },
    
    calcSampleValues: function (mX1, mX2) {
        for (var i = 0; i < kSplineTableSize; ++i) {
            this.mSampleValues[i] = this.calcBezier(i * kSampleStepSize, mX1, mX2);
        }
    },

    newtonRaphsonIterate: function (t, guess, mX1, mX2) {
        var i = 0,
            currentSlope,
            currentX;
        
        for (i; i < newtonIterations; ++i) {
            currentSlope = this.getSlope(guess, mX1, mX2);
            
            if (currentSlope !== 0.0) {
                currentX = this.calcBezier(guess, mX1, mX2) - t;
                guess -= currentX / currentSlope;
            }
        }
        return t;
    },
    
    binarySubdivide: function (t, aA, aB, mX1, mX2) {
        var i = 0,
            currentX,
            currentT;
            
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = this.calcBezier(currentT, mX1, mX2) - t;
            
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
        
        return currentT;
    },

    getTForX: function (t, mX1, mX2) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = kSplineTableSize - 1,
            dist,
            guess,
            initialSlope;
            
        for (intervalStart; currentSample != lastSample && this.mSampleValues[currentSample] <= t; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        
        --currentSample;

        dist = (t - this.mSampleValues[currentSample] / (this.mSampleValues[currentSample + 1] - this.mSampleValues[currentSample]));
        
        guess = intervalStart + dist * kSampleStepSize;
        initialSlope = this.getSlope(guess, mX1, mX2);

        if (initialSlope === newtonMinSlope) {
            t = this.newtonRaphsonIterate(t, guess, mX1, mX2);
        } else if (initialSlope == 0.0) {
            t = guess;
        } else {
            t = this.binarySubdivide(t, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return t;
    },

    getSlope: function (t, a1, a2) {
        return 3.0 * this.A(a1, a2) * t * t + 2.0 * this.B(a1, a2) * t + this.C(a1);
    },

    calcBezier: function (t, a1, a2) {
        return ((this.A(a1, a2) * t + this.B(a1, a2)) * t + this.C(a1)) * t;
    },
    
    A: function (a1, a2) {
        return 1.0 - 3.0 * a2 + 3.0 * a1;
    },
    
    B: function (a1, a2) {
        return 3.0 * a2 - 6.0 * a1;
    },
    
    C: function (a1) {
        return 3.0 * a1;
    }
};

module.exports = Bezier;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],20:[function(require,module,exports){
/*
    Point class
    ----------------------------------------
    
    Defines a 3D point in space
    
    @param [number || Point]: Either X axis value or Point object
    @param [number]: Y axis
    @param [number]: Z axis
    @return [Point]
*/
"use strict";

var Point = function (x, y, z) {
        this.setPoint(x, y, z);
    };

Point.prototype = {
    setPoint: function (x, y, z) {
        var xIsObj = (typeof x === 'object');

        this.x = xIsObj ? x.x || 0 : x || 0;
        this.y = xIsObj ? x.y || 0 : y || 0;
        this.z = xIsObj ? x.z || 0 : z || 0;
    }
};

module.exports = Point;
},{}],21:[function(require,module,exports){
"use strict";

var utils = require('../utils/utils.js'),

    /*
        Repo constructor
        
        Creates data store and sets any initialising data
        
        @param [string || object]: Key or data
        @param [var] (optional): Data to store
    */
    Repo = function () {
        this.store = {};
        this.set.apply(this, arguments);
    };

Repo.prototype = {
    
    /*
        Get data or data property
        
        @param [string] (optional): Key
        @returns [var || dataStore]: Data found
    */
    get: function () {
        var args = arguments;
        return (args.length) ? this.store[args[0]] : this.store;
    },
    
    /*
        Set data or data property
        
        @param [string || object]: Key or data
        @param [var] (optional): Data to store
    */
    set: function (data) {
        // If we're being passed an object, add all
        if (utils.isObj(data)) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    this.store[key] = data[key];
                }
            }

        // Or add specific property
        } else if (data !== undefined) {
            this.store[data] = arguments[1];
        }

        return this;
    }
    
};

module.exports = Repo;
},{"../utils/utils.js":26}],22:[function(require,module,exports){
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Repo = require('./repo.js'),

    /*
        Resolve a value
        
        Determine if the value to be set is
            - Function returning the value
            - String relative equation
            - Or actual value
    */
    resolve = function (val, current) {
        var resolvedVal = val;
        
        // If this is a function, execute
        if (utils.isFunc(val)) {
            resolvedVal = val(current);
        
        // Or if this is a relative assignment, calculate new contents
        } else if (utils.isRelativeValue(val)) {
            resolvedVal = calc.relativeValue(current, val);
        }

        return resolvedVal;
    },
    
    loopOver = function (newData, inherit, value) {
        var data = {};
        
        for (var key in value.store) {
            // If Action has property but new data doesn't
            if (inherit && inherit.hasOwnProperty(key) && !newData.hasOwnProperty(key)) {
                data[key] = resolve(inherit[key], value.get(key));

            // Or if new data does
            } else if (newData.hasOwnProperty(key)) {
                data[key] = resolve(newData[key], value.get(key));
            }
        }
        
        return data;
    },

    /*
        Value constructor
    */
    Value = function () {
        var repo = new Repo(),
            setter = repo.set,
            firstSet = true;

        // Apply defaults
        setter.apply(repo, arguments);

        /*
            Set a value
            
            Data for values needs resolving before sending to the repo
            
            Syntax
                .set('key', val) // Sets specific value
                .set({ key: val }) // Sets multiple values
                .set({ key: val }, { key: val2 }) // With inherit
                .set(val) // Sets 'current' value
        */
        repo.set = function () {
            var args = arguments,
                arg1 = args[0],
                arg2 = args[1],
                data = {};

            // If we have an object, resolve every item first
            if (utils.isObj(arg1)) {
                data = loopOver(arg1, arg2, this);

                // Handle start property
                if (firstSet && arg1.hasOwnProperty('start')) {
                    setter.apply(this, ['current', resolve(arg1.start)]);
                    firstSet = false;
                }

            } else {

                // If this is a specific setter, ie .set('key', val)
                if (utils.isString(arg1) && !utils.isRelativeValue(arg1)) {
                    data[arg1] = resolve(arg2, this.get(arg1));
                    
                // Or this is a var to be resolved, assign it to current
                } else {
                    data.current = resolve(arg1, this.get('current'));
                }
            }

            setter.apply(this, [data]);
            
            // Check for range
            if (this.store.min !== undefined && this.store.max !== undefined) {
                setter.apply(this, ['hasRange', true]);
            } else {
                setter.apply(this, ['hasRange', false]);
            }
        };

        
        /*
            Reset current to from
        */
        repo.reset = function () {
            this.set('current', this.get('origin'));
        };
        
        
        /*
            Reverse current and from
        */
        repo.reverse = function () {
            this.set({
                to: this.get('origin'),
                origin: this.get('to')
            });
        };
        
        return repo;
    };

module.exports = Value;
},{"../utils/calc.js":23,"../utils/utils.js":26,"./repo.js":21}],23:[function(require,module,exports){
/*
    Calculators
    ----------------------------------------
    
    Simple I/O snippets
*/

"use strict";

var utils = require('./utils.js');
    
module.exports = {
    
    /*
        Angle between points
        
        Translates the hypothetical line so that the 'from' coordinates
        are at 0,0, then return the angle using .angleFromCenter()
        
        @param [object]: X and Y coordinates of from point
        @param [object]: X and Y cordinates of to point
        @return [radian]: Angle between the two points in radians
    */
    angle: function (pointA, pointB) {
        var from = pointB ? pointA : {x: 0, y: 0},
            to = pointB || pointA,
            point = {
                x: this.difference(from.x, to.x),
                y: this.difference(from.y, to.y)
            };
        
        return this.angleFromCenter(point.x, point.y);
    },


    /*
        Angle from center
        
        Returns the current angle, in radians, of a defined point
        from a center (assumed 0,0)
        
        @param [number]: X coordinate of second point
        @param [number]: Y coordinate of second point
        @return [radian]: Angle between 0, 0 and point in radians
    */
    angleFromCenter: function (x, y) {
        return Math.atan2(y, x);
    },
    
    /*
        Convert degrees to radians
        
        @param [number]: Value in degrees
        @return [number]: Value in radians
    */
    degreesToRadians: function (degrees) {
        return degrees * Math.PI / 180;
    },
    
    /*
        Difference
        
        Returns the difference between a and b by subtracting b from a.
        Useful in calcualting the zero-normalised position of b, or the
        difference something has travelled between the two points
        
        @param [number]: Value a
        @param [number]: Value b
        @return [number]: Difference between value a and value b
    */
    difference: function (a, b) {
        return b - a;
    },
    
    /*
        Dilate
        
        Change the progression between a and b according to dilation.
        
        So dilation = 0.5 would change
        
        a --------- b
        
        to
        
        a ---- b
        
        @param [number]: Previous value
        @param [number]: Current value
        @param [number]: Dilate progress by x
        @return [number]: Previous value plus the dilated difference
    */
    dilate: function (a, b, dilation) {
        return a + ((b - a) * dilation);
    },
        
    /*
        Distance
        
        Returns the distance between (0,0) and pointA, unless pointB
        is provided, then we return the difference between the two.
        
        @param [object/number]: x and y or just x of point A
        @param [object/number]: (optional): x and y or just x of point B
        @return [number]: The distance between the two points
    */
    distance: function (pointA, pointB) {
        return (typeof pointA === "number") ? this.distance1D(pointA, pointB) : this.distance2D(pointA, pointB);
    },


    /*
        Distance 1D
        
        Returns the distance between point A and point B
        
        @param [number]: Point A
        @param [number]: (optional): Point B
        @return [number]: The distance between the two points
    */
    distance1D: function (pointA, pointB) {
        var bIsNum = (typeof pointB === 'number'),
            from = bIsNum ? pointA : 0,
            to = bIsNum ? pointB : pointA;

        return Math.abs(this.difference(from, to));
    },

  
    /*
        Distance 2D
        
        Returns the distance between (0,0) and point A, unless point B
        is provided, then we return the difference between the two.
        
        @param [object]: x and y of point A
        @param [object]: (optional): x and y of point B
        @return [number]: The distance between the two points
    */
    distance2D: function (pointA, pointB) {
        var bIsObj = (typeof pointB === "object"),
            from = bIsObj ? pointA : {x: 0, y: 0},
            to = bIsObj ? pointB : pointA,
            point = {
                x: Math.abs(this.difference(from.x, to.x)),
                y: Math.abs(this.difference(from.y, to.y))
            };
            
        return this.hypotenuse(point.x, point.y);
    },
        
    /*
        Hypotenuse
        
        Returns the hypotenuse, side C, given the lengths of sides A and B.
        
        @param [number]: Length of A
        @param [number]: Length of B
        @return [number]: Length of C
    */
    hypotenuse: function (a, b) {
        var a2 = a * a,
            b2 = b * b,
            c2 = a2 + b2;
            
        return Math.sqrt(c2);
    },
    
    /*
        Offset between two inputs
        
        Calculate the difference between two different inputs
        
        @param [Point]: First input
        @param [Point]: Second input
        @return [Offset]: Distance metrics between two points
    */
    offset: function (a, b) {
        var offset = {},
            angle, distance;

        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                if (a.hasOwnProperty(key)) {
                    offset[key] = this.difference(a[key], b[key]);
                } else {
                    offset[key] = 0;
                }
            } 
        }
        
        if (utils.isNum(offset.x) && utils.isNum(offset.y)) {
            offset.angle = this.angle(a, b);
            offset.distance = this.distance2D(a, b);
        }
            
        return offset;
    },
    
    /*
        Point from angle and distance
        
        @param [object]: 2D point of origin
        @param [number]: Angle from origin
        @param [number]: Distance from origin
        @return [object]: Calculated 2D point
    */
    pointFromAngleAndDistance: function (origin, angle, distance) {
        var point = {};

		point.x = distance * Math.cos(angle) + origin.x;
        point.y = distance * Math.sin(angle) + origin.y;

        return point;
    },

    /*
        Progress within given range
        
        Given a lower limit and an upper limit, we return the progress
        (expressed as a number 0-1) represented by the given value, and
        limit that progress to within 0-1.
        
        @param [number]: Value to find progress within given range
        @param [number]: Lower limit if full range given, upper if not
        @param [number] (optional): Upper limit of range
        @return [number]: Progress of value within range as expressed 0-1
    */
    progress: function (value, limitA, limitB) {
        var bIsNum = (typeof limitB === 'number'),
            from = bIsNum ? limitA : 0,
            to = bIsNum ? limitB : limitA,
            range = this.difference(from, to),
            progress = (value - from) / range;

        return progress;
    },
    
    /*
        Convert radians to degrees
        
        @param [number]: Value in radians
        @return [number]: Value in degrees
    */
    radiansToDegrees: function (radians) {
        return radians * 180 / Math.PI;
    },
    
    /*
        Return random number between range
        
        @param [number] (optional): Output minimum
        @param [number] (optional): Output maximum
        @return [number]: Random number within range, or 0 and 1 if none provided
    */
    random: function (min, max) {
        min = utils.isNum(min) ? min : 0;
        max = utils.isNum(max) ? max : 1;
        return Math.random() * (max - min) + min;
    },

    
    /*
        Calculate relative value
        
        Takes the operator and value from a string, ie "+=5", and applies
        to the current value to resolve a new target.
        
        @param [number]: Current value
        @param [string]: Relative value
        @return [number]: New value
    */
    relativeValue: function (current, rel) {
        var newValue = current,
            equation = rel.split('='),
            operator = equation[0],
            num = parseFloat(equation[1]);

        switch (operator) {
            case '+':
                newValue = current + num;
                break;
            case '-':
                newValue = current - num;
                break;
            case '*':
                newValue = current * num;
                break;
            case '/':
                newValue = current / num;
                break;
        }

        return newValue;
    },


    /*
        Restrict value to range
        
        Return value within the range of lowerLimit and upperLimit
        
        @param [number]: Value to keep within range
        @param [number]: Lower limit of range
        @param [number]: Upper limit of range
        @return [number]: Value as limited within given range
    */
    restricted: function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    /*
        Convert x per second to per frame velocity based on fps
        
        @param [number]: Unit per second
        @param [number]: Frame duration in ms
    */
    speedPerFrame: function (xps, frameDuration) {
        return (utils.isNum(xps)) ? xps / (1000 / frameDuration) : 0;
    },

    /*
        Convert velocity into velicity per second
        
        @param [number]: Unit per frame
        @param [number]: Frame duration in ms
    */
    speedPerSecond: function (velocity, frameDuration) {
        return velocity * (1000 / frameDuration);
    },
    

    /*
        Time remaining
        
        Return the amount of time remaining from the progress already made
        
        @param [number]: Progress through time limit between 0-1
        @param [number]: Duration
    */
    timeRemaining: function (progress, duration) {
        return (1 - progress) * duration;
    },

 
    /*
        Value in range from progress
        
        Given a lower limit and an upper limit, we return the value within
        that range as expressed by progress (a number from 0-1)
        
        @param [number]: The progress between lower and upper limits expressed 0-1
        @param [number]: Lower limit of range, or upper if limit2 not provided
        @param [number] (optional): Upper limit of range
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    value: function (progress, limitA, limitB) {
        var bIsNum = (typeof limitB === 'number'),
            from = bIsNum ? limitA : 0,
            to = bIsNum ? limitB : limitA;

        return (- progress * from) + (progress * to) + from; 
    },


    /*
        Eased value in range from progress
        
        Given a lower limit and an upper limit, we return the value within
        that range as expressed by progress (a number from 0-1)
        
        @param [number]: The progress between lower and upper limits expressed 0-1
        @param [number]: Lower limit of range, or upper if limit2 not provided
        @param [number]: Upper limit of range
        @param [function]: Easing to apply to value
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    valueEased: function (progress, from, to, easing) {
        var easedProgress = easing(progress);
        
        return this.value(easedProgress, from, to);
    }
};
},{"./utils.js":26}],24:[function(require,module,exports){
/*
    Easing functions
    ----------------------------------------
    
    Generates and provides easing functions based on baseFunction definitions
    
    A call to easingFunction.get('functionName') returns a function that can be passed:
        @param [number]: Progress 0-1
        @param [number] (optional): Amp modifier, only accepted in some easing functions
                                    and is used to adjust overall strength
        @return [number]: Eased progress
        
    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
    Which will make nameIn, nameOut and nameInOut functions available to use.
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var calc = require('./calc.js'),
    util = require('./utils.js'),
    KEY = require('../opts/keys.js'),
    Bezier = require('../types/bezier.js'),
    EasingFunction = function () {},
    easingFunction,
    /*
        Each of these base functions is an easeIn
        
        On init, we use EasingFunction.mirror and .reverse to generate easeInOut and
        easeOut functions respectively.
    */
    baseIn = {
        /*
            Quad - Qunit easing
            
            Generates easing curve based on exponent of time
        */
        ease: function (progress) {
            return Math.pow(progress, 2);
        },
        cubic: function (progress) {
            return Math.pow(progress, 3);
        },
        quart: function (progress) {
            return Math.pow(progress, 4);
        },
        quint: function (progress) {
            return Math.pow(progress, 5);
        },
        circ: function (progress) {
            return 1 - Math.sin(Math.acos(progress));
        },
        back: function (progress) {
            var strength = 1.5;

            return (progress * progress) * ((strength + 1) * progress - strength);
        }
    },
    baseOut = {
        bounce: function (progress) {
            if ((progress) < (1/2.75)) {
                return (7.5625*progress*progress);
            } else if (progress < (2/2.75)) {
                return (7.5625*(progress-=(1.5/2.75))*progress + .75);
            } else if (progress < (2.5/2.75)) {
                return (7.5625*(progress-=(2.25/2.75))*progress + .9375);
            } else {
                return (7.5625*(progress-=(2.625/2.75))*progress + .984375);
            }
        },
        swing: function (progress) {
            var s = 1.70158;
            return (progress -= 1) * progress * ((s + 1) * progress + s) + 1;
        },
        spring: function (progress) {
            return 1 - (Math.cos(progress * 4.5 * Math.PI) * Math.exp(-progress * 6));
        }
    };
    
EasingFunction.prototype = {

    /*
        Get the named easing function
        
        @param [string]: Name of the easing function to get 
        @return [function || boolean]: Easing function or false if function undefined
    */
    get: function (name) {
        var easing = this[name];
        
        if (!easing) {
            throw name + KEY.ERROR.INVALID_EASING;
        }

        return easing;
    },
    
    
    /*
        Add Bezier Curve easing
        
        @param [string]: Name of new easing
        @parma [number]: X of coordinate 1
        @parma [number]: Y of coordinate 1
        @parma [number]: X of coordinate 2
        @parma [number]: Y of coordinate 2
    */
    addBezier: function (name, x1, y1, x2, y2) {
        if (!this[name]) {
            this[name] = new Bezier(x1, y1, x2, y2);
        }
    },

      
    /*
        Mirror easing
        
        Mirrors the provided easing function, used here for mirroring an
        easeIn into an easeInOut
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to mirror
        @returns [number]: The easing-adjusted delta
    */
    mirrorEasing: function (progress, method) {
        var delta;
        
        if (progress <= 0.5) {
            delta = method(2 * progress) / 2;
        } else {
            delta = (2 - method(2 * (1 - progress))) / 2;
        }
        
        return delta;
    },
            
    /*
        Reverse easing
        
        Reverses the output of the provided easing function, used for flipping easeIn
        curve to an easeOut.
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to reverse
        @returns [number]: The easing-adjusted delta
    */
    reverseEasing: function (progress, method) {
        return 1 - method(1 - progress);
    },
    
    
    /*
        Add new easing function
        
        Takes name and generates nameIn, nameOut, nameInOut, and easing functions to match
        
        @param [string]: Base name of the easing functions to generate
        @param [function]: Base easing function, as an easeIn, from which to generate Out and InOut
    */
    generate: function (name, method, isBaseIn) {
        var self = this,
            names = {
                easeIn: name + KEY.EASING.IN, 
                easeOut: name + KEY.EASING.OUT,
                easeInOut: name + KEY.EASING.IN_OUT
            },
            baseName = isBaseIn ? names.easeIn : names.easeOut,
            reverseName = isBaseIn ? names.easeOut : names.easeIn;

        // Create the In function
        this[baseName] = method;

        // Create the Out function by reversing the transition curve
        this[reverseName] = function (progress) {
            return self.reverseEasing(progress, self[baseName]);
        };
        
        // Create the InOut function by mirroring the transition curve
        this[names.easeInOut] = function (progress) {
            return self.mirrorEasing(progress, self[baseName]);
        };
    },
    
    
    /*
        Ease value within ranged parameters
        
        @param [number]: Progress between 0 and 1
        @param [number]: Value of 0 progress
        @param [number]: Value of 1 progress
        @param [string]: Easing to use
        @param [number]: Amplify progress out of specified range
        @return [number]: Value of eased progress in range
    */  
    withinRange: function (progress, from, to, ease, escapeAmp) {
        var newProgress = calc.restricted(progress, 0, 1),
            inRange = util.isInRange(progress, 0, 1);
            
        ease = inRange ? ease : KEY.EASING.LINEAR;

        if (!inRange) {
            newProgress = newProgress + (calc.difference(newProgress, progress) * escapeAmp);
        }

        return calc.valueEased(newProgress, from, to, this.get(ease));
    },
        
    /*
        Linear easing adjustment
        
        The default easing method, not added with .extend as it has no Out or InOut
        variation.
        
        @param [number]: Progress, from 0-1
        @return [number]: Unadjusted progress
    */
    'linear': function (progress) {
        return progress;
    },
    
    'ease':         new Bezier(.25, .1, .25, 1.0),
    'ease-in':      new Bezier(.42, 0, 1.00, 1.0),
    'ease-out':     new Bezier(0, 0, .58, 1.0),
    'ease-in-out':  new Bezier(.42, 0, .58, 1.0),
    'back-in':      new Bezier(.48,-0.45,.99,.79),
    'back-out':     new Bezier(.11,.7,.6,1.31)

};

easingFunction = new EasingFunction();

init();

function init() {

    // Generate easing with base function of easeIn
    for (var key in baseIn) {
        if (baseIn.hasOwnProperty(key)) {
            easingFunction.generate(key, baseIn[key], true);
        }
    }

    // Generate easing with base function of easeOut
    for (key in baseOut) {
        if (baseOut.hasOwnProperty(key)) {
            easingFunction.generate(key, baseOut[key]);
        }
    }
}

module.exports = easingFunction;

},{"../opts/keys.js":16,"../types/bezier.js":19,"./calc.js":23,"./utils.js":26}],25:[function(require,module,exports){
window.redshift = require('../redshift.js');
},{"../redshift.js":18}],26:[function(require,module,exports){
/*
    Utility functions
    ----------------------------------------
    
    convertEventIntoPoint
    getActualEvent
    hasMoved
    isMouseEvent
    currentTime
*/
"use strict";

var KEY = require('../opts/keys.js');

module.exports = {

    /*
        Convert event into point
        
        Scrape the x/y coordinates from the provided event
        
        @param [event]: Original pointer event
        @return [object]: x/y coordinates of event
    */
    convertEventIntoPoint: function (event, isTouchEvent) {
	    return {
            x: isTouchEvent ? event.changedTouches[0].clientX : event.screenX,
            y: isTouchEvent ? event.changedTouches[0].clientY : event.screenY
        };
    },
    
    /*
        Get actual event
        
        Checks for jQuery's .originalEvent if present
        
        @param [event | jQuery event]
        @return [event]: The actual JS event  
    */
    getActualEvent: function (event) {
        return event.originalEvent || event;
    },
    
    /*
        Has one object changed from the other
        
        Compares the two provided inputs and returns true if they are different
        
        @param [object]: Input A
        @param [object]: Input B
        @return [boolean]: True if different
    */
    hasChanged: function (a, b) {
        var hasChanged = false;

        for (var key in b) {
            if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                if (a[key] !== b[key]) {
                    hasChanged = true;
                }
            } else {
                hasChanged = true;
            }
        }
    
        return hasChanged;
    },
    
    /*
        Is this event a mouse event?
        
        Checks the provided event type for the 'mouse' string
        
        @param [string]: Event type
        @return [boolean]: Returns true if 'mouse' is found in string
    */
    isMouseEvent: function (eventType) {
        return (eventType.indexOf(KEY.EVENT.MOUSE) > -1);
    },
    
    /*
        Is this event a touch event?
        
        Checks the provided event for the .touches prop
        
        @param [string]: Event
        @return [boolean]: Returns true if .touches is present
    */
    isTouchEvent: function (e) {
        return (e.touches) ? true : false;
    },
    
    /*
        Is this var a number?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'number'
    */
    isNum: function (num) {
        return (typeof num === 'number');
    },
    
    /*
        Is this var an object?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'object'
    */
    isObj: function (obj) {
        return (typeof obj === 'object');
    },
    
    /*
        Is this var a function ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Function'
    */
    isFunc: function (obj) {
        return (this.varType(obj) === 'Function'); 
    },
    
    /*
        Is this var a string ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof str === 'string'
    */
    isString: function (str) {
        return (typeof str === 'string'); 
    },


    /*
        Is this a relative value assignment?
        
        @param [string]: Variable to test
        @return [boolean]: If this looks like a relative value assignment
    */
    isRelativeValue: function (value) {
        return (value && value.indexOf && value.indexOf('=') > 0);
    },
    
    /*
        Is this var an array ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Array'
    */
    isArray: function (arr) {
        return (this.varType(arr) === 'Array');
    },
    
    isInRange: function (value, from, to) {
        return (value >= from && value <= to);
    },
    
    copy: function (obj) {
        var newObj = {};
        
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (this.isObj(obj[key])) {
                    newObj[key] = this.copy(obj[key]);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        
        return newObj;
    },
    
    merge: function (base, overwrite) {
        var newObj = this.copy(base);
        
        for (var key in overwrite) {
            if (overwrite.hasOwnProperty(key)) {
                if (this.isObj(overwrite[key])) {
                    newObj[key] = this.merge(newObj[key], overwrite[key]);
                } else {
                    newObj[key] = overwrite[key];
                }
            }
        }
        
        return newObj;
    },
    
    /*
        Create stepped version of progress
        
        @param [number]: Value
        @param [number]: Max range
        @param [int]: Number of steps
        @return [number]: Stepped value
    */
    stepProgress: function (value, max, steps) {
        var stepped = 0,
            segment = max / steps;
            
        for (var i = 0; i <= steps; i++) {
            stepped = i * segment;

            if ((i + 1) * segment > value) {
                break;
            }
        }
        
        return stepped;
    },

    /*
        Get var type as string
        
        @param: Variable to test
        @return [string]: Returns, for instance 'Object' if [object Object]
    */
    varType: function (variable) {
        return Object.prototype.toString.call(variable).slice(8, -1);
    },
    
    /*
        Generate current timestamp
        
        @return [timestamp]: Current UNIX timestamp
    */
    currentTime: function () {
        return new Date().getTime();
    }
    
};
},{"../opts/keys.js":16}]},{},[25]);
