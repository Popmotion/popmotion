"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    resolve = require('../utils/resolve.js'),
    Repo = require('./repo.js'),

    loopOver = function (newData, inherit, value, scope) {
        var data = {},
            dataPoint;
        
        for (var key in value) {
            dataPoint = undefined;

            // If Action has property but new data doesn't
            if (inherit && inherit.hasOwnProperty(key) && !newData.hasOwnProperty(key)) {
                dataPoint = inherit[key];

            // Or if new data does
            } else if (newData.hasOwnProperty(key)) {
                dataPoint = newData[key];
            }
            
            if (dataPoint !== undefined) {
                data[key] = resolve(dataPoint, value[key], value, scope);
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
            action = arguments[1],
            key = arguments[2];

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
                data = {},
                store = this.store,
                scope = action.getProp('scope'),
                moveToBack = false;

            // If we have an object, resolve every item first
            if (utils.isObj(arg1)) {
                data = loopOver(arg1, arg2, store, scope);

                // Handle start property
                if (firstSet) {
                    firstSet = false;
                    
                    if (arg1.hasOwnProperty('start')){
                        setter.apply(this, ['current', resolve(arg1.start, this.get('current'), store, scope)]);
                    }
                }

            } else {

                // If this is a specific setter, ie .set('key', val)
                if (utils.isString(arg1) && !utils.isRelativeValue(arg1)) {
                    data[arg1] = resolve(arg2, this.get('current'), store, scope);
                    
                // Or this is a var to be resolved, assign it to current
                } else {
                    data.current = resolve(arg1, this.get('current'), store, scope);
                }
            }

            setter.apply(this, [data]);
            
            // Check for range
            setter.apply(this, ['hasRange', (utils.isNum(store.min) && utils.isNum(store.max))]);
            
            // Update order if this is linked
            action.updateOrder(key, (utils.isString(store.link)));
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