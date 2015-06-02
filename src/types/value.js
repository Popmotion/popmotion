"use strict";

var defaultProps = require('../defaults/value-props.js'),
    defaultState = require('../defaults/value-state.js'),
    resolve = require('../utils/resolve.js'),
    utils = require('../utils/utils.js'),

    CURRENT = 'current',
    ORIGIN = 'origin',
    FORCE_NUMBER = [CURRENT, ORIGIN, 'to', 'start'],
    
    /*
        Parse setter arguments
    */
    parseSetArgs = function (arg0, arg1) {
        var newProps = {};

        // If we've just got a value, set default
        if (arguments.length === 1) {
            newProps[CURRENT] = arg0;
            
        // Or we've got key/value args
        } else {
            newProps[arg0] = arg1;
        }
        
        return newProps;
    },

    /*
        Value constructor
    */
    Value = function (key, props, inherit, action) {
        this.key = key;
        this.action = action;
        this.scope = action.scope;

        if (props.start) {
            props.current = props.start;
        }

        this._set(defaultProps);
        this._set(defaultState);
        this.set(props, inherit);
    };
    
Value.prototype = {

    /*
        Set value properties
        
        Syntax
            .set('key', value) // Set specific value
            .set({ key: value }) // Set multiple values
            .set({ key: value }, { key: value2 }) // Set multiple with inherit
            .set(value) // Set .current
    */
    set: function () {
        this._set.apply(this, arguments);
        
        // Update Action value process order
        this.action.updateOrder(this.key, utils.isString(this.link));
        
        return this;
    },
    
    /*
        Internal setter, doesn't update order
    */
    _set: function () {
        var multiVal = utils.isObj(arguments[0]),
            newProps = multiVal ? arguments[0] : parseSetArgs.apply(self, arguments),
            inherit = multiVal ? arguments[1] : false,
            toSet = {},
            key = '';
        
        // Deal with inherited values first
        if (inherit) {
            for (key in inherit) {
                // Check this is a Value, not Action property
                if (defaultProps.hasOwnProperty(key)) {
                    toSet[key] = inherit[key];
                }
            }
        }
        
        // Loop through all properties and set
        for (key in newProps) {
            toSet[key] = newProps[key];
        }
        
        // Loop through collected values and set
        for (key in toSet) {
            this[key] = resolve(toSet[key], this.current, this, this.scope);
                
            if (FORCE_NUMBER.indexOf(key) > -1) {
                this[key] = parseFloat(this[key]);
            }
            
            if (key === 'to') {
                this.target = this.to;
            }
        }
        
        // Set hasRange to true if min and max are numbers
        this.hasRange = (utils.isNum(this.min) && utils.isNum(this.max)) ? true : false;
        
        return this;
    },
    
    /*
        Set current value to origin
    */
    reset: function () {
        this._set('to', this.target);
        return this._set(CURRENT, this[ORIGIN]);
    },
    
    /*
        Reset properties to defaults
    */
    resetProps: function () {
        this.set(defaultProps);
    },
    
    /*
        Swap current target and origin
    */
    flip: function () {
        var newTo = this[ORIGIN],
            newOrigin = (this.target !== undefined) ? this.target : this[CURRENT];

        return this.set({
            to: newTo,
            origin: newOrigin
        });
    },
    
    retarget: function (target) {
        target = (target !== undefined) ? target : this.target;
        return this.set('to', target);
    }
};

module.exports = Value;