'use strict';

exports.__esModule = true;

var _typesXyz = require('./types-xyz');

var types = [_typesXyz.POSITION, _typesXyz.SCALE, _typesXyz.ROTATION];
var dimensions = ['X', 'Y', 'Z'];
var dictionary = {};

types.forEach(function (type) {
    return dimensions.forEach(function (dimension, i) {
        return dictionary['' + type + dimension] = {
            prop: type,
            position: i
        };
    });
});

exports.default = dictionary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9hZnJhbWUvZGljdGlvbmFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFNLFFBQVEsV0FGTCxRQUVLLFlBRkssS0FFTCxZQUZZLFFBRVosQ0FBUjtBQUNOLElBQU0sYUFBYSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFiO0FBQ04sSUFBSSxhQUFhLEVBQWI7O0FBRUosTUFBTSxPQUFOLENBQWMsVUFBQyxJQUFEO1dBQVUsV0FBVyxPQUFYLENBQW1CLFVBQUMsU0FBRCxFQUFZLENBQVo7ZUFBa0IsZ0JBQWMsT0FBTyxTQUFyQixJQUFvQztBQUM3RixrQkFBTSxJQUFOO0FBQ0Esc0JBQVUsQ0FBVjtTQUZ5RDtLQUFsQjtDQUE3QixDQUFkOztrQkFLZSIsImZpbGUiOiJkaWN0aW9uYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTiB9IGZyb20gJy4vdHlwZXMteHl6JztcblxuY29uc3QgdHlwZXMgPSBbUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTl07XG5jb25zdCBkaW1lbnNpb25zID0gWydYJywgJ1knLCAnWiddO1xubGV0IGRpY3Rpb25hcnkgPSB7fTtcblxudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gZGltZW5zaW9ucy5mb3JFYWNoKChkaW1lbnNpb24sIGkpID0+IGRpY3Rpb25hcnlbYCR7dHlwZX0ke2RpbWVuc2lvbn1gXSA9IHtcbiAgICBwcm9wOiB0eXBlLFxuICAgIHBvc2l0aW9uOiBpXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpY3Rpb25hcnk7Il19