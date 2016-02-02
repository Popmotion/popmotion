"use strict";

exports.__esModule = true;
// [int]: Incremented for each new running process
var currentProcessId = 0;

// [int]: Number of all running processes
var totalRunningCount = 0;

// [int]: Number of running processes excluding background processes
var nonBackgroundRunningCount = 0;

// [array]: Array of running process IDs
var runningIds = [];

// [object]: Map of running processes
var activeProcesses = {};

// [array]: Array of process IDs queued for activation
var activateQueue = [];

// [array]: Array of process IDs queued for deactivation
var deactivateQueue = [];

/*
    Update activate/deactivate queues

    @param [number]
    @param [array]
    @param [array]
*/
var updateQueues = function (id, inList, outList) {
    var inPosition = inList.indexOf(inList);
    var outPosition = outList.indexOf(outList);

    if (inPosition === -1) {
        inList.push(id);
    }

    if (outPosition > -1) {
        outList.splice(outPosition, 1);
    }
};

/*
    Update running

    [boolean]: `true` to add
    [boolean]: `true` if lazy
*/
var updateRunningCount = function (add, isLazy) {
    var modify = add ? 1 : -1;

    totalRunningCount += modify;

    if (!isLazy) {
        nonBackgroundRunningCount += modify;
    }
};

exports.default = {
    activeProcesses: activeProcesses,

    // Activate a process
    activate: function (id) {
        return updateQueues(id, activateQueue, deactivateQueue);
    },

    // Deactivate a process
    deactivate: function (id) {
        return updateQueues(id, deactivateQueue, activateQueue);
    },

    // Increment current process ID and return
    getProcessId: function () {
        return currentProcessId++;
    },

    // Resolve activate/deactivate processes and return active ids
    getActiveIds: function () {
        /*
            Process deactivate queue
        */
        var deactivateQueueLength = deactivateQueue.length;
        while (deactivateQueueLength--) {
            var id = deactivateQueue[deactivateQueueLength];
            var activeIdIndex = runningIds.indexOf(id);
            var process = runningProcesses[id];

            // If this is a running process, deactivate
            if (activeIdIndex > -1) {
                runningIds.splice(activeIdIndex, 1);
                updateRunningCount(false, process.isLazy);
                runningProcesses[id] = undefined;

                if (process.onDeactivate) {
                    process.onDeactivate(process);
                }
            }
        }

        /*
            Empty deactivate queue. We use `Array.splice` because it doesn't
            works on the original array so we don't have to garbage collect anything
        */
        deactivateQueue.splice(0, deactivateQueueLength);

        /*
            Process activate queue
        */
        var activateQueueLength = activateQueue.length;
        while (activateQueueLength--) {
            var id = activateQueue[activateQueueLength];
            var activeIdIndex = runningIds.indexOf(id);
            var process = runningProcesses[id];

            // If process isn't already running, activate
            if (activeIdIndex === -1) {
                runningIds.push(id);
                updateRunningCount(true, process.isLazy);

                if (process.onActivate) {
                    process.onActivate(process);
                }
            }
        }

        activateQueue.splice(0, activateQueueLength);

        return runningIds;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLElBQUksbUJBQW1CLENBQW5COzs7QUFHSixJQUFJLG9CQUFvQixDQUFwQjs7O0FBR0osSUFBSSw0QkFBNEIsQ0FBNUI7OztBQUdKLElBQU0sYUFBYSxFQUFiOzs7QUFHTixJQUFNLGtCQUFrQixFQUFsQjs7O0FBR04sSUFBTSxnQkFBZ0IsRUFBaEI7OztBQUdOLElBQU0sa0JBQWtCLEVBQWxCOzs7Ozs7Ozs7QUFTTixJQUFNLGVBQWUsVUFBQyxFQUFELEVBQUssTUFBTCxFQUFhLE9BQWIsRUFBeUI7QUFDMUMsUUFBTSxhQUFhLE9BQU8sT0FBUCxDQUFlLE1BQWYsQ0FBYixDQURvQztBQUUxQyxRQUFNLGNBQWMsUUFBUSxPQUFSLENBQWdCLE9BQWhCLENBQWQsQ0FGb0M7O0FBSTFDLFFBQUksZUFBZSxDQUFDLENBQUQsRUFBSTtBQUNuQixlQUFPLElBQVAsQ0FBWSxFQUFaLEVBRG1CO0tBQXZCOztBQUlBLFFBQUksY0FBYyxDQUFDLENBQUQsRUFBSTtBQUNsQixnQkFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixDQUE1QixFQURrQjtLQUF0QjtDQVJpQjs7Ozs7Ozs7QUFtQnJCLElBQU0scUJBQXFCLFVBQUMsR0FBRCxFQUFNLE1BQU4sRUFBaUI7QUFDeEMsUUFBTSxTQUFTLE1BQU0sQ0FBTixHQUFVLENBQUMsQ0FBRCxDQURlOztBQUd4Qyx5QkFBcUIsTUFBckIsQ0FId0M7O0FBS3hDLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDVCxxQ0FBNkIsTUFBN0IsQ0FEUztLQUFiO0NBTHVCOztrQkFVWjtBQUNYLG9DQURXOzs7QUFJWCxjQUFVLFVBQUMsRUFBRDtlQUFRLGFBQWEsRUFBYixFQUFpQixhQUFqQixFQUFnQyxlQUFoQztLQUFSOzs7QUFHVixnQkFBWSxVQUFDLEVBQUQ7ZUFBUSxhQUFhLEVBQWIsRUFBaUIsZUFBakIsRUFBa0MsYUFBbEM7S0FBUjs7O0FBR1osa0JBQWM7ZUFBTTtLQUFOOzs7QUFHZCxrQkFBYyxZQUFNOzs7O0FBSWhCLFlBQUksd0JBQXdCLGdCQUFnQixNQUFoQixDQUpaO0FBS2hCLGVBQU8sdUJBQVAsRUFBZ0M7QUFDNUIsZ0JBQU0sS0FBSyxnQkFBZ0IscUJBQWhCLENBQUwsQ0FEc0I7QUFFNUIsZ0JBQU0sZ0JBQWdCLFdBQVcsT0FBWCxDQUFtQixFQUFuQixDQUFoQixDQUZzQjtBQUc1QixnQkFBTSxVQUFVLGlCQUFpQixFQUFqQixDQUFWOzs7QUFIc0IsZ0JBTXhCLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUNwQiwyQkFBVyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDLENBQWpDLEVBRG9CO0FBRXBCLG1DQUFtQixLQUFuQixFQUEwQixRQUFRLE1BQVIsQ0FBMUIsQ0FGb0I7QUFHcEIsaUNBQWlCLEVBQWpCLElBQXVCLFNBQXZCLENBSG9COztBQUtwQixvQkFBSSxRQUFRLFlBQVIsRUFBc0I7QUFDdEIsNEJBQVEsWUFBUixDQUFxQixPQUFyQixFQURzQjtpQkFBMUI7YUFMSjtTQU5KOzs7Ozs7QUFMZ0IsdUJBMEJoQixDQUFnQixNQUFoQixDQUF1QixDQUF2QixFQUEwQixxQkFBMUI7Ozs7O0FBMUJnQixZQStCWixzQkFBc0IsY0FBYyxNQUFkLENBL0JWO0FBZ0NoQixlQUFPLHFCQUFQLEVBQThCO0FBQzFCLGdCQUFNLEtBQUssY0FBYyxtQkFBZCxDQUFMLENBRG9CO0FBRTFCLGdCQUFNLGdCQUFnQixXQUFXLE9BQVgsQ0FBbUIsRUFBbkIsQ0FBaEIsQ0FGb0I7QUFHMUIsZ0JBQU0sVUFBVSxpQkFBaUIsRUFBakIsQ0FBVjs7O0FBSG9CLGdCQU10QixrQkFBa0IsQ0FBQyxDQUFELEVBQUk7QUFDdEIsMkJBQVcsSUFBWCxDQUFnQixFQUFoQixFQURzQjtBQUV0QixtQ0FBbUIsSUFBbkIsRUFBeUIsUUFBUSxNQUFSLENBQXpCLENBRnNCOztBQUl0QixvQkFBSSxRQUFRLFVBQVIsRUFBb0I7QUFDcEIsNEJBQVEsVUFBUixDQUFtQixPQUFuQixFQURvQjtpQkFBeEI7YUFKSjtTQU5KOztBQWdCQSxzQkFBYyxNQUFkLENBQXFCLENBQXJCLEVBQXdCLG1CQUF4QixFQWhEZ0I7O0FBa0RoQixlQUFPLFVBQVAsQ0FsRGdCO0tBQU4iLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xubGV0IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHByb2Nlc3MgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbmNvbnN0IGFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbmNvbnN0IGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmNvbnN0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbmNvbnN0IHVwZGF0ZVF1ZXVlcyA9IChpZCwgaW5MaXN0LCBvdXRMaXN0KSA9PiB7XG4gICAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGluTGlzdCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2Yob3V0TGlzdCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG5jb25zdCB1cGRhdGVSdW5uaW5nQ291bnQgPSAoYWRkLCBpc0xhenkpID0+IHtcbiAgICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhY3RpdmVQcm9jZXNzZXMsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBhY3RpdmF0ZTogKGlkKSA9PiB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSksXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGRlYWN0aXZhdGU6IChpZCkgPT4gdXBkYXRlUXVldWVzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpLFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiAoKSA9PiBjdXJyZW50UHJvY2Vzc0lkKyssXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcHJvY2Vzc2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIGxldCBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2RlYWN0aXZhdGVRdWV1ZUxlbmd0aF07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgcHJvY2VzcywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdQcm9jZXNzZXNbaWRdID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Mub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Mub25EZWFjdGl2YXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFbXB0eSBkZWFjdGl2YXRlIHF1ZXVlLiBXZSB1c2UgYEFycmF5LnNwbGljZWAgYmVjYXVzZSBpdCBkb2Vzbid0XG4gICAgICAgICAgICB3b3JrcyBvbiB0aGUgb3JpZ2luYWwgYXJyYXkgc28gd2UgZG9uJ3QgaGF2ZSB0byBnYXJiYWdlIGNvbGxlY3QgYW55dGhpbmdcbiAgICAgICAgKi9cbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBkZWFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIGxldCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChhY3RpdmF0ZVF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVthY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5vbkFjdGl2YXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4iXX0=