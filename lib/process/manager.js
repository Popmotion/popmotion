"use strict";

var theLoop = require('./loop.js'),
    ProcessManager = function ProcessManager() {
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
    getProcess: function getProcess(i) {
        return this.activeProcesses[i];
    },

    /*
        Get number of active processes
        
        @return [int]: Number of active processes
    */
    getActiveCount: function getActiveCount() {
        return this.activeCount;
    },

    /*
        Get active tokens
         @return [array]: Active tokens
    */
    getActive: function getActive() {
        return this.activeIds;
    },

    /*
        Get the length of the deactivate queue
        
        @return [int]: Length of queue
    */
    getQueueLength: function getQueueLength() {
        return this.deactivateQueue.length;
    },

    /*
        Fire all active processes
        
        @param [int]: Timestamp of executing frames
        @param [int]: Time since previous frame
        @return [boolean]: True if active processes found
    */
    fireActive: function fireActive(framestamp, elapsed) {
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
    register: function register() {
        return this.processCounter++;
    },

    /*
        Activate a process
        
        @param [int]: Index of active process
    */
    activate: function activate(process, i) {
        var queueIndex = this.deactivateQueue.indexOf(i),
            isQueued = queueIndex > -1,
            isActive = this.activeIds.indexOf(i) > -1;

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
    deactivate: function deactivate(i) {
        var queue = this.deactivateQueue;
        if (queue.indexOf(i) === -1) {
            queue.push(i);
        }
    },

    /*
        Purge the deactivate queue
    */
    purge: function purge() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDOUIsY0FBYyxHQUFHLFNBQWpCLGNBQWMsR0FBZTtBQUN6QixRQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixRQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMxQixRQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMxQixXQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDOUMsQ0FBQzs7QUFFTixjQUFjLENBQUMsU0FBUyxHQUFHOzs7OztBQUt2QixrQkFBYyxFQUFFLENBQUM7Ozs7O0FBS2pCLGVBQVcsRUFBRSxDQUFDOzs7Ozs7OztBQVFkLGNBQVUsRUFBRSxvQkFBVSxDQUFDLEVBQUU7QUFDckIsZUFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDOzs7Ozs7O0FBT0Qsa0JBQWMsRUFBRSwwQkFBWTtBQUN4QixlQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDM0I7Ozs7OztBQU9ELGFBQVMsRUFBRSxxQkFBWTtBQUNuQixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDekI7Ozs7Ozs7QUFPRCxrQkFBYyxFQUFFLDBCQUFZO0FBQ3hCLGVBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7S0FDdEM7Ozs7Ozs7OztBQVNELGNBQVUsRUFBRSxvQkFBVSxVQUFVLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFlBQUksT0FBTztZQUNQLFdBQVcsR0FBRyxDQUFDO1lBQ2YsU0FBUyxHQUFHLEVBQUU7WUFDZCxDQUFDLEdBQUcsQ0FBQzs7O0FBQUMsQUFHVixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixtQkFBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwQyxpQkFBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7OztBQUFDLEFBRzdCLGVBQU8sQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QixtQkFBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXhDLGdCQUFJLE9BQU8sRUFBRTtBQUNULHVCQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNyQztTQUNKOzs7QUFBQSxBQUdELFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLG1CQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTs7O0FBQUMsQUFHcEMsZUFBTyxXQUFXLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNyQzs7Ozs7Ozs7QUFRRCxZQUFRLEVBQUUsb0JBQVk7QUFDbEIsZUFBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDaEM7Ozs7Ozs7QUFPRCxZQUFRLEVBQUUsa0JBQVUsT0FBTyxFQUFFLENBQUMsRUFBRTtBQUM1QixZQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUMsUUFBUSxHQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsQUFBQztZQUM1QixRQUFRLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEFBQUM7OztBQUFDLEFBR2hELFlBQUksUUFBUSxFQUFFO0FBQ1YsZ0JBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5Qzs7O0FBQUEsQUFHRCxZQUFJLENBQUMsUUFBUSxFQUFFO0FBQ1gsZ0JBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNsQyxnQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLG1CQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkI7S0FDSjs7Ozs7OztBQU9ELGNBQVUsRUFBRSxvQkFBVSxDQUFDLEVBQUU7QUFDckIsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNqQyxZQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDekIsaUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7S0FDSjs7Ozs7QUFLRCxTQUFLLEVBQUUsaUJBQVk7QUFDZixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25DLGFBQWEsR0FBRyxDQUFDO1lBQ2pCLFVBQVUsR0FBRyxDQUFDLENBQUM7O0FBRW5CLGVBQU8sV0FBVyxFQUFFLEVBQUU7QUFDbEIsc0JBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQy9DLHlCQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDOzs7QUFBQyxBQUduRCxnQkFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDcEIsb0JBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QyxvQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLHVCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0M7U0FDSjs7QUFFRCxZQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztLQUM3Qjs7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQyIsImZpbGUiOiJtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0aGVMb29wID0gcmVxdWlyZSgnLi9sb29wLmpzJyksXG4gICAgUHJvY2Vzc01hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSWRzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvY2Vzc2VzID0ge307XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgICAgIHRoZUxvb3Auc2V0Q2FsbGJhY2sodGhpcywgdGhpcy5maXJlQWN0aXZlKTtcbiAgICB9O1xuICAgIFxuUHJvY2Vzc01hbmFnZXIucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBVc2VkIGZvciBwcm9jZXNzIElEXG4gICAgKi9cbiAgICBwcm9jZXNzQ291bnRlcjogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGFjdGl2ZUNvdW50OiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgcHJvY2VzcyB3aXRoIGEgZ2l2ZW4gaW5kZXhcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgcHJvY2Vzc1xuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgZ2V0UHJvY2VzczogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IG51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgZ2V0QWN0aXZlQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ291bnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgYWN0aXZlIHRva2Vuc1xuXG4gICAgICAgIEByZXR1cm4gW2FycmF5XTogQWN0aXZlIHRva2Vuc1xuICAgICovXG4gICAgZ2V0QWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUlkcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBMZW5ndGggb2YgcXVldWVcbiAgICAqL1xuICAgIGdldFF1ZXVlTGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBwcmV2aW91cyBmcmFtZVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBhY3RpdmUgcHJvY2Vzc2VzIGZvdW5kXG4gICAgKi9cbiAgICBmaXJlQWN0aXZlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgcHJvY2VzcyxcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ID0gMCxcbiAgICAgICAgICAgIGFjdGl2ZUlkcyA9IFtdLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgLy8gUHVyZ2UgYW5kIGNoZWNrIGFjdGl2ZSBjb3VudCBiZWZvcmUgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgYWN0aXZlQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvdW50KCk7XG4gICAgICAgIGFjdGl2ZUlkcyA9IHRoaXMuZ2V0QWN0aXZlKCk7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFjdGl2ZSBwcm9jZXNzZXMgYW5kIGZpcmUgY2FsbGJhY2tcbiAgICAgICAgZm9yICg7IGkgPCBhY3RpdmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9jZXNzID0gdGhpcy5nZXRQcm9jZXNzKGFjdGl2ZUlkc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5maXJlKGZyYW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwdXJnZSBhbmQgcmVjaGVjayBhY3RpdmUgY291bnQgYWZ0ZXIgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgYWN0aXZlQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvdW50KCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgd2Ugc3RpbGwgaGF2ZSBhY3RpdmUgcHJvY2Vzc2VzLCBvciBmYWxzZSBpZiBub25lXG4gICAgICAgIHJldHVybiBhY3RpdmVDb3VudCA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJlZ2lzdGVyIGEgbmV3IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbUHJvY2Vzc11cbiAgICAgICAgQHJldHVybiBbaW50XTogSW5kZXggb2YgcHJvY2VzcyB0byBiZSB1c2VkIGFzIElEXG4gICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzQ291bnRlcisrO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIGFjdGl2ZSBwcm9jZXNzXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHByb2Nlc3MsIGkpIHtcbiAgICAgICAgdmFyIHF1ZXVlSW5kZXggPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGkpLFxuICAgICAgICAgICAgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKSxcbiAgICAgICAgICAgIGlzQWN0aXZlID0gKHRoaXMuYWN0aXZlSWRzLmluZGV4T2YoaSkgPiAtMSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIGluIHRoZXJlXG4gICAgICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGFjdGl2ZSBwcm9jZXNzZXMgYXJyYXkgaWYgbm90IGFscmVhZHkgaW4gdGhlcmVcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2ldID0gcHJvY2VzcztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQrKztcbiAgICAgICAgICAgIHRoZUxvb3Auc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgcHJvY2VzcyB0byBhZGQgdG8gZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5kZWFjdGl2YXRlUXVldWU7XG4gICAgICAgIGlmIChxdWV1ZS5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgICAgcXVldWUucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVyZ2UgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHB1cmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZUxlbmd0aCA9IHRoaXMuZ2V0UXVldWVMZW5ndGgoKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSAwLFxuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpbiBhY3RpdmUgbGlzdCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvY2Vzc01hbmFnZXIoKTsiXX0=