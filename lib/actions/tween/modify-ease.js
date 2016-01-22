"use strict";

exports.__esModule = true;
exports.default = modifyEase;
function modifyEase(easing) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return easing.apply(undefined, [progress].concat(args));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL21vZGlmeS1lYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0I7QUFBVCxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBcUM7c0NBQU47O0tBQU07O0FBQ2hELFdBQU8seUJBQU8saUJBQWEsS0FBcEIsQ0FBUCxDQURnRDtDQUFyQyIsImZpbGUiOiJtb2RpZnktZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGlmeUVhc2UoZWFzaW5nLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIGVhc2luZyhwcm9ncmVzcywgLi4uYXJncyk7XG59XG4iXX0=