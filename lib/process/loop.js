/*
    The loop
*/
"use strict";

var Timer = require('./timer.js'),
    tick = require('./tick.js'),
    Loop = function Loop() {
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
    frame: function frame() {
        var self = this;

        tick(function (framestamp) {
            self.timer.update(framestamp);
            var isActive = self.callback.call(self.scope, framestamp, self.timer.getElapsed());

            if (isActive) {
                self.frame();
            } else {
                self.stop();
            }
        });
    },

    /*
        Start loop
    */
    start: function start() {
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
    stop: function stop() {
        this.isRunning = false;
    },

    /*
        Set the callback to run every frame
        
        @param [Object]: Execution context
        @param [function]: Callback to fire
    */
    setCallback: function setCallback(scope, callback) {
        this.scope = scope;
        this.callback = callback;
    }

};

module.exports = new Loop();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsWUFBWSxDQUFDOztBQUViLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDN0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDM0IsSUFBSSxHQUFHLFNBQVAsSUFBSSxHQUFlO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0NBQzVCLENBQUM7O0FBRU4sSUFBSSxDQUFDLFNBQVMsR0FBRzs7Ozs7QUFLYixhQUFTLEVBQUUsS0FBSzs7Ozs7QUFLaEIsU0FBSyxFQUFFLGlCQUFZO0FBQ2YsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixZQUFJLENBQUMsVUFBVSxVQUFVLEVBQUU7QUFDdkIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLGdCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7O0FBRW5GLGdCQUFJLFFBQVEsRUFBRTtBQUNWLG9CQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEIsTUFBTTtBQUNILG9CQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtTQUNKLENBQUMsQ0FBQztLQUNOOzs7OztBQUtELFNBQUssRUFBRSxpQkFBWTs7QUFFZixZQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNqQixnQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7OztBQUtELFFBQUksRUFBRSxnQkFBWTtBQUNkLFlBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7Ozs7OztBQVFELGVBQVcsRUFBRSxxQkFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3BDLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzVCOztDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIFRoZSBsb29wXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vdGltZXIuanMnKSxcbiAgICB0aWNrID0gcmVxdWlyZSgnLi90aWNrLmpzJyksXG4gICAgTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgIH07XG4gICAgXG5Mb29wLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbYm9vbGVhbl06IEN1cnJlbnQgc3RhdHVzIG9mIGFuaW1hdGlvbiBsb29wXG4gICAgKi9cbiAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aWNrKGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgICAgICBzZWxmLnRpbWVyLnVwZGF0ZShmcmFtZXN0YW1wKTtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IHNlbGYuY2FsbGJhY2suY2FsbChzZWxmLnNjb3BlLCBmcmFtZXN0YW1wLCBzZWxmLnRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgbG9vcFxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBhbHJlYWR5IHJ1bm5pbmcgYSBsb29wXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIuY2xvY2soKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCB0aGUgbG9vcFxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU2V0IHRoZSBjYWxsYmFjayB0byBydW4gZXZlcnkgZnJhbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbT2JqZWN0XTogRXhlY3V0aW9uIGNvbnRleHRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIHNldENhbGxiYWNrOiBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IExvb3AoKTsiXX0=