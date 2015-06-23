"use strict";

var presetManager = require('../../element/preset-manager'),
    utils = require('../../inc/utils');

module.exports = function (base, override) {
    var props = {},
        playlist = [],
        argsAsArray = [],
        i = 0,
        playlistLength;

    // If this is a playlist reference, add presets to queue
    if (typeof base === 'string') {
        playlist = base.split(' ');
        playlistLength = playlist.length;
        props = presetManager.getDefined(playlist[0]);

        // If we've got multiple playlists, loop through and add each to the queue
        if (playlistLength > 1) {
            argsAsArray = [].slice.call(arguments);

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

    // Default .play properties
    props.loopCount = props.yoyoCount = props.flipCount = 0;
    props.playDirection = 1;

    return props;
};