'use strict';

var valueTypes = require('./value-types/manager'),
    Popmotion = {

    Actor: require('./actor/Actor'),

    Sequence: require('./sequence/Sequence'),

    Input: require('./input/Input'),

    Iterator: require('./iterator/Iterator'),

    Process: require('./process/Process'),

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

    ease: require('./actions/tween/preset-easing'),

    /*
        Modify properties of inbuilt easing function
    */
    modifyEase: require('./actions/tween/modify-ease'),

    addValueType: function addValueType(types) {
        valueTypes.extend(types);
        return Popmotion;
    },

    calc: require('./inc/calc')
};

module.exports = Popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUM7SUFFN0MsU0FBUyxHQUFHOztBQUVSLFNBQUssRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDOztBQUUvQixZQUFRLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixDQUFDOztBQUV4QyxTQUFLLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7QUFFL0IsWUFBUSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQzs7QUFFeEMsV0FBTyxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFckMsVUFBTSxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQzs7QUFFekMsUUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7O0FBRTdCLFVBQU0sRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDbkMsU0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNqQyxZQUFRLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQ3ZDLFNBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7Ozs7O0FBS2pDLFVBQU0sRUFBRSxPQUFPLENBQUMsb0JBQW9CLENBQUM7O0FBRXJDLFFBQUksRUFBRSxPQUFPLENBQUMsK0JBQStCLENBQUM7Ozs7O0FBSzlDLGNBQVUsRUFBRSxPQUFPLENBQUMsNkJBQTZCLENBQUM7O0FBRWxELGdCQUFZLEVBQUUsc0JBQUEsS0FBSyxFQUFJO0FBQ25CLGtCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLGVBQU8sU0FBUyxDQUFDO0tBQ3BCOztBQUVELFFBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQzlCLENBQUM7O0FBRU4sTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIFNlcXVlbmNlOiByZXF1aXJlKCcuL3NlcXVlbmNlL1NlcXVlbmNlJyksXG5cbiAgICAgICAgSW5wdXQ6IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKSxcblxuICAgICAgICBJdGVyYXRvcjogcmVxdWlyZSgnLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuXG4gICAgICAgIFByb2Nlc3M6IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyksXG5cbiAgICAgICAgRWFzaW5nOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vRWFzaW5nJyksXG5cbiAgICAgICAgUm9sZTogcmVxdWlyZSgnLi9yb2xlcy9Sb2xlJyksXG5cbiAgICAgICAgQWN0aW9uOiByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgICAgIFR3ZWVuOiByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKSxcbiAgICAgICAgU2ltdWxhdGU6IHJlcXVpcmUoJy4vYWN0aW9ucy9TaW11bGF0ZScpLFxuICAgICAgICBUcmFjazogcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIENyZWF0ZSBhbiBJdGVyYXRvciBvZiBBY3RvcnMgd2l0aCBzZWxlY3RlZCBkb20gZWxlbWVudHNcbiAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0OiByZXF1aXJlKCcuL2luYy9zZWxlY3QtYWN0b3InKSxcblxuICAgICAgICBlYXNlOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZycpLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBNb2RpZnkgcHJvcGVydGllcyBvZiBpbmJ1aWx0IGVhc2luZyBmdW5jdGlvblxuICAgICAgICAqL1xuICAgICAgICBtb2RpZnlFYXNlOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vbW9kaWZ5LWVhc2UnKSxcblxuICAgICAgICBhZGRWYWx1ZVR5cGU6IHR5cGVzID0+IHtcbiAgICAgICAgICAgIHZhbHVlVHlwZXMuZXh0ZW5kKHR5cGVzKTtcbiAgICAgICAgICAgIHJldHVybiBQb3Btb3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247Il19