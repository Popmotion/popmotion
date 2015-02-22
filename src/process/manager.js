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