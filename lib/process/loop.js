'use strict';

var timer = require('./timer');
var systemTick = require('./system-tick');

var processOrder = ['update', 'preRender', 'render', 'postRender', 'cleanup'];
var numProcessSteps = processOrder.length;

// [int]: Process ID, incremented for each new process
var currentProcessId = 0;

// [int]: Number of running processes
var runningCount = 0;

// [int]: Number of running non-background processes
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
var updateCount = function (add, isBackground) {
    var modify = add ? 1 : -1;

    runningCount += modify;

    if (!isBackground) {
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

            updateCount(false, runningProcesses[idToDelete].isBackground);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
};

/*
    Fire all active processes
    
    @param [int]: Timestamp of executing frames
    @param [int]: Time since previous frame
    @return [boolean]: True if active processes found
*/
var fireAll = function (framestamp, elapsed) {
    purge();

    var numRunning = runningCount;
    for (var i = 0; i < numProcessSteps; i++) {
        var method = processOrder[i];

        for (var _i = 0; _i < numRunning; _i++) {
            var process = runningProcesses[runningIds[_i]];

            if (process && process[method]) {
                process[method].call(process.scope, process.scope, framestamp, elapsed);
            }
        }
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
            updateCount(true, process.isBackground);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUU1QyxJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRixJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsTUFBTTs7O0FBQUMsQUFHNUMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDOzs7QUFBQyxBQUd6QixJQUFJLFlBQVksR0FBRyxDQUFDOzs7QUFBQyxBQUdyQixJQUFJLFdBQVcsR0FBRyxDQUFDOzs7QUFBQyxBQUdwQixJQUFJLFVBQVUsR0FBRyxFQUFFOzs7QUFBQyxBQUdwQixJQUFJLGdCQUFnQixHQUFHLEVBQUU7OztBQUFDLEFBRzFCLElBQUksZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBR3pCLElBQUksU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7O0FBQUMsQUFRdEIsSUFBTSxXQUFXLEdBQUcsVUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFLO0FBQ3ZDLFFBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTVCLGdCQUFZLElBQUksTUFBTSxDQUFDOztBQUV2QixRQUFJLENBQUMsWUFBWSxFQUFFO0FBQ2YsbUJBQVcsSUFBSSxNQUFNLENBQUM7S0FDekI7Q0FDSjs7Ozs7QUFBQSxBQUtELElBQU0sS0FBSyxHQUFHLFlBQU07QUFDaEIsUUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7QUFFekMsV0FBTyxXQUFXLEVBQUUsRUFBRTtBQUNsQixZQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQsWUFBTSxhQUFhLEdBQUcsVUFB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QUM7QUFDM0IsNEJBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ3RDLHVCQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4QyxnQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0tBQ0o7Ozs7O0FBS0QsY0FBVSxFQUFFLFVBQUMsU0FBUyxFQUFLO0FBQ3ZCLFlBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUMzQywyQkFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztLQUNKO0NBQ0osQ0FBQyIsImZpbGUiOiJsb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5jb25zdCBzeXN0ZW1UaWNrID0gcmVxdWlyZSgnLi9zeXN0ZW0tdGljaycpO1xuXG5jb25zdCBwcm9jZXNzT3JkZXIgPSBbJ3VwZGF0ZScsICdwcmVSZW5kZXInLCAncmVuZGVyJywgJ3Bvc3RSZW5kZXInLCAnY2xlYW51cCddO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc09yZGVyLmxlbmd0aDtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbmxldCBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgbm9uLWJhY2tncm91bmQgcHJvY2Vzc2VzXG5sZXQgYWN0aXZlQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgcHJvY2VzcyBJRHNcbmxldCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgYWN0aXZlIHByb2Nlc3Nlc1xubGV0IHJ1bm5pbmdQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmxldCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICBAcGFyYW0gW2Jvb2xlYW5dXG4qL1xuY29uc3QgdXBkYXRlQ291bnQgPSAoYWRkLCBpc0JhY2tncm91bmQpID0+IHtcbiAgICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICBydW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0JhY2tncm91bmQpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn1cblxuLypcbiAgICBQdXJnZSBpdGVtcyBpbiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZSBmcm9tIG91ciBydW5uaW5nUHJvY2Vzc2VzXG4qL1xuY29uc3QgcHVyZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChxdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkVG9EZWxldGUgPSBkZWFjdGl2YXRlUXVldWVbcXVldWVMZW5ndGhdO1xuICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgIC8vIElmIHByb2Nlc3MgaXMgYWN0aXZlLCBkZWFjdGl2YXRlXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXS5pc0JhY2tncm91bmQpO1xuXG4gICAgICAgICAgICBkZWxldGUgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xufVxuXG4vKlxuICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICBcbiAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuKi9cbmNvbnN0IGZpcmVBbGwgPSAoZnJhbWVzdGFtcCwgZWxhcHNlZCkgPT4ge1xuICAgIHB1cmdlKCk7XG5cbiAgICBjb25zdCBudW1SdW5uaW5nID0gcnVubmluZ0NvdW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgbGV0IG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJ1bm5pbmc7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzW21ldGhvZF0uY2FsbChwcm9jZXNzLnNjb3BlLCBwcm9jZXNzLnNjb3BlLCBmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1cmdlKCk7XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbmNvbnN0IGxvb3AgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6ICgpID0+IHtcbiAgICAgICAgc3lzdGVtVGljaygoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIGxvb3AuZnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZXIudXBkYXRlKGZyYW1lc3RhbXApO1xuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZXN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9vcC5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6ICgpID0+IHtcbiAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gSW5jcmVtZW50cyBhbmQgcmV0dXJucyB0aGUgbGF0ZXN0IHByb2Nlc3MgSURcbiAgICBnZXRQcm9jZXNzSWQ6ICgpID0+IGN1cnJlbnRQcm9jZXNzSWQrKyxcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbUHJvY2Vzc11cbiAgICAgICAgQHBhcmFtIFtpbnRdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogKHByb2Nlc3MsIHByb2Nlc3NJZCkgPT4ge1xuICAgICAgICBjb25zdCBxdWV1ZUluZGV4ID0gZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YocHJvY2Vzc0lkKTtcbiAgICAgICAgY29uc3QgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKTtcbiAgICAgICAgY29uc3QgaXNSdW5uaW5nID0gKHJ1bm5pbmdJZHMuaW5kZXhPZihwcm9jZXNzSWQpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBxdWV1ZWRcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIHJ1bm5pbmcgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCB0aGVyZVxuICAgICAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKHByb2Nlc3NJZCk7XG4gICAgICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW3Byb2Nlc3NJZF0gPSBwcm9jZXNzO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0JhY2tncm91bmQpO1xuICAgICAgICAgICAgbG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbaW50XVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogKHByb2Nlc3NJZCkgPT4ge1xuICAgICAgICBpZiAoZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YocHJvY2Vzc0lkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5wdXNoKHByb2Nlc3NJZCk7XG4gICAgICAgIH1cbiAgICB9XG59OyJdfQ==