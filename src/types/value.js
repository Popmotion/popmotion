"use strict";

var calc = require('../utils/calc.js'),
    Repo = require('./repo.js'),

    /*
        Value constructor
    */
    Value = function () {
        var repo = new Repo(),
            setter = repo.set,
            
            
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
            };


        /*
            Set a value
            
            Data for values needs resolving before sending to the repo
            
            Syntax
                .set('key', val) // Sets specific value
                .set({ key: val }) // Sets multiple values
                .set(val) // Sets 'current' value
        */
        repo.set = function () {
            var args = arguments,
                arg1 = args[0],
                data = {};

            // If we have an object, resolve every item first
            if (utils.isObj(arg1)) {
                for (var key in arg1) {
                    if (arg1.hasOwnProperty(key)) {

                        // Resolve this property
                        data[key] = resolve(arg1[key], this.get(key));
                    }
                }
            } else {

                // If this is a specific setter
                if (utils.isString(arg1) && !utils.isRelativeValue(arg1)) {
                    data[arg1] = resolve(args[1], this.get(arg1));
                    
                // Or this is a var to be resolved, assign it to current
                } else {
                    data.current = resolve(arg1, this.get('current'));
                }
            }
            
            data.from = data.current;
            
            setter(data);
            
            // Check for range
            if (this.store.min !== undefined && this.store.max !== undefined) {
                setter('hasRange', true);
            } else {
                setter('hasRange', false);
            }
        };
        
        // Apply initial values
        repo.set.apply(repo, args);
        
        // Check for start property
        if (utils.isObj(arg1) && arg1.start) {
            repo.set.apply(repo, 'start', arg1.start);
        }
        
        return repo;
    };

module.exports = Value;