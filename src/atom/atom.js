"use strict";

var Action = require('../action/action.js'),
    calc = require('../utils/calc.js'),
    parse = require('../utils/parse-args.js'),
    setProps = require('./setter.js'),
    
    /*
        Constructor
        
        @param [object || DocumentElement]: Object describing raw UX element
    */
    Atom = function (element) {
        this.element = element;
        this.cache = {};
        
        this.action = new Action({
            dom: element,
            scope: this,
            onChange: setProps
        });
    };
    
Atom.prototype = {
    
    /*
        Animate provided properties
        
        @param [object]: Object of valid CSS properties to animate
        @param [number] (optional): Duration in ms
        @param [string] (optional): Name of easing function
        @param [function](optional): onEnd callback
    */
    play: function () {
        this.action.play(parse.playArgs.apply(parse, arguments));
        return this;
    }
    
};
    
module.exports = Atom;