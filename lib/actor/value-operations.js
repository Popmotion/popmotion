'use strict';

// Imports
var valueTypesManager = require('../value-types/manager');
var calc = require('../inc/calc');
var utils = require('../inc/utils');
var isNum = utils.isNum;
var each = utils.each;

// Vars
var numericalValues = ['current', 'to', 'min', 'max', 'velocity', 'friction', 'spring', 'acceleration'];
var numNumericalValues = numericalValues.length;
var defaultValue = {
    current: 0,
    velocity: 0,
    speed: 0,
    frameChange: 0
};

var checkNumericalValue = function (name) {
    return numericalValues.indexOf(name) > -1;
};

/*
    Check Role typeMaps to see if this value name has been mapped
    to a specific value type

    @param [string]
    @param [array]
    @returns [string]: Value type
*/
function checkRoles(name, roles) {
    var valueType = undefined;

    each(roles, function (key, role) {
        if (role._typeMap) {
            valueType = role._typeMap[role.map(name)] || valueType;
        }
    });

    return valueType;
}

/*
    Check value for special type

    @param [object]
    @param [object]
    @param [object]
    @param [string]
    @returns [string || false]
*/
function checkValueType(existingValue, newValue, scope, valueName) {
    var valueType;

    // Check existing value for type already set
    if (existingValue && existingValue.type) {
        valueType = existingValue.type;
    } else {
        // Or check Role _typeMap properties
        if (scope.roles) {
            valueType = checkRoles(valueName, scope.roles);
        }

        // Finally run tests
        if (!valueType && utils.isString(newValue.current)) {
            valueType = valueTypesManager.test(newValue.current);
        }
    }

    return valueType;
}

/*
    Resolve a property

    @param [string]
    @param [string || function || number]
    @param [object]
    @param [object]
    @returns [number]
*/
function resolve(name, prop, value, scope) {
    var isNumericalValue = checkNumericalValue(name);

    // If function, resolve
    if (utils.isFunc(prop) && isNumericalValue) {
        prop = prop.call(scope, scope);
    }

    // If string, check for relative numbers and units
    if (utils.isString(prop)) {
        // If relative value
        if (prop.indexOf('=') > 0) {
            prop = calc.relativeValue(value.current, prop);
        }

        // If unit
        if (isNumericalValue) {
            splitUnit(prop, value);
        }
    }

    if (isNumericalValue) {
        prop = parseFloat(prop);
    }

    return prop;
}

/*
    Split a value into sub-values

    @param [string]
    @param [object]
    @param [object]
    @param [valueTypeHandler]
    @returns [object]
*/
function split(name, value, scope, valueTypeHandler) {
    var splitValues = {},
        i = 0;

    var _loop = function () {
        var propName = numericalValues[i];
        var splitProp = {};

        if (value.hasOwnProperty(propName)) {
            var valueProp = value[propName];

            // If we need to first resolve this, resolve
            if (utils.isFunc(valueProp)) {
                valueProp = valueProp.call(scope, scope);
            }

            if (!utils.isString(valueProp)) {
                return 'continue';
            }

            splitProp = valueTypeHandler.split(valueProp);

            // Assign split properties to each child value
            each(splitProp, function (key, prop) {
                // Create new value if none exists
                splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
                splitValues[key][propName] = prop;

                if (utils.isString(splitProp[key])) {
                    splitUnit(splitValues[key][propName], splitValues[key]);
                }
            });
        }
    };

    for (; i < numNumericalValues; i++) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
    }

    return splitValues;
}

/*
    Split value into number and unit, and set unit to value

    @param [string]
    @param [object]
*/
function splitUnit(property, hostValue) {
    if (utils.isNum(property)) {
        return property;
    }
    var returnVal = property;

    var _utils$splitValUnit = utils.splitValUnit(property);

    var value = _utils$splitValUnit.value;
    var unit = _utils$splitValUnit.unit;

    if (!isNaN(value)) {
        returnVal = value;
        if (unit) {
            hostValue.unit = unit;
        }
    }

    return returnVal;
}

/*
    Preprocess incoming values, splitting non-numerical values
    into sub-values ie hex

    @param [object]
    @param [object]
    @param [object]
    @param [string]
*/
function preprocess(existing, incoming, scope, defaultProp) {
    var values = {};

    each(incoming, function (key, value) {
        var existingValue = existing[key],
            newValue = {};

        if (utils.isObj(value)) {
            newValue = value;
        } else {
            newValue[defaultProp] = value;
        }

        // If value doesn't have a special type, check for one
        newValue.type = checkValueType(existingValue, newValue, scope, key);

        values[key] = newValue;

        // If we have a type property, split/assign default props
        if (newValue.type) {
            var typeHandler = valueTypesManager[newValue.type];

            // If valueType handler has a split function, split this value
            if (typeHandler.split) {
                var splitValues = split(key, newValue, scope, typeHandler);
                newValue.children = {};

                each(splitValues, function (childName, childValue) {
                    each(newValue, function (key, value) {
                        // Not great is it
                        if (key !== 'children' && key !== 'action' && childValue[key] === undefined) {
                            childValue[key] = value;
                        }
                    });

                    childValue.parent = childValue.name = key;
                    childValue.propName = childName;

                    delete childValue.type;

                    newValue.children[childName] = values[key + childName] = childValue;
                });

                if (typeHandler.template) {
                    newValue.template = existingValue ? existingValue.template : typeHandler.template(newValue.current);
                }

                // Or just assign default properties for this value
            } else {
                    values[key] = utils.merge(valueTypesManager.defaultProps(newValue.type, key), newValue);
                }
        }
    });

    return values;
}

module.exports = {

    /*
        Flip value target/origin
    */
    flip: function (value) {
        var target = value.target !== undefined ? value.target : value.current;
        value.target = value.to = value.origin;
        value.origin = target;
    },

    /*
        Merge existing and incoming values, resolving properties
        set as functions and splitting non-numerical values ie hex
         @param [object]
        @param [object]
        @param [object]
        @param [string] (optional)
        @param [object]
        @returns [object]: New values object
    */
    process: function (existing, incoming, inherit, defaultProp, scope) {
        existing = existing || {};
        defaultProp = defaultProp || 'current';
        var preprocessed = preprocess(existing, incoming, scope, defaultProp);

        each(preprocessed, function (key, value) {
            var newValue = existing[key] || utils.copy(defaultValue),
                hasChildren = value.children !== undefined,
                defaultActionValue = inherit.action ? inherit.action.getDefaultValue() : {};

            value.action = inherit.action;

            each(defaultActionValue, function (propName, defaultActionProp) {
                newValue[propName] = inherit.hasOwnProperty(propName) && !value.hasOwnProperty(propName) ? inherit[propName] : defaultActionProp;
            });

            each(value, function (valueName, valueProp) {
                // If property is not undefined or a number, resolve
                if (valueProp !== undefined && !isNum(valueProp) && !hasChildren) {
                    valueProp = resolve(valueName, valueProp, newValue, scope);
                }

                newValue[valueName] = valueProp;

                // Set internal target if this property is 'to'
                if (valueName === 'to') {
                    newValue.target = newValue.to;
                }
            });

            newValue.origin = newValue.current;
            newValue.hasRange = isNum(newValue.min) || isNum(newValue.max) ? true : false;

            existing[key] = newValue;
            scope.updateOrder(key, utils.has(newValue, 'watch'), hasChildren);
        });

        return existing;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLElBQU0sb0JBQW9CLFFBQVEsd0JBQVIsQ0FBcEI7QUFDTixJQUFNLE9BQU8sUUFBUSxhQUFSLENBQVA7QUFDTixJQUFNLFFBQVEsUUFBUSxjQUFSLENBQVI7QUFDTixJQUFNLFFBQVEsTUFBTSxLQUFOO0FBQ2QsSUFBTSxPQUFPLE1BQU0sSUFBTjs7O0FBR2IsSUFBTSxrQkFBa0IsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQyxVQUFoQyxFQUE0QyxVQUE1QyxFQUF3RCxRQUF4RCxFQUFrRSxjQUFsRSxDQUFsQjtBQUNOLElBQU0scUJBQXFCLGdCQUFnQixNQUFoQjtBQUMzQixJQUFNLGVBQWU7QUFDakIsYUFBUyxDQUFUO0FBQ0EsY0FBVSxDQUFWO0FBQ0EsV0FBTyxDQUFQO0FBQ0EsaUJBQWEsQ0FBYjtDQUpFOztBQU9OLElBQU0sc0JBQXNCLFVBQUMsSUFBRDtXQUFVLGdCQUFnQixPQUFoQixDQUF3QixJQUF4QixJQUFnQyxDQUFDLENBQUQ7Q0FBMUM7Ozs7Ozs7Ozs7QUFVNUIsU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCLEtBQTFCLEVBQWlDO0FBQzdCLFFBQUkscUJBQUosQ0FENkI7O0FBRzdCLFNBQUssS0FBTCxFQUFZLFVBQUMsR0FBRCxFQUFNLElBQU4sRUFBZTtBQUN2QixZQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2Ysd0JBQVksS0FBSyxRQUFMLENBQWMsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFkLEtBQWlDLFNBQWpDLENBREc7U0FBbkI7S0FEUSxDQUFaLENBSDZCOztBQVM3QixXQUFPLFNBQVAsQ0FUNkI7Q0FBakM7Ozs7Ozs7Ozs7O0FBcUJBLFNBQVMsY0FBVCxDQUF3QixhQUF4QixFQUF1QyxRQUF2QyxFQUFpRCxLQUFqRCxFQUF3RCxTQUF4RCxFQUFtRTtBQUMvRCxR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YyxTQUFkLElBQTJCLENBQUMsTUFBTSxTQUFOLENBQUQsSUFBcUIsQ0FBQyxXQUFELEVBQWM7QUFDOUQsZ0NBQVksUUFBUSxTQUFSLEVBQW1CLFNBQW5CLEVBQThCLFFBQTlCLEVBQXdDLEtBQXhDLENBQVosQ0FEOEQ7aUJBQWxFOztBQUlBLHlCQUFTLFNBQVQsSUFBc0IsU0FBdEI7OztBQU5rQyxvQkFTOUIsY0FBYyxJQUFkLEVBQW9CO0FBQ3BCLDZCQUFTLE1BQVQsR0FBa0IsU0FBUyxFQUFULENBREU7aUJBQXhCO2FBVFEsQ0FBWixDQVgrQjs7QUF5Qi9CLHFCQUFTLE1BQVQsR0FBa0IsU0FBUyxPQUFULENBekJhO0FBMEIvQixxQkFBUyxRQUFULEdBQW9CLEtBQUMsQ0FBTSxTQUFTLEdBQVQsQ0FBTixJQUF1QixNQUFNLFNBQVMsR0FBVCxDQUE3QixHQUE4QyxJQUEvQyxHQUFzRCxLQUF0RCxDQTFCVzs7QUE0Qi9CLHFCQUFTLEdBQVQsSUFBZ0IsUUFBaEIsQ0E1QitCO0FBNkIvQixrQkFBTSxXQUFOLENBQWtCLEdBQWxCLEVBQXVCLE1BQU0sR0FBTixDQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBdkIsRUFBcUQsV0FBckQsRUE3QitCO1NBQWhCLENBQW5CLENBTGdFOztBQXFDaEUsZUFBTyxRQUFQLENBckNnRTtLQUEzRDtDQXRCYiIsImZpbGUiOiJ2YWx1ZS1vcGVyYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuY29uc3QgdmFsdWVUeXBlc01hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyk7XG5jb25zdCBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5jb25zdCBpc051bSA9IHV0aWxzLmlzTnVtO1xuY29uc3QgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8vIFZhcnNcbmNvbnN0IG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdtaW4nLCAnbWF4JywgJ3ZlbG9jaXR5JywgJ2ZyaWN0aW9uJywgJ3NwcmluZycsICdhY2NlbGVyYXRpb24nXTtcbmNvbnN0IG51bU51bWVyaWNhbFZhbHVlcyA9IG51bWVyaWNhbFZhbHVlcy5sZW5ndGg7XG5jb25zdCBkZWZhdWx0VmFsdWUgPSB7XG4gICAgY3VycmVudDogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBzcGVlZDogMCxcbiAgICBmcmFtZUNoYW5nZTogMFxufTtcblxuY29uc3QgY2hlY2tOdW1lcmljYWxWYWx1ZSA9IChuYW1lKSA9PiBudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xO1xuXG4vKlxuICAgIENoZWNrIFJvbGUgdHlwZU1hcHMgdG8gc2VlIGlmIHRoaXMgdmFsdWUgbmFtZSBoYXMgYmVlbiBtYXBwZWRcbiAgICB0byBhIHNwZWNpZmljIHZhbHVlIHR5cGVcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybnMgW3N0cmluZ106IFZhbHVlIHR5cGVcbiovXG5mdW5jdGlvbiBjaGVja1JvbGVzKG5hbWUsIHJvbGVzKSB7XG4gICAgbGV0IHZhbHVlVHlwZTtcblxuICAgIGVhY2gocm9sZXMsIChrZXksIHJvbGUpID0+IHtcbiAgICAgICAgaWYgKHJvbGUuX3R5cGVNYXApIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJvbGUuX3R5cGVNYXBbcm9sZS5tYXAobmFtZSldIHx8IHZhbHVlVHlwZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBDaGVjayB2YWx1ZSBmb3Igc3BlY2lhbCB0eXBlXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJucyBbc3RyaW5nIHx8IGZhbHNlXVxuKi9cbmZ1bmN0aW9uIGNoZWNrVmFsdWVUeXBlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlLCBzY29wZSwgdmFsdWVOYW1lKSB7XG4gICAgdmFyIHZhbHVlVHlwZTtcblxuICAgIC8vIENoZWNrIGV4aXN0aW5nIHZhbHVlIGZvciB0eXBlIGFscmVhZHkgc2V0XG4gICAgaWYgKGV4aXN0aW5nVmFsdWUgJiYgZXhpc3RpbmdWYWx1ZS50eXBlKSB7XG4gICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcbiAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPciBjaGVjayBSb2xlIF90eXBlTWFwIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKHNjb3BlLnJvbGVzKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSBjaGVja1JvbGVzKHZhbHVlTmFtZSwgc2NvcGUucm9sZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluYWxseSBydW4gdGVzdHNcbiAgICAgICAgaWYgKCF2YWx1ZVR5cGUgJiYgdXRpbHMuaXNTdHJpbmcobmV3VmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlVHlwZXNNYW5hZ2VyLnRlc3QobmV3VmFsdWUuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVUeXBlO1xufVxuXG4vKlxuICAgIFJlc29sdmUgYSBwcm9wZXJ0eVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb24gfHwgbnVtYmVyXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEByZXR1cm5zIFtudW1iZXJdXG4qL1xuZnVuY3Rpb24gcmVzb2x2ZShuYW1lLCBwcm9wLCB2YWx1ZSwgc2NvcGUpIHtcbiAgICBsZXQgaXNOdW1lcmljYWxWYWx1ZSA9IGNoZWNrTnVtZXJpY2FsVmFsdWUobmFtZSk7XG5cbiAgICAvLyBJZiBmdW5jdGlvbiwgcmVzb2x2ZVxuICAgIGlmICh1dGlscy5pc0Z1bmMocHJvcCkgJiYgaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICBwcm9wID0gcHJvcC5jYWxsKHNjb3BlLCBzY29wZSk7XG4gICAgfVxuXG4gICAgLy8gSWYgc3RyaW5nLCBjaGVjayBmb3IgcmVsYXRpdmUgbnVtYmVycyBhbmQgdW5pdHNcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcCkpIHtcbiAgICAgICAgLy8gSWYgcmVsYXRpdmUgdmFsdWVcbiAgICAgICAgaWYgKHByb3AuaW5kZXhPZignPScpID4gMCkge1xuICAgICAgICAgICAgcHJvcCA9IGNhbGMucmVsYXRpdmVWYWx1ZSh2YWx1ZS5jdXJyZW50LCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgICAgIHNwbGl0VW5pdChwcm9wLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICBwcm9wID0gcGFyc2VGbG9hdChwcm9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbn1cblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gc3ViLXZhbHVlc1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFt2YWx1ZVR5cGVIYW5kbGVyXVxuICAgIEByZXR1cm5zIFtvYmplY3RdXG4qL1xuZnVuY3Rpb24gc3BsaXQobmFtZSwgdmFsdWUsIHNjb3BlLCB2YWx1ZVR5cGVIYW5kbGVyKSB7XG4gICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICBsZXQgcHJvcE5hbWUgPSBudW1lcmljYWxWYWx1ZXNbaV07XG4gICAgICAgIGxldCBzcGxpdFByb3AgPSB7fTtcblxuICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVQcm9wID0gdmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIGZpcnN0IHJlc29sdmUgdGhpcywgcmVzb2x2ZVxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVQcm9wID0gdmFsdWVQcm9wLmNhbGwoc2NvcGUsIHNjb3BlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwbGl0UHJvcCA9IHZhbHVlVHlwZUhhbmRsZXIuc3BsaXQodmFsdWVQcm9wKTtcblxuICAgICAgICAgICAgLy8gQXNzaWduIHNwbGl0IHByb3BlcnRpZXMgdG8gZWFjaCBjaGlsZCB2YWx1ZVxuICAgICAgICAgICAgZWFjaChzcGxpdFByb3AsIChrZXksIHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHZhbHVlIGlmIG5vbmUgZXhpc3RzXG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZXNba2V5XSA9IHNwbGl0VmFsdWVzW2tleV0gfHwgdXRpbHMuY29weSh2YWx1ZVR5cGVzTWFuYWdlci5kZWZhdWx0UHJvcHModmFsdWUudHlwZSwga2V5KSk7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZXNba2V5XVtwcm9wTmFtZV0gPSBwcm9wO1xuXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNwbGl0UHJvcFtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBzcGxpdFVuaXQoc3BsaXRWYWx1ZXNba2V5XVtwcm9wTmFtZV0sIHNwbGl0VmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWVzO1xufVxuXG4vKlxuICAgIFNwbGl0IHZhbHVlIGludG8gbnVtYmVyIGFuZCB1bml0LCBhbmQgc2V0IHVuaXQgdG8gdmFsdWVcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0VW5pdChwcm9wZXJ0eSwgaG9zdFZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmlzTnVtKHByb3BlcnR5KSkgeyByZXR1cm4gcHJvcGVydHk7IH1cbiAgICBsZXQgcmV0dXJuVmFsID0gcHJvcGVydHksXG4gICAgICAgIHsgdmFsdWUsIHVuaXQgfSA9IHV0aWxzLnNwbGl0VmFsVW5pdChwcm9wZXJ0eSk7XG5cbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5WYWwgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgICAgIGhvc3RWYWx1ZS51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWw7XG59XG5cbi8qXG4gICAgUHJlcHJvY2VzcyBpbmNvbWluZyB2YWx1ZXMsIHNwbGl0dGluZyBub24tbnVtZXJpY2FsIHZhbHVlc1xuICAgIGludG8gc3ViLXZhbHVlcyBpZSBoZXhcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuKi9cbmZ1bmN0aW9uIHByZXByb2Nlc3MoZXhpc3RpbmcsIGluY29taW5nLCBzY29wZSwgZGVmYXVsdFByb3ApIHtcbiAgICB2YXIgdmFsdWVzID0ge307XG5cbiAgICBlYWNoKGluY29taW5nLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgZXhpc3RpbmdWYWx1ZSA9IGV4aXN0aW5nW2tleV0sXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0UHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHZhbHVlIGRvZXNuJ3QgaGF2ZSBhIHNwZWNpYWwgdHlwZSwgY2hlY2sgZm9yIG9uZVxuICAgICAgICBuZXdWYWx1ZS50eXBlID0gY2hlY2tWYWx1ZVR5cGUoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUsIHNjb3BlLCBrZXkpO1xuXG4gICAgICAgIHZhbHVlc1trZXldID0gbmV3VmFsdWU7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHR5cGUgcHJvcGVydHksIHNwbGl0L2Fzc2lnbiBkZWZhdWx0IHByb3BzXG4gICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICBsZXQgdHlwZUhhbmRsZXIgPSB2YWx1ZVR5cGVzTWFuYWdlcltuZXdWYWx1ZS50eXBlXTtcblxuICAgICAgICAgICAgLy8gSWYgdmFsdWVUeXBlIGhhbmRsZXIgaGFzIGEgc3BsaXQgZnVuY3Rpb24sIHNwbGl0IHRoaXMgdmFsdWVcbiAgICAgICAgICAgIGlmICh0eXBlSGFuZGxlci5zcGxpdCkge1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdFZhbHVlcyA9IHNwbGl0KGtleSwgbmV3VmFsdWUsIHNjb3BlLCB0eXBlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgICAgIGVhY2goc3BsaXRWYWx1ZXMsIChjaGlsZE5hbWUsIGNoaWxkVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWFjaChuZXdWYWx1ZSwgKGtleSAsdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBncmVhdCBpcyBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdhY3Rpb24nICYmIGNoaWxkVmFsdWVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucGFyZW50ID0gY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gY2hpbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5bY2hpbGROYW1lXSA9IHZhbHVlc1trZXkgKyBjaGlsZE5hbWVdID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlSGFuZGxlci50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IGV4aXN0aW5nVmFsdWUgPyBleGlzdGluZ1ZhbHVlLnRlbXBsYXRlIDogdHlwZUhhbmRsZXIudGVtcGxhdGUobmV3VmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPciBqdXN0IGFzc2lnbiBkZWZhdWx0IHByb3BlcnRpZXMgZm9yIHRoaXMgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB1dGlscy5tZXJnZSh2YWx1ZVR5cGVzTWFuYWdlci5kZWZhdWx0UHJvcHMobmV3VmFsdWUudHlwZSwga2V5KSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qXG4gICAgICAgIEZsaXAgdmFsdWUgdGFyZ2V0L29yaWdpblxuICAgICovXG4gICAgZmxpcDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAodmFsdWUudGFyZ2V0ICE9PSB1bmRlZmluZWQpID8gdmFsdWUudGFyZ2V0IDogdmFsdWUuY3VycmVudDtcbiAgICAgICAgdmFsdWUudGFyZ2V0ID0gdmFsdWUudG8gPSB2YWx1ZS5vcmlnaW47XG4gICAgICAgIHZhbHVlLm9yaWdpbiA9IHRhcmdldDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgTWVyZ2UgZXhpc3RpbmcgYW5kIGluY29taW5nIHZhbHVlcywgcmVzb2x2aW5nIHByb3BlcnRpZXNcbiAgICAgICAgc2V0IGFzIGZ1bmN0aW9ucyBhbmQgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzIGllIGhleFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbb2JqZWN0XTogTmV3IHZhbHVlcyBvYmplY3RcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIGluaGVyaXQsIGRlZmF1bHRQcm9wLCBzY29wZSkge1xuICAgICAgICBleGlzdGluZyA9IGV4aXN0aW5nIHx8IHt9O1xuICAgICAgICBkZWZhdWx0UHJvcCA9IGRlZmF1bHRQcm9wIHx8ICdjdXJyZW50JztcbiAgICAgICAgbGV0IHByZXByb2Nlc3NlZCA9IHByZXByb2Nlc3MoZXhpc3RpbmcsIGluY29taW5nLCBzY29wZSwgZGVmYXVsdFByb3ApO1xuXG4gICAgICAgIGVhY2gocHJlcHJvY2Vzc2VkLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gZXhpc3Rpbmdba2V5XSB8fCB1dGlscy5jb3B5KGRlZmF1bHRWYWx1ZSksXG4gICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSAodmFsdWUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjdGlvblZhbHVlID0gaW5oZXJpdC5hY3Rpb24gPyBpbmhlcml0LmFjdGlvbi5nZXREZWZhdWx0VmFsdWUoKSA6IHt9O1xuXG4gICAgICAgICAgICB2YWx1ZS5hY3Rpb24gPSBpbmhlcml0LmFjdGlvbjtcblxuICAgICAgICAgICAgZWFjaChkZWZhdWx0QWN0aW9uVmFsdWUsIChwcm9wTmFtZSwgZGVmYXVsdEFjdGlvblByb3ApID0+IHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSAoaW5oZXJpdC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgIXZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkgPyBpbmhlcml0W3Byb3BOYW1lXSA6IGRlZmF1bHRBY3Rpb25Qcm9wO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVhY2godmFsdWUsICh2YWx1ZU5hbWUsIHZhbHVlUHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIHByb3BlcnR5IGlzIG5vdCB1bmRlZmluZWQgb3IgYSBudW1iZXIsIHJlc29sdmVcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgIWlzTnVtKHZhbHVlUHJvcCkgJiYgIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcCA9IHJlc29sdmUodmFsdWVOYW1lLCB2YWx1ZVByb3AsIG5ld1ZhbHVlLCBzY29wZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbdmFsdWVOYW1lXSA9IHZhbHVlUHJvcDtcblxuICAgICAgICAgICAgICAgIC8vIFNldCBpbnRlcm5hbCB0YXJnZXQgaWYgdGhpcyBwcm9wZXJ0eSBpcyAndG8nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlTmFtZSA9PT0gJ3RvJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50YXJnZXQgPSBuZXdWYWx1ZS50bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3VmFsdWUub3JpZ2luID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIG5ld1ZhbHVlLmhhc1JhbmdlID0gKGlzTnVtKG5ld1ZhbHVlLm1pbikgfHwgaXNOdW0obmV3VmFsdWUubWF4KSkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICAgIGV4aXN0aW5nW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZU9yZGVyKGtleSwgdXRpbHMuaGFzKG5ld1ZhbHVlLCAnd2F0Y2gnKSwgaGFzQ2hpbGRyZW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxufTsiXX0=