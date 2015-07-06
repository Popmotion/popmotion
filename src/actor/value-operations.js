"use strict";

var calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    isNum = utils.isNum,
    actionsManager = require('../actions/manager'),
    valueTypesManager = require('../value-types/manager'),
    routeManager = require('../routes/manager'),

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
            if (values.hasOwnProperty(key)) {
                this[op](values[key]);
            }
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
        var newOrigin = (value.target !== undefined) ? value.target : value.current;

        value.target = value.to = value.origin;
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
    split: function (name, value, actor, valueType) {
        var splitValues = {},
            splitProperty = {},
            propertyName = '',
            key = '',
            i = 0;

        for (; i < numNumericalValues; i++) {
            propertyName = numericalValues[i];

            if (value.hasOwnProperty(propertyName)) {
                if (utils.isFunc(value[propertyName])) {
                    value[propertyName] = value[propertyName].call(actor);
                }

                splitProperty = valueType.split(value[propertyName]);

                // Assign properties to each new value
                for (key in splitProperty) {
                    if (splitProperty.hasOwnProperty(key)) {
                        // Create new value if it doesn't exist
                        splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
                        splitValues[key][propertyName] = splitProperty[key];
                    }
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
        @param [actor]: Parent actor
    */
    resolve: function (name, property, value, actor) {
        var currentValue = value.current || 0,
            isNumericalValue = (numericalValues.indexOf(name) > -1);

        // If this is a function, resolve
        if (utils.isFunc(property)) {
            property = property.call(actor, currentValue);
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
        Preprocess new values


    */
    preprocess: function (values, actor, route, suffix, defaultValueProp) {
        var preprocessedValues = {},
            value = {},
            splitValue = {},
            childValue = {},
            type = {},
            existingValue = {},
            isValueObj = false,
            key = '',
            namespacedKey = '',
            propKey = '';

        defaultValueProp = defaultValueProp || 'current';

        for (key in values) {
            if (values.hasOwnProperty(key)) {

                isValueObj = utils.isObj(values[key]);
                value = (isValueObj) ? values[key] : {};
                namespacedKey = key + suffix;
                existingValue = actor.values[namespacedKey];

                value.name = key;

                if (isValueObj) {
                    value[defaultValueProp] = values[key];
                }

                // If this value doesn't have a special type, check for one
                if (!value.type && utils.isString(value[defaultValueProp])) {

                    // Check if existing value with this key
                    if (existingValue && existingValue.type) {
                        value.type = existingValue.type;
                    
                    // Or if this route has a typemap
                    } else if (route.typeMap && route.typeMap[key]) {
                        value.type = route.typeMap[key];

                    // Otherwise, check by running tests
                    } else {
                        value.type = valueTypesManager.test(value[defaultValueProp]);
                    }
                }

                // Set value
                preprocessedValues[namespacedKey] = value;

                // If process has type, split or assign default props
                if (value.type) {
                    type = valueTypesManager[value.type];

                    // If this has a splitter function, split
                    if (type.split) {
                        value.children = {};
                        splitValue = this.split(key, value, actor, type);

                        for (propKey in splitValue) {
                            if (splitValue.hasOwnProperty(propKey)) {
                                childValue = utils.merge(value, splitValue[propKey]);
                                childValue.parent = key + suffix;
                                childValue.name = key;
                                childValue.propName = propKey;
                                delete childValue.type;
                                delete childValue.children;

                                preprocessedValues[key + propKey + suffix] = childValue;
                            }
                        }
                    } else {
                        preprocessedValues[namespacedKey] = utils.merge(valueTypesManager.defaultProps(value.type, key), value);
                    }
                }
            }
        }

        return preprocessedValues;
    },

    /*
        Process new values
    */
    process: function (values, actor, namespace, defaultValueProp) {
        var route = routeManager[namespace],
            namespaceSuffix = (namespace === 'values') ? '' : '.' + namespace,
            preprocessedValues = this.preprocess(values, actor, route, namespaceSuffix, defaultValueProp),
            key = '',
            propKey = '',
            preprocessedValue = {},
            thisValue = {},
            defaultProps = actionsManager[actor.action].valueDefaults,
            hasChildren = false,
            prop;

        for (key in preprocessedValues) {
            if (preprocessedValues.hasOwnProperty(key)) {
                preprocessedValue = preprocessedValues[key];
                thisValue = actor.values[key] || this.initialState(this.resolve('start', preprocessedValue.start, {}, actor), namespace);
                hasChildren = (thisValue.children !== undefined);

                // Inherit properties from Actor
                for (propKey in defaultProps) {
                    if (defaultProps.hasOwnProperty(propKey)) {
                        thisValue[propKey] = actor[propKey];
                    } else {
                        thisValue[propKey] = defaultProps[propKey];
                    }
                }

                // Loop through all properties and resolve
                for (propKey in preprocessedValue) {
                    if (preprocessedValue.hasOwnProperty(propKey)) {
                        prop = preprocessedValue[key];

                        thisValue[propKey] = (!isNum(prop) && !hasChildren) ? this.resolve(propKey, prop, thisValue, actor) : prop;

                        if (propKey === 'to') {
                            thisValue.target = thisValue.to;
                        }
                    }
                }

                thisValue.origin = thisValue.current;
                thisValue.hasRange = (isNum(thisValue.min) && isNum(thisValue.max)) ? true  : false;

                actor.values[key] = thisValue;
                actor.updateOrder(key, utils.isString(thisValue.link), hasChildren);
            }
        }
    }
};