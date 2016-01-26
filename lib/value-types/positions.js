'use strict';

exports.__esModule = true;

var _dictionary = require('./settings/dictionary');

var _utils = require('../inc/utils');

var _px = require('./px');

var _px2 = _interopRequireDefault(_px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    defaultProps: _px2.default.defaultProps,

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
        var splitValue = {};
        var splitPositions = (0, _utils.splitSpaceDelimited)(value);
        var numPositions = splitPositions.length;
        var jumpBack = numDimensions !== 1 ? 2 : 1;
        var j = 0;

        for (var i = 0; i < 4; i++) {
            splitValue[_dictionary.positions[i]] = splitPositions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = j === numDimensions ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: function (values) {
        return (0, _utils.createDelimited)(values, _dictionary.positions, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxrQkFBYyxhQUFZLFlBQVo7Ozs7Ozs7Ozs7Ozs7QUFhZCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTtBQUVkLFlBQU0saUJBQWlCLFdBbkJMLG9CQW1CSyxDQUFvQixLQUFwQixDQUFqQixDQUZRO0FBR2QsWUFBTSxlQUFlLGVBQWUsTUFBZixDQUhQO0FBSWQsWUFBTSxXQUFXLGFBQUMsS0FBa0IsQ0FBbEIsR0FBdUIsQ0FBeEIsR0FBNEIsQ0FBNUIsQ0FKSDtBQUtkLFlBQUksSUFBSSxDQUFKLENBTFU7O0FBT2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFXLFlBMUJkLFNBMEJjLENBQVUsQ0FBVixDQUFYLElBQTJCLGVBQWUsQ0FBZixDQUEzQjs7O0FBRHdCLGFBSXhCLEdBSndCO0FBS3hCLGdCQUFJLENBQUMsS0FBTSxhQUFOLEdBQXVCLElBQUksUUFBSixHQUFlLENBQXZDLENBTG9CO1NBQTVCOztBQVFBLGVBQU8sVUFBUCxDQWZjO0tBQVg7O0FBa0JQLGFBQVMsVUFBQyxNQUFEO2VBQVksV0FuQ2hCLGdCQW1DZ0IsQ0FBZ0IsTUFBaEIsY0FwQ2hCLFNBb0NnQixFQUFtQyxHQUFuQztLQUFaIiwiZmlsZSI6InBvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc2l0aW9ucyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIHNwbGl0U3BhY2VEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHB4VmFsdWVUeXBlIGZyb20gJy4vcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBweFZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IERpbWVuc2lvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgY29uc3Qgc3BsaXRQb3NpdGlvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgY29uc3QgbnVtUG9zaXRpb25zID0gc3BsaXRQb3NpdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBqdW1wQmFjayA9IChudW1EaW1lbnNpb25zICE9PSAxKSA/IDIgOiAxO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbcG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bURpbWVuc2lvbnMpID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBwb3NpdGlvbnMsICcgJylcbn07Il19