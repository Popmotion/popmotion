const isString = require('../../inc/utils').isString;

module.exports = value => isString(value) ? value.split(' ') : [value];