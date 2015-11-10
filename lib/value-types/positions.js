'use strict';

var createDelimited = require('./manipulators/create-delimited'),
    pxDefaults = require('./px').defaultProps,
    splitSpaceDelimited = require('./manipulators/split-space-delimited'),
    terms = require('./settings/dictionary').positions;

module.exports = {

    defaultProps: pxDefaults,

    /*
        Split positions in format "X Y Z"
        
        @param [string]: Position values
            "20% 30% 0" -> {20%, 30%, 0}
            "20% 30%" -> {20%, 30%}
            "20%" -> {20%, 20%}
    */
    split: function split(value) {
        var positions = splitSpaceDelimited(value),
            numPositions = positions.length,
            splitValue = {
            X: positions[0],
            Y: numPositions > 1 ? positions[1] : positions[0]
        };

        if (numPositions > 2) {
            splitValue.Z = positions[2];
        }

        return splitValue;
    },

    combine: function combine(values) {
        return createDelimited(values, terms, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZO0lBQ3pDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQztJQUNyRSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsU0FBUyxDQUFDOztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHOztBQUViLGdCQUFZLEVBQUUsVUFBVTs7Ozs7Ozs7OztBQVV4QixTQUFLLEVBQUUsZUFBQSxLQUFLLEVBQUk7QUFDWixZQUFJLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7WUFDdEMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNO1lBQy9CLFVBQVUsR0FBRztBQUNULGFBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2YsYUFBQyxFQUFFLEFBQUMsWUFBWSxHQUFHLENBQUMsR0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN0RCxDQUFDOztBQUVOLFlBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtBQUNsQixzQkFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7O0FBRUQsZUFBTyxVQUFVLENBQUM7S0FDckI7O0FBRUQsV0FBTyxFQUFFLGlCQUFBLE1BQU07ZUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7S0FBQTtDQUN6RCxDQUFDIiwiZmlsZSI6InBvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IHZhbHVlID0+IHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKVxufTsiXX0=