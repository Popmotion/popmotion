"use strict";

var dictionary = require('./dictionary.js'),

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
    
    /*
        Convert hex into array of RGBA values
        
        @param [string]: Hex string
            "#F00" -> [255, 0, 0]
            "#FF0000" -> [255, 0, 0]
            
        @return [array]: RGBA values
    */
    hex = function (prop) {
        var colors = [],
            r, g, b;
                    
        // If we have 6 chacters, ie #FF0000
        if (prop.length > 4) {
            r = prop.substr(1, 2);
            g = prop.substr(3, 2);
            b = prop.substr(5, 2);

        // Or 3 characters, ie #F00
        } else {
            r = prop.substr(1, 1);
            g = prop.substr(2, 1);
            b = prop.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
            
        return [
            parseInt(r, 16),
            parseInt(g, 16),
            parseInt(b, 16)
        ];
    },
    
    /*
        Test if string is color property
        
        @param [string]: Color property
        @return [boolean]: True if color property
    */
    isColor = function (prop) {
        return (prop.indexOf('#') > -1 || prop.indexOf('rgb') > -1);
    },

    /*
        Public splitters
        
        Each splitter takes a string containing certain values and
        splits them into an object containing key/value pairs, ie
        color will return Red/Green/Blue/[Alpha] values
    */
    splitters = {
        
        /*
            Split arbitarily-long array (for instance matrix property) into object
            
            @param [string]: Array values
                "1, 1, 2, 4" -> {1, 1, 2, 4}
                "1 1 2 4" -> {1, 1, 2, 4}
                
            @return [object]: Object with a metric for every array item,
                named after its index
        */
        array: function (prop) {
            var list = (prop.indexOf(',') > -1) ? splitCommaDelimited(prop) : splitSpaceDelimited(prop),
                listLength = list.length,
                i = 0,
                arrayProps = {};
                
            for (; i < listLength; i++) {
                arrayProps[i] = list[i];
            }
            
            return arrayProps;
        },
        
        /*
            Convert color property into R/G/B/[A] object
            
            @param [string]: Color value has #, rgba, rgb, // hsl, hsla
                "#f00" -> {255, 0, 0}
                "#ff0000" -> {255, 0, 0}
                "rgb(255, 0, 0)" -> {255, 0, 0}
                "rgba(255, 0, 0, 1)" -> {255, 0, 0, 1}
                //"hsl(0, 100%, 50%)" -> {255, 0, 0}
                //"hsla(0, 100%, 50%, 1)" -> {255, 0, 0, 1}
                
            @return [object]: Object with metric for each 
        */
        color: function (prop) {
            var colors = (prop.indexOf('#') > -1) ? hex(prop) : splitCommaDelimited(functionBreak(prop)),
                numColors = colors.length,
                terms = dictionary.colors,
                i = 0,
                rgba = {};
            
            for (; i < numColors; i++) {
                rgba[terms[i]] = colors[i];
            }
        },
    
        /*
            Split dimensions in format "Top Right Bottom Left"
            
            @param [string]: Dimension values
                "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
                "20px 0 30px" -> {20px, 0, 30px, 0}
                "20px 0" -> {20px, 0, 20px, 0}
                "20px" -> {20px, 20px, 20px, 20px}
            
            @return [object]: Object with T/R/B/L metrics
        */
        dimensions: function (prop) {
            var dimensions = splitSpaceDelimited(prop),
                numDimensions = dimensions.length,
                jumpBack = (numDimensions !== 3) ? 1 : 2,
                i = 0, j = 0,
                dimensionProps = {};
            
            for (; i < 4; i++) {
                dimensionProps[dimensions[i]] = dimensions[j];
                
                // Jump back counter j if we've reached the end of our set values
                j = (j === numDimensions - 1) ? j - jumpBack : j + 1;
            }
            
            return dimensionProps;
        },
        
        /*
            Split positions in format "X Y Z"
            
            @param [string]: Position values
                "20% 30% 0" -> {20%, 30%, 0}
                "20% 30%" -> {20%, 30%}
                "20%" -> {20%, 20%}
        */
        positions: function (prop) {
            var positions = splitSpaceDelimited(prop),
                numPositions = positions.length,
                i = 0,
                positionProps = {
                    X: positions[0],
                    Y: (numPositions > 1) ? positions[1] : positions[0]
                };
                
            if (numPositions > 2) {
                positionProps.Z = positions[2];
            }
            
            return positionProps;
        },
        
        /*
            Split shadow properties "X, Y, Radius, Spread, Color"
            
            @param [string]: Shadow property
            @return [object]
        */
        shadow: function (prop) {
            var bits = splitSpaceDelimited(prop),
                bitLength = bit.length,
                terms = dictionary.shadow,
                reachedColor,
                colorProp = '',
                bit, color,
                i = 0, unit,
                shadowProps = {};
                
            for (; i< bitsLength; i++) {
                bit = bits[i];
                
                // If we've reached the color property, append to color string
                if (reachedColor || isColor(bit)) {
                    reachedColor = true;
                    colorProp += bit;

                } else {
                    shadowProps[terms[i]] = bit;
                }
            }
            
            color = splitter.color(colorProp);
            
            for (var unit in color) {
                props[unit] = color[unit];
            }
            
            return shadowProps;
        }
    };

module.exports = splitters;