'use strict';

var each = require('../inc/utils').each;

module.exports = {
    extend: function (types) {
        var _this = this;

        each(types, function (name, type) {
            _this[name] = type;
        });
    },

    defaultProps: function (typeName, key) {
        var valueType = this[typeName],
            defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};

        return defaultProps;
    },

    test: function (value) {
        var type = false;

        each(this, function (key, valueType) {
            if (valueType.test && valueType.test(value)) {
                type = key;
                return false;
            }
        });

        return type;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxPQUFPLFFBQVEsY0FBUixFQUF3QixJQUF4Qjs7QUFFYixPQUFPLE9BQVAsR0FBaUI7QUFDYixZQUFRLFVBQVUsS0FBVixFQUFpQjs7O0FBQ3JCLGFBQUssS0FBTCxFQUFZLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7QUFDeEIsa0JBQUssSUFBTCxJQUFhLElBQWIsQ0FEd0I7U0FBaEIsQ0FBWixDQURxQjtLQUFqQjs7QUFNUixrQkFBYyxVQUFVLFFBQVYsRUFBb0IsR0FBcEIsRUFBeUI7QUFDbkMsWUFBSSxZQUFZLEtBQUssUUFBTCxDQUFaO1lBQ0EsZUFBZSxTQUFDLENBQVUsWUFBVixHQUEwQixVQUFVLFlBQVYsQ0FBdUIsR0FBdkIsS0FBK0IsVUFBVSxZQUFWLEdBQXlCLEVBQW5GLENBRmdCOztBQUluQyxlQUFPLFlBQVAsQ0FKbUM7S0FBekI7O0FBT2QsVUFBTSxVQUFVLEtBQVYsRUFBaUI7QUFDbkIsWUFBSSxPQUFPLEtBQVAsQ0FEZTs7QUFHbkIsYUFBSyxJQUFMLEVBQVcsVUFBQyxHQUFELEVBQU0sU0FBTixFQUFvQjtBQUMzQixnQkFBSSxVQUFVLElBQVYsSUFBa0IsVUFBVSxJQUFWLENBQWUsS0FBZixDQUFsQixFQUF5QztBQUN6Qyx1QkFBTyxHQUFQLENBRHlDO0FBRXpDLHVCQUFPLEtBQVAsQ0FGeUM7YUFBN0M7U0FETyxDQUFYLENBSG1COztBQVVuQixlQUFPLElBQVAsQ0FWbUI7S0FBakI7Q0FkViIsImZpbGUiOiJtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWFjaCA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmVhY2g7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGV4dGVuZDogZnVuY3Rpb24gKHR5cGVzKSB7XG4gICAgICAgIGVhY2godHlwZXMsIChuYW1lLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdHlwZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGRlZmF1bHRQcm9wczogZnVuY3Rpb24gKHR5cGVOYW1lLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHRoaXNbdHlwZU5hbWVdLFxuICAgICAgICAgICAgZGVmYXVsdFByb3BzID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1trZXldIHx8IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMgOiB7fTtcblxuICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBmYWxzZTtcblxuICAgICAgICBlYWNoKHRoaXMsIChrZXksIHZhbHVlVHlwZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS50ZXN0ICYmIHZhbHVlVHlwZS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG59O1xuIl19