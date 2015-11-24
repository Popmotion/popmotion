"use strict";

var calc = require('../../inc/calc'),
    utils = require('../../inc/utils'),
    speedPerFrame = calc.speedPerFrame;

/*
    Add core physics simulations
*/
var simulations = {
    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    velocity: function velocity(value, duration) {
        value.velocity = value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);

        return simulations.friction(value, duration);
    },

    /*
        Glide
        
        Emulates touch device scrolling effects with exponential decay
        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
    */
    glide: function glide(value, duration, started) {
        var timeUntilFinished = -utils.currentTime() - started,
            delta = -value.to * Math.exp(timeUntilFinished / value.timeConstant);

        return value.to + delta - value.current;
    },

    /*
        Friction
         Apply friction to the current value
        TODO: Make this framerate-independent
    */
    friction: function friction(value, duration) {
        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);

        return calc.speedPerSecond(newVelocity, duration);
    },

    spring: function spring(value, duration) {
        var distance = value.to - value.current;

        value.velocity += distance * speedPerFrame(value.spring, duration);

        return simulations.friction(value, duration);
    },

    bounce: function bounce(value) {
        var distance = 0,
            to = value.to,
            current = value.current,
            bounce = value.bounce;

        // If we're using glide simulation we have to flip our target too
        if (value.simulate === 'glide') {
            distance = to - current;
            value.to = current - distance * bounce;
        }

        return value.velocity *= -bounce;
    },

    capture: function capture(value, target) {
        value.to = target;
        value.simulate = 'spring';
        value.capture = value.min = value.max = undefined;
    }
};

module.exports = simulations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDaEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWE7Ozs7O0FBQUMsQUFLdkMsSUFBSSxXQUFXLEdBQUc7Ozs7Ozs7O0FBUWQsWUFBUSxFQUFFLGtCQUFVLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDakMsYUFBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUU1SCxlQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEOzs7Ozs7OztBQVFELFNBQUssRUFBRSxlQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFlBQUksaUJBQWlCLEdBQUcsQ0FBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTztZQUNuRCxLQUFLLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUUxRSxlQUFPLEFBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUM3Qzs7Ozs7OztBQVFELFlBQVEsRUFBRSxrQkFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLFlBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFBLEFBQUMsQ0FBQzs7QUFFakYsZUFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNyRDs7QUFFRCxVQUFNLEVBQUUsZ0JBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUMvQixZQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7O0FBRXhDLGFBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVuRSxlQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEOztBQUVELFVBQU0sRUFBRSxnQkFBVSxLQUFLLEVBQUU7QUFDckIsWUFBSSxRQUFRLEdBQUcsQ0FBQztZQUNaLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNiLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztZQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07OztBQUFDLEFBRzFCLFlBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7QUFDNUIsb0JBQVEsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLGlCQUFLLENBQUMsRUFBRSxHQUFHLE9BQU8sR0FBSSxRQUFRLEdBQUcsTUFBTSxBQUFDLENBQUM7U0FDNUM7O0FBRUQsZUFBTyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUUsTUFBTSxDQUFDO0tBQ3JDOztBQUVELFdBQU8sRUFBRSxpQkFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQzlCLGFBQUssQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO0FBQ2xCLGFBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQzFCLGFBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztLQUNyRDtDQUNKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMiLCJmaWxlIjoic2ltdWxhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG4gICAgc3BlZWRQZXJGcmFtZSA9IGNhbGMuc3BlZWRQZXJGcmFtZTtcblxuLypcbiAgICBBZGQgY29yZSBwaHlzaWNzIHNpbXVsYXRpb25zXG4qL1xudmFyIHNpbXVsYXRpb25zID0ge1xuICAgIC8qXG4gICAgICAgIFZlbG9jaXR5XG4gICAgICAgIFxuICAgICAgICBUaGUgZGVmYXVsdCAucnVuKCkgc2ltdWxhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEFwcGxpZXMgYW55IHNldCBkZWNlbGVyYXRpb24gYW5kIGFjY2VsZXJhdGlvbiB0byBleGlzdGluZyB2ZWxvY2l0eVxuICAgICovXG4gICAgdmVsb2NpdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eSAtIHNwZWVkUGVyRnJhbWUodmFsdWUuZGVjZWxlcmF0aW9uLCBkdXJhdGlvbikgKyBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgZ2xpZGU6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24sIHN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIHRpbWVVbnRpbEZpbmlzaGVkID0gLSB1dGlscy5jdXJyZW50VGltZSgpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgIGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlLnRvICsgZGVsdGEpIC0gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRnJpY3Rpb25cblxuICAgICAgICBBcHBseSBmcmljdGlvbiB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBUT0RPOiBNYWtlIHRoaXMgZnJhbWVyYXRlLWluZGVwZW5kZW50XG4gICAgKi9cbiAgICBmcmljdGlvbjogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgbmV3VmVsb2NpdHkgPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBkdXJhdGlvbikgKiAoMSAtIHZhbHVlLmZyaWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gY2FsYy5zcGVlZFBlclNlY29uZChuZXdWZWxvY2l0eSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBzcHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGR1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwLFxuICAgICAgICAgICAgdG8gPSB2YWx1ZS50byxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgYm91bmNlID0gdmFsdWUuYm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgZ2xpZGUgc2ltdWxhdGlvbiB3ZSBoYXZlIHRvIGZsaXAgb3VyIHRhcmdldCB0b29cbiAgICAgICAgaWYgKHZhbHVlLnNpbXVsYXRlID09PSAnZ2xpZGUnKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gY3VycmVudCAtIChkaXN0YW5jZSAqIGJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZS52ZWxvY2l0eSAqPSAtIGJvdW5jZTtcbiAgICB9LFxuXG4gICAgY2FwdHVyZTogZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0aW9ucztcbiJdfQ==