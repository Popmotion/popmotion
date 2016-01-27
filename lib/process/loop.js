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

var processOrder = [{ step: 'onFrameStart' }, { step: 'onUpdate' }, { step: 'willRender', decideRender: true }, { step: 'onPreRender', isRender: true }, { step: 'onRender', isRender: true }, { step: 'onPostRender', isRender: true }, { step: 'onFrameEnd' }, { step: 'onCleanup' }];
var numProcessSteps = processOrder.length;

// [boolean]: Is loop running?
var isRunning = false;

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

// [array]: Array of process IDs queued for activation
var activateQueue = [];

// [array]: Array of process IDs queued for deactivation
var deactivateQueue = [];

/*
    Update lists

    @param [number]
    @param [array]
    @param [array]
*/
function updateLists(id, inList, outList) {
    var inPosition = inList.indexOf(inList);
    var outPosition = outList.indexOf(outList);

    if (inPosition === -1) {
        inList.push(id);
    }

    if (outPosition > -1) {
        outList.splice(outPosition, 1);
    }
}

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

function resolveQueues() {
    var activateQueueLength = activateQueue.length;
    var deactivateQueueLength = deactivateQueue.length;

    while (deactivateQueueLength--) {
        var id = deactivateQueue[deactivateQueueLength];
        var activeIdIndex = runningIds.indexOf(id);
        var process = runningProcesses[id];

        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);
            updateCount(false, process.isLazy);
            runningProcesses[id] = undefined;
        }

        if (process.onEnd) {
            process.onEnd(process);
        }
    }

    while (activateQueueLength--) {
        var id = activateQueue[activateQueueLength];
        var activeIdIndex = runningIds.indexOf(id);
        var process = runningProcesses[id];

        if (activeIdIndex === -1) {
            runningIds.push(id);
        }

        updateCount(true, process.isLazy);

        if (process.onStart) {
            process.onStart(process);
        }
    }

    activateQueue = [];
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

    resolveQueues();

    var numRunning = runningCount;

    for (var i = 0; i < numProcessSteps; i++) {
        method = processOrder[i];
        methodName = method.step;
        isRenderStep = method.isRender ? true : false;

        for (var i2 = 0; i2 < numRunning; i2++) {
            process = runningProcesses[runningIds[i2]];

            if (process && process[methodName] && (!isRenderStep || isRenderStep && process._renderThisFrame === true)) {
                result = process[methodName].call(process, process, frameStamp, elapsed);
            }

            if (method.decideRender) {
                process._renderThisFrame = process[methodName] && result !== true ? false : true;
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

// Exports
function getProcessId() {
    return currentProcessId++;
}

/*
    [int]: Process ID to activate
    [Process]: Process to activate
*/
function activate(id, process) {
    updateLists(id, activateQueue, deactivateQueue);

    runningProcesses[id] = process;

    if (!isRunning) {
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
function deactivate(id) {
    updateLists(id, deactivateQueue, activateQueue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBNktnQjtRQVFBO1FBYUE7Ozs7Ozs7Ozs7OztBQS9MaEIsSUFBTSxlQUFlLENBQ2pCLEVBQUUsTUFBTSxjQUFOLEVBRGUsRUFFakIsRUFBRSxNQUFNLFVBQU4sRUFGZSxFQUdqQixFQUFFLE1BQU0sWUFBTixFQUFvQixjQUFjLElBQWQsRUFITCxFQUlqQixFQUFFLE1BQU0sYUFBTixFQUFxQixVQUFVLElBQVYsRUFKTixFQUtqQixFQUFFLE1BQU0sVUFBTixFQUFrQixVQUFVLElBQVYsRUFMSCxFQU1qQixFQUFFLE1BQU0sY0FBTixFQUFzQixVQUFVLElBQVYsRUFOUCxFQU9qQixFQUFFLE1BQU0sWUFBTixFQVBlLEVBUWpCLEVBQUUsTUFBTSxXQUFOLEVBUmUsQ0FBZjtBQVVOLElBQU0sa0JBQWtCLGFBQWEsTUFBYjs7O0FBR3hCLElBQUksWUFBWSxLQUFaOzs7QUFHSixJQUFJLG1CQUFtQixDQUFuQjs7O0FBR0osSUFBSSxlQUFlLENBQWY7OztBQUdKLElBQUksY0FBYyxDQUFkOzs7QUFHSixJQUFNLGFBQWEsRUFBYjs7O0FBR04sSUFBTSxtQkFBbUIsRUFBbkI7OztBQUdOLElBQUksZ0JBQWdCLEVBQWhCOzs7QUFHSixJQUFJLGtCQUFrQixFQUFsQjs7Ozs7Ozs7O0FBU0osU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE1BQXpCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQ3RDLFFBQU0sYUFBYSxPQUFPLE9BQVAsQ0FBZSxNQUFmLENBQWIsQ0FEZ0M7QUFFdEMsUUFBTSxjQUFjLFFBQVEsT0FBUixDQUFnQixPQUFoQixDQUFkLENBRmdDOztBQUl0QyxRQUFJLGVBQWUsQ0FBQyxDQUFELEVBQUk7QUFDbkIsZUFBTyxJQUFQLENBQVksRUFBWixFQURtQjtLQUF2Qjs7QUFJQSxRQUFJLGNBQWMsQ0FBQyxDQUFELEVBQUk7QUFDbEIsZ0JBQVEsTUFBUixDQUFl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YUFBOUc7O0FBSUEsZ0JBQUksT0FBTyxZQUFQLEVBQXFCO0FBQ3JCLHdCQUFRLGdCQUFSLEdBQTJCLE9BQUMsQ0FBUSxVQUFSLEtBQXVCLFdBQVcsSUFBWCxHQUFtQixLQUEzQyxHQUFtRCxJQUFuRCxDQUROO2FBQXpCO1NBUEo7S0FMSjs7QUFrQkEsV0FBTyxjQUFjLElBQWQsR0FBcUIsS0FBckIsQ0E3QjJCO0NBQXRDOzs7QUFpQ0EsU0FBUyxLQUFULEdBQWlCO0FBQ2Isd0JBQUssVUFBQyxVQUFELEVBQWdCO0FBQ2pCLFlBQUksU0FBSixFQUFlO0FBQ1gsb0JBRFc7U0FBZjs7QUFJQSx3QkFBTSxNQUFOLENBQWEsVUFBYixFQUxpQjtBQU1qQixvQkFBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBTmlCO0tBQWhCLENBQUwsQ0FEYTtDQUFqQjs7O0FBWUEsU0FBUyxLQUFULEdBQWlCO0FBQ2IsUUFBSSxDQUFDLFNBQUQsRUFBWTtBQUNaLHdCQUFNLEtBQU4sR0FEWTtBQUVaLG9CQUFZLElBQVosQ0FGWTtBQUdaLGdCQUhZO0tBQWhCO0NBREo7OztBQVNPLFNBQVMsWUFBVCxHQUF3QjtBQUMzQixXQUFPLGtCQUFQLENBRDJCO0NBQXhCOzs7Ozs7QUFRQSxTQUFTLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0IsT0FBdEIsRUFBK0I7QUFDbEMsZ0JBQVksRUFBWixFQUFnQixhQUFoQixFQUErQixlQUEvQixFQURrQzs7QUFHbEMscUJBQWlCLEVBQWpCLElBQXVCLE9BQXZCLENBSGtDOztBQUtsQyxRQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1osZ0JBRFk7S0FBaEI7Q0FMRzs7Ozs7QUFhQSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDM0IsZ0JBQVksRUFBWixFQUFnQixlQUFoQixFQUFpQyxhQUFqQyxFQUQyQjtDQUF4QiIsImZpbGUiOiJsb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVyIGZyb20gJy4vdGltZXInO1xuaW1wb3J0IHRpY2sgZnJvbSAnLi90aWNrJztcblxuY29uc3QgcHJvY2Vzc09yZGVyID0gW1xuICAgIHsgc3RlcDogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IHN0ZXA6ICdvblVwZGF0ZScgfSxcbiAgICB7IHN0ZXA6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBzdGVwOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc09yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8vIFtpbnRdOiBQcm9jZXNzIElELCBpbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcHJvY2Vzc1xubGV0IGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIG5vbi1iYWNrZ3JvdW5kIHByb2Nlc3Nlc1xubGV0IGFjdGl2ZUNvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgYWN0aXZlIHByb2Nlc3MgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuY29uc3QgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbmxldCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5sZXQgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGxpc3RzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xuZnVuY3Rpb24gdXBkYXRlTGlzdHMoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpbkxpc3QpO1xuICAgIGNvbnN0IG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKG91dExpc3QpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufVxuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuZnVuY3Rpb24gdXBkYXRlQ291bnQoYWRkLCBpc0xhenkpIHtcbiAgICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICBydW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlcygpIHtcbiAgICBsZXQgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIGxldCBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGRlYWN0aXZhdGVRdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2RlYWN0aXZhdGVRdWV1ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICBjb25zdCBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICAgICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5vbkVuZCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vbkVuZChwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChhY3RpdmF0ZVF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgY29uc3QgaWQgPSBhY3RpdmF0ZVF1ZXVlW2FjdGl2YXRlUXVldWVMZW5ndGhdO1xuICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgY29uc3QgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBwcm9jZXNzLm9uU3RhcnQocHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG59XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICBsZXQgbWV0aG9kID0ge307XG4gICAgbGV0IG1ldGhvZE5hbWUgPSAnJztcbiAgICBsZXQgaXNSZW5kZXJTdGVwID0gZmFsc2U7XG4gICAgbGV0IHByb2Nlc3M7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHJlc29sdmVRdWV1ZXMoKTtcblxuICAgIGNvbnN0IG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IG51bVJ1bm5pbmc7IGkyKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaTJdXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1ttZXRob2ROYW1lXSAmJiAoIWlzUmVuZGVyU3RlcCB8fCAoaXNSZW5kZXJTdGVwICYmIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvY2Vzc1ttZXRob2ROYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kLmRlY2lkZVJlbmRlcikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9IChwcm9jZXNzW21ldGhvZE5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgICB0aWNrKChmcmFtZVN0YW1wKSA9PiB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGZyYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcbiAgICB9KTtcbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUoKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydHNcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzSWQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzSWQrKztcbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIHVwZGF0ZUxpc3RzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuICAgIFxuICAgIHJ1bm5pbmdQcm9jZXNzZXNbaWRdID0gcHJvY2VzcztcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGRlYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZShpZCkge1xuICAgIHVwZGF0ZUxpc3RzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpO1xufSJdfQ==