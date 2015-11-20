'use strict';

var timer = require('./timer');
var systemTick = require('./system-tick');

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
var updateCount = function updateCount(add, isPassive) {
    var modify = add ? 1 : -1;

    runningCount + modify;

    if (!isPassive) {
        activeCount + modify;

        if (add) {
            loop.start();
        }
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

            updateCount(false, process.isPassive);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
};

/*
    Fire one process stage
*/
var fire = function fire(method, framestamp, elapsed) {
    for (var i = 0; i < activeCount; i++) {
        var _process = runningProcesses[runningIds[i]];

        if (_process && _process[method]) {
            _process[method](_process.scope, framestamp, elapsed);
        }
    }
};

/*
    Fire all active processes
    
    @param [int]: Timestamp of executing frames
    @param [int]: Time since previous frame
    @return [boolean]: True if active processes found
*/
var fireAll = function fireAll(framestamp, elapsed) {
    purge();

    fire('update');
    fire('preRender');
    fire('render');
    fire('postRender');

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

            updateCount(true, process.isPassive);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7O0FBQUMsQUFHNUMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDOzs7QUFBQyxBQUd6QixJQUFJLFlBQVksR0FBRyxDQUFDOzs7QUFBQyxBQUdyQixJQUFJLFdBQVcsR0FBRyxDQUFDOzs7QUFBQyxBQUdwQixJQUFJLFVBQVUsR0FBRyxFQUFFOzs7QUFBQyxBQUdwQixJQUFJLGdCQUFnQixHQUFHLEVBQUU7OztBQUFDLEFBRzFCLElBQUksZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBR3pCLElBQUksU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7O0FBQUMsQUFRdEIsSUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQUksR0FBRyxFQUFFLFNBQVMsRUFBSztBQUNwQyxRQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUU1QixnQkFBWSxHQUFHLE1BQU0sQ0FBQzs7QUFFdEIsUUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNaLG1CQUFXLEdBQUcsTUFBTSxDQUFDOztBQUVyQixZQUFJLEdBQUcsRUFBRTtBQUNMLGdCQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7S0FDSjtDQUNKOzs7OztBQUFBLEFBS0QsSUFBTSxLQUFLLEdBQUcsU0FBUixLQUFLLEdBQVM7QUFDaEIsUUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7QUFFekMsV0FBTyxXQUFXLEVBQUUsRUFBRTtBQUNsQixZQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQsWUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7OztBQUFDLEFBR3JELFlBQUks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R0FBRyxPQUFPLENBQUM7O0FBRXRDLHVCQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QztLQUNKOzs7OztBQUtELGNBQVUsRUFBRSxvQkFBQyxTQUFTLEVBQUs7QUFDdkIsWUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzNDLDJCQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0tBQ0o7Q0FDSixDQUFDIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcbmNvbnN0IHN5c3RlbVRpY2sgPSByZXF1aXJlKCcuL3N5c3RlbS10aWNrJyk7XG5cbi8vIFtpbnRdOiBQcm9jZXNzIElELCBpbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcHJvY2Vzc1xubGV0IGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIGFjdGl2ZSBwcm9jZXNzZXNcbmxldCBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xubGV0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxubGV0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgQHBhcmFtIFtib29sZWFuXVxuICAgIEBwYXJhbSBbYm9vbGVhbl1cbiovXG5jb25zdCB1cGRhdGVDb3VudCA9IChhZGQsIGlzUGFzc2l2ZSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHJ1bm5pbmdDb3VudCArIG1vZGlmeTtcblxuICAgIGlmICghaXNQYXNzaXZlKSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICsgbW9kaWZ5O1xuXG4gICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgIGxvb3Auc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAgICBQdXJnZSBpdGVtcyBpbiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZSBmcm9tIG91ciBydW5uaW5nUHJvY2Vzc2VzXG4qL1xuY29uc3QgcHVyZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChxdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkVG9EZWxldGUgPSBkZWFjdGl2YXRlUXVldWVbcXVldWVMZW5ndGhdO1xuICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgIC8vIElmIHByb2Nlc3MgaXMgYWN0aXZlLCBkZWFjdGl2YXRlXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcHJvY2Vzcy5pc1Bhc3NpdmUpO1xuXG4gICAgICAgICAgICBkZWxldGUgcnVubmluZ1Byb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xufVxuXG4vKlxuICAgIEZpcmUgb25lIHByb2Nlc3Mgc3RhZ2VcbiovXG5jb25zdCBmaXJlID0gKG1ldGhvZCwgZnJhbWVzdGFtcCwgZWxhcHNlZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlQ291bnQ7IGkrKykge1xuICAgICAgICBsZXQgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbcnVubmluZ0lkc1tpXV07XG5cbiAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1ttZXRob2RdKSB7XG4gICAgICAgICAgICBwcm9jZXNzW21ldGhvZF0ocHJvY2Vzcy5zY29wZSwgZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qXG4gICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3Nlc1xuICAgIFxuICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIGV4ZWN1dGluZyBmcmFtZXNcbiAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgcHJldmlvdXMgZnJhbWVcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBhY3RpdmUgcHJvY2Vzc2VzIGZvdW5kXG4qL1xuY29uc3QgZmlyZUFsbCA9IChmcmFtZXN0YW1wLCBlbGFwc2VkKSA9PiB7XG4gICAgcHVyZ2UoKTtcblxuICAgIGZpcmUoJ3VwZGF0ZScpO1xuICAgIGZpcmUoJ3ByZVJlbmRlcicpO1xuICAgIGZpcmUoJ3JlbmRlcicpO1xuICAgIGZpcmUoJ3Bvc3RSZW5kZXInKTtcblxuICAgIHB1cmdlKCk7XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbmNvbnN0IGxvb3AgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6ICgpID0+IHtcbiAgICAgICAgc3lzdGVtVGljaygoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIGxvb3AuZnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGltZXIudXBkYXRlKGZyYW1lc3RhbXApO1xuXG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lc3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdGFydDogKCkgPT4ge1xuICAgICAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBsb29wLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogKCkgPT4ge1xuICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIEluY3JlbWVudHMgYW5kIHJldHVybnMgdGhlIGxhdGVzdCBwcm9jZXNzIElEXG4gICAgZ2V0UHJvY2Vzc0lkOiAoKSA9PiBjdXJyZW50UHJvY2Vzc0lkKyssXG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW1Byb2Nlc3NdXG4gICAgICAgIEBwYXJhbSBbaW50XVxuICAgICovXG4gICAgYWN0aXZhdGU6IChwcm9jZXNzLCBwcm9jZXNzSWQpID0+IHtcbiAgICAgICAgY29uc3QgcXVldWVJbmRleCA9IGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKHByb2Nlc3NJZCk7XG4gICAgICAgIGNvbnN0IGlzUXVldWVkID0gKHF1ZXVlSW5kZXggPiAtMSk7XG4gICAgICAgIGNvbnN0IGlzUnVubmluZyA9IChydW5uaW5nSWRzLmluZGV4T2YocHJvY2Vzc0lkKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgcXVldWVkXG4gICAgICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBydW5uaW5nIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgdGhlcmVcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChwcm9jZXNzSWQpO1xuICAgICAgICAgICAgcnVubmluZ1Byb2Nlc3Nlc1twcm9jZXNzSWRdID0gcHJvY2VzcztcblxuICAgICAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc1Bhc3NpdmUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbaW50XVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogKHByb2Nlc3NJZCkgPT4ge1xuICAgICAgICBpZiAoZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YocHJvY2Vzc0lkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5wdXNoKHByb2Nlc3NJZCk7XG4gICAgICAgIH1cbiAgICB9XG59OyJdfQ==