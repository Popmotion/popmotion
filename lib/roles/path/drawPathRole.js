"use strict";

var Role = require('../Role');
var attrRole = require('../attr/attrRole');
var each = require('../../inc/utils').each;

/*
    Convert percentage to pixels
    
    @param [number]: Percentage of total length
    @param [number]: Total length
*/
var percentToPixels = function (percentage, length) {
    return parseFloat(percentage) / 100 * length + 'px';
};

/*
    Create styles
    
    @param [object]: SVG Path properties
    @param [object]: Length of path
    @returns [object]: Key/value pairs of valid CSS properties
*/
var createStyles = function (props, length) {
    var hasDashArray = false,
        dashArrayStyles = {
        length: 0,
        spacing: length + 'px'
    },
        styles = {};

    each(props, function (key, value) {
        key = SVGDrawPath._map[key] || key;

        switch (key) {
            case 'length':
            case 'spacing':
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, length);
                break;
            case 'offset':
                styles['stroke-dashoffset'] = percentToPixels(-value, length);
                break;
            default:
                styles[key] = value;
        }
    });

    if (hasDashArray) {
        styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
    }

    return styles;
};

/*
    Draw Path role
*/
var SVGDrawPath = new Role({
    _map: require('./map'),

    _typeMap: {
        stroke: 'color',
        d: 'complex'
    },

    init: function () {
        this.pathLength = this.element.getTotalLength();
    },

    /*
        Update `path` styles and if `element` is present, set
        x, y and rotation
    */
    update: function (state) {
        attrRole.update.call(this, createStyles(state, this.pathLength));
    }
});

module.exports = SVGDrawPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE9BQU8sUUFBUSxTQUFSLENBQVA7QUFDSixJQUFJLFdBQVcsUUFBUSxrQkFBUixDQUFYO0FBQ0osSUFBSSxPQUFPLFFBQVEsaUJBQVIsRUFBMkIsSUFBM0I7Ozs7Ozs7O0FBUVgsSUFBSSxrQkFBa0IsVUFBVSxVQUFWLEVBQXNCLE1BQXRCLEVBQThCO0FBQ2hELFdBQU8sVUFBQyxDQUFXLFVBQVgsSUFBeUIsR0FBekIsR0FBZ0MsTUFBakMsR0FBMEMsSUFBMUMsQ0FEeUM7Q0FBOUI7Ozs7Ozs7OztBQVd0QixJQUFJLGVBQWUsVUFBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCO0FBQ3hDLFFBQUksZUFBZSxLQUFmO1FBQ0Esa0JBQWtCO0FBQ2QsZ0JBQVEsQ0FBUjtBQUNBLGlCQUFTLFNBQVMsSUFBVDtLQUZiO1FBSUEsU0FBUyxFQUFULENBTm9DOztBQVF4QyxTQUFLLEtBQUwsRUFBWSxVQUFVLEdBQVYsRUFBZSxLQUFmLEVBQXNCO0FBQzlCLGNBQU0sWUFBWSxJQUFaLENBQWlCLEdBQWpCLEtBQXlCLEdBQXpCLENBRHdCOztBQUc5QixnQkFBUSxHQUFSO0FBQ0ksaUJBQUssUUFBTCxDQURKO0FBRUksaUJBQUssU0FBTDtBQUNJLCtCQUFlLElBQWYsQ0FESjtBQUVJLGdDQUFnQixHQUFoQixJQUF1QixnQkFBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsQ0FBdkIsQ0FGSjtBQUdJLHNCQUhKO0FBRkosaUJBTVMsUUFBTDtBQUNJLHVCQUFPLG1CQUFQLElBQThCLGdCQUFnQixDQUFDLEtBQUQsRUFBUSxNQUF4QixDQUE5QixDQURKO0FBRUksc0JBRko7QUFOSjtBQVVRLHVCQUFPLEdBQVAsSUFBYyxLQUFkLENBREo7QUFUSixTQUg4QjtLQUF0QixDQUFaLENBUndDOztBQXlCeEMsUUFBSSxZQUFKLEVBQWtCO0FBQ2QsZUFBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQWhCLENBRDlDO0tBQWxCOztBQUlBLFdBQU8sTUFBUCxDQTdCd0M7Q0FBekI7Ozs7O0FBbUNuQixJQUFJLGNBQWMsSUFBSSxJQUFKLENBQVM7QUFDdkIsVUFBTSxRQUFRLE9BQVIsQ0FBTjs7QUFFQSxjQUFVO0FBQ04sZ0JBQVEsT0FBUjtBQUNBLFdBQUcsU0FBSDtLQUZKOztBQUtBLFVBQU0sWUFBWTtBQUNkLGFBQUssVUFBTCxHQUFrQixLQUFLLE9BQUwsQ0FBYSxjQUFiLEVBQWxCLENBRGM7S0FBWjs7Ozs7O0FBUU4sWUFBUSxVQUFVLEtBQVYsRUFBaUI7QUFDckIsaUJBQVMsTUFBVCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixFQUEyQixhQUFhLEtBQWIsRUFBb0IsS0FBSyxVQUFMLENBQS9DLEVBRHFCO0tBQWpCO0NBaEJNLENBQWQ7O0FBcUJKLE9BQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJkcmF3UGF0aFJvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudGFnZSwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdHlsZXNcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFNWRyBQYXRoIHByb3BlcnRpZXNcbiAgICBAcGFyYW0gW29iamVjdF06IExlbmd0aCBvZiBwYXRoXG4gICAgQHJldHVybnMgW29iamVjdF06IEtleS92YWx1ZSBwYWlycyBvZiB2YWxpZCBDU1MgcHJvcGVydGllc1xuKi9cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiAocHJvcHMsIGxlbmd0aCkge1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZSxcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZXMgPSB7fTtcblxuICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IFNWR0RyYXdQYXRoLl9tYXBba2V5XSB8fCBrZXk7XG5cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKlxuICAgIERyYXcgUGF0aCByb2xlXG4qL1xudmFyIFNWR0RyYXdQYXRoID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzdHJva2U6ICdjb2xvcicsXG4gICAgICAgIGQ6ICdjb21wbGV4J1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgYXR0clJvbGUudXBkYXRlLmNhbGwodGhpcywgY3JlYXRlU3R5bGVzKHN0YXRlLCB0aGlzLnBhdGhMZW5ndGgpKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdEcmF3UGF0aDsiXX0=