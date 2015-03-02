"use strict";

module.exports = function (key, namespace) {
    return namespace ? key + '.' + namespace : key;
};