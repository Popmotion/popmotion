"use strict";

var styleDOM = require('./dom/style-dom'),
    getterSetter = require('../inc/getter-setter');

module.exports = {

    /*
        Get or set attribute

        @param [object || string]: Properties to set or name of attribute to get/set
        @param [string || number]: Property to set if setting single prop
    */
    attr: function (opts, prop) {
        return getterSetter.call(this, opts, prop,
            // Getter
            function (name) {
                return this.element.getAttribute(name);
            },
            // Setter
            function (name, prop) {
                this.element.setAttribute(name, prop);
                return this;
            }
        );
    },

    /*
        Style DOM element

        @param [string || object]: Either name of style to get/set or an object of properties to set
        @parma [string] (optional): Property to set
        @return [object || Element]: Returns calculated style if get, or Element if set
    */
    style: function (opts, prop) {
        return getterSetter.call(this, opts, prop,
            // Getter
            function (name) {
                return styleDOM.get(this.element, name);
            },
            // Setter
            function (name, rule) {
                styleDOM.set(this.element, name, rule);
                return this;
            }
        );
    }
};