"use strict";

var protectedProperties = ['scope',  'dom'];

module.exports = function (key) {
    return (protectedProperties.indexOf(key) !== -1);
};