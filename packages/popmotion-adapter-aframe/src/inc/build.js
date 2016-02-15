import dictionary from './dictionary';
import { POSITION, SCALE, ROTATION } from './type-keys';
import { utils } from 'popmotion';

const camelToDash = utils.camelToDash;

const XYZ_TEMPLATE = '$0 $1 $2';
const TYPES = [POSITION, SCALE, ROTATION];

let defaults = {};
defaults[POSITION] = defaults[ROTATION] = 0;
defaults[SCALE] = 1;

function createTemplateProp(existing, position, value) {
    let prop = existing || XYZ_TEMPLATE;

    prop = prop.replace('$' + position, value);

    return prop;
}

function applyDefaults(type, existing) {
    return existing.replace('$0', defaults[type]).replace('$1', defaults[type]).replace('$2', defaults[type]);
};

export default function (state) {
    let props = {};

    each(state, (key, value) => {
        if (dictionary[key]) {
            props[dictionary[key].prop] = createTemplateProp(props[dictionary[key].prop], dictionary[key].position, value);

        } else {
            props[camelToDash(key)] = value;
        }
    });

    TYPES.forEach((type) => {
        if (props[type]) {
            props[type] = applyDefaults(type, props[type]);
        }
    });

    return props;
}