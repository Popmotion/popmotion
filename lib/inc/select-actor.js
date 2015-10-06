'use strict';

var Actor = require('../actor/Actor'),
    Iterator = require('../iterator/Iterator'),
    selectDom = require('./select-dom');

var SAVE_PROP = '__pm_actor_';

module.exports = function (selector) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var dom = selectDom(selector),
        actors = [];

    dom.forEach(function (element) {
        var actor = element[SAVE_PROP];

        if (!actor) {
            opts.element = element;
            actor = element[SAVE_PROP] = new Actor(opts);
        }

        actors.push(actor);
    });

    return actors.length > 1 ? new Iterator(actors) : actors[0];
};