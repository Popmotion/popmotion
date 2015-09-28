"use strict";

var presetManager = require('../../actor/preset-manager'),
    utils = require('../../inc/utils'),
    parsePlaylist = function parsePlaylist() {
    var args = [].slice.call(arguments),
        playlist = args[0].split(' '),
        playlistLength = playlist.length,
        props = presetManager.getDefined(playlist[0]),
        i = 1;

    // If we've got multiple playlists, loop through and add each to the queue
    if (playlistLength > 1) {
        for (; i < playlistLength; i++) {
            args.shift();
            args.unshift(playlist[i]);
            this.queue.add.apply(this.queue, args);
        }
    }

    return props;
};

module.exports = function () {
    var args = [].slice.call(arguments),
        numArgs = args.length,

    // If first argument is a string, get base object from presets
    props = utils.isString(args[0]) ? parsePlaylist.apply(this, args) : args[0],
        i = 1;

    // Loop through arguments
    for (; i < numArgs; i++) {
        switch (typeof args[i]) {
            // Override properties
            case 'object':
                props = utils.merge(props, args[i]);
                break;
            // Duration
            case 'number':
                props.duration = args[i];
                break;
            // Easing
            case 'string':
                props.ease = args[i];
                break;
        }
    }

    // Default .play properties
    props.loopCount = props.yoyoCount = props.flipCount = 0;
    props.playDirection = 1;

    return props;
};