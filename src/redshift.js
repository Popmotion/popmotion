"use strict";

var Action = require('./action/action.js'),
    Input = require('./input/input.js'),
    presets = require('./action/presets.js'),
    route = require('./routes/manager.js'),
    easing = require('./utils/easing.js'),
    calc = require('./utils/calc.js'),
    shim = require('./utils/shim.js'),
    Process = require('./process/process.js'),
    Redshift = function () {
        // Check if we need to shim rAF and indexOf
        shim();
    };

Redshift.prototype = {

    /*
        Create a new Action controller
        
        @return [Action]: Newly-created Action
    */
    newAction: function (defs, override) {
        return new Action(defs, override);
    },
    
    /*
        Create a new Input controller
        
        @return [Input]: Newly-created Input
    */
    newInput: function () {
        return new Input(arguments[0], arguments[1]);
    },
    
    /*
        Create a new process
        
        @param [function]: Function to run every frame
        @param: Scope
        @return [Process]
    */
    newProcess: function () {
        return new Process(arguments[0], arguments[1]);
    },
    
    /*
        Define a new Action preset
        
        Syntax
        
            .definePreset(name, preset)
                @param [string]: Name of preset
                @param [object]: Preset options/properties
                
            .definePreset(presets)
                @param [object]: Multiple presets as named object
                
        @return [Redshift]
    */
    addPreset: function () {
        presets.define.apply(presets, arguments);
        
        return this;
    },

    /*
        Add bezier curve function
        
        Add the specified bezier curve the EasingFunction's available easings
        My favourite bezier curve generator is Lea Verou's excellent http://cubic-bezier.com/
        
        @param [string]: Name of the new easing function 
        @params [number]: x/y coordinates of handles
    */
    addBezier: function () {
        easing.addBezier.apply(easing, arguments);
        
        return this;
    },
    
    /*
        Add value route
        
        The default values object is .values, however any provided object
        will be parsed into values and given a .route property that is the name of
        its original object. For instance providing
        
            example: {
                test: 20
            }
            
        will be parsed into
        
            values: {
                test: {
                    current: 20,
                    route: 'example'
                }
            }
            
        If we provide a custom route with this name, we can custom-parse values
        on the way in, and also on the way out.
    */
    addRoute: function () {
        route.add.apply(route, arguments);
        
        return this;
    },
    
    //defineSimulation: function () {},
    
    calc: calc
};

module.exports = new Redshift();