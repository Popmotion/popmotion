"use strict";

var presetManager = require('../../element/preset-manager'),
    utils = require('../../inc/utils');

module.exports = function (base, override) {
    var props = {},
        playlist = [],
        argsAsArray = [].slice.call(arguments),
        argsLength = arguments.length,
        i = 0,
        playlistLength, arg, typeofArg;

    // If this is a playlist reference, add presets to queue
    if (typeof base === 'string') {
        playlist = base.split(' ');
        playlistLength = playlist.length;
        props = presetManager.getDefined(playlist[0]);

        // If we've got multiple playlists, loop through and add each to the queue
        if (playlistLength > 1) {
            for (; i < playlistLength; i++) {
                argsAsArray.shift();
                argsAsArray.unshift(playlist[i]);
                this.queue.add.apply(this.queue, argsAsArray);
            }
        }

    // Or, this is a straight set of properties
    } else {
        props = base;
    }

    // Override properties with second arg if it's an object
    if (typeof override === 'object') {
        props = utils.merge(props, override);
    }

    // Override properties with extra args
    for (i = 1; i < argsLength; i++) {
        arg = arguments[i];
        typeofArg = typeof arg;

         // Easing if string and not first index
        if (typeofArg === 'string') {
            props.ease = arg;
        
        // Duration if number
        } else if (typeofArg === 'number') {
            props.duration = arg;
            
        // Callback if function
        } else if (utils.isFunc(arg)) {
            props.onEnd = arg;
        }
    }

    // Default .play properties
    props.loopCount = props.yoyoCount = props.flipCount = 0;
    props.playDirection = 1;

    return props;
};