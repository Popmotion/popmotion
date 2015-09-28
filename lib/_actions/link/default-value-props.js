"use strict";

module.exports = {
    // [array]: Linear range of values (eg [-100, -50, 50, 100]) of linked value to map to .mapTo
    mapLink: undefined,

    // [array]: Non-linear range of values (eg [0, 1, 1, 0]) to map to .mapLink - here the linked value being 75 would result in a value of 0.5
    mapTo: undefined,

    // [number]: Factor of input movement to direct output
    amp: 1
};