'use strict';

var calc = require('../inc/calc');
var utils = require('../inc/utils');
var Action = require('../actions/Action');
var defaultAction = new Action();
var Watch = require('../actions/Watch');
var watcher = new Watch();

module.exports = function (actor, framestamp, frameDuration) {
    var numActiveValues = actor.activeValues.length;
    var state = actor.state;

    actor.hasChanged = false;

    for (var i = 0; i < numActiveValues; i++) {
        // Get value and key
        var key = actor.activeValues[i];
        var value = actor.values[key];
        var action = !value.action || value.action && !value.action.isActive ? defaultAction : value.action;

        // Fire action onFrameStart if not already fired
        if (action.onFrameStart && action.lastUpdate !== framestamp) {
            action.onFrameStart(actor, frameDuration, framestamp);
            action.lastUpdate = framestamp;
        }

        // Calculate new value
        var updatedValue = utils.has(value, 'watch') ? watcher.process(actor, value) : action.process(actor, value, key, frameDuration);

        // User-defined transform function
        if (value.transform) {
            updatedValue = value.transform(updatedValue, key, actor);
        }

        // Limit if actor action does that kind of thing
        if (action.limit && value.hasRange) {
            updatedValue = action.limit(updatedValue, value);
        }

        // Smooth value if we have smoothing
        if (value.smooth) {
            updatedValue = calc.smooth(updatedValue, value.current, frameDuration, value.smooth);
        }

        // Round value if round is true
        if (value.round) {
            updatedValue = Math.round(updatedValue);
        }

        // Update frameChange
        value.frameChange = updatedValue - value.current;

        // Calculate velocity if Action hasn't
        if (!action.calculatesVelocity) {
            value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
        }

        // Update current speed
        value.speed = Math.abs(value.velocity);

        // Check if value's changed
        if (value.current !== updatedValue || actor.firstFrame) {
            actor.hasChanged = true;
        }

        // Set new current
        value.current = updatedValue;
        var valueState = value.unit ? updatedValue + value.unit : updatedValue;

        // Put value in state if no parent
        if (!value.parent) {
            state.values[key] = valueState;

            // Or, add to parent state to be combined later
        } else {
                state[value.parent] = state[value.parent] || {};
                state[value.parent][value.propName] = valueState;
            }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLE9BQU8sUUFBUSxhQUFSLENBQVA7QUFDTixJQUFNLFFBQVEsUUFBUSxjQUFSLENBQVI7QUFDTixJQUFNLFNBQVMsUUFBUSxtQkFBUixDQUFUO0FBQ04sSUFBTSxnQkFBZ0IsSUFBSSxNQUFKLEVBQWhCO0FBQ04sSUFBTSxRQUFRLFFBQVEsa0JBQVIsQ0FBUjtBQUNOLElBQU0sVUFBVSxJQUFJLEtBQUosRUFBVjs7QUFFTixPQUFPLE9BQVAsR0FBaUIsVUFBQyxLQUFELEVBQVEsVUFBUixFQUFvQixhQUFwQixFQUFzQztBQUNuRCxRQUFNLGtCQUFrQixNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsQ0FEMkI7QUFFbkQsUUFBSSxRQUFRLE1BQU0sS0FBTixDQUZ1Qzs7QUFJbkQsVUFBTSxVQUFOLEdBQW1CLEtBQW5CLENBSm1EOztBQU1uRCxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxlQUFKLEVBQXFCLEdBQXJDLEVBQTBDOztBQUV0QyxZQUFJLE1BQU0sTUFBTSxZQUFOLENBQW1CLENBQW5CLENBQU4sQ0FGa0M7QUFHdEMsWUFBSSxRQUFRLE1BQU0sTUFBTixDQUFhLEdBQWIsQ0FBUixDQUhrQztBQUl0QyxZQUFJLFNBQVMsQ0FBRSxNQUFNLE1BQU4sSUFBZ0IsTUFBTSxNQUFOLElBQWdCLENBQUMsTUFBTSxNQUFOLENBQWEsUUFBYixHQUF5QixhQUE1RCxHQUE0RSxNQUFNLE1BQU47OztBQUpuRCxZQU9sQyxPQUFPLFlBQVAsSUFBdUIsT0FBTyxVQUFQLEtBQXNCLFVBQXRCLEVBQWtDO0FBQ3pELG1CQUFPLFlBQVAsQ0FBb0IsS0FBcEIsRUFBMkIsYUFBM0IsRUFBMEMsVUFBMUMsRUFEeUQ7QUFFekQsbUJBQU8sVUFBUCxHQUFvQixVQUFwQixDQUZ5RDtTQUE3RDs7O0FBUHNDLFlBYWxDLGVBQWUsTUFBTSxHQUFOLENBQVUsS0FBVixFQUFpQixPQUFqQixJQUE0QixRQUFRLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsQ0FBNUIsR0FBNEQsT0FBTyxPQUFQLENBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixHQUE3QixFQUFrQyxhQUFsQyxDQUE1RDs7O0FBYm1CLFlBZ0JsQyxNQUFNLFNBQU4sRUFBaUI7QUFDakIsMkJBQWUsTUFBTSxTQUFOLENBQWdCLFlBQWhCLEVBQThCLEdBQTlCLEVBQW1DLEtBQW5DLENBQWYsQ0FEaUI7U0FBckI7OztBQWhCc0MsWUFxQmxDLE9BQU8sS0FBUCxJQUFnQixNQUFNLFFBQU4sRUFBZ0I7QUFDaEMsMkJBQWUsT0FBTyxLQUFQLENBQWEsWUFBYixFQUEyQixLQUEzQixDQUFmLENBRGdDO1NBQXBDOzs7QUFyQnNDLFlBMEJsQyxNQUFNLE1BQU4sRUFBYztBQUNkLDJCQUFlLEtBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsTUFBTSxPQUFOLEVBQWUsYUFBekMsRUFBd0QsTUFBTSxNQUFOLENBQXZFLENBRGM7U0FBbEI7OztBQTFCc0MsWUErQmxDLE1BQU0sS0FBTixFQUFhO0FBQ2IsMkJBQWUsS0FBSyxLQUFMLENBQVcsWUFBWCxDQUFmLENBRGE7U0FBakI7OztBQS9Cc0MsYUFvQ3RDLENBQU0sV0FBTixHQUFvQixlQUFlLE1BQU0sT0FBTjs7O0FBcENHLFlBdUNsQyxDQUFDLE9BQU8sa0JBQVAsRUFBMkI7QUFDNUIsa0JBQU0sUUFBTixHQUFpQixLQUFLLGNBQUwsQ0FBb0IsTUFBTSxXQUFOLEVBQW1CLGFBQXZDLENBQWpCLENBRDRCO1NBQWhDOzs7QUF2Q3NDLGFBNEN0QyxDQUFNLEtBQU4sR0FBYyxLQUFLLEdBQUwsQ0FBUyxNQUFNLFFBQU4sQ0FBdkI7OztBQTVDc0MsWUErQ2xDLE1BQU0sT0FBTixLQUFrQixZQUFsQixJQUFrQyxNQUFNLFVBQU4sRUFBa0I7QUFDcEQsa0JBQU0sVUFBTixHQUFtQixJQUFuQixDQURvRDtTQUF4RDs7O0FBL0NzQyxhQW9EdEMsQ0FBTSxPQUFOLEdBQWdCLFlBQWhCLENBcERzQztBQXFEdEMsWUFBSSxhQUFhLEtBQUMsQ0FBTSxJQUFOLEdBQWMsZUFBZSxNQUFNLElBQU4sR0FBYSxZQUEzQzs7O0FBckRxQixZQXdEbEMsQ0FBQyxNQUFNLE1BQU4sRUFBYztBQUNmLGtCQUFNLE1BQU4sQ0FBYSxHQUFiLElBQW9CLFVBQXBCOzs7QUFEZSxTQUFuQixNQUlPO0FBQ0gsc0JBQU0sTUFBTSxNQUFOLENBQU4sR0FBc0IsTUFBTSxNQUFNLE1BQU4sQ0FBTixJQUF1QixFQUF2QixDQURuQjtBQUVILHNCQUFNLE1BQU0sTUFBTixDQUFOLENBQW9CLE1BQU0sUUFBTixDQUFwQixHQUFzQyxVQUF0QyxDQUZHO2FBSlA7S0F4REo7Q0FOYSIsImZpbGUiOiJ1cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5jb25zdCBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuY29uc3QgZGVmYXVsdEFjdGlvbiA9IG5ldyBBY3Rpb24oKTtcbmNvbnN0IFdhdGNoID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9XYXRjaCcpO1xuY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhY3RvciwgZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IG51bUFjdGl2ZVZhbHVlcyA9IGFjdG9yLmFjdGl2ZVZhbHVlcy5sZW5ndGg7XG4gICAgbGV0IHN0YXRlID0gYWN0b3Iuc3RhdGU7XG5cbiAgICBhY3Rvci5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB2YWx1ZSBhbmQga2V5XG4gICAgICAgIGxldCBrZXkgPSBhY3Rvci5hY3RpdmVWYWx1ZXNbaV07XG4gICAgICAgIGxldCB2YWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldO1xuICAgICAgICBsZXQgYWN0aW9uID0gKCF2YWx1ZS5hY3Rpb24gfHwgdmFsdWUuYWN0aW9uICYmICF2YWx1ZS5hY3Rpb24uaXNBY3RpdmUpID8gZGVmYXVsdEFjdGlvbiA6IHZhbHVlLmFjdGlvbjtcblxuICAgICAgICAvLyBGaXJlIGFjdGlvbiBvbkZyYW1lU3RhcnQgaWYgbm90IGFscmVhZHkgZmlyZWRcbiAgICAgICAgaWYgKGFjdGlvbi5vbkZyYW1lU3RhcnQgJiYgYWN0aW9uLmxhc3RVcGRhdGUgIT09IGZyYW1lc3RhbXApIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbkZyYW1lU3RhcnQoYWN0b3IsIGZyYW1lRHVyYXRpb24sIGZyYW1lc3RhbXApO1xuICAgICAgICAgICAgYWN0aW9uLmxhc3RVcGRhdGUgPSBmcmFtZXN0YW1wO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHV0aWxzLmhhcyh2YWx1ZSwgJ3dhdGNoJykgPyB3YXRjaGVyLnByb2Nlc3MoYWN0b3IsIHZhbHVlKSA6IGFjdGlvbi5wcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5LCBmcmFtZUR1cmF0aW9uKTtcblxuICAgICAgICAvLyBVc2VyLWRlZmluZWQgdHJhbnNmb3JtIGZ1bmN0aW9uXG4gICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLnRyYW5zZm9ybSh1cGRhdGVkVmFsdWUsIGtleSwgYWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltaXQgaWYgYWN0b3IgYWN0aW9uIGRvZXMgdGhhdCBraW5kIG9mIHRoaW5nXG4gICAgICAgIGlmIChhY3Rpb24ubGltaXQgJiYgdmFsdWUuaGFzUmFuZ2UpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IGFjdGlvbi5saW1pdCh1cGRhdGVkVmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBjYWxjLnNtb290aCh1cGRhdGVkVmFsdWUsIHZhbHVlLmN1cnJlbnQsIGZyYW1lRHVyYXRpb24sIHZhbHVlLnNtb290aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSb3VuZCB2YWx1ZSBpZiByb3VuZCBpcyB0cnVlXG4gICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gTWF0aC5yb3VuZCh1cGRhdGVkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGZyYW1lQ2hhbmdlXG4gICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdmVsb2NpdHkgaWYgQWN0aW9uIGhhc24ndFxuICAgICAgICBpZiAoIWFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gY2FsYy5zcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICB2YWx1ZS5zcGVlZCA9IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KTtcblxuICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSdzIGNoYW5nZWRcbiAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHVwZGF0ZWRWYWx1ZSB8fCBhY3Rvci5maXJzdEZyYW1lKSB7XG4gICAgICAgICAgICBhY3Rvci5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBuZXcgY3VycmVudCBcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHZhbHVlU3RhdGUgPSAodmFsdWUudW5pdCkgPyB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0IDogdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgIC8vIFB1dCB2YWx1ZSBpbiBzdGF0ZSBpZiBubyBwYXJlbnRcbiAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWVTdGF0ZTtcblxuICAgICAgICAvLyBPciwgYWRkIHRvIHBhcmVudCBzdGF0ZSB0byBiZSBjb21iaW5lZCBsYXRlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICBzdGF0ZVt2YWx1ZS5wYXJlbnRdW3ZhbHVlLnByb3BOYW1lXSA9IHZhbHVlU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59Il19