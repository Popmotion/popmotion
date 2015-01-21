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
    resolve = function (val, current) {
        var resolvedVal = val;
        
        // If this is a function, execute
        if (utils.isFunc(val)) {
            resolvedVal = val(current);
        
        // Or if this is a relative assignment, calculate new contents
        } else if (utils.isRelativeValue(val)) {
            resolvedVal = calc.relativeValue(val, current);
        }

        return resolvedVal;
    },
    
    loopOver = function (newData, inherit, value) {
        var data = {};
        
        for (var key in value.store) {
            // If Action has property but new data doesn't
            if (inherit && inherit.hasOwnProperty(key) && !newData.hasOwnProperty(key)) {
                data[key] = resolve(inherit[key], value.get(key));

            // Or if new data does
            } else if (newData.hasOwnProperty(key)) {
                data[key] = resolve(newData[key], value.get(key));
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
            firstSet = true;

        // Apply defaults
        setter.apply(repo, arguments);

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
                data = loopOver(arg1, arg2, this);

                // Handle start property
                if (firstSet && arg1.hasOwnProperty('start')) {
                    setter.apply(this, ['current', resolve(arg1.start)]);
                    firstSet = false;
                }

            } else {

                // If this is a specific setter
                if (utils.isString(arg1) && !utils.isRelativeValue(arg1)) {
                    data[arg1] = resolve(arg2, this.get(arg1));
                    
                // Or this is a var to be resolved, assign it to current
                } else {
                    data.current = resolve(arg1, this.get('current'));
                }
            }

            setter.apply(this, [data]);
            
            // Check for range
            if (this.store.min !== undefined && this.store.max !== undefined) {
                setter.apply(this, ['hasRange', true]);
            } else {
                setter.apply(this, ['hasRange', false]);
            }
            
            console.log(this);
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
            this.set({
                to: this.get('origin'),
                origin: this.get('to')
            });
        };
        
        return repo;
    };

module.exports = Value;