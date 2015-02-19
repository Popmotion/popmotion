"use strict";

var Action = require('./action/action.js'),
    Atom = require('./atom/atom.js'),
    Input = require('./input/input.js'),
    presets = require('./action/presets.js'),
    easing = require('./utils/easing.js'),
    calc = require('./utils/calc.js'),
    cycl = require('cycl'),
    Redshift = function () {};

Redshift.prototype = {
    
    /*
        Create a new Action controller
        
        @return [Action]: Newly-created Action
    */
    newAction: function (defs, override) {
        return new Action(defs, override);
    },
    
    /*
        Create a new Atom controller

        @return [Atom]: Newly-created Atom
    */
    newAtom: function (element) {
        return new Atom(element);
    },
    
    /*
        Create a new Input controller
        
        @return [Input]: Newly-created Input
    */
    newInput: function () {
        return new Input(arguments[0], arguments[1]);
    },
    
    /*
        Define a new Action preset
        
        Syntax
        
            .define(name, preset)
                @param [string]: Name of preset
                @param [object]: Preset options/properties
                
            .define(presets)
                @param [object]: Multiple presets as named object
                
        @return [Redshift]
    */
    define: function () {
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
    
    calc: calc,
    
    cycl: cycl
    
};

module.exports = new Redshift();