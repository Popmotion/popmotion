'use strict';

exports.__esModule = true;
exports.setDilation = undefined;

var _utils = require('../inc/utils');

var MAX_ELAPSED = 33;

var current = 0;
var elapsed = 16.7;
var dilation = 1;

exports.default = {
    update: function (framestamp) {
        elapsed = Math.min(framestamp - current, MAX_ELAPSED) * dilation;
        current = framestamp;
    },

    start: function () {
        return current = (0, _utils.currentTime)();
    },

    getElapsed: function () {
        return elapsed;
    }
};
var setDilation = exports.setDilation = function (newDilation) {
    return dilation = newDilation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7O0FBRXZCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztrQkFFRjtBQUNYLFVBQU0sRUFBRSxVQUFDLFVBQVUsRUFBSztBQUNwQixlQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUNqRSxlQUFPLEdBQUcsVUFBVSxDQUFDO0tBQ3hCOztBQUVELFNBQUssRUFBRTtlQUFNLE9BQU8sR0FBRyx5QkFBYTtLQUFBOztBQUVwQyxjQUFVLEVBQUU7ZUFBTSxPQUFPO0tBQUE7Q0FDNUI7QUFFTSxJQUFNLFdBQVcsV0FBWCxXQUFXLEdBQUcsVUFBQyxXQUFXO1dBQUssUUFBUSxHQUFHLFdBQVc7Q0FBQSxDQUFDIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IGN1cnJlbnQgPSBjdXJyZW50VGltZSgpLFxuXG4gICAgZ2V0RWxhcHNlZDogKCkgPT4gZWxhcHNlZFxufTtcblxuZXhwb3J0IGNvbnN0IHNldERpbGF0aW9uID0gKG5ld0RpbGF0aW9uKSA9PiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uOyJdfQ==