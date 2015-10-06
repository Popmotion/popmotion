var valueTypesManager = require('../value-types/manager'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    isNum = utils.isNum,
    each = utils.each;

const numericalValues = ['current', 'to', 'min', 'max', 'velocity', 'friction', 'spring'],
    numNumericalValues = numericalValues.length,
    defaultValue = {
        current: 0,
        velocity: 0,
        speed: 0,
        frameChange: 0
    };

function checkNumericalValue(name) {
    return (numericalValues.indexOf(name) > -1);
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

    each(roles, (key, role) => {
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
    let isNumericalValue = checkNumericalValue(name);

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

    for (; i < numNumericalValues; i++) {
        let propName = numericalValues[i];
        let splitProp = {};

        if (value.hasOwnProperty(propName)) {
            let valueProp = value[propName];

            // If we need to first resolve this, resolve
            if (utils.isFunc(valueProp)) {
                valueProp = valueProp.call(scope, scope);
            }

            if (!utils.isString(valueProp)) {
                continue;
            }

            splitProp = valueTypeHandler.split(valueProp);

            // Assign split properties to each child value
            each(splitProp, (key, prop) => {
                // Create new value if none exists
                splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
                splitValues[key][propName] = prop;

                if (utils.isString(splitProp[key])) {
                    splitUnit(splitValues[key][propName], splitValues[key]);
                }
            });
        }
    }

    return splitValues;
}

/*
    Split value into number and unit, and set unit to value

    @param [string]
    @param [object]
*/
function splitUnit(property, hostValue) {
    if (utils.isNum(property)) { return property; }
    let returnVal = property,
        { value, unit } = utils.splitValUnit(property);

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

    each(incoming, (key, value) => {
        let existingValue = existing[key],
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
            let typeHandler = valueTypesManager[newValue.type];

            // If valueType handler has a split function, split this value
            if (typeHandler.split) {
                let splitValues = split(key, newValue, scope, typeHandler);
                newValue.children = {};

                each(splitValues, (childName, childValue) => {
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
    flip: function (value) {
        var target = (value.target !== undefined) ? value.target : value.current;
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
        let preprocessed = preprocess(existing, incoming, scope, defaultProp);

        each(preprocessed, (key, value) => {
            let newValue = existing[key] || utils.copy(defaultValue),
                hasChildren = (value.children !== undefined),
                defaultActionValue = inherit.action ? inherit.action.getDefaultValue() : {};

            value.action = inherit.action;

            each(defaultActionValue, (propName, defaultActionProp) => {
                newValue[propName] = (inherit.hasOwnProperty(propName) && !value.hasOwnProperty(propName)) ? inherit[propName] : defaultActionProp;
            });

            each(value, (valueName, valueProp) => {
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
            newValue.hasRange = (isNum(newValue.min) || isNum(newValue.max)) ? true : false;

            existing[key] = newValue;
            scope.updateOrder(key, utils.isString(newValue.watch), hasChildren);
        });

        return existing;
    }
};