"use strict";

var dictionary = require('./dictionary.js'),

    defaultValues = {
        Alpha: 1
    },

    functionCreate = function (value, prefix) {
        return prefix + '(' + value + ')';
    },

    createSpaceDelimited = function (key, object, terms) {
        return createDelimitedString(key, object, terms, ' ');
    },
    
    createCommaDelimited = function (key, object, terms) {
        return createDelimitedString(key, object, terms, ', ').slice(0, -2);
    },
    
    createDelimitedString = function (key, object, terms, delimiter) {
        var string = '',
            propKey = '',
            termsLength = terms.length;
        
        for (var i = 0; i < termsLength; i++) {
            propKey = key + terms[i];

            if (object[propKey] !== undefined) {
                string += object[propKey];
            } else {
                if (defaultValues[terms[i]] !== undefined) {
                    string += defaultValues[terms[i]];
                }
            }
            
            string += delimiter;
        }
    
        return string;
    },

    templates = {
        
        colors: function (key, values) {
            return functionCreate(createCommaDelimited(key, values, dictionary.colors), 'rgba');
        },
        
        dimensions: function (key, values) {
            return createSpaceDelimited(key, values, dictionary.dimensions);
        },
        
        positions: function (key, values) {
            return createSpaceDelimited(key, values, dictionary.positions);
        },
        
        shadow: function (key, values) {
            var shadowTerms = dictionary.shadow.slice(0,4);
            
            return createSpaceDelimited(key, values, shadowTerms) + templates.colors(key, values);
        }
    };

module.exports = templates;