'use strict';

exports.__esModule = true;
exports.setDilation = setDilation;
var hasPerformanceNow = typeof performance !== 'undefined' && performance.now;
var currentTime = function () {
    return hasPerformanceNow ? performance.now() : new Date().getTime();
};

var MAX_ELAPSED = 33;

var base = 0;
var current = 0;
var elapsed = 16.7;
var dilation = 1;
var lostTime = 0;

exports.default = {
    update: function (framestamp) {
        if (base === 0) {
            current = base = framestamp;
        }

        var prev = current;
        var lossAdjusted = framestamp - lostTime;
        var nonDilatedElapsed = Math.min(lossAdjusted - prev, MAX_ELAPSED);
        elapsed = nonDilatedElapsed * dilation;
        current += elapsed;
        lostTime += nonDilatedElapsed - elapsed;
    },

    start: function () {
        return current = currentTime();
    },

    getElapsed: function () {
        return elapsed;
    }
};
function setDilation(newDilation) {
    dilation = newDilation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQThCZ0I7QUE5QmhCLElBQU0sb0JBQXFCLE9BQU8sV0FBUCxLQUF1QixXQUF2QixJQUFzQyxZQUFZLEdBQVo7QUFDakUsSUFBTSxjQUFjO1dBQU0sb0JBQW9CLFlBQVksR0FBWixFQUFwQixHQUF3QyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQXhDO0NBQU47O0FBRXBCLElBQU0sY0FBYyxFQUFkOztBQUVOLElBQUksT0FBTyxDQUFQO0FBQ0osSUFBSSxVQUFVLENBQVY7QUFDSixJQUFJLFVBQVUsSUFBVjtBQUNKLElBQUksV0FBVyxDQUFYO0FBQ0osSUFBSSxXQUFXLENBQVg7O2tCQUVXO0FBQ1gsWUFBUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsWUFBSSxTQUFTLENBQVQsRUFBWTtBQUNaLHNCQUFVLE9BQU8sVUFBUCxDQURFO1NBQWhCOztBQUlBLFlBQU0sT0FBTyxPQUFQLENBTGM7QUFNcEIsWUFBTSxlQUFlLGFBQWEsUUFBYixDQU5EO0FBT3BCLFlBQU0sb0JBQW9CLEtBQUssR0FBTCxDQUFTLGVBQWUsSUFBZixFQUFxQixXQUE5QixDQUFwQixDQVBjO0FBUXBCLGtCQUFVLG9CQUFvQixRQUFwQixDQVJVO0FBU3BCLG1CQUFXLE9BQVgsQ0FUb0I7QUFVcEIsb0JBQVksb0JBQW9CLE9BQXBCLENBVlE7S0FBaEI7O0FBYVIsV0FBTztlQUFNLFVBQVUsYUFBVjtLQUFOOztBQUVQLGdCQUFZO2VBQU07S0FBTjs7QUFHVCxTQUFTLFdBQVQsQ0FBcUIsV0FBckIsRUFBa0M7QUFDckMsZUFBVyxXQUFYLENBRHFDO0NBQWxDIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFzUGVyZm9ybWFuY2VOb3cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiBoYXNQZXJmb3JtYW5jZU5vdyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmNvbnN0IE1BWF9FTEFQU0VEID0gMzM7XG5cbmxldCBiYXNlID0gMDtcbmxldCBjdXJyZW50ID0gMDtcbmxldCBlbGFwc2VkID0gMTYuNztcbmxldCBkaWxhdGlvbiA9IDE7XG5sZXQgbG9zdFRpbWUgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBpZiAoYmFzZSA9PT0gMCkge1xuICAgICAgICAgICAgY3VycmVudCA9IGJhc2UgPSBmcmFtZXN0YW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGxvc3NBZGp1c3RlZCA9IGZyYW1lc3RhbXAgLSBsb3N0VGltZTtcbiAgICAgICAgY29uc3Qgbm9uRGlsYXRlZEVsYXBzZWQgPSBNYXRoLm1pbihsb3NzQWRqdXN0ZWQgLSBwcmV2LCBNQVhfRUxBUFNFRCk7XG4gICAgICAgIGVsYXBzZWQgPSBub25EaWxhdGVkRWxhcHNlZCAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ICs9IGVsYXBzZWQ7XG4gICAgICAgIGxvc3RUaW1lICs9IG5vbkRpbGF0ZWRFbGFwc2VkIC0gZWxhcHNlZDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IGN1cnJlbnQgPSBjdXJyZW50VGltZSgpLFxuXG4gICAgZ2V0RWxhcHNlZDogKCkgPT4gZWxhcHNlZFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpbGF0aW9uKG5ld0RpbGF0aW9uKSB7XG4gICAgZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn0iXX0=