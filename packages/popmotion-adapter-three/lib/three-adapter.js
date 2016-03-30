import { createAdapter, valueType } from 'popmotion';

const getSelectors = {
    x: element => element.position.x,
    y: element => element.position.y,
    z: element => element.position.z,
    rotateX: element => element.rotation.x,
    rotateY: element => element.rotation.y,
    rotateZ: element => element.rotation.z,
    scaleX: element => element.scale.x,
    scaleY: element => element.scale.y,
    scaleZ: element => element.scale.z
};

getSelectors.scale = getSelectors.scaleX;

const setSelectors = {
    x: (element, value) => element.position.setX(value),
    y: (element, value) => element.position.setY(value),
    z: (element, value) => element.position.setZ(value),
    rotateX: (element, value) => element.rotation.x = value,
    rotateY: (element, value) => element.rotation.y = value,
    rotateZ: (element, value) => element.rotation.z = value,
    scaleX: (element, value) => element.scale.setX(value),
    scaleY: (element, value) => element.scale.setY(value),
    scaleZ: (element, value) => element.scale.setZ(value)
};

setSelectors.scale = (element, value) => {
    setSelectors.scaleX(element, value);
    setSelectors.scaleY(element, value);
    setSelectors.scaleZ(element, value);
};

export default createAdapter({
    setter: (element, props) => {
        for (let key in props) {
            if (props.hasOwnProperty(key)) {
                if (setSelectors[key]) {
                    setSelectors[key](element, props[key]);
                } else {
                    element[key] = props[key];
                }
            }
        }
    },

    getter: (element, key) => getSelectors[key] ? getSelectors[key](element) : element[key],

    valueTypeMap: {
        color: valueType.color,
        scale: valueType.scale,
        scaleX: valueType.scale,
        scaleY: valueType.scale,
        scaleZ: valueType.scale
    }
});