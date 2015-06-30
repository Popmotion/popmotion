/*
    Multi-var getter/setter

    @param [object || string]: Name of value to get/set
    @param [string || number] (optional): Single property to set 
    @param [function]: Getter
    @param [function]: Setter
*/
module.exports = function (opts, prop, getter, setter) {
    var typeOfOpts = typeof opts;

    // Set single, if this is a string and we have a property
    if (typeOfOpts == 'string' && prop) {
        setter.call(this, opts, prop);

    // Set multi, if we have an object
    } else if (typeOfOpts == 'object') {
        for (var key in opts) {
            if (opts.hasOwnProperty(key)) {
                setter.call(this, key, opts[key]);
            }
        }

    // Or get, if we have a string and no props
    } else {
        return getter.call(this, opts);
    }

    return this;
};