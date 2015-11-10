'use strict';

var valueTypesManager = require('../value-types/manager'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    isNum = utils.isNum,
    each = utils.each;

var numericalValues = ['current', 'to', 'min', 'max', 'velocity', 'friction', 'spring'],
    numNumericalValues = numericalValues.length,
    defaultValue = {
    current: 0,
    velocity: 0,
    speed: 0,
    frameChange: 0
};

function checkNumericalValue(name) {
    return numericalValues.indexOf(name) > -1;
}

/*
    Check Role typeMaps to see if this value name has been mapped
    to a specific value type

    @param [string]
    @param [array]
    @returns [string]: Value type
*/
function checkRoles(name, roles) {
    var valueType;

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

    var _loop = function _loop() {
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
        newValue.watch = utils.isString(newValue.watch) ? newValue.watch : undefined;

        values[key] = newValue;

        // If we have a type property, split/assign default props
        if (newValue.type) {
            var typeHandler = valueTypesManager[newValue.type];

            // If valueType handler has a split function, split this value
            if (typeHandler.split) {
                var splitValues = split(key, newValue, scope, typeHandler);
                newValue.children = {};

                each(splitValues, function (childName, childValue) {
                    childValue = utils.merge(newValue, childValue);
                    childValue.parent = childValue.name = key;
                    childValue.propName = childName;

                    delete childValue.type;
                    delete childValue.children;

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
    flip: function flip(value) {
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
    process: function process(existing, incoming, inherit, defaultProp, scope) {
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
            scope.updateOrder(key, utils.isString(newValue.watch), hasChildren);
        });

        return existing;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUM7SUFDckQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDN0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQ25CLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixJQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztJQUNyRixrQkFBa0IsR0FBRyxlQUFlLENBQUMsTUFBTTtJQUMzQyxZQUFZLEdBQUc7QUFDWCxXQUFPLEVBQUUsQ0FBQztBQUNWLFlBQVEsRUFBRSxDQUFDO0FBQ1gsU0FBSyxFQUFFLENBQUM7QUFDUixlQUFXLEVBQUUsQ0FBQztDQUNqQixDQUFDOztBQUVOLFNBQVMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO0FBQy9CLFdBQVEsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRTtDQUMvQzs7Ozs7Ozs7OztBQUFBLEFBVUQsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUM3QixRQUFJLFNBQVMsQ0FBQzs7QUFFZCxRQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUksRUFBSztBQUN2QixZQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixxQkFBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztTQUMxRDtLQUNKLENBQUMsQ0FBQzs7QUFFSCxXQUFPLFNBQVMsQ0FBQztDQUNwQjs7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cEIsNEJBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDakM7YUFDSixDQUFDLENBQUM7O0FBRUgsb0JBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUNuQyxvQkFBUSxDQUFDLFFBQVEsR0FBRyxBQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUVoRixvQkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUN6QixpQkFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdkUsQ0FBQyxDQUFDOztBQUVILGVBQU8sUUFBUSxDQUFDO0tBQ25CO0NBQ0osQ0FBQyIsImZpbGUiOiJ2YWx1ZS1vcGVyYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbHVlVHlwZXNNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgaXNOdW0gPSB1dGlscy5pc051bSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaDtcblxuY29uc3QgbnVtZXJpY2FsVmFsdWVzID0gWydjdXJyZW50JywgJ3RvJywgJ21pbicsICdtYXgnLCAndmVsb2NpdHknLCAnZnJpY3Rpb24nLCAnc3ByaW5nJ10sXG4gICAgbnVtTnVtZXJpY2FsVmFsdWVzID0gbnVtZXJpY2FsVmFsdWVzLmxlbmd0aCxcbiAgICBkZWZhdWx0VmFsdWUgPSB7XG4gICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgZnJhbWVDaGFuZ2U6IDBcbiAgICB9O1xuXG5mdW5jdGlvbiBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpIHtcbiAgICByZXR1cm4gKG51bWVyaWNhbFZhbHVlcy5pbmRleE9mKG5hbWUpID4gLTEpO1xufVxuXG4vKlxuICAgIENoZWNrIFJvbGUgdHlwZU1hcHMgdG8gc2VlIGlmIHRoaXMgdmFsdWUgbmFtZSBoYXMgYmVlbiBtYXBwZWRcbiAgICB0byBhIHNwZWNpZmljIHZhbHVlIHR5cGVcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybnMgW3N0cmluZ106IFZhbHVlIHR5cGVcbiovXG5mdW5jdGlvbiBjaGVja1JvbGVzKG5hbWUsIHJvbGVzKSB7XG4gICAgdmFyIHZhbHVlVHlwZTtcblxuICAgIGVhY2gocm9sZXMsIChrZXksIHJvbGUpID0+IHtcbiAgICAgICAgaWYgKHJvbGUuX3R5cGVNYXApIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJvbGUuX3R5cGVNYXBbcm9sZS5tYXAobmFtZSldIHx8IHZhbHVlVHlwZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBDaGVjayB2YWx1ZSBmb3Igc3BlY2lhbCB0eXBlXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJucyBbc3RyaW5nIHx8IGZhbHNlXVxuKi9cbmZ1bmN0aW9uIGNoZWNrVmFsdWVUeXBlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlLCBzY29wZSwgdmFsdWVOYW1lKSB7XG4gICAgdmFyIHZhbHVlVHlwZTtcblxuICAgIC8vIENoZWNrIGV4aXN0aW5nIHZhbHVlIGZvciB0eXBlIGFscmVhZHkgc2V0XG4gICAgaWYgKGV4aXN0aW5nVmFsdWUgJiYgZXhpc3RpbmdWYWx1ZS50eXBlKSB7XG4gICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcbiAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPciBjaGVjayBSb2xlIF90eXBlTWFwIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKHNjb3BlLnJvbGVzKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSBjaGVja1JvbGVzKHZhbHVlTmFtZSwgc2NvcGUucm9sZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluYWxseSBydW4gdGVzdHNcbiAgICAgICAgaWYgKCF2YWx1ZVR5cGUgJiYgdXRpbHMuaXNTdHJpbmcobmV3VmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlVHlwZXNNYW5hZ2VyLnRlc3QobmV3VmFsdWUuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVUeXBlO1xufVxuXG4vKlxuICAgIFJlc29sdmUgYSBwcm9wZXJ0eVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb24gfHwgbnVtYmVyXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEByZXR1cm5zIFtudW1iZXJdXG4qL1xuZnVuY3Rpb24gcmVzb2x2ZShuYW1lLCBwcm9wLCB2YWx1ZSwgc2NvcGUpIHtcbiAgICBsZXQgaXNOdW1lcmljYWxWYWx1ZSA9IGNoZWNrTnVtZXJpY2FsVmFsdWUobmFtZSk7XG5cbiAgICAvLyBJZiBmdW5jdGlvbiwgcmVzb2x2ZVxuICAgIGlmICh1dGlscy5pc0Z1bmMocHJvcCkgJiYgaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICBwcm9wID0gcHJvcC5jYWxsKHNjb3BlLCBzY29wZSk7XG4gICAgfVxuXG4gICAgLy8gSWYgc3RyaW5nLCBjaGVjayBmb3IgcmVsYXRpdmUgbnVtYmVycyBhbmQgdW5pdHNcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcCkpIHtcbiAgICAgICAgLy8gSWYgcmVsYXRpdmUgdmFsdWVcbiAgICAgICAgaWYgKHByb3AuaW5kZXhPZignPScpID4gMCkge1xuICAgICAgICAgICAgcHJvcCA9IGNhbGMucmVsYXRpdmVWYWx1ZSh2YWx1ZS5jdXJyZW50LCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgICAgIHNwbGl0VW5pdChwcm9wLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICBwcm9wID0gcGFyc2VGbG9hdChwcm9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbn1cblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gc3ViLXZhbHVlc1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFt2YWx1ZVR5cGVIYW5kbGVyXVxuICAgIEByZXR1cm5zIFtvYmplY3RdXG4qL1xuZnVuY3Rpb24gc3BsaXQobmFtZSwgdmFsdWUsIHNjb3BlLCB2YWx1ZVR5cGVIYW5kbGVyKSB7XG4gICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICBsZXQgcHJvcE5hbWUgPSBudW1lcmljYWxWYWx1ZXNbaV07XG4gICAgICAgIGxldCBzcGxpdFByb3AgPSB7fTtcblxuICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVQcm9wID0gdmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIGZpcnN0IHJlc29sdmUgdGhpcywgcmVzb2x2ZVxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVQcm9wID0gdmFsdWVQcm9wLmNhbGwoc2NvcGUsIHNjb3BlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwbGl0UHJvcCA9IHZhbHVlVHlwZUhhbmRsZXIuc3BsaXQodmFsdWVQcm9wKTtcblxuICAgICAgICAgICAgLy8gQXNzaWduIHNwbGl0IHByb3BlcnRpZXMgdG8gZWFjaCBjaGlsZCB2YWx1ZVxuICAgICAgICAgICAgZWFjaChzcGxpdFByb3AsIChrZXksIHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHZhbHVlIGlmIG5vbmUgZXhpc3RzXG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZXNba2V5XSA9IHNwbGl0VmFsdWVzW2tleV0gfHwgdXRpbHMuY29weSh2YWx1ZVR5cGVzTWFuYWdlci5kZWZhdWx0UHJvcHModmFsdWUudHlwZSwga2V5KSk7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZXNba2V5XVtwcm9wTmFtZV0gPSBwcm9wO1xuXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNwbGl0UHJvcFtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBzcGxpdFVuaXQoc3BsaXRWYWx1ZXNba2V5XVtwcm9wTmFtZV0sIHNwbGl0VmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWVzO1xufVxuXG4vKlxuICAgIFNwbGl0IHZhbHVlIGludG8gbnVtYmVyIGFuZCB1bml0LCBhbmQgc2V0IHVuaXQgdG8gdmFsdWVcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0VW5pdChwcm9wZXJ0eSwgaG9zdFZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmlzTnVtKHByb3BlcnR5KSkgeyByZXR1cm4gcHJvcGVydHk7IH1cbiAgICBsZXQgcmV0dXJuVmFsID0gcHJvcGVydHksXG4gICAgICAgIHsgdmFsdWUsIHVuaXQgfSA9IHV0aWxzLnNwbGl0VmFsVW5pdChwcm9wZXJ0eSk7XG5cbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5WYWwgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgICAgIGhvc3RWYWx1ZS51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWw7XG59XG5cbi8qXG4gICAgUHJlcHJvY2VzcyBpbmNvbWluZyB2YWx1ZXMsIHNwbGl0dGluZyBub24tbnVtZXJpY2FsIHZhbHVlc1xuICAgIGludG8gc3ViLXZhbHVlcyBpZSBoZXhcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuKi9cbmZ1bmN0aW9uIHByZXByb2Nlc3MoZXhpc3RpbmcsIGluY29taW5nLCBzY29wZSwgZGVmYXVsdFByb3ApIHtcbiAgICB2YXIgdmFsdWVzID0ge307XG5cbiAgICBlYWNoKGluY29taW5nLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgZXhpc3RpbmdWYWx1ZSA9IGV4aXN0aW5nW2tleV0sXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0UHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHZhbHVlIGRvZXNuJ3QgaGF2ZSBhIHNwZWNpYWwgdHlwZSwgY2hlY2sgZm9yIG9uZVxuICAgICAgICBuZXdWYWx1ZS50eXBlID0gY2hlY2tWYWx1ZVR5cGUoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUsIHNjb3BlLCBrZXkpO1xuICAgICAgICBuZXdWYWx1ZS53YXRjaCA9IHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLndhdGNoKSA/IG5ld1ZhbHVlLndhdGNoIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHZhbHVlc1trZXldID0gbmV3VmFsdWU7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHR5cGUgcHJvcGVydHksIHNwbGl0L2Fzc2lnbiBkZWZhdWx0IHByb3BzXG4gICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICBsZXQgdHlwZUhhbmRsZXIgPSB2YWx1ZVR5cGVzTWFuYWdlcltuZXdWYWx1ZS50eXBlXTtcblxuICAgICAgICAgICAgLy8gSWYgdmFsdWVUeXBlIGhhbmRsZXIgaGFzIGEgc3BsaXQgZnVuY3Rpb24sIHNwbGl0IHRoaXMgdmFsdWVcbiAgICAgICAgICAgIGlmICh0eXBlSGFuZGxlci5zcGxpdCkge1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdFZhbHVlcyA9IHNwbGl0KGtleSwgbmV3VmFsdWUsIHNjb3BlLCB0eXBlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgICAgIGVhY2goc3BsaXRWYWx1ZXMsIChjaGlsZE5hbWUsIGNoaWxkVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZSA9IHV0aWxzLm1lcmdlKG5ld1ZhbHVlLCBjaGlsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5wYXJlbnQgPSBjaGlsZFZhbHVlLm5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucHJvcE5hbWUgPSBjaGlsZE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5bY2hpbGROYW1lXSA9IHZhbHVlc1trZXkgKyBjaGlsZE5hbWVdID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlSGFuZGxlci50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IGV4aXN0aW5nVmFsdWUgPyBleGlzdGluZ1ZhbHVlLnRlbXBsYXRlIDogdHlwZUhhbmRsZXIudGVtcGxhdGUobmV3VmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPciBqdXN0IGFzc2lnbiBkZWZhdWx0IHByb3BlcnRpZXMgZm9yIHRoaXMgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB1dGlscy5tZXJnZSh2YWx1ZVR5cGVzTWFuYWdlci5kZWZhdWx0UHJvcHMobmV3VmFsdWUudHlwZSwga2V5KSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qXG4gICAgICAgIEZsaXAgdmFsdWUgdGFyZ2V0L29yaWdpblxuICAgICovXG4gICAgZmxpcDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAodmFsdWUudGFyZ2V0ICE9PSB1bmRlZmluZWQpID8gdmFsdWUudGFyZ2V0IDogdmFsdWUuY3VycmVudDtcbiAgICAgICAgdmFsdWUudGFyZ2V0ID0gdmFsdWUudG8gPSB2YWx1ZS5vcmlnaW47XG4gICAgICAgIHZhbHVlLm9yaWdpbiA9IHRhcmdldDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgTWVyZ2UgZXhpc3RpbmcgYW5kIGluY29taW5nIHZhbHVlcywgcmVzb2x2aW5nIHByb3BlcnRpZXNcbiAgICAgICAgc2V0IGFzIGZ1bmN0aW9ucyBhbmQgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzIGllIGhleFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbb2JqZWN0XTogTmV3IHZhbHVlcyBvYmplY3RcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIGluaGVyaXQsIGRlZmF1bHRQcm9wLCBzY29wZSkge1xuICAgICAgICBleGlzdGluZyA9IGV4aXN0aW5nIHx8IHt9O1xuICAgICAgICBkZWZhdWx0UHJvcCA9IGRlZmF1bHRQcm9wIHx8ICdjdXJyZW50JztcbiAgICAgICAgbGV0IHByZXByb2Nlc3NlZCA9IHByZXByb2Nlc3MoZXhpc3RpbmcsIGluY29taW5nLCBzY29wZSwgZGVmYXVsdFByb3ApO1xuXG4gICAgICAgIGVhY2gocHJlcHJvY2Vzc2VkLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gZXhpc3Rpbmdba2V5XSB8fCB1dGlscy5jb3B5KGRlZmF1bHRWYWx1ZSksXG4gICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSAodmFsdWUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjdGlvblZhbHVlID0gaW5oZXJpdC5hY3Rpb24gPyBpbmhlcml0LmFjdGlvbi5nZXREZWZhdWx0VmFsdWUoKSA6IHt9O1xuXG4gICAgICAgICAgICB2YWx1ZS5hY3Rpb24gPSBpbmhlcml0LmFjdGlvbjtcblxuICAgICAgICAgICAgZWFjaChkZWZhdWx0QWN0aW9uVmFsdWUsIChwcm9wTmFtZSwgZGVmYXVsdEFjdGlvblByb3ApID0+IHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSAoaW5oZXJpdC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgIXZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkgPyBpbmhlcml0W3Byb3BOYW1lXSA6IGRlZmF1bHRBY3Rpb25Qcm9wO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVhY2godmFsdWUsICh2YWx1ZU5hbWUsIHZhbHVlUHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIHByb3BlcnR5IGlzIG5vdCB1bmRlZmluZWQgb3IgYSBudW1iZXIsIHJlc29sdmVcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgIWlzTnVtKHZhbHVlUHJvcCkgJiYgIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcCA9IHJlc29sdmUodmFsdWVOYW1lLCB2YWx1ZVByb3AsIG5ld1ZhbHVlLCBzY29wZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbdmFsdWVOYW1lXSA9IHZhbHVlUHJvcDtcblxuICAgICAgICAgICAgICAgIC8vIFNldCBpbnRlcm5hbCB0YXJnZXQgaWYgdGhpcyBwcm9wZXJ0eSBpcyAndG8nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlTmFtZSA9PT0gJ3RvJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50YXJnZXQgPSBuZXdWYWx1ZS50bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3VmFsdWUub3JpZ2luID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIG5ld1ZhbHVlLmhhc1JhbmdlID0gKGlzTnVtKG5ld1ZhbHVlLm1pbikgfHwgaXNOdW0obmV3VmFsdWUubWF4KSkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICAgIGV4aXN0aW5nW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZU9yZGVyKGtleSwgdXRpbHMuaXNTdHJpbmcobmV3VmFsdWUud2F0Y2gpLCBoYXNDaGlsZHJlbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBleGlzdGluZztcbiAgICB9XG59OyJdfQ==