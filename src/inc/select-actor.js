import Actor from '../actor/Actor';
import { selectDom } from '../inc/utils';

const SAVE_PROP = '__pm_actor_';

export default function selectActor(selector, props = {}) {
    const elements = selectDom(selector);

    const actors = elements.map((element) => {
        let actor = element[SAVE_PROP];

        if (!actor) {
            props.element = detectAdapter(element);
            actor = element[SAVE_PROP] = new Actor(props);
        }

        return actor;
    });

    return (actors.length > 1) ? actors : actors[0];
}
