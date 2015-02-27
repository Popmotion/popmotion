"use strict";

var dictionary = require('./dictionary.js'),

    defaultValues = {
        Alpha: 1
    },

    functionCreate = function (value, prefix) {
        return prefix + '(' + value + ')';
    },

    createSpaceDelimited = function (object, terms) {
        return createDelimitedString(object, terms, ' ');
    },
    
    createCommaDelimited = function (object, terms) {
        return createDelimitedString(object, terms, ', ');
    },
    
    createDelimitedString = function (object, terms, delimiter) {
        var string = '',
            termsLength = terms.length;
        
        for (var i = 0; i < termsLength; i++) {
            if (object[terms[i]] !== undefined) {
                string += object[terms[i]];
            } else {
                if (defaultValues[terms[i]] !== undefined) {
                    string += defaultValues[terms[i]];
                }
            }
            
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
            return functionCreate(createCommaDelimited(values, dictionary.colors), 'rgba');
        },
        
        dimensions: function (values) {
            return createSpaceDelimited(values, dictionary.dimensions);
        },
        
        positions: function (values) {
            return createSpaceDelimited(values, dictionary.positions);
        },
        
        shadow: function (values) {
            var shadowTerms = dictionary.shadow.slice(0,4);
            
            return createSpaceDelimited(values, shadowTerms) + templates.color(values);
        }
        
    };

module.exports = templates;