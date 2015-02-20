"use strict";

var dictionary = require('./unit-dictionary.js'),

    color = function (values) {
        var rgb = {
                Red: values[0],
                Green: values[1],
                Blue: values[2]
            };
        
        if (values.length === 4) {
            rgb.Alpha = values[3];
        }
        
        return rgb;
    },
    
    position = function (values) {
        var valuesLength = values.length,
            pos = {
                X: values[0],
                Y: (valuesLength > 1) ? values[1] : values[0]
            };
        
        if (valuesLength > 2) {
            pos.Z = values[2];
        }

        return pos;
    },
    
    /*
        Convert array into object of Top Left Bottom Right values

        @param [array]: Array of dimensions
    */
    dimensions = function (values) {
        var valLength = values.length,
            positions = dictionary.dimensions,
            jumpBack = (valLength !== 3) ? 1 : 2,
            i = 0,
            j = 0,
            pos = {};
        
        for (i = 0; i < 4; i++) {
            pos[positions[i]] = values[j];

            j = (j === valLength - 1) ? j - jumpBack : j + 1;
        }
        
        return pos;
    },

    /*
        Split comma delimited into array
        
        Converts 255, 0, 0 -> [255, 0, 0]
        
        @param [string]: CSS comma delimited function
    */
    splitCommaDelimited = function (value) {
        return value.split(/,\s*/);
    },
    
    splitSpaceDelimited = function (value) {
        return value.split(' ');
    },
    
    /*
        Break values out of css functional statement
        
        Converts rgba(255, 0, 0) -> "255, 0, 0"
    */
    functionBreak = function (value) {
        return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
    },
    
    isTrue = function () {
        return true;
    },
    
    /*
        
    */
    unitHandlers = {
        
        dimensions: {
            test: isTrue,
            
            split: function (value) {
                return dimensions(splitSpaceDelimited(value));
            }
        },
        
        xy: {
            test: isTrue,
            
            split: function (value) {
                return position(splitSpaceDelimited(value));
            }
        },
        
        /*
            TODO: Is a performance hog (takes .5 ms)
        */
        shadow: {
            test: isTrue,
            
            split: function (value) {
                var bits = splitSpaceDelimited(value),
                    bit = '',
                    bitsLength = bits.length,
                    props = {},
                    terms = dictionary.shadow,
                    reachedColor,
                    colorString = '',
                    color;
                    
                for (var i = 0; i < bitsLength; i++) {
                    bit = bits[i];

                    // If we've already reached the color, append to color string
                    if (reachedColor || unitHandlers.color.test(bit)) {
                        reachedColor = true;
                        colorString += bit;
                    
                    // Else assign this to the var in this dictionary position
                    } else {
                        props[terms[i]] = bit;
                    }
                }
                
                color = unitHandlers.color.split(colorString);
                
                for (var unit in color) {
                    props[unit] = color[unit];
                }

                return props;
            }
        },
        
        hex: {
            test: function (value) {
                return (value.indexOf('#') > -1);
            },
    
            /*
                Hex to RGB conversion
            */
            split: function (value) {
                var colors = [],
                    r, g, b;
                    
                // If we have 6 chacters, ie #FF0000
                if (value.length > 4) {
                    r = value.substr(1, 2);
                    g = value.substr(3, 2);
                    b = value.substr(5, 2);
    
                // Or 3 characters, ie #F00
                } else {
                    r = value.substr(1, 1);
                    g = value.substr(2, 1);
                    b = value.substr(3, 1);
                    r += r;
                    g += g;
                    b += b;
                }
    
                return color([
                    parseInt(r, 16),
                    parseInt(g, 16),
                    parseInt(b, 16)
                ]);
            }
        },
        
        rgba: {
            test: function (value) {
                return (value.indexOf('rgba') > -1);
            },
    
            split: function (value) {
                return color(splitCommaDelimited(functionBreak(value)));
            }
        },
        
        rgb: {
            test: function (value) {
                return (value.indexOf('rgb') > -1);
            },
            
            split: function (value) {
                return color(splitCommaDelimited(functionBreak(value)));
            }
        },
        
        color: {
            test: function (value) {
                return (unitHandlers.hex.test(value) || unitHandlers.rgb.test(value) || unitHandlers.rgba.test(value));
            },
            
            split: function (value) {
                if (unitHandlers.hex.test(value)) {
                    return unitHandlers.hex.split(value);
                }
                if (unitHandlers.rgb.test(value)) {
                    return unitHandlers.rgb.split(value);
                }
                if (unitHandlers.rgba.test(value)) {
                    return unitHandlers.rgba.split(value);
                }
            }
        }
        
    };

module.exports = unitHandlers;