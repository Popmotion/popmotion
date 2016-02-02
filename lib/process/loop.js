'use strict';

exports.__esModule = true;
exports.deactivate = exports.getProcessId = undefined;
exports.activate = activate;

var _timer = require('./timer');

var _timer2 = _interopRequireDefault(_timer);

var _tick = require('./tick');

var _tick2 = _interopRequireDefault(_tick);

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStepOrder = [{ name: 'onFrameStart' }, { name: 'onUpdate' }, { name: 'willRender', decideRender: true }, { name: 'onPreRender', isRender: true }, { name: 'onRender', isRender: true }, { name: 'onPostRender', isRender: true }, { name: 'onFrameEnd' }, { name: 'onCleanup' }]; /*
                                                                                                                                                                                                                                                                                                 Core render loop
                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                 Some decicisons here have been taken in the name of performance. All hail performance.
                                                                                                                                                                                                                                                                                                 (It turns out microoptimisations do matter when you have 16ms)
                                                                                                                                                                                                                                                                                             */

var numProcessSteps = processStepOrder.length;

// [boolean]: Is loop running?
var isRunning = false;

/*
    [timestamp]: Frame timestamp
    [int]: Time since last frame
*/
function fireAll(frameStamp, elapsed) {
    var activeIds = _manager2.default.getActiveIds();
    var activeProcessCount = activeIds.length;

    for (var i = 0; i < numProcessSteps; i++) {
        var step = processStepOrder[i];

        for (var i2 = 0; i2 < activeProcessCount; i2++) {
            var process = _manager2.default.activeProcesses[activeIds[i2]];
            var result = false;

            // Check if this process has this step, or if it's a render step that we're rendering this frame
            if (process && process[step.name] && (!step.isRender || step.isRender && process._renderThisFrame === true)) {
                result = process[step.name].call(process, process, frameStamp, elapsed);
            }

            // If this is a decide render step and it returns `false`, set willRender to false
            if (step.decideRender) {
                process._renderThisFrame = process[step.name] && result !== true ? false : true;
            }
        }
    }
}

// Function to fire every frame
function frame() {
    (0, _tick2.default)(function (frameStamp) {
        if (isRunning) {
            frame();
        }

        _timer2.default.update(frameStamp);
        console.time('loop');
        isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
        console.timeEnd('loop');
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
var getProcessId = exports.getProcessId = _manager2.default.getProcessId;

/*
    [int]: Process ID to activate
    [Process]: Process to activate
*/
function activate(id, process) {
    _manager2.default.activate(id);
    runningProcesses[id] = process;

    if (!isRunning) {
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
var deactivate = exports.deactivate = _manager2.default.deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQW1GZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6RWhCLElBQU0sbUJBQW1CLENBQ3JCLEVBQUUsTUFBTSxjQUFOLEVBRG1CLEVBRXJCLEVBQUUsTUFBTSxVQUFOLEVBRm1CLEVBR3JCLEVBQUUsTUFBTSxZQUFOLEVBQW9CLGNBQWMsSUFBZCxFQUhELEVBSXJCLEVBQUUsTUFBTSxhQUFOLEVBQXFCLFVBQVUsSUFBVixFQUpGLEVBS3JCLEVBQUUsTUFBTSxVQUFOLEVBQWtCLFVBQVUsSUFBVixFQUxDLEVBTXJCLEVBQUUsTUFBTSxjQUFOLEVBQXNCLFVBQVUsSUFBVixFQU5ILEVBT3JCLEVBQUUsTUFBTSxZQUFOLEVBUG1CLEVBUXJCLEVBQUUsTUFBTSxXQUFOLEVBUm1CLENBQW5COzs7Ozs7O0FBVU4sSUFBTSxrQkFBa0IsaUJBQWlCLE1BQWpCOzs7QUFHeEIsSUFBSSxZQUFZLEtBQVo7Ozs7OztBQU1KLFNBQVMsT0FBVCxDQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQztBQUNsQyxRQUFNLFlBQVksa0JBQVEsWUFBUixFQUFaLENBRDRCO0FBRWxDLFFBQU0scUJBQXFCLFVBQVUsTUFBVixDQUZPOztBQUlsQyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxlQUFKLEVBQXFCLEdBQXJDLEVBQTBDO0FBQ3RDLFlBQU0sT0FBTyxpQkFBaUIsQ0FBakIsQ0FBUCxDQURnQzs7QUFHdEMsYUFBSyxJQUFJLEtBQUssQ0FBTCxFQUFRLEtBQUssa0JBQUwsRUFBeUIsSUFBMUMsRUFBZ0Q7QUFDNUMsZ0JBQU0sVUFBVSxrQkFBUSxlQUFSLENBQXdCLFVBQVUsRUFBVixDQUF4QixDQUFWLENBRHNDO0FBRTVDLGdCQUFJLFNBQVMsS0FBVDs7O0FBRndDLGdCQUt4QyxXQUFXLFFBQVEsS0FBSyxJQUFMLENBQW5CLEtBQWtDLENBQUMsS0FBSyxRQUFMLElBQWtCLEtBQUssUUFBTCxJQUFpQixRQUFRLGdCQUFSLEtBQTZCLElBQTdCLENBQXRFLEVBQTJHO0FBQzNHLHlCQUFTLFFBQVEsS0FBSyxJQUFMLENBQVIsQ0FBbUIsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsVUFBMUMsRUFBc0QsT0FBdEQsQ0FBVCxDQUQyRzthQUEvRzs7O0FBTDRDLGdCQVV4QyxLQUFLLFlBQUwsRUFBbUI7QUFDbkIsd0JBQVEsZ0JBQVIsR0FBMkIsT0FBQyxDQUFRLEtBQUssSUFBTCxDQUFSLElBQXNCLFdBQVcsSUFBWCxHQUFtQixLQUExQyxHQUFrRCxJQUFsRCxDQURSO2FBQXZCO1NBVko7S0FISjtDQUpKOzs7QUF5QkEsU0FBUyxLQUFULEdBQWlCO0FBQ2Isd0JBQUssVUFBQyxVQUFELEVBQWdCO0FBQ2pCLFlBQUksU0FBSixFQUFlO0FBQ1gsb0JBRFc7U0FBZjs7QUFJQSx3QkFBTSxNQUFOLENBQWEsVUFBYixFQUxpQjtBQU1qQixnQkFBUSxJQUFSLENBQWEsTUFBYixFQU5pQjtBQU9qQixvQkFBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBUGlCO0FBUWpCLGdCQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsRUFSaUI7S0FBaEIsQ0FBTCxDQURhO0NBQWpCOzs7QUFjQSxTQUFTLEtBQVQsR0FBaUI7QUFDYixRQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1osd0JBQU0sS0FBTixHQURZO0FBRVosb0JBQVksSUFBWixDQUZZO0FBR1osZ0JBSFk7S0FBaEI7Q0FESjs7O0FBU08sSUFBTSxzQ0FBZSxrQkFBUSxZQUFSOzs7Ozs7QUFNckIsU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCLEVBQStCO0FBQ2xDLHNCQUFRLFFBQVIsQ0FBaUIsRUFBakIsRUFEa0M7QUFFbEMscUJBQWlCLEVBQWpCLElBQXVCLE9BQXZCLENBRmtDOztBQUlsQyxRQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1osZ0JBRFk7S0FBaEI7Q0FKRzs7Ozs7QUFZQSxJQUFNLGtDQUFhLGtCQUFRLFVBQVIiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29yZSByZW5kZXIgbG9vcFxuXG4gICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCBwcm9jZXNzU3RlcE9yZGVyID0gW1xuICAgIHsgbmFtZTogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IG5hbWU6ICdvblVwZGF0ZScgfSxcbiAgICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBuYW1lOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgY29uc3QgYWN0aXZlSWRzID0gbWFuYWdlci5nZXRBY3RpdmVJZHMoKTtcbiAgICBjb25zdCBhY3RpdmVQcm9jZXNzQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICBjb25zdCBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gbWFuYWdlci5hY3RpdmVQcm9jZXNzZXNbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgcHJvY2VzcyBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCAoc3RlcC5pc1JlbmRlciAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSAocHJvY2Vzc1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKCkge1xuICAgIHRpY2soKGZyYW1lU3RhbXApID0+IHtcbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgZnJhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyLnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgICAgICAgY29uc29sZS50aW1lKCdsb29wJylcbiAgICAgICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuICAgICAgICBjb25zb2xlLnRpbWVFbmQoJ2xvb3AnKVxuICAgIH0pO1xufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGNvbnN0IGdldFByb2Nlc3NJZCA9IG1hbmFnZXIuZ2V0UHJvY2Vzc0lkO1xuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgbWFuYWdlci5hY3RpdmF0ZShpZCk7XG4gICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmV4cG9ydCBjb25zdCBkZWFjdGl2YXRlID0gbWFuYWdlci5kZWFjdGl2YXRlOyJdfQ==