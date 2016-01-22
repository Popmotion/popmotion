"use strict";

var each = require('../../inc/utils').each,
    transformDictionary = require('./transform-dictionary'),
    transformProps = transformDictionary.props,
    TRANSLATE_Z = 'translateZ';

module.exports = function (output, cache) {
    var css = {},
        transform = '',
        transformHasZ = false;

    // Loop through output, check for transform properties
    each(output, function (key, rule) {
        // If this is a transform property, add to transform string
        if (transformProps[key]) {
            transform += key + '(' + rule + ')';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;

            // Or just assign directly
        } else {
                if (rule !== cache[key]) {
                    cache[key] = css[key] = rule;
                }
            }
    });

    // If we have transform properties, add translateZ
    if (transform !== '') {
        if (!transformHasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }

        if (transform !== cache.transform) {
            css.transform = transform;
        }

        cache.transform = transform;
    }

    return css;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9jc3MvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSSxPQUFPLFFBQVEsaUJBQVIsRUFBMkIsSUFBM0I7SUFDUCxzQkFBc0IsUUFBUSx3QkFBUixDQUF0QjtJQUNBLGlCQUFpQixvQkFBb0IsS0FBcEI7SUFFakIsY0FBYyxZQUFkOztBQUVKLE9BQU8sT0FBUCxHQUFpQixVQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUI7QUFDdEMsUUFBSSxNQUFNLEVBQU47UUFDQSxZQUFZLEVBQVo7UUFDQSxnQkFBZ0IsS0FBaEI7OztBQUhrQyxRQU10QyxDQUFLLE1BQUwsRUFBYSxVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCOztBQUU5QixZQUFJLGVBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLHlCQUFhLE1BQU0sR0FBTixHQUFZLElBQVosR0FBbUIsR0FBbkIsQ0FEUTtBQUVyQiw0QkFBZ0IsR0FBQyxLQUFRLFdBQVIsR0FBdUIsSUFBeEIsR0FBK0IsYUFBL0I7OztBQUZLLFNBQXpCLE1BS087QUFDSCxvQkFBSSxTQUFTLE1BQU0sR0FBTixDQUFULEVBQXFCO0FBQ3JCLDBCQUFNLEdBQU4sSUFBYSxJQUFJLEdBQUosSUFBVyxJQUFYLENBRFE7aUJBQXpCO2FBTko7S0FGUyxDQUFiOzs7QUFOc0MsUUFxQmxDLGNBQWMsRUFBZCxFQUFrQjtBQUNsQixZQUFJLENBQUMsYUFBRCxFQUFnQjtBQUNoQix5QkFBYSxNQUFNLFdBQU4sR0FBb0IsT0FBcEIsQ0FERztTQUFwQjs7QUFJQSxZQUFJLGNBQWMsTUFBTSxTQUFOLEVBQWlCO0FBQy9CLGdCQUFJLFNBQUosR0FBZ0IsU0FBaEIsQ0FEK0I7U0FBbkM7O0FBSUEsY0FBTSxTQUFOLEdBQWtCLFNBQWxCLENBVGtCO0tBQXRCOztBQVlBLFdBQU8sR0FBUCxDQWpDc0M7Q0FBekIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoLFxuICAgIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCwgY2FjaGUpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCBydWxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gY2FjaGVba2V5XSkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gY2FjaGUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYWNoZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07Il19