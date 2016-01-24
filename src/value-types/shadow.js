import color from './color';
import { defaultProps as pxDefaultProps } from './px';
import { shadow as shadowTerms } from './settings/dictionary';
import { splitSpaceDelimited } from '../inc/utils';

const shadowWithoutColorTerms = shadowTerms.slice(0, 4);

export default {
    defaultProps: {
        ...color.defaultProps,
        X: pxDefaultProps,
        Y: pxDefaultProps,
        Radius: pxDefaultProps,
        Spread: pxDefaultProps
    },

    split: (value) => {
        const bits = splitSpaceDelimited(value);
        let hasReachedColor = false;
        let colorProp = '';
        let splitValue = {};

        bits.forEach((bit, i) => {
            // If we've reached the color props, append to color string
            if (hasReachedColor || color.test(thisBit)) {
                hasReachedColor = true;
                colorProp += bit;

            // Else process shadow value
            } else {
                splitValue[shadowTerms[i]] = bit;
            }
        });

        const splitColorProps = color.split(colorProp);

        return { ...splitValue, splitColorProps };
    },

    combine: (value) => createDelimited(values, shadowWithoutColorTerms, ' ') + color.combine(values)
};
