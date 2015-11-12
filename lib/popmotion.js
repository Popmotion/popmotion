'use strict';

var Process = require('./process/Process'),
    valueTypes = require('./value-types/manager'),
    Popmotion = {

    Actor: require('./actor/Actor'),

    Sequence: require('./sequence/Sequence'),

    Input: require('./input/Input'),

    Iterator: require('./iterator/Iterator'),

    Process: Process,

    Easing: require('./actions/tween/Easing'),

    Role: require('./roles/Role'),

    Action: require('./actions/Action'),
    Tween: require('./actions/Tween'),
    Simulate: require('./actions/Simulate'),
    Track: require('./actions/Track'),

    /*
        Create an Iterator of Actors with selected dom elements
    */
    select: require('./inc/select-actor'),

    /*
        Process helper methods
    */
    onNextFrame: function () {},
    setInterval: function () {},
    setTimeout: function () {},

    addValueType: function (types) {
        valueTypes.extend(types);
        return Popmotion;
    },

    calc: require('./inc/calc')
};

module.exports = Popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUM7SUFDdEMsVUFBVSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztJQUU3QyxTQUFTLEdBQUc7O0FBRVIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7O0FBRS9CLFlBQVEsRUFBRSxPQUFPLENBQUMscUJBQXFCLENBQUM7O0FBRXhDLFNBQUssRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDOztBQUUvQixZQUFRLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixDQUFDOztBQUV4QyxXQUFPLEVBQUUsT0FBTzs7QUFFaEIsVUFBTSxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQzs7QUFFekMsUUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7O0FBRTdCLFVBQU0sRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDbkMsU0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNqQyxZQUFRLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQ3ZDLFNBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7Ozs7O0FBS2pDLFVBQU0sRUFBRSxPQUFPLENBQUMsb0JBQW9CLENBQUM7Ozs7O0FBS3JDLGVBQVcsRUFBRSxZQUFNLEVBQUU7QUFDckIsZUFBVyxFQUFFLFlBQU0sRUFBRTtBQUNyQixjQUFVLEVBQUUsWUFBTSxFQUFFOztBQUVwQixnQkFBWSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3JCLGtCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLGVBQU8sU0FBUyxDQUFDO0tBQ3BCOztBQUVELFFBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQzlCLENBQUM7O0FBRU4sTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIHZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIFNlcXVlbmNlOiByZXF1aXJlKCcuL3NlcXVlbmNlL1NlcXVlbmNlJyksXG5cbiAgICAgICAgSW5wdXQ6IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKSxcblxuICAgICAgICBJdGVyYXRvcjogcmVxdWlyZSgnLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuXG4gICAgICAgIFByb2Nlc3M6IFByb2Nlc3MsXG5cbiAgICAgICAgRWFzaW5nOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vRWFzaW5nJyksXG5cbiAgICAgICAgUm9sZTogcmVxdWlyZSgnLi9yb2xlcy9Sb2xlJyksXG5cbiAgICAgICAgQWN0aW9uOiByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgICAgIFR3ZWVuOiByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKSxcbiAgICAgICAgU2ltdWxhdGU6IHJlcXVpcmUoJy4vYWN0aW9ucy9TaW11bGF0ZScpLFxuICAgICAgICBUcmFjazogcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIENyZWF0ZSBhbiBJdGVyYXRvciBvZiBBY3RvcnMgd2l0aCBzZWxlY3RlZCBkb20gZWxlbWVudHNcbiAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0OiByZXF1aXJlKCcuL2luYy9zZWxlY3QtYWN0b3InKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBoZWxwZXIgbWV0aG9kc1xuICAgICAgICAqL1xuICAgICAgICBvbk5leHRGcmFtZTogKCkgPT4ge30sXG4gICAgICAgIHNldEludGVydmFsOiAoKSA9PiB7fSxcbiAgICAgICAgc2V0VGltZW91dDogKCkgPT4ge30sXG5cbiAgICAgICAgYWRkVmFsdWVUeXBlOiAodHlwZXMpID0+IHtcbiAgICAgICAgICAgIHZhbHVlVHlwZXMuZXh0ZW5kKHR5cGVzKTtcbiAgICAgICAgICAgIHJldHVybiBQb3Btb3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247Il19