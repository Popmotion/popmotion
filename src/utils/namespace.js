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
    },
    
    /*
        Strip a namespaced key of its namespace
        
        strip('bar.foo') -> 'foo'
        strip('foo') -> 'foo'
    */
    strip: function (key) {
        return key.split(DELIMITER)[0];
    }
};