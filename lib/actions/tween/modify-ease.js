"use strict";

module.exports = function (easing) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (progress) {
    return easing.apply(undefined, [progress].concat(args));
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL21vZGlmeS1lYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLE1BQU07b0NBQUssSUFBSTtBQUFKLFFBQUk7OztTQUFLLFVBQUMsUUFBUTtXQUFLLE1BQU0sbUJBQUMsUUFBUSxTQUFLLElBQUksRUFBQztHQUFBO0NBQUEsQ0FBQyIsImZpbGUiOiJtb2RpZnktZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpOyJdfQ==