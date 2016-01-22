'use strict';

var valueTypeManager = require('../value-types/manager');
var each = require('../inc/utils').each;

var createMapper = function (role, mappedValues) {
    return function (name, val) {
        return mappedValues[role.map(name)] = val;
    };
};

module.exports = function (actor) {
    var numActiveParents = actor.activeParents.length;
    var numRoles = actor.roles.length;

    // Update parent values from calculated children
    for (var i = 0; i < numActiveParents; i++) {
        var key = actor.activeParents[i];
        var value = actor.values[key];

        // Update parent value current property
        value.current = valueTypeManager[value.type].combine(actor.state[key], value.template);

        // Update state
        actor.state.values[key] = value.current;
    }

    // Fire `frame` and `update` callbacks on all Roles
    for (var i = 0; i < numRoles; i++) {
        var role = actor.roles[i];
        var mappedValues = {};

        each(actor.state.values, createMapper(role, mappedValues));

        if (role.frame) {
            role.frame.call(actor, mappedValues, actor);
        }

        if (role.update && actor.hasChanged) {
            role.update.call(actor, mappedValues, actor);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9yZW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLG1CQUFtQixRQUFRLHdCQUFSLENBQW5CO0FBQ04sSUFBTSxPQUFPLFFBQVEsY0FBUixFQUF3QixJQUF4Qjs7QUFFYixJQUFNLGVBQWUsVUFBQyxJQUFELEVBQU8sWUFBUDtXQUF3QixVQUFDLElBQUQsRUFBTyxHQUFQO2VBQWUsYUFBYSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWIsSUFBK0IsR0FBL0I7S0FBZjtDQUF4Qjs7QUFFckIsT0FBTyxPQUFQLEdBQWlCLFVBQUMsS0FBRCxFQUFXO0FBQ3hCLFFBQU0sbUJBQW1CLE1BQU0sYUFBTixDQUFvQixNQUFwQixDQUREO0FBRXhCLFFBQU0sV0FBVyxNQUFNLEtBQU4sQ0FBWSxNQUFaOzs7QUFGTyxTQUtuQixJQUFJLElBQUksQ0FBSixFQUFPLElBQUksZ0JBQUosRUFBc0IsR0FBdEMsRUFBMkM7QUFDdkMsWUFBSSxNQUFNLE1BQU0sYUFBTixDQUFvQixDQUFwQixDQUFOLENBRG1DO0FBRXZDLFlBQUksUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVI7OztBQUZtQyxhQUt2QyxDQUFNLE9BQU4sR0FBZ0IsaUJBQWlCLE1BQU0sSUFBTixDQUFqQixDQUE2QixPQUE3QixDQUFxQyxNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQXJDLEVBQXVELE1BQU0sUUFBTixDQUF2RTs7O0FBTHVDLGFBUXZDLENBQU0sS0FBTixDQUFZLE1BQVosQ0FBbUIsR0FBbkIsSUFBMEIsTUFBTSxPQUFOLENBUmE7S0FBM0M7OztBQUx3QixTQWlCbkIsSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFFBQUosRUFBYyxHQUE5QixFQUFtQztBQUMvQixZQUFJLE9BQU8sTUFBTSxLQUFOLENBQVksQ0FBWixDQUFQLENBRDJCO0FBRS9CLFlBQUksZUFBZSxFQUFmLENBRjJCOztBQUkvQixhQUFLLE1BQU0sS0FBTixDQUFZLE1BQVosRUFBb0IsYUFBYSxJQUFiLEVBQW1CLFlBQW5CLENBQXpCLEVBSitCOztBQU0vQixZQUFJLEtBQUssS0FBTCxFQUFZO0FBQ1osaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBaEIsRUFBdUIsWUFBdkIsRUFBcUMsS0FBckMsRUFEWTtTQUFoQjs7QUFJQSxZQUFJLEtBQUssTUFBTCxJQUFlLE1BQU0sVUFBTixFQUFrQjtBQUNqQyxpQkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixLQUFqQixFQUF3QixZQUF4QixFQUFzQyxLQUF0QyxFQURpQztTQUFyQztLQVZKO0NBakJhIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyk7XG5jb25zdCBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuY29uc3QgY3JlYXRlTWFwcGVyID0gKHJvbGUsIG1hcHBlZFZhbHVlcykgPT4gKG5hbWUsIHZhbCkgPT4gbWFwcGVkVmFsdWVzW3JvbGUubWFwKG5hbWUpXSA9IHZhbDtcblxubW9kdWxlLmV4cG9ydHMgPSAoYWN0b3IpID0+IHtcbiAgICBjb25zdCBudW1BY3RpdmVQYXJlbnRzID0gYWN0b3IuYWN0aXZlUGFyZW50cy5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm9sZXMgPSBhY3Rvci5yb2xlcy5sZW5ndGg7XG5cbiAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlcyBmcm9tIGNhbGN1bGF0ZWQgY2hpbGRyZW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVBhcmVudHM7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYWN0b3IuYWN0aXZlUGFyZW50c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlID0gYWN0b3IudmFsdWVzW2tleV07XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZVR5cGVNYW5hZ2VyW3ZhbHVlLnR5cGVdLmNvbWJpbmUoYWN0b3Iuc3RhdGVba2V5XSwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICBhY3Rvci5zdGF0ZS52YWx1ZXNba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gRmlyZSBgZnJhbWVgIGFuZCBgdXBkYXRlYCBjYWxsYmFja3Mgb24gYWxsIFJvbGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgIGxldCByb2xlID0gYWN0b3Iucm9sZXNbaV07XG4gICAgICAgIGxldCBtYXBwZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICBlYWNoKGFjdG9yLnN0YXRlLnZhbHVlcywgY3JlYXRlTWFwcGVyKHJvbGUsIG1hcHBlZFZhbHVlcykpO1xuXG4gICAgICAgIGlmIChyb2xlLmZyYW1lKSB7XG4gICAgICAgICAgICByb2xlLmZyYW1lLmNhbGwoYWN0b3IsIG1hcHBlZFZhbHVlcywgYWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIGFjdG9yLmhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHJvbGUudXBkYXRlLmNhbGwoYWN0b3IsIG1hcHBlZFZhbHVlcywgYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==