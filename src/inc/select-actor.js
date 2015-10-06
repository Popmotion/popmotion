var Actor = require('../actor/Actor'),
    Iterator = require('../iterator/Iterator'),
    selectDom = require('./select-dom');

const SAVE_PROP = '__pm_actor_';

module.exports = function (selector, opts = {}) {
    var dom = selectDom(selector),
        actors = [];

    dom.forEach((element) => {
        let actor = element[SAVE_PROP];

        if (!actor) {
            opts.element = element;
            actor = element[SAVE_PROP] = new Actor(opts);
        }

        actors.push(actor);
    });

    return (actors.length > 1) ? new Iterator(actors) : actors[0];
};
