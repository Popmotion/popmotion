'use strict';

var color = require('./color'),
    utils = require('../inc/utils'),
    pxDefaults = require('./px').defaultProps,
    terms = require('./settings/dictionary').shadow,
    splitSpaceDelimited = require('./manipulators/split-space-delimited'),
    createDelimited = require('./manipulators/create-delimited'),
    shadowTerms = terms.slice(0, 4);

module.exports = {

    defaultProps: utils.merge(color.defaultProps, {
        X: pxDefaults,
        Y: pxDefaults,
        Radius: pxDefaults,
        Spread: pxDefaults
    }),

    /*
        Split shadow properties "X Y Radius Spread Color"
        
        @param [string]: Shadow property
        @return [object]
    */
    split: function split(value) {
        var bits = splitSpaceDelimited(value),
            numBits = bits.length,
            hasReachedColor = false,
            colorProp = '',
            thisBit,
            i = 0,
            splitValue = {};

        for (; i < numBits; i++) {
            thisBit = bits[i];

            // If we've reached the color property, append to color string
            if (hasReachedColor || color.test(thisBit)) {
                hasReachedColor = true;
                colorProp += thisBit;
            } else {
                splitValue[terms[i]] = thisBit;
            }
        }

        return utils.merge(splitValue, color.split(colorProp));
    },

    combine: function combine(values) {
        return createDelimited(values, shadowTerms, ' ') + color.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzFCLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQy9CLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWTtJQUN6QyxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTTtJQUMvQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUM7SUFDckUsZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUM1RCxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUc7O0FBRWIsZ0JBQVksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDMUMsU0FBQyxFQUFFLFVBQVU7QUFDYixTQUFDLEVBQUUsVUFBVTtBQUNiLGNBQU0sRUFBRSxVQUFVO0FBQ2xCLGNBQU0sRUFBRSxVQUFVO0tBQ3JCLENBQUM7Ozs7Ozs7O0FBUUYsU0FBSyxFQUFFLGVBQUEsS0FBSyxFQUFJO0FBQ1osWUFBSSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNyQixlQUFlLEdBQUcsS0FBSztZQUN2QixTQUFTLEdBQUcsRUFBRTtZQUNkLE9BQU87WUFDUCxDQUFDLEdBQUcsQ0FBQztZQUNMLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXBCLGVBQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQixtQkFBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OztBQUFDLEFBR2xCLGdCQUFJLGVBQWUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3hDLCtCQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLHlCQUFTLElBQUksT0FBTyxDQUFDO2FBRXhCLE1BQU07QUFDSCwwQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNsQztTQUNKOztBQUVELGVBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQzFEOztBQUVELFdBQU8sRUFBRSxpQkFBQSxNQUFNO2VBQUksZUFBZSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUN2RixDQUFDIiwiZmlsZSI6InNoYWRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhciBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1CaXRzID0gYml0cy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUHJvcCA9ICcnLFxuICAgICAgICAgICAgdGhpc0JpdCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzQml0ID0gYml0c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcGVydHksIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IHRoaXNCaXQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSB0aGlzQml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoc3BsaXRWYWx1ZSwgY29sb3Iuc3BsaXQoY29sb3JQcm9wKSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKVxufTsiXX0=