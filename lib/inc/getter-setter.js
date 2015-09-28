'use strict';

var each = require('./utils').each;

/*
    Multi-var getter/setter

    @param [object || string]: Name of value to get/set
    @param [string || number] (optional): Single property to set 
    @param [function]: Getter
    @param [function]: Setter
*/
module.exports = function (opts, prop, getter, setter) {
    var self = this,
        typeOfOpts = typeof opts;

    // Set single, if this is a string and we have a property
    if (typeOfOpts == 'string' && prop) {
        setter.call(self, opts, prop);

        // Set multi, if we have an object
    } else if (typeOfOpts == 'object') {
            each(opts, function (key, value) {
                setter.call(self, key, value);
            });

            // Or get, if we have a string and no props
        } else {
                return getter.call(self, opts);
            }

    return self;
};