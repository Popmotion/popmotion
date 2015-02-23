"use strict";

var Action = require('./action/action.js'),
    DomAction = require('./dom/dom-action.js'),
    Input = require('./input/input.js'),
    presets = require('./action/presets.js'),
    easing = require('./utils/easing.js'),
    calc = require('./utils/calc.js'),
    utils = require('./utils/utils.js'),
    shim = require('./utils/shim.js'),
    Process = require('./process/process.js'),
    Redshift = function () {
        // Check if we need to shim rAF and indexOf
        shim.featureCheck();
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
        Create a new DOM controller

        @return [Atom]: Newly-created Atom
    */
    newDomAction: function (element) {
        return new DomAction(element);
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
    definePreset: function () {
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
    defineBezier: function () {
        easing.addBezier.apply(easing, arguments);
        
        return this;
    },
    
    //defineSimulation: function () {},
    
    calc: calc,
    
    utils: utils
};

module.exports = new Redshift();