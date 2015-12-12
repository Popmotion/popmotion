var each = require('../../inc/utils').each,
    transformDictionary = require('../css/transform-dictionary'),
    transformProps = transformDictionary.props,
    zeroNotZero = 0.0001,
    CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g,
    REPLACE_TEMPLATE = '$1-$2';

module.exports = function (output, origin) {
    var props = {},
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
            props[key.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase()] = value;
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