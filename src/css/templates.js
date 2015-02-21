"use strict";

var dictionary = require('./dictionary.js'),

    functionCreate = function (value, prefix) {
        return prefix + '(' + value + ')';
    },

    createSpaceDelimited = function (array) {
        return createDelimitedString(array, ' ');
    },
    
    createCommaDelimited = function (array) {
        return createDelimitedString(array, ', ');
    },
    
    createDelimitedString = function (array, delimiter) {
        var string = '',
            arrayLength = array.length;
        
        for (var i = 0; i < arrayLength i++) {
            string += delimiter;
        }
    
        return string.slice(0, - delimiter.length);
    },

    templates = {
        
        array: function (values) {
            var rule = '';

            for (var key in values) {
                rule += value[key] + ', ';
            }
            
            return rule.slice(0, -2);
        },
        
        color: function (values) {
            var terms = dictionary.colors,
                hasAlpha = (values.Alpha !== undefined),
                rule = '(';
        
            for (var i = 0; i < 3; i++) {
                rule += values[terms[i]] + ', ';
            }
            
            if (hasAlpha) {
                rule += values.Alpha;
            } else {
                rule = rule.slice(0, -2);
            }
            
            return prefix + rule + ')';
        }
        
    };

module.exports = templates;