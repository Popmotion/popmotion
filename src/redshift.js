"use strict";

var Action = require('./action/action.js'),
    Input = require('./input/input.js'),
    easing = require('./utils/easing.js'),
    Redshift = function () {};

Redshift.prototype = {
    
    /*
        Create a new Action controller
        
        @return [Action]: Newly-created Action
    */
    newAction: function () {
        return new Action();
    },
    
    /*
        Create a new Input controller
        
        @return [Input]: Newly-created Input
    */
    newInput: function () {
        return new Input();
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
        
        
        return this;
    },

    /*
        Add bezier curve function
        
        Add the specified bezier curve the EasingFunction's available easings
        My favourite bezier curve generator is Lea Verou's excellent http://cubic-bezier.com/
        
        @param [string]: Name of the new easing function 
        @param [number]: x coordinate of point 1
        @param [number]: y coordinate of point 1
        @param [number]: x coordinate of point 2
        @param [number]: y coordinate of point 2
    */
    addBezier: function (name, x1, y1, x2, y2) {
        easing.addBezier(name, x1, y1, x2, y2);
        
        return this;
    }
    
};

module.exports = new Redshift();