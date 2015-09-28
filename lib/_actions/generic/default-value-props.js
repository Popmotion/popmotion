"use strict";

module.exports = {

    // [number]: Current target value
    to: undefined,

    // [number]: Maximum permitted value during .track and .run
    min: undefined,

    // [number]: Minimum permitted value during .track and .run
    max: undefined,

    // [number]: Origin
    origin: 0,

    // [boolean]: Set to true when both min and max detected
    hasRange: false,

    // [boolean]: Round output if true
    round: false,

    // [string]: Name of value to listen to
    link: undefined
};