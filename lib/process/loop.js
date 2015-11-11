/*
    The loop
*/
"use strict";

var Timer = require('./timer.js'),
    tick = require('./tick.js'),
    Loop = function () {
    this.timer = new Timer();
};

Loop.prototype = {

    /*
        [boolean]: Current status of animation loop
    */
    isRunning: false,

    /*
        Fire all active processes once per frame
    */
    frame: function () {
        var _this = this;

        tick(function (framestamp) {
            if (_this.isRunning) {
                _this.frame();
            }
            _this.timer.update(framestamp);

            _this.isRunning = _this.callback.call(_this.scope, framestamp, _this.timer.getElapsed());
        });
    },

    /*
        Start loop
    */
    start: function () {
        // Make sure we're not already running a loop
        if (!this.isRunning) {
            this.timer.clock();
            this.isRunning = true;
            this.frame();
        }
    },

    /*
        Stop the loop
    */
    stop: function () {
        this.isRunning = false;
    },

    /*
        Set the callback to run every frame
        
        @param [Object]: Execution context
        @param [function]: Callback to fire
    */
    setCallback: function (scope, callback) {
        this.scope = scope;
        this.callback = callback;
    }

};

module.exports = new Loop();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsWUFBWSxDQUFDOztBQUViLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDN0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDM0IsSUFBSSxHQUFHLFlBQVk7QUFDZixRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Q0FDNUIsQ0FBQzs7QUFFTixJQUFJLENBQUMsU0FBUyxHQUFHOzs7OztBQUtiLGFBQVMsRUFBRSxLQUFLOzs7OztBQUtoQixTQUFLLEVBQUUsWUFBWTs7O0FBQ2YsWUFBSSxDQUFDLFVBQUEsVUFBVSxFQUFJO0FBQ2YsZ0JBQUksTUFBSyxTQUFTLEVBQUU7QUFDaEIsc0JBQUssS0FBSyxFQUFFLENBQUM7YUFDaEI7QUFDRCxrQkFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUU5QixrQkFBSyxTQUFTLEdBQUcsTUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUssS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFLLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3hGLENBQUMsQ0FBQztLQUNOOzs7OztBQUtELFNBQUssRUFBRSxZQUFZOztBQUVmLFlBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2pCLGdCQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25CLGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixnQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0tBQ0o7Ozs7O0FBS0QsUUFBSSxFQUFFLFlBQVk7QUFDZCxZQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7Ozs7Ozs7QUFRRCxlQUFXLEVBQUUsVUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3BDLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzVCOztDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIFRoZSBsb29wXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vdGltZXIuanMnKSxcbiAgICB0aWNrID0gcmVxdWlyZSgnLi90aWNrLmpzJyksXG4gICAgTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgIH07XG4gICAgXG5Mb29wLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbYm9vbGVhbl06IEN1cnJlbnQgc3RhdHVzIG9mIGFuaW1hdGlvbiBsb29wXG4gICAgKi9cbiAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpY2soZnJhbWVzdGFtcCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWVyLnVwZGF0ZShmcmFtZXN0YW1wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgZnJhbWVzdGFtcCwgdGhpcy50aW1lci5nZXRFbGFwc2VkKCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSdyZSBub3QgYWxyZWFkeSBydW5uaW5nIGEgbG9vcFxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLmNsb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgdGhlIGxvb3BcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNldCB0aGUgY2FsbGJhY2sgdG8gcnVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW09iamVjdF06IEV4ZWN1dGlvbiBjb250ZXh0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBzZXRDYWxsYmFjazogZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb29wKCk7Il19