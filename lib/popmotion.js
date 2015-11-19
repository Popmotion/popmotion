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

    addValueType: function (types) {
        valueTypes.extend(types);
        return Popmotion;
    },

    calc: require('./inc/calc')
};

module.exports = Popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUM7SUFFN0MsU0FBUyxHQUFHOztBQUVSLFNBQUssRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDOztBQUUvQixZQUFRLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixDQUFDOztBQUV4QyxTQUFLLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7QUFFL0IsWUFBUSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQzs7QUFFeEMsV0FBTyxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFckMsVUFBTSxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQzs7QUFFekMsUUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7O0FBRTdCLFVBQU0sRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDbkMsU0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNqQyxZQUFRLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQ3ZDLFNBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7Ozs7O0FBS2pDLFVBQU0sRUFBRSxPQUFPLENBQUMsb0JBQW9CLENBQUM7O0FBRXJDLFFBQUksRUFBRSxPQUFPLENBQUMsK0JBQStCLENBQUM7Ozs7O0FBSzlDLGNBQVUsRUFBRSxPQUFPLENBQUMsNkJBQTZCLENBQUM7O0FBRWxELGdCQUFZLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDbkIsa0JBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsZUFBTyxTQUFTLENBQUM7S0FDcEI7O0FBRUQsUUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7Q0FDOUIsQ0FBQzs7QUFFTixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuXG4gICAgUG9wbW90aW9uID0ge1xuXG4gICAgICAgIEFjdG9yOiByZXF1aXJlKCcuL2FjdG9yL0FjdG9yJyksXG5cbiAgICAgICAgU2VxdWVuY2U6IHJlcXVpcmUoJy4vc2VxdWVuY2UvU2VxdWVuY2UnKSxcblxuICAgICAgICBJbnB1dDogcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpLFxuXG4gICAgICAgIEl0ZXJhdG9yOiByZXF1aXJlKCcuL2l0ZXJhdG9yL0l0ZXJhdG9yJyksXG5cbiAgICAgICAgUHJvY2VzczogcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKSxcblxuICAgICAgICBFYXNpbmc6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9FYXNpbmcnKSxcblxuICAgICAgICBSb2xlOiByZXF1aXJlKCcuL3JvbGVzL1JvbGUnKSxcblxuICAgICAgICBBY3Rpb246IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICAgICAgVHdlZW46IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpLFxuICAgICAgICBTaW11bGF0ZTogcmVxdWlyZSgnLi9hY3Rpb25zL1NpbXVsYXRlJyksXG4gICAgICAgIFRyYWNrOiByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ3JlYXRlIGFuIEl0ZXJhdG9yIG9mIEFjdG9ycyB3aXRoIHNlbGVjdGVkIGRvbSBlbGVtZW50c1xuICAgICAgICAqL1xuICAgICAgICBzZWxlY3Q6IHJlcXVpcmUoJy4vaW5jL3NlbGVjdC1hY3RvcicpLFxuXG4gICAgICAgIGVhc2U6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIE1vZGlmeSBwcm9wZXJ0aWVzIG9mIGluYnVpbHQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgICovXG4gICAgICAgIG1vZGlmeUVhc2U6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9tb2RpZnktZWFzZScpLFxuXG4gICAgICAgIGFkZFZhbHVlVHlwZTogdHlwZXMgPT4ge1xuICAgICAgICAgICAgdmFsdWVUeXBlcy5leHRlbmQodHlwZXMpO1xuICAgICAgICAgICAgcmV0dXJuIFBvcG1vdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjOiByZXF1aXJlKCcuL2luYy9jYWxjJylcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcG1vdGlvbjsiXX0=