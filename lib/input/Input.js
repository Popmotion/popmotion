/*
    Input controller
*/
"use strict";

var calc = require('../inc/calc.js'),
    utils = require('../inc/utils.js'),
    History = require('../inc/History.js'),

/*
    Input constructor
    
        Syntax
            newInput(name, value[, poll])
                @param [string]: Name of to track
                @param [number]: Initial value
                @param [function] (optional): Function to poll Input data
                
            newInput(props[, poll])
                @param [object]: Object of values
                @param [function] (optional): Function to poll Input data
     @return [Input]
*/
Input = function Input() {
    var pollPos = arguments.length - 1;

    this.current = {};
    this.offset = {};
    this.velocity = {};
    this.history = new History();
    this.update(arguments[0], arguments[1]);

    if (utils.isFunc(arguments[pollPos])) {
        this.poll = arguments[pollPos];
    }
};

Input.prototype = {

    // [number]: Number of frames of inactivity before velocity is turned to 0
    maxInactiveFrames: 2,

    // [number]: Number of frames input hasn't been updated
    inactiveFrames: 0,

    /*
        Get latest input values
        
        @param [string] (optional): Name of specific property to return
        @return [object || number]: Latest input values or, if specified, single value
    */
    get: function get(prop) {
        var latest = this.history.get(),
            val = prop !== undefined ? latest[prop] : latest;
        return val;
    },

    /*
        Update the input values
        
        Syntax
            input.update(name, value)
                @param [string]: Name of to track
                @param [number]: Initial value
                
            input.update(props)
                @param [object]: Object of values
                
        @return [Input]
    */
    update: function update(arg0, arg1) {
        var values = {};

        if (utils.isNum(arg1)) {
            values[arg0] = arg1;
        } else {
            values = arg0;
        }

        this.history.add(utils.merge(this.current, values));

        return this;
    },

    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
        @return [Input]
    */
    onFrame: function onFrame(timestamp) {
        var latest, hasChanged;

        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }

        latest = this.poll ? this.poll() : this.history.get();
        hasChanged = utils.hasChanged(this.current, latest);

        // If input has changed between frames 
        if (hasChanged) {
            this.velocity = calc.offset(this.current, latest);
            this.current = latest;
            this.inactiveFrames = 0;

            // Or it hasn't moved and our frame limit has been reached
        } else if (this.inactiveFrames >= this.maxInactiveFrames) {
                this.velocity = calc.offset(this.current, this.current);

                // Or input hasn't changed
            } else {
                    this.inactiveFrames++;
                }

        this.lastFrame = timestamp;

        return this;
    }
};

module.exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ2hDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCdEMsS0FBSyxHQUFHLFNBQVIsS0FBSyxHQUFlO0FBQ2hCLFFBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztBQUVuQyxRQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixRQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXhDLFFBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUNsQyxZQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNsQztDQUNKLENBQUM7O0FBRU4sS0FBSyxDQUFDLFNBQVMsR0FBRzs7O0FBR2QscUJBQWlCLEVBQUUsQ0FBQzs7O0FBR3BCLGtCQUFjLEVBQUUsQ0FBQzs7Ozs7Ozs7QUFRakIsT0FBRyxFQUFFLGFBQVUsSUFBSSxFQUFFO0FBQ2pCLFlBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzNCLEdBQUcsR0FBRyxBQUFDLElBQUksS0FBSyxTQUFTLEdBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN2RCxlQUFPLEdBQUcsQ0FBQztLQUNkOzs7Ozs7Ozs7Ozs7Ozs7QUFlRCxVQUFNLEVBQUUsZ0JBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUMxQixZQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLFlBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQixrQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QixNQUFNO0FBQ0gsa0JBQU0sR0FBRyxJQUFJLENBQUM7U0FDakI7O0FBRUQsWUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRXBELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7O0FBUUQsV0FBTyxFQUFFLGlCQUFVLFNBQVMsRUFBRTtBQUMxQixZQUFJLE1BQU0sRUFBRSxVQUFVOzs7QUFBQyxBQUd2QixZQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzlCLG1CQUFPO1NBQ1Y7O0FBRUQsY0FBTSxHQUFHLEFBQUMsSUFBSSxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4RCxrQkFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7OztBQUFDLEFBR3BELFlBQUksVUFBVSxFQUFFO0FBQ1osZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELGdCQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixnQkFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDOzs7QUFBQyxTQUczQixNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDdEQsb0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7OztBQUFDLGFBRzNELE1BQU07QUFDSCx3QkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN6Qjs7QUFFRCxZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsZUFBTyxJQUFJLENBQUM7S0FDZjtDQUNKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIElucHV0IGNvbnRyb2xsZXJcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYy5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG4gICAgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2luYy9IaXN0b3J5LmpzJyksXG5cbiAgICAvKlxuICAgICAgICBJbnB1dCBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgICAgIFN5bnRheFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KG5hbWUsIHZhbHVlWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KHByb3BzWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcblxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9sbFBvcyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge307XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmMoYXJndW1lbnRzW3BvbGxQb3NdKSkge1xuICAgICAgICAgICAgdGhpcy5wb2xsID0gYXJndW1lbnRzW3BvbGxQb3NdO1xuICAgICAgICB9XG4gICAgfTtcblxuSW5wdXQucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIG9mIGluYWN0aXZpdHkgYmVmb3JlIHZlbG9jaXR5IGlzIHR1cm5lZCB0byAwXG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDIsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgaW5wdXQgaGFzbid0IGJlZW4gdXBkYXRlZFxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBsYXRlc3QgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKTogTmFtZSBvZiBzcGVjaWZpYyBwcm9wZXJ0eSB0byByZXR1cm5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0IHx8IG51bWJlcl06IExhdGVzdCBpbnB1dCB2YWx1ZXMgb3IsIGlmIHNwZWNpZmllZCwgc2luZ2xlIHZhbHVlXG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBsYXRlc3QgPSB0aGlzLmhpc3RvcnkuZ2V0KCksXG4gICAgICAgICAgICB2YWwgPSAocHJvcCAhPT0gdW5kZWZpbmVkKSA/IGxhdGVzdFtwcm9wXSA6IGxhdGVzdDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKHByb3BzKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bShhcmcxKSkge1xuICAgICAgICAgICAgdmFsdWVzW2FyZzBdID0gYXJnMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGFyZzA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHV0aWxzLm1lcmdlKHRoaXMuY3VycmVudCwgdmFsdWVzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBpbnB1dCBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgZnJhbWVcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBvbkZyYW1lOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBsYXRlc3QsIGhhc0NoYW5nZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBwcm92aWRlZCB0aW1lc3RhbXAgYWdhaW5zdCBsYXN0RnJhbWUgdGltZXN0YW1wIGFuZCByZXR1cm4gaW5wdXQgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHRoaXMubGFzdEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhdGVzdCA9ICh0aGlzLnBvbGwpID8gdGhpcy5wb2xsKCkgOiB0aGlzLmhpc3RvcnkuZ2V0KCk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB1dGlscy5oYXNDaGFuZ2VkKHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcblxuICAgICAgICAvLyBJZiBpbnB1dCBoYXMgY2hhbmdlZCBiZXR3ZWVuIGZyYW1lcyAgXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0O1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG5cbiAgICAgICAgLy8gT3IgaXQgaGFzbid0IG1vdmVkIGFuZCBvdXIgZnJhbWUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGlucHV0IGhhc24ndCBjaGFuZ2VkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZXN0YW1wO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDsiXX0=