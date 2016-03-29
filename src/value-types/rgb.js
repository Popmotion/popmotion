import { createDelimited, createFunctionString, getColorValues } from '../inc/utils';
import { rgb as rgbTerms } from './settings/dictionary';
import { rgb as defaultRGB, opacity as defaultOpacity } from './settings/default-props';

export default {
    defaultProps: {
        Red: defaultRGB,
        Green: defaultRGB,
        Blue: defaultRGB,
        Alpha: defaultOpacity
    },

    test: (value) => (value && value.indexOf('rgb') > -1),

    split: (value) => getColorValues(value, rgbTerms),

    combine: (values) => createFunctionString(createDelimited(values, rgbTerms, ', ', 2), 'rgba')
};