'use strict';

var isString = require('../../inc/utils').isString;

module.exports = function (value) {
  return isString(value) ? value.split(/,\s*/) : [value];
};