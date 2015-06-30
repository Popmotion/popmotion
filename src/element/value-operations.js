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

        @param [string]: Name of value
        @param [object]: Base value properties
        @param [Elememt]
    */
    split: function (name, value, element, valueType) {
        var splitValues = {},
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
                    // Create new value if it doesn't exist
                    splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
                    splitValues[key][propertyName] = splitProperty[key];
                }
            }
        }

        return splitValues;
    },

    /*
        Split value into number and unit, set unit to value if present

        @param [string]: Property to split
        @param [object]: Value object to save unit to
    */
    splitUnit: function (property, value) {
        var returnVal = property,
            splitUnitValue;

        // Check for unit property
        if (utils.isString(property)) {
            splitUnitValue = utils.splitValUnit(property);

            if (!isNaN(splitUnitValue.value)) {
                returnVal = splitUnitValue.value;
                value.unit = splitUnitValue.unit;
            }
        }

        return returnVal;
    },

    /*
        Resolve property

        @param [string]: Name of value
        @param [string || number || function]: Property
        @param [object]: Parent value
        @param [Element]: Parent Element
    */
    resolve: function (name, property, value, element) {
        var currentValue = value.current || 0,
            isNumericalValue = (numericalValues.indexOf(name) > -1);

        // If this is a function, resolve
        if (utils.isFunc(property)) {
            property = property.call(element, currentValue);
        }

        // If this is a string, check for relative values and units
        if (utils.isString(property)) {
            // If this is a relative value (ie '+=10')
            if (property.indexOf('=') > 0) {
                property = calc.relativeValue(currentValue, property);
            }

            // Check for unit if should be numerical property
            if (isNumericalValue) {
                this.splitUnit(property, value);
            }
        }

        // If this is a numerical value, coerce
        if (isNumericalValue) {
            property = parseFloat(property);
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
            hasChildren = false,
            valueType = {},
            defaultProps = actionsManager[element.action].valueDefaults;

        namespace = namespace || DEFAULT_NAMESPACE;
        defaultValueProp = defaultValueProp || 'current';

        // Preprocess values to set
        for (key in values) {
            valueIsObj = utils.isObj(values[key]);
            thisValue = valueIsObj ? values[key] : {};
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
                valueType = valueTypesManager[thisValue.type];

                // Split if this value type is a splitter
                if (valueType.split) {
                    thisValue.children = {};
                    splitValues = this.split(key, thisValue, element, valueType);

                    for (propKey in splitValues) {
                        childValue = utils.merge(thisValue, splitValues[propKey]);
                        childValue.parent = namespacedKey;
                        childValue.propName = propKey;
                        delete childValue.type;
                        delete childValue.children;
                        processedValues[key + propKey] = childValue;
                    }

                // Or just apply default props
                } else {
                    processedValues[key] = utils.merge(valueTypesManager.defaultProps(thisValue.type, key), thisValue);
                }
            }
        }

        // Set preprocessed value
        for (key in processedValues) {
            namespacedKey = (namespace !== DEFAULT_NAMESPACE) ? key + '.' + namespace : key;
            processedValue = processedValues[key];
            thisValue = elementValues[namespacedKey] || this.initialState(this.resolve('start', processedValue.start, {}, element), namespace);
            hasChildren = processedValue.children !== undefined;

            // Inherit properties from Element
            for (propKey in defaultProps) {
                thisValue[propKey] = (element.hasOwnProperty(propKey)) ? element[propKey] : defaultProps[propKey];
            }

            // Loop through all properties and set
            for (propKey in processedValue) {
                if (processedValue[propKey] !== undefined && !isNum(processedValue[propKey]) && !hasChildren) {
                    processedValue[propKey] = this.resolve(propKey, processedValue[propKey], thisValue, element);
                }

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
            element.updateOrder(namespacedKey, utils.isString(thisValue.link), hasChildren);
        }
    }
};