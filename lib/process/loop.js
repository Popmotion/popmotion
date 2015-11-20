'use strict';

var timer = require('./timer');
var systemTick = require('./system-tick');

var processOrder = ['update', 'preRender', 'render', 'postRender', 'cleanup'];
var numProcessSteps = processOrder.length;

// [int]: Process ID, incremented for each new process
var currentProcessId = 0;

// [int]: Number of running processes
var runningCount = 0;

// [int]: Number of running active processes
var activeCount = 0;

// [array]: Array of active process IDs
var runningIds = [];

// [object]: Map of active processes
var runningProcesses = {};

// [array]: Array of process IDs queued for deactivation
var deactivateQueue = [];

// [boolean]: Is loop running?
var isRunning = false;

/*
    Update running

    @param [boolean]
    @param [boolean]
*/
var updateCount = function (add, isPassive) {
    var modify = add ? 1 : -1;

    runningCount += modify;

    if (!isPassive) {
        activeCount += modify;
    }
};

/*
    Purge items in the deactivate queue from our runningProcesses
*/
var purge = function () {
    var queueLength = deactivateQueue.length;

    while (queueLength--) {
        var idToDelete = deactivateQueue[queueLength];
        var activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, process.isPassive);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
};

/*
    Fire one process stage
*/
var fire = function (method, framestamp, elapsed) {
    for (var i = 0; i < activeCount; i++) {
        var _process = runningProcesses[runningIds[i]];

        if (_process && _process[method]) {
            _process[method].call(_process.scope, _process.scope, framestamp, elapsed);
        }
    }
};

/*
    Fire all active processes
    
    @param [int]: Timestamp of executing frames
    @param [int]: Time since previous frame
    @return [boolean]: True if active processes found
*/
var fireAll = function (framestamp, elapsed) {
    purge();

    for (var i = 0; i < numProcessSteps; i++) {
        fire(processOrder[i], framestamp, elapsed);
    }

    purge();

    return activeCount ? true : false;
};

var loop = {
    /*
        Fire all active processes once per frame
    */
    frame: function () {
        systemTick(function (framestamp) {
            if (isRunning) {
                loop.frame();
            }

            timer.update(framestamp);
            isRunning = fireAll(framestamp, timer.getElapsed());
        });
    },

    start: function () {
        if (!isRunning) {
            timer.start();
            isRunning = true;
            loop.frame();
        }
    },

    stop: function () {
        isRunning = false;
    }
};

module.exports = {
    // Increments and returns the latest process ID
    getProcessId: function () {
        return currentProcessId++;
    },

    /*
        @param [Process]
        @param [int]
    */
    activate: function (process, processId) {
        var queueIndex = deactivateQueue.indexOf(processId);
        var isQueued = queueIndex > -1;
        var isRunning = runningIds.indexOf(processId) > -1;

        // Remove from deactivateQueue if queued
        if (isQueued) {
            deactivateQueue.splice(queueIndex, 1);
        }

        // Add to running processes array if not there
        if (!isRunning) {
            runningIds.push(processId);
            runningProcesses[processId] = process;

            updateCount(true, process.isPassive);
            loop.start();
        }
    },

    /*
        @param [int]
    */
    deactivate: function (processId) {
        if (deactivateQueue.indexOf(processId) === -1) {
            deactivateQueue.push(processId);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUU1QyxJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRixJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsTUFBTTs7O0FBQUMsQUFHNUMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDOzs7QUFBQyxBQUd6QixJQUFJLFlBQVksR0FBRyxDQUFDOzs7QUFBQyxBQUdyQixJQUFJLFdBQVcsR0FBRyxDQUFDOzs7QUFBQyxBQUdwQixJQUFJLFVBQVUsR0FBRyxFQUFFOzs7QUFBQyxBQUdwQixJQUFJLGdCQUFnQixHQUFHLEVBQUU7OztBQUFDLEFBRzFCLElBQUksZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBR3pCLElBQUksU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7O0FBQUMsQUFRdEIsSUFBTSxXQUFXLEdBQUcsVUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFLO0FBQ3BDLFFBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTVCLGdCQUFZLElBQUksTUFBTSxDQUFDOztBQUV2QixRQUFJLENBQUMsU0FBUyxFQUFFO0FBQ1osbUJBQVcsSUFBSSxNQUFNLENBQUM7S0FDekI7Q0FDSjs7Ozs7QUFBQSxBQUtELElBQU0sS0FBSyxHQUFHLFlBQU07QUFDaEIsUUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7QUFFekMsV0FBTyxXQUFXLEVBQUUsRUFBRTtBQUNsQixZQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQsWUFBTSxhQUFhLEdBQUcsVUFB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O0FBQ1osc0JBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0IsNEJBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDOztBQUV0Qyx1QkFBVyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7OztBQUtELGNBQVUsRUFBRSxVQUFDLFNBQVMsRUFBSztBQUN2QixZQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDM0MsMkJBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuY29uc3Qgc3lzdGVtVGljayA9IHJlcXVpcmUoJy4vc3lzdGVtLXRpY2snKTtcblxuY29uc3QgcHJvY2Vzc09yZGVyID0gWyd1cGRhdGUnLCAncHJlUmVuZGVyJywgJ3JlbmRlcicsICdwb3N0UmVuZGVyJywgJ2NsZWFudXAnXTtcbmNvbnN0IG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NPcmRlci5sZW5ndGg7XG5cbi8vIFtpbnRdOiBQcm9jZXNzIElELCBpbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcHJvY2Vzc1xubGV0IGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIGFjdGl2ZSBwcm9jZXNzZXNcbmxldCBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xubGV0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxubGV0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgQHBhcmFtIFtib29sZWFuXVxuICAgIEBwYXJhbSBbYm9vbGVhbl1cbiovXG5jb25zdCB1cGRhdGVDb3VudCA9IChhZGQsIGlzUGFzc2l2ZSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzUGFzc2l2ZSkge1xuICAgICAgICBhY3RpdmVDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufVxuXG4vKlxuICAgIFB1cmdlIGl0ZW1zIGluIHRoZSBkZWFjdGl2YXRlIHF1ZXVlIGZyb20gb3VyIHJ1bm5pbmdQcm9jZXNzZXNcbiovXG5jb25zdCBwdXJnZSA9ICgpID0+IHtcbiAgICBsZXQgcXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWRUb0RlbGV0ZSk7XG5cbiAgICAgICAgLy8gSWYgcHJvY2VzcyBpcyBhY3RpdmUsIGRlYWN0aXZhdGVcbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KGZhbHNlLCBwcm9jZXNzLmlzUGFzc2l2ZSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBydW5uaW5nUHJvY2Vzc2VzW2lkVG9EZWxldGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG59XG5cbi8qXG4gICAgRmlyZSBvbmUgcHJvY2VzcyBzdGFnZVxuKi9cbmNvbnN0IGZpcmUgPSAobWV0aG9kLCBmcmFtZXN0YW1wLCBlbGFwc2VkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVDb3VudDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tydW5uaW5nSWRzW2ldXTtcblxuICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZF0pIHtcbiAgICAgICAgICAgIHByb2Nlc3NbbWV0aG9kXS5jYWxsKHByb2Nlc3Muc2NvcGUsIHByb2Nlc3Muc2NvcGUsIGZyYW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICBcbiAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuKi9cbmNvbnN0IGZpcmVBbGwgPSAoZnJhbWVzdGFtcCwgZWxhcHNlZCkgPT4ge1xuICAgIHB1cmdlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIGZpcmUocHJvY2Vzc09yZGVyW2ldLCBmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICBwdXJnZSgpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5jb25zdCBsb29wID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiAoKSA9PiB7XG4gICAgICAgIHN5c3RlbVRpY2soKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBsb29wLmZyYW1lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVyLnVwZGF0ZShmcmFtZXN0YW1wKTtcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVzdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgICAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvb3AuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiAoKSA9PiB7XG4gICAgICAgIGlzUnVubmluZyA9IGZhbHNlXG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gSW5jcmVtZW50cyBhbmQgcmV0dXJucyB0aGUgbGF0ZXN0IHByb2Nlc3MgSURcbiAgICBnZXRQcm9jZXNzSWQ6ICgpID0+IGN1cnJlbnRQcm9jZXNzSWQrKyxcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbUHJvY2Vzc11cbiAgICAgICAgQHBhcmFtIFtpbnRdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogKHByb2Nlc3MsIHByb2Nlc3NJZCkgPT4ge1xuICAgICAgICBjb25zdCBxdWV1ZUluZGV4ID0gZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YocHJvY2Vzc0lkKTtcbiAgICAgICAgY29uc3QgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKTtcbiAgICAgICAgY29uc3QgaXNSdW5uaW5nID0gKHJ1bm5pbmdJZHMuaW5kZXhPZihwcm9jZXNzSWQpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBxdWV1ZWRcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIHJ1bm5pbmcgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCB0aGVyZVxuICAgICAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKHByb2Nlc3NJZCk7XG4gICAgICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW3Byb2Nlc3NJZF0gPSBwcm9jZXNzO1xuXG4gICAgICAgICAgICB1cGRhdGVDb3VudCh0cnVlLCBwcm9jZXNzLmlzUGFzc2l2ZSk7XG4gICAgICAgICAgICBsb29wLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtpbnRdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiAocHJvY2Vzc0lkKSA9PiB7XG4gICAgICAgIGlmIChkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihwcm9jZXNzSWQpID09PSAtMSkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnB1c2gocHJvY2Vzc0lkKTtcbiAgICAgICAgfVxuICAgIH1cbn07Il19