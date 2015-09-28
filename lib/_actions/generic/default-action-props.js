"use strict";

module.exports = {

    // [number]: Delay this action by x ms
    delay: 0,

    // [function]: Callback when Action process starts
    onStart: undefined,

    // [function]: Callback when any value changes
    onChange: undefined,

    // [function]: Callback every frame
    onFrame: undefined,

    // [function]: Callback when Action process ends
    onEnd: undefined

};