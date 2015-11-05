'use strict';

var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    defaultProps = require('./settings/default-props'),
    colorDefaults = defaultProps.color,
    terms = require('./settings/dictionary').colors;

module.exports = {

    defaultProps: {
        Red: colorDefaults,
        Green: colorDefaults,
        Blue: colorDefaults,
        Alpha: defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('rgb') > -1;
    },

    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'rgba');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRCxjQUFjLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0lBQzFELFlBQVksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDbEQsYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLO0lBQ2xDLEtBQUssR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUM7O0FBRXBELE1BQU0sQ0FBQyxPQUFPLEdBQUc7O0FBRWIsZ0JBQVksRUFBRTtBQUNWLFdBQUcsRUFBRSxhQUFhO0FBQ2xCLGFBQUssRUFBRSxhQUFhO0FBQ3BCLFlBQUksRUFBRSxhQUFhO0FBQ25CLGFBQUssRUFBRSxZQUFZLENBQUMsT0FBTztLQUM5Qjs7QUFFRCxRQUFJLEVBQUUsVUFBQSxLQUFLO2VBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxVQUFBLEtBQUs7ZUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUFBOztBQUU1QyxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FBQTtDQUNyRixDQUFDIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICBjb2xvckRlZmF1bHRzID0gZGVmYXVsdFByb3BzLmNvbG9yLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuY29sb3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEdyZWVuOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBCbHVlOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogdmFsdWUgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpLFxuICAgIFxuICAgIHNwbGl0OiB2YWx1ZSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpLFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKVxufTsiXX0=