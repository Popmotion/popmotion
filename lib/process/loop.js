'use strict';

exports.__esModule = true;
exports.getProcessId = getProcessId;
exports.activate = activate;
exports.deactivate = deactivate;

var _timer = require('./timer');

var _timer2 = _interopRequireDefault(_timer);

var _tick = require('./tick');

var _tick2 = _interopRequireDefault(_tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processOrder = [{ step: 'onFrameStart' }, { step: 'onUpdate' }, { step: 'willRender', decideRender: true }, { step: 'preRender', isRender: true }, { step: 'onRender', isRender: true }, { step: 'postRender', isRender: true }, { step: 'onFrameEnd' }, { step: 'onCleanup' }];
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

    [boolean]: `true` to add
    [boolean]: `true` if lazy
*/
function updateCount(add, isLazy) {
    var modify = add ? 1 : -1;

    runningCount += modify;

    if (!isLazy) {
        activeCount += modify;
    }
}

function purge() {
    var queueLength = deactivateQueue.length;

    while (queueLength--) {
        var idToDelete = deactivateQueue[queueLength];
        var activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, runningProcesses[idToDelete].isLazy);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
}

/*
    [timestamp]: Frame timestamp
    [int]: Time since last frame
*/
function fireAll(frameStamp, elapsed) {
    var method = {};
    var methodName = '';
    var isRenderStep = false;
    var process = undefined;
    var result = undefined;

    purge();

    var numRunning = runningCount;

    for (var i = 0; i < numProcessSteps; i++) {
        method = processOrder[i];
        methodName = method.step;
        isRenderStep = method.isRender ? true : false;

        for (var _i = 0; _i < numRunning; _i++) {
            process = runningProcesses[runningIds[_i]];

            if (process && process[methodName] && (!isRenderStep || isRenderStep && process._render === true)) {
                result = process[methodName].call(process, process, frameStamp, elapsed);
            }

            if (method.decideRender) {
                process._render = process[methodName] && result === false ? false : true;
            }
        }
    }

    return activeCount ? true : false;
}

// Function to fire every frame
function frame() {
    (0, _tick2.default)(function (frameStamp) {
        if (isRunning) {
            frame();
        }

        _timer2.default.update(frameStamp);
        isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
    });
}

// Start loop
function start() {
    if (!isRunning) {
        _timer2.default.start();
        isRunning = true;
        frame();
    }
}

// Stop loop
function stop() {
    isRunning = false;
}

// Exports
function getProcessId() {
    return currentProcessId++;
}

/*
    [int]: Process ID to activate
    [Process]: Process to activate
*/
function activate(id, process) {
    var queueIndex = deactivateQueue.indexOf(id);
    var isQueued = queueIndex > -1;
    var isRunning = runningIds.indexOf(id) > -1;

    // Remove from deactivateQueue if queued
    if (isQueued) {
        deactivateQueue.splice(queueIndex, 1);
    }

    // Add to running processes array if not there
    if (!isRunning) {
        runningIds.push(id);
        runningProcesses[id] = process;

        updateCount(true, process.isLazy);
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
function deactivate(id) {
    if (deactivateQueue.indexOf(id) === -1) {
        deactivateQueue.push(id);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBdUlnQjtRQVFBO1FBdUJBOzs7Ozs7Ozs7Ozs7QUFuS2hCLElBQU0sZUFBZSxDQUNqQixFQUFFLE1BQU0sY0FBTixFQURlLEVBRWpCLEVBQUUsTUFBTSxVQUFOLEVBRmUsRUFHakIsRUFBRSxNQUFNLFlBQU4sRUFBb0IsY0FBYyxJQUFkLEVBSEwsRUFJakIsRUFBRSxNQUFNLFdBQU4sRUFBbUIsVUFBVSxJQUFWLEVBSkosRUFLakIsRUFBRSxNQUFNLFVBQU4sRUFBa0IsVUFBVSxJQUFWLEVBTEgsRUFNakIsRUFBRSxNQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBTkwsRUFPakIsRUFBRSxNQUFNLFlBQU4sRUFQZSxFQVFqQixFQUFFLE1BQU0sV0FBTixFQVJlLENBQWY7QUFVTixJQUFNLGtCQUFrQixhQUFhLE1BQWI7OztBQUd4QixJQUFJLG1CQUFtQixDQUFuQjs7O0FBR0osSUFBSSxlQUFlLENBQWY7OztBQUdKLElBQUksY0FBYyxDQUFkOzs7QUFHSixJQUFJLGFBQWEsRUFBYjs7O0FBR0osSUFBSSxtQkFBbUIsRUFBbkI7OztBQUdKLElBQUksa0JBQWtCLEVBQWxCOzs7QUFHSixJQUFJLFlBQVksS0FBWjs7Ozs7Ozs7QUFRSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsTUFBMUIsRUFBa0M7QUFDOUIsUUFBTSxTQUFTLE1BQU0sQ0FBTixHQUFVLENBQUMsQ0FBRCxDQURLOztBQUc5QixvQkFBZ0IsTUFBaEIsQ0FIOEI7O0FBSzlCLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDVCx1QkFBZSxNQUFmLENBRFM7S0FBYjtDQUxKOztBQVVBLFNBQVMsS0FBVCxHQUFpQjtBQUNiLFFBQUksY0FBYyxnQkFBZ0IsTUFBaEIsQ0FETDs7QUFHYixXQUFPLGFBQVAsRUFBc0I7QUFDbEIsWUFBTSxhQUFhLGdCQUFnQixXQUFoQixDQUFiLENBRFk7QUFFbEIsWUFB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S0FBZDs7O0FBTmtDLFFBVzlCLENBQUMsU0FBRCxFQUFZO0FBQ1osbUJBQVcsSUFBWCxDQUFnQixFQUFoQixFQURZO0FBRVoseUJBQWlCLEVBQWpCLElBQXVCLE9BQXZCLENBRlk7O0FBSVosb0JBQVksSUFBWixFQUFrQixRQUFRLE1BQVIsQ0FBbEIsQ0FKWTtBQUtaLGdCQUxZO0tBQWhCO0NBWEc7Ozs7O0FBdUJBLFNBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUMzQixRQUFJLGdCQUFnQixPQUFoQixDQUF3QixFQUF4QixNQUFnQyxDQUFDLENBQUQsRUFBSTtBQUNwQyx3QkFBZ0IsSUFBaEIsQ0FBcUIsRUFBckIsRUFEb0M7S0FBeEM7Q0FERyIsImZpbGUiOiJsb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVyIGZyb20gJy4vdGltZXInO1xuaW1wb3J0IHRpY2sgZnJvbSAnLi90aWNrJztcblxuY29uc3QgcHJvY2Vzc09yZGVyID0gW1xuICAgIHsgc3RlcDogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IHN0ZXA6ICdvblVwZGF0ZScgfSxcbiAgICB7IHN0ZXA6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAnb25GcmFtZUVuZCcgfSxcbiAgICB7IHN0ZXA6ICdvbkNsZWFudXAnIH1cbl07XG5jb25zdCBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzT3JkZXIubGVuZ3RoO1xuXG4vLyBbaW50XTogUHJvY2VzcyBJRCwgaW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHByb2Nlc3NcbmxldCBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3Nlc1xubGV0IHJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBub24tYmFja2dyb3VuZCBwcm9jZXNzZXNcbmxldCBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xubGV0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxubGV0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50KGFkZCwgaXNMYXp5KSB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHB1cmdlKCkge1xuICAgIGxldCBxdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAvLyBJZiBwcm9jZXNzIGlzIGFjdGl2ZSwgZGVhY3RpdmF0ZVxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcblxuICAgICAgICAgICAgdXBkYXRlQ291bnQoZmFsc2UsIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV0uaXNMYXp5KTtcblxuICAgICAgICAgICAgZGVsZXRlIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGxldCBtZXRob2QgPSB7fTtcbiAgICBsZXQgbWV0aG9kTmFtZSA9ICcnO1xuICAgIGxldCBpc1JlbmRlclN0ZXAgPSBmYWxzZTtcbiAgICBsZXQgcHJvY2VzcztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgcHVyZ2UoKTtcblxuICAgIGNvbnN0IG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SdW5uaW5nOyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZE5hbWVdICYmICghaXNSZW5kZXJTdGVwIHx8IChpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW21ldGhvZE5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyID0gKHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgcmVzdWx0ID09PSBmYWxzZSkgPyBmYWxzZSA6IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgICB0aWNrKChmcmFtZVN0YW1wKSA9PiB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGZyYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcbiAgICB9KTtcbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUoKTtcbiAgICB9XG59XG5cbi8vIFN0b3AgbG9vcFxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NJZCgpIHtcbiAgICByZXR1cm4gY3VycmVudFByb2Nlc3NJZCsrO1xufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgY29uc3QgcXVldWVJbmRleCA9IGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBjb25zdCBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpO1xuICAgIGNvbnN0IGlzUnVubmluZyA9IChydW5uaW5nSWRzLmluZGV4T2YoaWQpID4gLTEpO1xuXG4gICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIHF1ZXVlZFxuICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0byBydW5uaW5nIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgdGhlcmVcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG5cbiAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICBpZiAoZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUucHVzaChpZCk7XG4gICAgfVxufSJdfQ==