"use strict";

var actionPrototype = require('../action/action.js').prototype,
    parseArgs = require('../action/parse-args.js'),
    rubix = require('../core/rubix.js');

module.exports = function (name, newRubix) {
    var parser = parseArgs[name] || parseArgs.generic;

    if (newRubix.createMethod && !actionPrototype[name]) {
        actionPrototype[name] = function () {
            this.set(parser.apply(this, arguments));
            return this.start(name);
        };
    }
    
    rubix[name] = newRubix;
}