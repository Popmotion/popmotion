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
    split: function (value) {
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

    combine: function (values) {
        return createDelimited(values, terms, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsVUFBVTtJQUNuRCxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVk7SUFDekMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUM1RCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7QUFFMUUsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUFheEIsU0FBSyxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQ1osWUFBSSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTTtZQUNqQyxRQUFRLEdBQUcsQUFBQyxhQUFhLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hDLENBQUMsR0FBRyxDQUFDO1lBQ0wsQ0FBQyxHQUFHLENBQUM7WUFDTCxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixlQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDZixzQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztBQUFDLEFBR3JDLGFBQUMsRUFBRSxDQUFDO0FBQ0osYUFBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLGFBQWEsR0FBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNoRDs7QUFFRCxlQUFPLFVBQVUsQ0FBQztLQUNyQjs7QUFFRCxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO0tBQUE7Q0FDekQsQ0FBQyIsImZpbGUiOiJkaW1lbnNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuZGltZW5zaW9ucyxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IERpbWVuc2lvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogdmFsdWUgPT4ge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpXG59OyJdfQ==