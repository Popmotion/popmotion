'use strict';

exports.__esModule = true;
exports.default = build;

var _utils = require('../../inc/utils');

/*
    Convert percentage to pixels
    
    @param [number]: Percentage of total length
    @param [number]: Total length
*/
var percentToPixels = function (percent, length) {
    return parseFloat(percent) / 100 * length + 'px';
};

function build(state, length) {
    var styles = {};
    var dashArrayStyles = {
        length: 0,
        spacing: length + 'px'
    };
    var hasDashArray = false;

    (0, _utils.each)(state, function (value, key) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQVV3QixLQUFLOzs7Ozs7Ozs7O0FBRjdCLElBQU0sZUFBZSxHQUFHLFVBQUMsT0FBTyxFQUFFLE1BQU07V0FBSyxBQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUksTUFBTSxHQUFHLElBQUk7Q0FBQSxDQUFDOztBQUUxRSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3pDLFFBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFNLGVBQWUsR0FBRztBQUNwQixjQUFNLEVBQUUsQ0FBQztBQUNULGVBQU8sRUFBRSxNQUFNLEdBQUcsSUFBSTtLQUN6QixDQUFDO0FBQ0YsUUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDOztBQUV6QixxQkFBSyxLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQ3hCLGdCQUFRLEdBQUc7QUFDUCxpQkFBSyxRQUFRLENBQUM7QUFDZCxpQkFBSyxTQUFTO0FBQ1YsNEJBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsK0JBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELHNCQUFNO0FBQUEsQUFDVixpQkFBSyxRQUFRO0FBQ1Qsc0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxzQkFBTTtBQUFBLEFBQ1Y7QUFDSSxzQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLFNBQzNCO0tBQ0osQ0FBQyxDQUFDOztBQUVILFFBQUksWUFBWSxFQUFFO0FBQ2QsY0FBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztLQUN2Rjs7QUFFRCxXQUFPLE1BQU0sQ0FBQztDQUNqQiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG4gICAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufSJdfQ==