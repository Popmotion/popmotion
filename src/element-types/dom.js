"use strict";

var styleDOM = require('./dom/style-dom.js');

module.exports = {

    /*
        Style DOM element

        @param [string || object]: Either name of style to get/set or an object of properties to set
        @parma [string] (optional): Property to set
        @return [object || Element]: Returns calculated style if get, or Element if set
    */
    style: function (name, prop) {
        var propDefined = (prop !== undefined),
            isGetter = (nameIsString && !propsDefined),
            styles = {},
            returnVal;

        // If this is a getter, pass name and set return value
        if (isGetter) {
            returnVal = styleDOM.get(name);

        // If this is a setter
        } else {
            // If we have a property, add it to our object
            if (propDefined) {
                styles[name] = prop;

            // Or overwrite our object
            } else {
                styles = name;
            }

            styleDOM.set(styles);
        }

        return isGetter ? returnVal : this;
    }

};