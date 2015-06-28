"use strict";

var styleDOM = require('./dom/style-dom.js');

module.exports = {

    /*
        Get or set attribute
    */
    attr: function (name, prop) {
        var returnVal;

        if (prop) {
            this.element.setAttribute(name, prop);
        } else {
            returnVal = this.element.getAttribute(name);
        }

        return returnVal;
    },

    /*
        Style DOM element

        @param [string || object]: Either name of style to get/set or an object of properties to set
        @parma [string] (optional): Property to set
        @return [object || Element]: Returns calculated style if get, or Element if set
    */
    style: function (name, prop) {
        var propDefined = (prop !== undefined),
            nameIsString = (typeof name === 'string'),
            isGetter = (nameIsString && !propDefined),
            styles = {},
            returnVal;

        // If this is a getter, pass name and set return value
        if (isGetter) {
            returnVal = styleDOM.get(this.element, name);

        // If this is a setter
        } else {
            // If we have a property, add it to our object
            if (propDefined) {
                styles[name] = prop;

            // Or overwrite our object
            } else {
                styles = name;
            }

            styleDOM.set(this.element, styles);
        }

        return isGetter ? returnVal : this;
    }

};