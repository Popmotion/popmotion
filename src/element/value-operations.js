"use strict";

var utils = require('../inc/utils'),
    actionsManager = require('../actions/manager'),
    valueTypesManager = require('../value-types/manager'),
    routeManager = require('../routes/manager'),

    DEFAULT_NAMESPACE = 'values',
    numericalValues = ['current', 'to', 'start', 'min', 'max'],
    numNumericalValues = numericalValues.length,

    /*
        Perform operation on set of values
        
        @parma [string]: Name of operation
        @param [object]: Value object
    */
    valueOps = function (op, values) {
        var key = '';

        for (key in values) {
            this[op](values[key]);
        }

        return this;
    };

/*
    Reset the value current to its origin

    @param [object]: Value object
*/
valueOps.reset = function (value) {
    this.retarget(value);
    value.current = value.origin;
};

/*
    Set value origin property to current value
    
    @param [object]: Value object
*/
valueOps.resetOrigin = function (value) {
    value.origin = value.current;
};

/*
    Set value to property back to target
    
    @param [object]: Value object
*/
valueOps.retarget = function (value) {
    value.to = value.target;
};

/*
    Swap value to and origin property
    
    @param [object]: Value object
*/
valueOps.flip = function (value) {
    var newTo = value.origin,
        newOrigin = (value.target !== undefined) ? value.target : value.current;

    value.to = newTo;
    value.origin = newOrigin;
};

/*
    Returns an initial value state

    @param [number] (optional): Initial current
    @return [object]: Default value state
*/
valueOps.initialState = function (start) {
    return {
        // [number]: Current value
        current: start || 0,
        
        // [number]: Change per second
        speed: 0,
        
        // [number]: Change per second plus direction (ie can be negative)
        velocity: 0,
        
        // [number]: Amount value has changed in the most recent frame
        frameChange: 0
    };
};

/*
    Split value into sub-values

    @param [object]: Base value properties
*/
valueOps.split = function (name, value) {
    var valueType = valueTypesManager[value.type],
        splitValues = {},
        splitProperty = {},
        propertyName = '',
        key = '',
        i = 0;

    for (; i < numNumericalValues; i++) {
        propertyName = numericalValues[i];

        if (value.hasOwnProperty(propertyName)) {
            if (typeof value[propertyName] == 'function') {
                value[propertyName] = value[propertyName].call(element);
            }
            splitProperty = valueType.split(value[propertyName]);

            // Assign properties to each new value
            for (key in splitProperty) {
                // TODO replace object with default values for this type
                splitValues[key] = splitValues[key] || valueType.defaultProps();
                splitValues[key][propertyName] = splitProperty[key];
            }
        }
    }

    return splitValues;
};

/*
    Resolve property

    @param [string || number || function]: Property
    @param [object]: Parent value
    @param [Element]: Parent Element
*/
valueOps.resolve = function (property, value, element) {
    var splitUnitValue = {};

    // If function, resolve function
    if (typeof property == 'function') {
        property = property.call(element, value.current);
    }

    // Check for relative value (ie '+=10')
    if (property.indexOf && property.indexOf('=') > 0) {
        property = calc.relativeValue(currentValue, property);
    }

    // Check for unit property
    if (typeof property == 'string') {
        splitUnitValue = utils.splitValUnit(property);

        if (!isNaN(splitUnitValue.value)) {
            property = splitUnitValue.value;
            value.unit = splitUnitValue.unit;
        }
    }

    return property;
};

/*
    Process new values
*/
valueOps.process = function (values, element, namespace, defaultValueProp) {
    var key = '',
        propKey = '',
        namespacedKey = '',
        valueIsObj = false,
        processedValues = {},
        processedValue = {},
        splitValues = {},
        childValue = {},
        thisValue = {},
        elementValues = element.values,
        defaultProps = actionsManager[element.action].valueDefaults;

    namespace = namespace || DEFAULT_NAMESPACE;
    defaultValueProp = defaultValueProp || 'current';

    // Preprocess values to set
    for (key in values) {
        valueIsObj = utils.isObj(values[key]);
        thisValue = valueIsObj ? values[key] : {};

        // If this value isn't an object already, set it to the default property
        if (!valueIsObj) {
            thisValue[defaultValueProp] = values[key];
        }

        // Check if value doesn't have a type property, check routeManager
        if (!thisValue.type && routeManager[namespace].typeMap) {
            thisValue.type = routeManager[namespace].typeMap[key] || false;
        }

        // Set value
        processedValues[key] = thisValue;

        // If this value has a type, make children values
        if (thisValue.type) {
            thisValue.children = {};
            splitValues = this.split(key, thisValue);

            for (propKey in splitValues) {
                childValue = thisValue.children[propKey] = processedValues[key + propKey] = utils.merge(thisValue, splitValues[propKey]);
                childValue.parent = key;
                delete childValue.type;
                delete childValue.children;
            }
        }
    }

    // Set preprocessed value
    for (key in processedValues) {
        processedValue = processedValues[key];
        thisValue = elementValues[key] || this.initialState(processedValue.start);
        namespacedKey = (namespace !== DEFAULT_NAMESPACE) ? key + '.' + namespace : key;

        // Inherit properties from Element
        for (propKey in defaultProps) {
            if (element.hasOwnProperty(propKey)) {
                elementValues[key] = element[propKey];
            }
        }

        // Loop through all properties and set
        for (propKey in processedValue) {
            processedValue[propKey] = (typeof processedValue[propKey] !== 'number') ? this.resolve(processedValue[propKey], thisValue, element) : processedValue[propKey];
            thisValue[propKey] = processedValue[propKey];
        }

        // Set hasRange to true if min and max are numbers
        thisValue.hasRange = (utils.isNum(thisValue.min) && utils.isNum(thisValue.max)) ? true  : false;

        // Assign thisValue to elementValues[key]
        elementValues[namespacedKey] = thisValue;

        // Update order
        element.updateOrder(namespacedKey, utils.isString(thisValue.link), thisValue.hasOwnProperty('children'));
    }
};

module.exports = valueOps;