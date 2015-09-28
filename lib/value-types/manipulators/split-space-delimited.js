'use strict';

module.exports = function (value) {
    return typeof value === 'string' ? value.split(' ') : [value];
};