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
var updateCount = function (add, isPassive) {
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
var purge = function () {
    var queueLength = deactivateQueue.length;

    while (queueLength--) {
        var idToDelete = deactivateQueue[queueLength];
        var activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, process.isPassive());

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
            _process[method](framestamp, elapsed);
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

    fire('update');
    fire('preFire');
    fire('fire');
    fire('postFire');

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

            updateCount(true, process.isPassive());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7O0FBQUMsQUFHNUMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDOzs7QUFBQyxBQUd6QixJQUFJLFlBQVksR0FBRyxDQUFDOzs7QUFBQyxBQUdyQixJQUFJLFdBQVcsR0FBRyxDQUFDOzs7QUFBQyxBQUdwQixJQUFJLFVBQVUsR0FBRyxFQUFFOzs7QUFBQyxBQUdwQixJQUFJLGdCQUFnQixHQUFHLEVBQUU7OztBQUFDLEFBRzFCLElBQUksZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBR3pCLElBQUksU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7O0FBQUMsQUFRdEIsSUFBTSxXQUFXLEdBQUcsVUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFLO0FBQ3BDLFFBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTVCLGdCQUFZLEdBQUcsTUFBTSxDQUFDOztBQUV0QixRQUFJLENBQUMsU0FBUyxFQUFFO0FBQ1osbUJBQVcsR0FBRyxNQUFNLENBQUM7O0FBRXJCLFlBQUksR0FBRyxFQUFFO0FBQ0wsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKO0NBQ0o7Ozs7O0FBQUEsQUFLRCxJQUFNLEtBQUssR0FBRyxZQUFNO0FBQ2hCLFFBQUksV0FBVyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7O0FBRXpDLFdBQU8sV0FBVyxFQUFFLEVBQUU7QUFDbEIsWUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hELFlBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDOzs7QUFBQyxBQUdyRCxZQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMs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QUFFLENBQUMsQ0FBQTtTQUN6QztLQUNKOzs7OztBQUtELGNBQVUsRUFBRSxVQUFDLFNBQVMsRUFBSztBQUN2QixZQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDM0MsMkJBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuY29uc3Qgc3lzdGVtVGljayA9IHJlcXVpcmUoJy4vc3lzdGVtLXRpY2snKTtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbmxldCBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgYWN0aXZlIHByb2Nlc3Nlc1xubGV0IGFjdGl2ZUNvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgYWN0aXZlIHByb2Nlc3MgSURzXG5sZXQgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbmxldCBydW5uaW5nUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5sZXQgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgQHBhcmFtIFtib29sZWFuXVxuKi9cbmNvbnN0IHVwZGF0ZUNvdW50ID0gKGFkZCwgaXNQYXNzaXZlKSA9PiB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICsgbW9kaWZ5O1xuXG4gICAgaWYgKCFpc1Bhc3NpdmUpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKyBtb2RpZnk7XG5cbiAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgbG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICAgIFB1cmdlIGl0ZW1zIGluIHRoZSBkZWFjdGl2YXRlIHF1ZXVlIGZyb20gb3VyIHJ1bm5pbmdQcm9jZXNzZXNcbiovXG5jb25zdCBwdXJnZSA9ICgpID0+IHtcbiAgICBsZXQgcXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWRUb0RlbGV0ZSk7XG5cbiAgICAgICAgLy8gSWYgcHJvY2VzcyBpcyBhY3RpdmUsIGRlYWN0aXZhdGVcbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KGZhbHNlLCBwcm9jZXNzLmlzUGFzc2l2ZSgpKTtcblxuICAgICAgICAgICAgZGVsZXRlIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBGaXJlIG9uZSBwcm9jZXNzIHN0YWdlXG4qL1xuY29uc3QgZmlyZSA9IChtZXRob2QsIGZyYW1lc3RhbXAsIGVsYXBzZWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZUNvdW50OyBpKyspIHtcbiAgICAgICAgbGV0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3NbbWV0aG9kXSkge1xuICAgICAgICAgICAgcHJvY2Vzc1ttZXRob2RdKGZyYW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICBcbiAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuKi9cbmNvbnN0IGZpcmVBbGwgPSAoZnJhbWVzdGFtcCwgZWxhcHNlZCkgPT4ge1xuICAgIHB1cmdlKCk7XG5cbiAgICBmaXJlKCd1cGRhdGUnKTtcbiAgICBmaXJlKCdwcmVGaXJlJyk7XG4gICAgZmlyZSgnZmlyZScpO1xuICAgIGZpcmUoJ3Bvc3RGaXJlJyk7XG5cbiAgICBwdXJnZSgpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5jb25zdCBsb29wID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiAoKSA9PiB7XG4gICAgICAgIHN5c3RlbVRpY2soKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBsb29wLmZyYW1lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVyLnVwZGF0ZShmcmFtZXN0YW1wKTtcblxuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZXN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgbG9vcC5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6ICgpID0+IHtcbiAgICAgICAgaXNSdW5uaW5nID0gZmFsc2VcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBJbmNyZW1lbnRzIGFuZCByZXR1cm5zIHRoZSBsYXRlc3QgcHJvY2VzcyBJRFxuICAgIGdldFByb2Nlc3NJZDogKCkgPT4gY3VycmVudFByb2Nlc3NJZCsrLFxuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcGFyYW0gW2ludF1cbiAgICAqL1xuICAgIGFjdGl2YXRlOiAocHJvY2VzcywgcHJvY2Vzc0lkKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXVlSW5kZXggPSBkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihwcm9jZXNzSWQpO1xuICAgICAgICBjb25zdCBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpO1xuICAgICAgICBjb25zdCBpc1J1bm5pbmcgPSAocnVubmluZ0lkcy5pbmRleE9mKHByb2Nlc3NJZCkgPiAtMSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIHF1ZXVlZFxuICAgICAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gcnVubmluZyBwcm9jZXNzZXMgYXJyYXkgaWYgbm90IHRoZXJlXG4gICAgICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnB1c2gocHJvY2Vzc0lkKTtcbiAgICAgICAgICAgIHJ1bm5pbmdQcm9jZXNzZXNbcHJvY2Vzc0lkXSA9IHByb2Nlc3M7XG5cbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KHRydWUsIHByb2Nlc3MuaXNQYXNzaXZlKCkpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtpbnRdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiAocHJvY2Vzc0lkKSA9PiB7XG4gICAgICAgIGlmIChkZWFjdGl2YXRlUXVldWUuaW5kZXhPZihwcm9jZXNzSWQpID09PSAtMSkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnB1c2gocHJvY2Vzc0lkKTtcbiAgICAgICAgfVxuICAgIH1cbn07Il19