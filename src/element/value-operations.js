"use strict";

var utils = require('../inc/utils'),
    isNum = utils.isNum,
    actionsManager = require('../actions/manager'),
    valueTypesManager = require('../value-types/manager'),
    routeManager = require('../routes/manager'),

    DEFAULT_NAMESPACE = 'values',
    numericalValues = ['current', 'to', 'start', 'min', 'max'],
    numNumericalValues = numericalValues.length;

module.exports = {


    /*
        Perform operation on set of values
        
        @parma [string]: Name of operation
        @param [object]: Value object
    */
    all: function (op, values) {
        var key = '';

        for (key in values) {
            this[op](values[key]);
        }

        return this;
    },

    /*
        Reset the value current to its origin

        @param [object]: Value object
    */
    reset: function (value) {
        this.retarget(value);
        value.current = value.origin;
    },

    /*
        Set value origin property to current value
        
        @param [object]: Value object
    */
    resetOrigin: function (value) {
        value.origin = value.current;
    },

    /*
        Set value to property back to target
        
        @param [object]: Value object
    */
    retarget: function (value) {
        value.to = value.target;
    },

    /*
        Swap value to and origin property
        
        @param [object]: Value object
    */
    flip: function (value) {
        var newTo = value.origin,
            newOrigin = (value.target !== undefined) ? value.target : value.current;

        value.to = newTo;
        value.origin = newOrigin;
    },

    /*
        Returns an initial value state

        @param [number] (optional): Initial current
        @return [object]: Default value state
    */
    initialState: function (start, route) {
        return {
            // [number]: Current value
            current: start || 0,
            
            // [number]: Change per second
            speed: 0,
            
            // [number]: Change per second plus direction (ie can be negative)
            velocity: 0,
            
            // [number]: Amount value has changed in the most recent frame
            frameChange: 0,

            route: route
        };
    },

    /*
        Split value into sub-values

        @param [object]: Base value properties
    */
    split: function (name, value) {
        var valueType = valueTypesManager[value.type],
            splitValues = {},
            splitProperty = {},
            propertyName = '',
            key = '',
            i = 0;

        for (; i < numNumericalValues; i++) {
            propertyName = numericalValues[i];

            if (value.hasOwnProperty(propertyName)) {
                if (utils.isFunc(value[propertyName])) {
                    value[propertyName] = value[propertyName].call(element);
                }
                splitProperty = valueType.split(value[propertyName]);

                // Assign properties to each new value
                for (key in splitProperty) {
                    splitValues[key] = splitValues[key] || valueTypesManager.defaultProps(key);
                    splitValues[key][propertyName] = splitProperty[key];
                }
            }
        }

        return splitValues;
    },

    /*
        Resolve property

        @param [string || number || function]: Property
        @param [object]: Parent value
        @param [Element]: Parent Element
    */
    resolve: function (property, value, element) {
        var splitUnitValue = {};

        if (!property || isNum(property)) {
            return property;
        }

        // If function, resolve function
        if (utils.isFunc(property)) {
            property = property.call(element, value.current);
        }

        // Check for relative value (ie '+=10')
        if (property.indexOf && property.indexOf('=') > 0) {
            property = calc.relativeValue(currentValue, property);
        }

        // Check for unit property
        if (utils.isString(property)) {
            splitUnitValue = utils.splitValUnit(property);

            if (!isNaN(splitUnitValue.value)) {
                property = splitUnitValue.value;
                value.unit = splitUnitValue.unit;
            }
        }

        return property;
    },

    /*
        Process new values
    */
    process: function (values, element, namespace, defaultValueProp) {
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
            thisValue = valueIsObj ? utils.merge(defaultProps, values[key]) : utils.copy(defaultProps);
            namespacedKey = (namespace !== DEFAULT_NAMESPACE) ? key + '.' + namespace : key;

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
                    childValue = utils.merge(thisValue, splitValues[propKey]);
                    childValue.parent = namespacedKey;
                    childValue.propName = propKey;
                    delete childValue.type;
                    delete childValue.children;
                    processedValues[key + propKey] = childValue;
                }
            }
        }

        // Set preprocessed value
        for (key in processedValues) {
            namespacedKey = (namespace !== DEFAULT_NAMESPACE) ? key + '.' + namespace : key;
            processedValue = processedValues[key];
            thisValue = elementValues[namespacedKey] || this.initialState(processedValue.start, namespace);

            // Inherit properties from Element
            for (propKey in defaultProps) {
                if (element.hasOwnProperty(propKey)) {
                    thisValue[propKey] = element[propKey];
                }
            }

            // Loop through all properties and set
            for (propKey in processedValue) {
                processedValue[propKey] = (!isNum(processedValue[propKey])) ? this.resolve(processedValue[propKey], thisValue, element) : processedValue[propKey];
                thisValue[propKey] = processedValue[propKey];

                if (propKey === 'to') {
                    thisValue.target = thisValue.to;
                }
            }

            // Save non-namespaced key
            thisValue.name = key;

            // Set value origin
            thisValue.origin = thisValue.current;

            // Set hasRange to true if min and max are numbers
            thisValue.hasRange = (isNum(thisValue.min) && isNum(thisValue.max)) ? true  : false;

            // Assign thisValue to elementValues[key]
            elementValues[namespacedKey] = thisValue;

            // Update order
            element.updateOrder(namespacedKey, utils.isString(thisValue.link), thisValue.hasOwnProperty('children'));
        }
    }
};