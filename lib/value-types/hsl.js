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

    test: function (value) {
        return value && value.indexOf('hsl') > -1;
    },

    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRCxjQUFjLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0lBQzFELFlBQVksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDbEQsS0FBSyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7QUFFakQsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFO0FBQ1YsV0FBRyxFQUFFO0FBQ0QsZUFBRyxFQUFFLENBQUM7QUFDTixlQUFHLEVBQUUsR0FBRztTQUNYO0FBQ0Qsa0JBQVUsRUFBRSxZQUFZLENBQUMsT0FBTztBQUNoQyxpQkFBUyxFQUFFLFlBQVksQ0FBQyxPQUFPO0FBQy9CLGFBQUssRUFBRSxZQUFZLENBQUMsT0FBTztLQUM5Qjs7QUFFRCxRQUFJLEVBQUUsVUFBQSxLQUFLO2VBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxVQUFBLEtBQUs7ZUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUFBOztBQUU1QyxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FBQTtDQUNyRixDQUFDIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmhzbDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IHZhbHVlID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcbiAgICBcbiAgICBzcGxpdDogdmFsdWUgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdoc2xhJylcbn07Il19