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

var processOrder = [{ step: 'onFrameStart' }, { step: 'onUpdate' }, { step: 'willRender', decideRender: true }, { step: 'onRender', isRender: true }, { step: 'postRender', isRender: true }, { step: 'onFrameEnd' }, { step: 'onCleanup' }];
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

    while (deactivateQueue--) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBaUxnQjtRQVFBO1FBYUE7Ozs7Ozs7Ozs7OztBQW5NaEIsSUFBTSxlQUFlLENBQ2pCLEVBQUUsTUFBTSxjQUFOLEVBRGUsRUFFakIsRUFBRSxNQUFNLFVBQU4sRUFGZSxFQUdqQixFQUFFLE1BQU0sWUFBTixFQUFvQixjQUFjLElBQWQsRUFITCxFQUlqQixFQUFFLE1BQU0sVUFBTixFQUFrQixVQUFVLElBQVYsRUFKSCxFQUtqQixFQUFFLE1BQU0sWUFBTixFQUFvQixVQUFVLElBQVYsRUFMTCxFQU1qQixFQUFFLE1BQU0sWUFBTixFQU5lLEVBT2pCLEVBQUUsTUFBTSxXQUFOLEVBUGUsQ0FBZjtBQVNOLElBQU0sa0JBQWtCLGFBQWEsTUFBYjs7O0FBR3hCLElBQUksWUFBWSxLQUFaOzs7QUFHSixJQUFJLG1CQUFtQixDQUFuQjs7O0FBR0osSUFBSSxlQUFlLENBQWY7OztBQUdKLElBQUksY0FBYyxDQUFkOzs7QUFHSixJQUFNLGFBQWEsRUFBYjs7O0FBR04sSUFBTSxtQkFBbUIsRUFBbkI7OztBQUdOLElBQUksZ0JBQWdCLEVBQWhCOzs7QUFHSixJQUFJLGtCQUFrQixFQUFsQjs7Ozs7Ozs7O0FBU0osU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE1BQXpCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQ3RDLFFBQU0sYUFBYSxPQUFPLE9BQVAsQ0FBZSxNQUFmLENBQWIsQ0FEZ0M7QUFFdEMsUUFBTSxjQUFjLFFBQVEsT0FBUixDQUFnQixPQUFoQixDQUFkLENBRmdDOztBQUl0QyxRQUFJLGVBQWUsQ0FBQyxDQUFELEVBQUk7QUFDbkIsZUFBTyxJQUFQLENBQVksRUFBWixFQURtQjtLQUF2Qjs7QUFJQSxRQUFJLGNBQWMsQ0FBQyxDQUFELEVBQUk7QUFDbEIsZ0JBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsQ0FBNUIsRUFEa0I7S0FBdEI7Q0FSSjs7Ozs7Ozs7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QUFRLGdCQUFSLEdBQTJCLE9BQUMsQ0FBUSxVQUFSLEtBQXVCLFdBQVcsSUFBWCxHQUFtQixLQUEzQyxHQUFtRCxJQUFuRCxDQUROO2FBQXpCO1NBUEo7S0FMSjs7QUFrQkEsV0FBTyxjQUFjLElBQWQsR0FBcUIsS0FBckIsQ0E3QjJCO0NBQXRDOzs7QUFpQ0EsU0FBUyxLQUFULEdBQWlCO0FBQ2Isd0JBQUssVUFBQyxVQUFELEVBQWdCO0FBQ2pCLFlBQUksU0FBSixFQUFlO0FBQ1gsb0JBRFc7U0FBZjs7QUFJQSx3QkFBTSxNQUFOLENBQWEsVUFBYixFQUxpQjtBQU1qQixvQkFBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBTmlCO0tBQWhCLENBQUwsQ0FEYTtDQUFqQjs7O0FBWUEsU0FBUyxLQUFULEdBQWlCO0FBQ2IsUUFBSSxDQUFDLFNBQUQsRUFBWTtBQUNaLHdCQUFNLEtBQU4sR0FEWTtBQUVaLG9CQUFZLElBQVosQ0FGWTtBQUdaLGdCQUhZO0tBQWhCO0NBREo7OztBQVNBLFNBQVMsSUFBVCxHQUFnQjtBQUNaLGdCQUFZLEtBQVosQ0FEWTtDQUFoQjs7O0FBS08sU0FBUyxZQUFULEdBQXdCO0FBQzNCLFdBQU8sa0JBQVAsQ0FEMkI7Q0FBeEI7Ozs7OztBQVFBLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFzQixPQUF0QixFQUErQjtBQUNsQyxnQkFBWSxFQUFaLEVBQWdCLGFBQWhCLEVBQStCLGVBQS9CLEVBRGtDOztBQUdsQyxxQkFBaUIsRUFBakIsSUFBdUIsT0FBdkIsQ0FIa0M7O0FBS2xDLFFBQUksQ0FBQyxTQUFELEVBQVk7QUFDWixnQkFEWTtLQUFoQjtDQUxHOzs7OztBQWFBLFNBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUMzQixnQkFBWSxFQUFaLEVBQWdCLGVBQWhCLEVBQWlDLGFBQWpDLEVBRDJCO0NBQXhCIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGltZXIgZnJvbSAnLi90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL3RpY2snO1xuXG5jb25zdCBwcm9jZXNzT3JkZXIgPSBbXG4gICAgeyBzdGVwOiAnb25GcmFtZVN0YXJ0JyB9LFxuICAgIHsgc3RlcDogJ29uVXBkYXRlJyB9LFxuICAgIHsgc3RlcDogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAnb25GcmFtZUVuZCcgfSxcbiAgICB7IHN0ZXA6ICdvbkNsZWFudXAnIH1cbl07XG5jb25zdCBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbmxldCBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgbm9uLWJhY2tncm91bmQgcHJvY2Vzc2VzXG5sZXQgYWN0aXZlQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgcHJvY2VzcyBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5jb25zdCBydW5uaW5nUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxubGV0IGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmxldCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgbGlzdHNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG5mdW5jdGlvbiB1cGRhdGVMaXN0cyhpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gICAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGluTGlzdCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2Yob3V0TGlzdCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG5mdW5jdGlvbiB1cGRhdGVDb3VudChhZGQsIGlzTGF6eSkge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBhY3RpdmVDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWVzKCkge1xuICAgIGxldCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG4gICAgbGV0IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoZGVhY3RpdmF0ZVF1ZXVlLS0pIHtcbiAgICAgICAgY29uc3QgaWQgPSBkZWFjdGl2YXRlUXVldWVbZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KGZhbHNlLCBwcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZXNzLm9uRW5kKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm9uRW5kKHByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKGFjdGl2YXRlUXVldWVMZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBpZCA9IGFjdGl2YXRlUXVldWVbYWN0aXZhdGVRdWV1ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICBjb25zdCBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0xhenkpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHByb2Nlc3Mub25TdGFydChwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGxldCBtZXRob2QgPSB7fTtcbiAgICBsZXQgbWV0aG9kTmFtZSA9ICcnO1xuICAgIGxldCBpc1JlbmRlclN0ZXAgPSBmYWxzZTtcbiAgICBsZXQgcHJvY2VzcztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgcmVzb2x2ZVF1ZXVlcygpO1xuXG4gICAgY29uc3QgbnVtUnVubmluZyA9IHJ1bm5pbmdDb3VudDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgbWV0aG9kID0gcHJvY2Vzc09yZGVyW2ldO1xuICAgICAgICBtZXRob2ROYW1lID0gbWV0aG9kLnN0ZXA7XG4gICAgICAgIGlzUmVuZGVyU3RlcCA9IG1ldGhvZC5pc1JlbmRlciA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgbnVtUnVubmluZzsgaTIrKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbcnVubmluZ0lkc1tpMl1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZE5hbWVdICYmICghaXNSZW5kZXJTdGVwIHx8IChpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW21ldGhvZE5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID0gKHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlKSA/IGZhbHNlIDogdHJ1ZTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKCkge1xuICAgIHRpY2soKGZyYW1lU3RhbXApID0+IHtcbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgZnJhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyLnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICAgICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuICAgIH0pO1xufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cbn1cblxuLy8gU3RvcCBsb29wXG5mdW5jdGlvbiBzdG9wKCkge1xuICAgIGlzUnVubmluZyA9IGZhbHNlO1xufVxuXG4vLyBFeHBvcnRzXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0lkKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHByb2Nlc3MpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICBcbiAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbn0iXX0=