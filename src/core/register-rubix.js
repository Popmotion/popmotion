"use strict";

var actionPrototype = require('../action/action.js').prototype,
	actionGroupPrototype = require('../action-group/action-group.js').prototype,
    generateMethodIterator = require('../action-group/generate-iterator.js'),
    parseArgs = require('../action/parse-args.js'),
    rubix = require('../core/rubix.js');

module.exports = function (name, newRubix) {
    var parser = parseArgs[name] || parseArgs.generic;

    if (!newRubix.surpressMethod && !actionPrototype[name]) {
        actionPrototype[name] = function () {
            this.set(parser.apply(this, arguments));
            return this.start(name);
        };
        
        actionGroupPrototype[name] = generateMethodIterator(name);
    }
    
    rubix[name] = newRubix;
}