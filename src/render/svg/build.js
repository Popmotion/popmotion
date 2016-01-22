import { each, camelToDash } from '../../inc/utils';
import transformProps from '../css/transform-props';

const ZERO_NOT_ZERO = 0.0001;

export default function build(state, origin) {
    let props = {},
        hasTransform = false,
        scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1,
        scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1,
        transformOriginX = origin.x,
        transformOriginY = origin.y,
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

    each(state, (key, value) => {
        if (transformProps[key]) {
            hasTransform = true;
        } else {
            props[camelToDash(key)] = value;
        }
    });

    if (hasTransform) {
        props.transform = '';

        each(transform, (key, value) => {
            var defaultValue = (key === 'scale') ? '1' : '0';
            props.transform += value.replace(/undefined/g, defaultValue);
        });
    }

    return props;
}