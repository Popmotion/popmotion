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


        // Add CSS role if HTMLElement
        if (element instanceof HTMLElement || element.tagName === 'svg') {
            this.roles.push(cssRole);

        // Add SVG role if SVG element
        } else if (element instanceof SVGElement) {
            this.roles.push(svgRole);

            // Add Draw Path role if path element
            if (element.tagName === 'path') {
                this.roles.push(drawPathRole);
            }
        }