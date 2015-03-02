"use strict";

var DELIMITER = '.';

module.exports = {
    /*
        Generate namespaced key
        
        generate('foo') -> 'foo'
        generate('foo', 'bar') -> 'bar.foo'
        
        @param [string]: Key
        @param [string] (optional): Namespace
    */
    generate: function (key, namespace) {
        return namespace ? key + DELIMITER + namespace : key;
    }
};