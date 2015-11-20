'use strict';

var manager = require('./loop'),

/*
    Process constructor
    
    Syntax
        var process = new Process(scope, callback);
        var process = new Process(callback);
*/
Process = function Process(scope, callback) {
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
    fire: function fire(timestamp, elapsed) {
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
    start: function start(duration) {
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
    stop: function stop() {
        this.reset();
        this.deactivate();

        return this;
    },

    /*
        Activate process
        
        @return [this]
    */
    activate: function activate() {
        this.isActive = true;
        manager.activate(this, this.id);

        return this;
    },

    /*
        Deactivate process
        
        @return [this]
    */
    deactivate: function deactivate() {
        this.isActive = false;
        manager.deactivate(this.id);

        return this;
    },

    /*
        Fire process every x ms
        
        @param [int]: Number of ms to wait between refiring process.
        @return [this]
    */
    every: function every(interval) {
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
    reset: function reset() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7QUFTM0IsT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFhLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDakMsUUFBSSxRQUFRLEdBQUksUUFBUSxLQUFLLFNBQVMsQUFBQyxDQUFDOztBQUV4QyxRQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDckMsUUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFOzs7QUFBQyxBQUc3QixRQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztDQUN6QixDQUFDOztBQUVOLE9BQU8sQ0FBQyxTQUFTLEdBQUc7Ozs7Ozs7QUFPaEIsUUFBSSxFQUFFLGNBQVUsU0FBUyxFQUFFLE9BQU8sRUFBRTtBQUNoQyxZQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7OztBQUFDLEFBR25ELFlBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNqQixnQkFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCOztBQUVELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7O0FBUUQsU0FBSyxFQUFFLGVBQVUsUUFBUSxFQUFFO0FBQ3ZCLFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztBQUVoQixZQUFJLFFBQVEsRUFBRTtBQUNWLGdCQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQ3BDLG9CQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZixFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUViLGdCQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDOztBQUVELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7QUFPRCxRQUFJLEVBQUUsZ0JBQVk7QUFDZCxZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRWxCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7QUFPRCxZQUFRLEVBQUUsb0JBQVk7QUFDbEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsZUFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVoQyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBT0QsY0FBVSxFQUFFLHNCQUFZO0FBQ3BCLFlBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGVBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUU1QixlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7OztBQVFELFNBQUssRUFBRSxlQUFVLFFBQVEsRUFBRTtBQUN2QixZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFYixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFdkIsWUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsWUFBWTtBQUN6QyxnQkFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRWIsWUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQzs7QUFFakMsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztBQU9ELFNBQUssRUFBRSxpQkFBWTtBQUNmLFlBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOztBQUV4QixZQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN4Qix3QkFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoQzs7QUFFRCxZQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtBQUMzQix5QkFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyQzs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsImZpbGUiOiJQcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hbmFnZXIgPSByZXF1aXJlKCcuL2xvb3AnKSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhzY29wZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhjYWxsYmFjayk7XG4gICAgKi9cbiAgICBQcm9jZXNzID0gZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaGFzU2NvcGUgPSAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGhhc1Njb3BlID8gY2FsbGJhY2sgOiBzY29wZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IGhhc1Njb3BlID8gc2NvcGUgOiB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gbWFuYWdlci5yZWdpc3RlcigpO1xuXG4gICAgICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBwcm9jZXNzIGN1cnJlbnRseSBhY3RpdmU/XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG5Qcm9jZXNzLnByb3RvdHlwZSA9IHtcbiAgICAvKlxuICAgICAgICBGaXJlIGNhbGxiYWNrXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3RpbWVzdGFtcF06IFRpbWVzdGFtcCBvZiBjdXJyZW50bHktZXhlY3V0ZWQgZnJhbWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiAgICAqL1xuICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5jYWxsKHRoaXMuc2NvcGUsIHRpbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGF0IGFuIGludGVydmFsLCBkZWFjdGl2YXRlIGFnYWluXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IER1cmF0aW9uIG9mIHByb2Nlc3MgaW4gbXMsIDAgaWYgaW5kZWZpbml0ZVxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wVGltZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBtYW5hZ2VyLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgcHJvY2VzcyBldmVyeSB4IG1zXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBtcyB0byB3YWl0IGJldHdlZW4gcmVmaXJpbmcgcHJvY2Vzcy5cbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGV2ZXJ5OiBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENsZWFyIGFsbCB0aW1lcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBcbiAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wVGltZXJBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0b3BUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvY2VzczsiXX0=