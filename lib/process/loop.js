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
var updateCount = function updateCount(add, isBackground) {
    var modify = add ? 1 : -1;

    runningCount += modify;

    if (!isBackground) {
        activeCount += modify;
    }
};

/*
    Purge items in the deactivate queue from our runningProcesses
*/
var purge = function purge() {
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
var fireAll = function fireAll(framestamp, elapsed) {
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
    frame: function frame() {
        systemTick(function (framestamp) {
            if (isRunning) {
                loop.frame();
            }

            timer.update(framestamp);
            isRunning = fireAll(framestamp, timer.getElapsed());
        });
    },

    start: function start() {
        if (!isRunning) {
            timer.start();
            isRunning = true;
            loop.frame();
        }
    },

    stop: function stop() {
        isRunning = false;
    }
};

module.exports = {
    // Increments and returns the latest process ID
    getProcessId: function getProcessId() {
        return currentProcessId++;
    },

    /*
        @param [Process]
        @param [int]
    */
    activate: function activate(process, processId) {
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
    deactivate: function deactivate(processId) {
        if (deactivateQueue.indexOf(processId) === -1) {
            deactivateQueue.push(processId);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUU1QyxJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRixJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsTUFBTTs7O0FBQUMsQUFHNUMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDOzs7QUFBQyxBQUd6QixJQUFJLFlBQVksR0FBRyxDQUFDOzs7QUFBQyxBQUdyQixJQUFJLFdBQVcsR0FBRyxDQUFDOzs7QUFBQyxBQUdwQixJQUFJLFVBQVUsR0FBRyxFQUFFOzs7QUFBQyxBQUdwQixJQUFJLGdCQUFnQixHQUFHLEVBQUU7OztBQUFDLEFBRzFCLElBQUksZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBR3pCLElBQUksU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7O0FBQUMsQUFRdEIsSUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQUksR0FBRyxFQUFFLFlBQVksRUFBSztBQUN2QyxRQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUU1QixnQkFBWSxJQUFJLE1BQU0sQ0FBQzs7QUFFdkIsUUFBSSxDQUFDLFlBQVksRUFBRTtBQUNmLG1CQUFXLElBQUksTUFBTSxDQUFDO0tBQ3pCO0NBQ0o7Ozs7O0FBQUEsQUFLRCxJQUFNLEtBQUssR0FBRyxTQUFSLEtBQUssR0FBUztBQUNoQixRQUFJLFdBQVcsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDOztBQUV6QyxXQUFPLFdBQVcsRUFBRSxFQUFFO0FBQ2xCLFlBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoRCxZQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzs7O0FBQUMsQUFHckQsWUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDcEIsc0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVwQyx1QkFBVyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFOUQsbUJBQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkM7S0FDSjs7QUFFRCxtQkFBZSxHQUFHLEVBQUUsQ0FBQztDQUN4Qjs7Ozs7Ozs7O0FBQUEsQUFTRCxJQUFNLE9BQU8sR0FBRyxTQUFWLE9BQU8sQ0FBSSxVQUFVLEVBQUUsT0FBTyxFQUFLO0FBQ3JDLFNBQUssRUFBRSxDQUFDOztBQUVSLFFBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztBQUNoQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RDLFlBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFN0IsYUFBSyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxHQUFHLFVBQVUsRUFBRSxFQUFDLEVBQUUsRUFBRTtBQUNqQyxnQkFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTlDLGdCQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDNUIsdUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUMzRTtTQUNKO0tBQ0o7O0FBRUQsU0FBSyxFQUFFLENBQUM7O0FBRVIsV0FBTyxXQUFXLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztDQUNyQyxDQUFBOztBQUVELElBQU0sSUFBSSxHQUFHOzs7O0FBSVQsU0FBSyxFQUFFLGlCQUFNO0FBQ1Qsa0JBQVUsQ0FBQyxVQUFDLFVBQVUsRUFBSztBQUN2QixnQkFBSSxTQUFTLEVBQUU7QUFDWCxvQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2hCOztBQUVELGlCQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pCLHFCQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7S0FDTjs7QUFFRCxTQUFLLEVBQUUsaUJBQU07QUFDVCxZQUFJLENBQUMsU0FBUyxFQUFFO0FBQ1osaUJBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNkLHFCQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGdCQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7S0FDSjs7QUFFRCxRQUFJLEVBQUUsZ0JBQU07QUFDUixpQkFBUyxHQUFHLEtBQUssQ0FBQztLQUNyQjtDQUNKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFO2VBQU0sZ0JBQWdCLEVBQUU7S0FBQTs7Ozs7O0FBTXRDLFlBQVEsRUFBRSxrQkFBQyxPQUFPLEVBQUUsU0FBUyxFQUFLO0FBQzlCLFlBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEQsWUFBTSxRQUFRLEdBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxBQUFDLENBQUM7QUFDbkMsWUFBTSxTQUFTLEdBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQUFBQzs7O0FBQUMsQUFHdkQsWUFBSSxRQUFRLEVBQUU7QUFDViwyQkFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekM7OztBQUFBLEFBR0QsWUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNaLHNCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNCLDRCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs7QUFFdEMsdUJBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hDLGdCQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7S0FDSjs7Ozs7QUFLRCxjQUFVLEVBQUUsb0JBQUMsU0FBUyxFQUFLO0FBQ3ZCLFlBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUMzQywyQkFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztLQUNKO0NBQ0osQ0FBQyIsImZpbGUiOiJsb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5jb25zdCBzeXN0ZW1UaWNrID0gcmVxdWlyZSgnLi9zeXN0ZW0tdGljaycpO1xuXG5jb25zdCBwcm9jZXNzT3JkZXIgPSBbJ3VwZGF0ZScsICdwcmVSZW5kZXInLCAncmVuZGVyJywgJ3Bvc3RSZW5kZXInLCAnY2xlYW51cCddO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc09yZGVyLmxlbmd0aDtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbmxldCBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgbm9uLWJhY2tncm91bmQgcHJvY2Vzc2VzXG5sZXQgYWN0aXZlQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgcHJvY2VzcyBJRHNcbmxldCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgYWN0aXZlIHByb2Nlc3Nlc1xubGV0IHJ1bm5pbmdQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmxldCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICBAcGFyYW0gW2Jvb2xlYW5dXG4qL1xuY29uc3QgdXBkYXRlQ291bnQgPSAoYWRkLCBpc0JhY2tncm91bmQpID0+IHtcbiAgICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICBydW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0JhY2tncm91bmQpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn1cblxuLypcbiAgICBQdXJnZSBpdGVtcyBpbiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZSBmcm9tIG91ciBydW5uaW5nUHJvY2Vzc2VzXG4qL1xuY29uc3QgcHVyZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChxdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkVG9EZWxldGUgPSBkZWFjdGl2YXRlUXVldWVbcXVldWVMZW5ndGhdO1xuICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgIC8vIElmIHByb2Nlc3MgaXMgYWN0aXZlLCBkZWFjdGl2YXRlXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXS5pc0JhY2tncm91bmQpO1xuXG4gICAgICAgICAgICBkZWxldGUgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xufVxuXG4vKlxuICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICBcbiAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuKi9cbmNvbnN0IGZpcmVBbGwgPSAoZnJhbWVzdGFtcCwgZWxhcHNlZCkgPT4ge1xuICAgIHB1cmdlKCk7XG5cbiAgICBjb25zdCBudW1SdW5uaW5nID0gcnVubmluZ0NvdW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgbGV0IG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJ1bm5pbmc7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzW21ldGhvZF0uY2FsbChwcm9jZXNzLnNjb3BlLCBwcm9jZXNzLnNjb3BlLCBmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1cmdlKCk7XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbmNvbnN0IGxvb3AgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6ICgpID0+IHtcbiAgICAgICAgc3lzdGVtVGljaygoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIGxvb3AuZnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZXIudXBkYXRlKGZyYW1lc3RhbXApO1xuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZXN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9vcC5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6ICgpID0+IHtcbiAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gSW5jcmVtZW50cyBhbmQgcmV0dXJucyB0aGUgbGF0ZXN0IHByb2Nlc3MgSURcbiAgICBnZXRQcm9jZXNzSWQ6ICgpID0+IGN1cnJlbnRQcm9jZXNzSWQrKyxcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbUHJvY2Vzc11cbiAgICAgICAgQHBhcmFtIFtpbnRdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogKHByb2Nlc3MsIHByb2Nlc3NJZCkgPT4ge1xuICAgICAgICBjb25zdCBxdWV1ZUluZGV4ID0gZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YocHJvY2Vzc0lkKTtcbiAgICAgICAgY29uc3QgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKTtcbiAgICAgICAgY29uc3QgaXNSdW5uaW5nID0gKHJ1bm5pbmdJZHMuaW5kZXhPZihwcm9jZXNzSWQpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBxdWV1ZWRcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIHJ1bm5pbmcgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCB0aGVyZVxuICAgICAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKHByb2Nlc3NJZCk7XG4gICAgICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW3Byb2Nlc3NJZF0gPSBwcm9jZXNzO1xuXG4gICAgICAgICAgICB1cGRhdGVDb3VudCh0cnVlLCBwcm9jZXNzLmlzQmFja2dyb3VuZCk7XG4gICAgICAgICAgICBsb29wLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtpbnRdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiAocHJvY2Vzc0lkKSA9PiB7XG4gICAgICAgIGlmIChkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihwcm9jZXNzSWQpID09PSAtMSkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnB1c2gocHJvY2Vzc0lkKTtcbiAgICAgICAgfVxuICAgIH1cbn07Il19