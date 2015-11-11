'use strict';

var manager = require('./manager'),

/*
    Process constructor
    
    Syntax
        var process = new Process(scope, callback);
        var process = new Process(callback);
*/
Process = function (scope, callback) {
    var hasScope = callback !== undefined;

    this.callback = hasScope ? callback : scope;
    this.scope = hasScope ? scope : this;
    this.id = manager.register();

    // [boolean]: Is this process currently active?
    this.isActive = false;
};

Process.prototype = {
    /*
        Fire callback
        
        @param [timestamp]: Timestamp of currently-executed frame
        @param [number]: Time since last frame
    */
    fire: function (timestamp, elapsed) {
        this.callback.call(this.scope, timestamp, elapsed);

        // If we're running at an interval, deactivate again
        if (this.isInterval) {
            this.deactivate();
        }

        return this;
    },

    /*
        Start process
        
        @param [int]: Duration of process in ms, 0 if indefinite
        @return [this]
    */
    start: function (duration) {
        var self = this;

        this.reset();
        this.activate();

        if (duration) {
            this.stopTimer = setTimeout(function () {
                self.stop();
            }, duration);

            this.isStopTimerActive = true;
        }

        return this;
    },

    /*
        Stop process
        
        @return [this]
    */
    stop: function () {
        this.reset();
        this.deactivate();

        return this;
    },

    /*
        Activate process
        
        @return [this]
    */
    activate: function () {
        this.isActive = true;
        manager.activate(this, this.id);

        return this;
    },

    /*
        Deactivate process
        
        @return [this]
    */
    deactivate: function () {
        this.isActive = false;
        manager.deactivate(this.id);

        return this;
    },

    /*
        Fire process every x ms
        
        @param [int]: Number of ms to wait between refiring process.
        @return [this]
    */
    every: function (interval) {
        var self = this;

        this.reset();

        this.isInterval = true;

        this.intervalTimer = setInterval(function () {
            self.activate();
        }, interval);

        this.isIntervalTimeActive = true;

        return this;
    },

    /*
        Clear all timers
        
        @param 
    */
    reset: function () {
        this.isInterval = false;

        if (this.isStopTimerActive) {
            clearTimeout(this.stopTimer);
        }

        if (this.isIntervalTimeActive) {
            clearInterval(this.intervalTimer);
        }

        return this;
    }
};

module.exports = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDOzs7Ozs7Ozs7QUFTOUIsT0FBTyxHQUFHLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNqQyxRQUFJLFFBQVEsR0FBSSxRQUFRLEtBQUssU0FBUyxBQUFDLENBQUM7O0FBRXhDLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUMsUUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNyQyxRQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUU7OztBQUFDLEFBRzdCLFFBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0NBQ3pCLENBQUM7O0FBRU4sT0FBTyxDQUFDLFNBQVMsR0FBRzs7Ozs7OztBQU9oQixRQUFJLEVBQUUsVUFBVSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQ2hDLFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQzs7O0FBQUMsQUFHbkQsWUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2pCLGdCQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7Ozs7QUFRRCxTQUFLLEVBQUUsVUFBVSxRQUFRLEVBQUU7QUFDdkIsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRWhCLFlBQUksUUFBUSxFQUFFO0FBQ1YsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFlBQVk7QUFDcEMsb0JBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRWIsZ0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDakM7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztBQU9ELFFBQUksRUFBRSxZQUFZO0FBQ2QsWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztBQUVsQixlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBT0QsWUFBUSxFQUFFLFlBQVk7QUFDbEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsZUFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVoQyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBT0QsY0FBVSxFQUFFLFlBQVk7QUFDcEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsZUFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRTVCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7O0FBUUQsU0FBSyxFQUFFLFVBQVUsUUFBUSxFQUFFO0FBQ3ZCLFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUViLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUV2QixZQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxZQUFZO0FBQ3pDLGdCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFYixZQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDOztBQUVqQyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBT0QsU0FBSyxFQUFFLFlBQVk7QUFDZixZQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFFeEIsWUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDeEIsd0JBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEM7O0FBRUQsWUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7QUFDM0IseUJBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckM7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjtDQUNKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyksXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3Moc2NvcGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3MoY2FsbGJhY2spO1xuICAgICovXG4gICAgUHJvY2VzcyA9IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGhhc1Njb3BlID0gKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBoYXNTY29wZSA/IGNhbGxiYWNrIDogc2NvcGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBoYXNTY29wZSA/IHNjb3BlIDogdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IG1hbmFnZXIucmVnaXN0ZXIoKTtcblxuICAgICAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgcHJvY2VzcyBjdXJyZW50bHkgYWN0aXZlP1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuUHJvY2Vzcy5wcm90b3R5cGUgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBjYWxsYmFja1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBUaW1lc3RhbXAgb2YgY3VycmVudGx5LWV4ZWN1dGVkIGZyYW1lXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICBmaXJlOiBmdW5jdGlvbiAodGltZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLnNjb3BlLCB0aW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgcnVubmluZyBhdCBhbiBpbnRlcnZhbCwgZGVhY3RpdmF0ZSBhZ2FpblxuICAgICAgICBpZiAodGhpcy5pc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBEdXJhdGlvbiBvZiBwcm9jZXNzIGluIG1zLCAwIGlmIGluZGVmaW5pdGVcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmlzU3RvcFRpbWVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIG1hbmFnZXIuYWN0aXZhdGUodGhpcywgdGhpcy5pZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbWFuYWdlci5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIHByb2Nlc3MgZXZlcnkgeCBtc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2YgbXMgdG8gd2FpdCBiZXR3ZWVuIHJlZmlyaW5nIHByb2Nlc3MuXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBldmVyeTogZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmFjdGl2YXRlKCk7XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDbGVhciBhbGwgdGltZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gXG4gICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzU3RvcFRpbWVyQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdG9wVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3M7Il19