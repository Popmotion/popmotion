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