'use strict';

var splitCommaDelimited = require('./split-comma-delimited'),
    functionBreak = require('./function-break');

module.exports = function (value, terms) {
    var splitValue = {},
        numTerms = terms.length,
        colors = splitCommaDelimited(functionBreak(value)),
        i = 0;

    for (; i < numTerms; i++) {
        splitValue[terms[i]] = colors[i] !== undefined ? colors[i] : 1;
    }

    return splitValue;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksc0JBQXNCLFFBQVEseUJBQVIsQ0FBdEI7SUFDQSxnQkFBZ0IsUUFBUSxrQkFBUixDQUFoQjs7QUFFSixPQUFPLE9BQVAsR0FBaUIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUMvQixRQUFJLGFBQWEsRUFBYjtRQUNBLFdBQVcsTUFBTSxNQUFOO1FBQ1gsU0FBUyxvQkFBb0IsY0FBYyxLQUFkLENBQXBCLENBQVQ7UUFDQSxJQUFJLENBQUosQ0FKMkI7O0FBTS9CLFdBQU8sSUFBSSxRQUFKLEVBQWMsR0FBckIsRUFBMEI7QUFDdEIsbUJBQVcsTUFBTSxDQUFOLENBQVgsSUFBdUIsTUFBQyxDQUFPLENBQVAsTUFBYyxTQUFkLEdBQTJCLE9BQU8sQ0FBUCxDQUE1QixHQUF3QyxDQUF4QyxDQUREO0tBQTFCOztBQUlBLFdBQU8sVUFBUCxDQVYrQjtDQUFsQiIsImZpbGUiOiJnZXQtY29sb3ItdmFsdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL3NwbGl0LWNvbW1hLWRlbGltaXRlZCcpLFxuICAgIGZ1bmN0aW9uQnJlYWsgPSByZXF1aXJlKCcuL2Z1bmN0aW9uLWJyZWFrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHZhbHVlLCB0ZXJtcykgPT4ge1xuICAgIHZhciBzcGxpdFZhbHVlID0ge30sXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoLFxuICAgICAgICBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGZ1bmN0aW9uQnJlYWsodmFsdWUpKSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbn07Il19