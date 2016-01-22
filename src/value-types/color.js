import { each } from '../inc/utils';
import rgb from './rgb';
import hsl from './hsl';
import hex from './hex';

const colorTypes = [rgb, hsl, hex];
const numColorTypes = colorTypes.length;

export default {
    defaultProps: { ...rgb.defaultProps, ...hsl.defaultProps },

    test: (value) => rgb.test(value) || hex.test(value) || hsl.test(value),

    split: (value) => {
        for (let i = 0; i < numColorTypes; i++) {
            if (colorTypes[i].test(value)) {
                return colorTypes[i].split(value);
            }
        }
    },

    combine: (value) => (values.Red !== undefined) ? rgb.combine(values) : hsl.combine(values)
};
