import { createDelimited, splitSpaceDelimited } from '../inc/utils';
import pxValueType from './px';
import { axes } from './settings/dictionary';

export default {
    defaultProps: pxValueType.defaultProps,
        
    /*
        Split positions in format "X Y Z"
        
        @param [string]: Position values
            "20% 30% 0" -> {20%, 30%, 0}
            "20% 30%" -> {20%, 30%}
            "20%" -> {20%, 20%}
    */
    split: (value) => {
        const splitValues = splitSpaceDelimited(value);
        const numAxes = splitValues.length;
        const splitValue = {
            X: splitValues[0],
            Y: (numAxes > 1) ? splitValues[1] : splitValues[0]
        };

        if (numAxes > 2) {
            splitValue.Z = splitValues[2];
        }

        return splitValue;
    },

    combine: (values) => createDelimited(values, axes, ' ')
};
