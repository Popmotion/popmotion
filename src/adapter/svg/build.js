import { camelToDash } from '../../inc/utils';
import transformProps from '../css/transform-props';

const ZERO_NOT_ZERO = 0.0001;

export default function build(state) {
    let props = {},
        hasTransform = false,
        scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1,
        scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1,
        transformOriginX = state.originX || 50,
        transformOriginY = state.originY || 50,
        scaleTransformX = - transformOriginX * (scale * 1),
        scaleTransformY = - transformOriginY * (scaleY * 1),
        scaleReplaceX = transformOriginX / scale,
        scaleReplaceY = transformOriginY / scaleY,
        transform = {
            translate: `translate(${state.translateX}, ${state.translateY}) `,
            scale: `translate(${scaleTransformX}, ${scaleTransformY}) scale(${scale}, ${scaleY}) translate(${scaleReplaceX}, ${scaleReplaceY}) `,
            rotate: `rotate(${state.rotate}, ${transformOriginX}, ${transformOriginY}) `,
            skewX: `skewX(${state.skewX}) `,
            skewY: `skewY(${state.skewY}) `
        };

    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            if (transformProps[key]) {
                hasTransform = true;
            } else {
                props[camelToDash(key)] = state[key];
            }
        }
    }

    if (hasTransform) {
        props.transform = '';

        for (let key in transform) {
            if (transform.hasOwnProperty(key)) {
                const defaultValue = (key === 'scale') ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }

    return props;
}