import build from './inc/build';
import { adapter, colorType, scaleType } from 'popmotion';
import { POSITION, ROTATION } from './inc/type-keys';

const stateMap = {
    x: POSITION + 'X',
    y: POSITION + 'Y',
    z: POSITION + 'Z',
    rotateX: ROTATION + 'X',
    rotateY: ROTATION + 'Y',
    rotateZ: ROTATION + 'Z'
};

const valueTypeMap = {
    scale: scaleType,
    scaleX: scaleType,
    scaleY: scaleType,
    scaleZ: scaleType,
    color: colorType
};

function setter(props) {
    const builtProps = build(props);

    for (let key in builtProps) {
        if (builtProps.hasOwnProperty(key)) {
            this.element.setAttribute(key, builtProps[key]);
        }
    }
}

function getter(key) {
    return this.element.getAttribute(key);
}

export default (element => adapter({ element, stateMap, valueTypeMap, getter, setter }))