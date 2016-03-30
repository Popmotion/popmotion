import dictionary from './dictionary';
import { POSITION, SCALE, ROTATION } from './type-keys';
import { utils } from 'popmotion';

const camelToDash = utils.camelToDash;

const XYZ_TEMPLATE = '$0 $1 $2';
const TYPES = [POSITION, SCALE, ROTATION];
const NUM_TYPES = TYPES.length;

let defaults = {};
defaults[POSITION] = defaults[ROTATION] = 0;
defaults[SCALE] = 1;

const createTemplateProp = (existing, position, value) => {
    let prop = existing || XYZ_TEMPLATE;

    prop = prop.replace('$' + position, value);

    return prop;
};

const applyDefaults = (type, existing) => {
    return existing.replace('$0', defaults[type]).replace('$1', defaults[type]).replace('$2', defaults[type]);
};

export default function (state) {
    const props = {};

    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            const value = state[key];
            if (dictionary[key]) {
                props[dictionary[key].prop] = createTemplateProp(props[dictionary[key].prop], dictionary[key].position, value);
            } else {
                props[camelToDash(key)] = value;
            }
        }
    }

    for (let i = 0; i < NUM_TYPES; i++) {
        const type = TYPES[i];
        if (props[type]) {
            props[type] = applyDefaults(type, props[type]);
        }
    }

    return props;
}