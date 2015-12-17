const utils = require('../../inc/utils');
const transformDictionary = require('../css/transform-dictionary');

const each = utils.each;
const camelToDash = utils.camelToDash;
const transformProps = transformDictionary.props;
const zeroNotZero = 0.0001;

module.exports = function (output, origin) {
    let props = {},
        hasTransform = false,
        scale = output.scale !== undefined ? output.scale || zeroNotZero : output.scaleX || 1,
        scaleY = output.scaleY !== undefined ? output.scaleY || zeroNotZero : scale || 1,
        transformOriginX = origin.x,
        transformOriginY = origin.y,
        scaleTransformX = - transformOriginX * (scale * 1),
        scaleTransformY = - transformOriginY * (scaleY * 1),
        scaleReplaceX = transformOriginX / scale,
        scaleReplaceY = transformOriginY / scaleY,
        transform = {
            translate: `translate(${output.translateX}, ${output.translateY}) `,
            scale: `translate(${scaleTransformX}, ${scaleTransformY}) scale(${scale}, ${scaleY}) translate(${scaleReplaceX}, ${scaleReplaceY}) `,
            rotate: `rotate(${output.rotate}, ${transformOriginX}, ${transformOriginY}) `,
            skewX: `skewX(${output.skewX}) `,
            skewY: `skewY(${output.skewY}) `
        };

    each(output, function (key, value) {
        if (transformProps[key]) {
            hasTransform = true;
        } else {
            props[camelToDash(key)] = value;
        }
    });

    if (hasTransform) {
        props.transform = '';

        each(transform, function (key, value) {
            var defaultValue = (key === 'scale') ? '1' : '0';
            props.transform += value.replace(/undefined/g, defaultValue);
        });
    }

    return props;
};