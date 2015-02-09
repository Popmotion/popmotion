"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Repo = require('./repo.js'),

    /*
        Resolve a value
        
        Determine if the value to be set is
            - Function returning the value
            - String relative equation
            - Or actual value
    */
    resolve = function (val, current, action) {
        var resolvedVal = val;
        
        // If this is a function, execute
        if (utils.isFunc(val)) {
            resolvedVal = val.call(action.props.store.scope, current);
        
        // Or if this is a relative assignment, calculate new contents
        } else if (utils.isRelativeValue(val)) {
            resolvedVal = calc.relativeValue(current, val);
        }

        return resolvedVal;
    },
    
    loopOver = function (newData, inherit, value, action) {
        var data = {};
        
        for (var key in value.store) {
            // If Action has property but new data doesn't
            if (inherit && inherit.hasOwnProperty(key) && !newData.hasOwnProperty(key)) {
                data[key] = resolve(inherit[key], value.store[key], action);

            // Or if new data does
            } else if (newData.hasOwnProperty(key)) {
                data[key] = resolve(newData[key], value.store[key], action);
            }
        }
        
        return data;
    },

    /*
        Value constructor
    */
    Value = function () {
        var repo = new Repo(),
            setter = repo.set,
            firstSet = true,
            action = arguments[1];

        // Apply defaults
        setter.call(repo, arguments[0]);

        /*
            Set a value
            
            Data for values needs resolving before sending to the repo
            
            Syntax
                .set('key', val) // Sets specific value
                .set({ key: val }) // Sets multiple values
                .set({ key: val }, { key: val2 }) // With inherit
                .set(val) // Sets 'current' value
        */
        repo.set = function () {
            var args = arguments,
                arg1 = args[0],
                arg2 = args[1],
                data = {};

            // If we have an object, resolve every item first
            if (utils.isObj(arg1)) {
                data = loopOver(arg1, arg2, this, action);

                // Handle start property
                if (firstSet) {
                    firstSet = false;
                    
                    if (arg1.hasOwnProperty('start')){
                        setter.apply(this, ['current', resolve(arg1.start, this.get('current'), action)]);
                    }
                }

            } else {

                // If this is a specific setter, ie .set('key', val)
                if (utils.isString(arg1) && !utils.isRelativeValue(arg1)) {
                    data[arg1] = resolve(arg2, this.get('current'), action);
                    
                // Or this is a var to be resolved, assign it to current
                } else {
                    data.current = resolve(arg1, this.get('current'), action);
                }
            }

            setter.apply(this, [data]);
            
            // Check for range
            if (this.store.min !== undefined && this.store.max !== undefined) {
                setter.apply(this, ['hasRange', true]);
            } else {
                setter.apply(this, ['hasRange', false]);
            }
        };

        
        /*
            Reset current to from
        */
        repo.reset = function () {
            this.set('current', this.get('origin'));
        };
        
        
        /*
            Reverse current and from
        */
        repo.reverse = function () {
            var currentTo = this.get('to');

            this.set({
                to: this.get('origin'),
                origin: (currentTo !== undefined) ? currentTo : this.get('current')
            });
        };
        
        return repo;
    };

module.exports = Value;