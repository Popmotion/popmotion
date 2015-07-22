"use strict";

var theLoop = require('./loop.js'),
    ProcessManager = function () {
        this.activeIds = [];
        this.activeProcesses = {};
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
        return this.activeProcesses[i];
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
        return this.activeIds;
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
            activeIds = [],
            i = 0;

        // Purge and check active count before execution
        this.purge();
        activeCount = this.getActiveCount();
        activeIds = this.getActive();

        // Loop through active processes and fire callback
        for (; i < activeCount; i++) {
            process = this.getProcess(activeIds[i]);

            if (process) {
                process.fire(framestamp, elapsed);
            }
        }

        // Repurge and recheck active count after execution
        this.purge();
        activeCount = this.getActiveCount();

        // Return true if we still have active processes, or false if none
        return activeCount ? true : false;
    },
    
    /*
        Register a new process
        
        @param [Process]
        @return [int]: Index of process to be used as ID
    */
    register: function () {
        return this.processCounter++;
    },
    
    /*
        Activate a process
        
        @param [int]: Index of active process
    */
    activate: function (process, i) {
        var queueIndex = this.deactivateQueue.indexOf(i),
            isQueued = (queueIndex > -1),
            isActive = (this.activeIds.indexOf(i) > -1);

        // Remove from deactivateQueue if in there
        if (isQueued) {
            this.deactivateQueue.splice(queueIndex, 1);
        }

        // Add to active processes array if not already in there
        if (!isActive) {
            this.activeIds.push(i);
            this.activeProcesses[i] = process;
            this.activeCount++;
            theLoop.start();
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
        var queueLength = this.getQueueLength(),
            activeIdIndex = 0,
            idToDelete = 0;

        while (queueLength--) {
            idToDelete = this.deactivateQueue[queueLength];
            activeIdIndex = this.activeIds.indexOf(idToDelete);

            // If process in active list deactivate
            if (activeIdIndex > -1) {
                this.activeIds.splice(activeIdIndex, 1);
                this.activeCount--;
                delete this.activeProcesses[idToDelete];
            }
        }
        
        this.deactivateQueue = [];
    }
    
};

module.exports = new ProcessManager();