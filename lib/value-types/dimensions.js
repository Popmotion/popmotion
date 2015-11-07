'use strict';

var terms = require('./settings/dictionary').dimensions,
    pxDefaults = require('./px').defaultProps,
    createDelimited = require('./manipulators/create-delimited'),
    splitSpaceDelimited = require('./manipulators/split-space-delimited');

module.exports = {

    defaultProps: pxDefaults,

    /*
        Split dimensions in format "Top Right Bottom Left"
        
        @param [string]: Dimension values
            "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
            "20px 0 30px" -> {20px, 0, 30px, 0}
            "20px 0" -> {20px, 0, 20px, 0}
            "20px" -> {20px, 20px, 20px, 20px}
        
        @return [object]: Object with T/R/B/L metrics
    */
    split: function split(value) {
        var dimensions = splitSpaceDelimited(value),
            numDimensions = dimensions.length,
            jumpBack = numDimensions !== 1 ? 2 : 1,
            i = 0,
            j = 0,
            splitValue = {};

        for (; i < 4; i++) {
            splitValue[terms[i]] = dimensions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = j === numDimensions ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: function combine(values) {
        return createDelimited(values, terms, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsVUFBVTtJQUNuRCxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVk7SUFDekMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUM1RCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7QUFFMUUsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUFheEIsU0FBSyxFQUFFLGVBQUEsS0FBSyxFQUFJO0FBQ1osWUFBSSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTTtZQUNqQyxRQUFRLEdBQUcsQUFBQyxhQUFhLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hDLENBQUMsR0FBRyxDQUFDO1lBQ0wsQ0FBQyxHQUFHLENBQUM7WUFDTCxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixlQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDZixzQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztBQUFDLEFBR3JDLGFBQUMsRUFBRSxDQUFDO0FBQ0osYUFBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLGFBQWEsR0FBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNoRDs7QUFFRCxlQUFPLFVBQVUsQ0FBQztLQUNyQjs7QUFFRCxXQUFPLEVBQUUsaUJBQUEsTUFBTTtlQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztLQUFBO0NBQ3pELENBQUMiLCJmaWxlIjoiZGltZW5zaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmRpbWVuc2lvbnMsXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IHZhbHVlID0+IHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bURpbWVuc2lvbnMgPSBkaW1lbnNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGp1bXBCYWNrID0gKG51bURpbWVuc2lvbnMgIT09IDEpID8gMiA6IDEsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IGRpbWVuc2lvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSAoaiA9PT0gbnVtRGltZW5zaW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKVxufTsiXX0=