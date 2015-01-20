"use strict";

var utils = require('../utils/utils.js'),

    Data = function () {
        var store = {},
            /*
                Get data from object
                
                @param [string]: Key of data
                @return: Data at key
            */
            getData = function (key) {
                return (key !== undefined) ? store[key] : store;
            },
    
            /*
                Set data
                
                @param [object]: Data to bind
            */
            setData = function (data) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        store[key] = data[key];
                    }
                }
            };
        
        /*
            Read or bind data to this Redshift object
            
            Read
                @param [string]: Key of data value to read
                @return [any]: The data stored under that key
                
            Write syntax A
                @param [string]: Key of data value to write
                @param [any]: The data to store under that key
                
            Write syntax B
                @param [object]: Object of key/value pairs to attach to this object
        */
        return function () {
            var returnValue = this,
                arg0 = arguments[0],
                arg0IsString = utils.isString(arg0),
                dataToSet = {};
            
            // If this is a get request
            if (arg0IsString && !arguments[1]) {
                returnValue = getData(arg0);
            
            } else if (arg0 === undefined) {
                returnValue = store;

            // Else this is a set request
            } else {
                if (arg0IsString) {
                    dataToSet[arg0] = arguments[1];
                } else {
                    dataToSet = arg0;
                }
                
                setData(dataToSet);
            }
            
            return returnValue;
        }
    };

module.exports = Data;