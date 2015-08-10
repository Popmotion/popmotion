"use strict";

var manager = require('./manager'),

    /*
        Process constructor
        
        Syntax
            var process = new Process(scope, callback);
            var process = new Process(callback);
    */
    Process = function (scope, callback) {
        var hasScope = (callback !== undefined);

        this.callback = hasScope ? callback : scope;
        this.scope = hasScope ? scope : this;
        this.id = manager.register();

        // [boolean]: Is this process currently active?
        this.isActive = false;
    };

Process.prototype = {
    /*
        Fire callback
        
        @param [timestamp]: Timestamp of currently-executed frame
        @param [number]: Time since last frame
    */
    fire: function (timestamp, elapsed) {
        this.callback.call(this.scope, timestamp, elapsed);
        
        // If we're running at an interval, deactivate again
        if (this.isInterval) {
            this.deactivate();
        }

        return this;
    },
    
    /*
        Start process
        
        @param [int]: Duration of process in ms, 0 if indefinite
        @return [this]
    */
    start: function (duration) {
        var self = this;

        this.reset();
        this.activate();
        
        if (duration) {
            this.stopTimer = setTimeout(function () {
                self.stop();
            }, duration);
            
            this.isStopTimerActive = true;
        }

        return this;
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
        this.isActive = true;
        manager.activate(this, this.id);

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
        
        this.isIntervalTimeActive = true;
        
        return this;
    },
    
    /*
        Clear all timers
        
        @param 
    */
    reset: function () {
        this.isInterval = false;
        
        if (this.isStopTimerActive) {
            clearTimeout(this.stopTimer);
        }
        
        if (this.isIntervalTimeActive) {
            clearInterval(this.intervalTimer);
        }
        
        return this;
    }
};

module.exports = Process;