'use strict';

var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    defaultProps = require('./settings/default-props'),
    terms = require('./settings/dictionary').hsl;

module.exports = {

    defaultProps: {
        Hue: {
            min: 0,
            max: 360
        },
        Saturation: defaultProps.percent,
        Lightness: defaultProps.percent,
        Alpha: defaultProps.opacity
    },

    test: function test(value) {
        return value && value.indexOf('hsl') > -1;
    },

    split: function split(value) {
        return getColorValues(value, terms);
    },

    combine: function combine(values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRCxjQUFjLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0lBQzFELFlBQVksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDbEQsS0FBSyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7QUFFakQsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFO0FBQ1YsV0FBRyxFQUFFO0FBQ0QsZUFBRyxFQUFFLENBQUM7QUFDTixlQUFHLEVBQUUsR0FBRztTQUNYO0FBQ0Qsa0JBQVUsRUFBRSxZQUFZLENBQUMsT0FBTztBQUNoQyxpQkFBUyxFQUFFLFlBQVksQ0FBQyxPQUFPO0FBQy9CLGFBQUssRUFBRSxZQUFZLENBQUMsT0FBTztLQUM5Qjs7QUFFRCxRQUFJLEVBQUUsY0FBQSxLQUFLO2VBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxlQUFBLEtBQUs7ZUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUFBOztBQUU1QyxXQUFPLEVBQUUsaUJBQUEsTUFBTTtlQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQUE7Q0FDckYsQ0FBQyIsImZpbGUiOiJoc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiB2YWx1ZSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSksXG4gICAgXG4gICAgc3BsaXQ6IHZhbHVlID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyksXG5cbiAgICBjb21iaW5lOiB2YWx1ZXMgPT4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAnaHNsYScpXG59OyJdfQ==