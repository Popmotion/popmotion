'use strict';

exports.__esModule = true;
exports.setGlobalDilation = undefined;

var _utils = require('../inc/utils');

var MAX_ELAPSED = 33;

var current = 0;
var elapsed = 16.7;
var dilation = 1;

exports.default = {
    update: function (framestamp) {
        elapsed = Math.max(Math.min(framestamp - current, MAX_ELAPSED), 1) * dilation;
        current = framestamp;
    },

    start: function () {
        return current = (0, _utils.currentTime)();
    },

    getElapsed: function () {
        return elapsed;
    }
};
var setGlobalDilation = exports.setGlobalDilation = function (newDilation) {
    return dilation = newDilation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7O0FBRXZCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztrQkFFRjtBQUNYLFVBQU0sRUFBRSxVQUFDLFVBQVUsRUFBSztBQUNwQixlQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQzlFLGVBQU8sR0FBRyxVQUFVLENBQUM7S0FDeEI7O0FBRUQsU0FBSyxFQUFFO2VBQU0sT0FBTyxHQUFHLHlCQUFhO0tBQUE7O0FBRXBDLGNBQVUsRUFBRTtlQUFNLE9BQU87S0FBQTtDQUM1QjtBQUVNLElBQU0saUJBQWlCLFdBQWpCLGlCQUFpQixHQUFHLFVBQUMsV0FBVztXQUFLLFFBQVEsR0FBRyxXQUFXO0NBQUEsQ0FBQyIsImZpbGUiOiJ0aW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgTUFYX0VMQVBTRUQgPSAzMztcblxubGV0IGN1cnJlbnQgPSAwO1xubGV0IGVsYXBzZWQgPSAxNi43O1xubGV0IGRpbGF0aW9uID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVwZGF0ZTogKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogKCkgPT4gY3VycmVudCA9IGN1cnJlbnRUaW1lKCksXG5cbiAgICBnZXRFbGFwc2VkOiAoKSA9PiBlbGFwc2VkXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsRGlsYXRpb24gPSAobmV3RGlsYXRpb24pID0+IGRpbGF0aW9uID0gbmV3RGlsYXRpb247Il19