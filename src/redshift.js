/*
    Redshift core object
    
    Exposes methods to create new classes and define new modules
*/
"use strict";

var Action = require('./action/action.js'),
    Input = require('./input/input.js'),
    Process = require('./process/process.js'),
    presets = require('./action/presets.js'),
    easing = require('./utils/easing.js'),
    calc = require('./utils/calc.js'),
    utils = require('./utils/utils.js'),
    route = require('./action/routes.js'),
    registerRubix = require('./register/register-rubix.js'),
    registerSimulation = require('./register/register-simulation.js');

module.exports = {

    /*
        Create a new Action controller
        
        @return [Action]: Newly-created Action
    */
    newAction: function () {
        return new Action(arguments[0], arguments[1]);
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
	    Create an Action Group prepopulated with DOM properties
	    
	    @param [string || NodeList || jQuery]: Selector, nodeList or jQuery selection
    */
    dom: function (selector) {
	    var elements = [],
	    	domSelection = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector;
	    	
	    // if jQuery selection, get Array
	    if (domSelection.get) {
		    elements = domSelection.get();
		    
		// Or convert NodeList to Array
	    } else if (domSelection.length) {
		    elements = [].slice.call(domSelection);
		    
		// Or put Element into array
	    } else {
		    elements.push(domSelection);
	    }
	    
		console.log(elements);
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
        presets.add.apply(presets, arguments);
        
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
        easing.add.apply(easing, arguments);
        
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
    
    /*
        Add simulation
        
        @param [string]: Simulation name
        @param [function]: Method to calculate new velocity
    */
    addSimulation: function () {
        registerSimulation.apply(this, arguments);
        
        return this;
    },
    
    /*
        Add Rubix
        
        @param [string]: Rubix name
        @param [object]: Methods and properties
    */
    addRubix: function () {
        registerRubix.apply(this, arguments);
        
        return this;
    },
    
    // Expose calc and utils modules
    calc: calc,
    utils: utils
};