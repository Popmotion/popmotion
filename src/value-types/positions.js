import { positions } from './settings/dictionary';
import { createDelimited, splitSpaceDelimited } from '../inc/utils';
import pxValueType from './px';

export default {
    defaultProps: pxValueType.defaultProps,

    /*
        Split dimensions in format "Top Right Bottom Left"
        
        @param [string]: Dimension values
            "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
            "20px 0 30px" -> {20px, 0, 30px, 0}
            "20px 0" -> {20px, 0, 20px, 0}
            "20px" -> {20px, 20px, 20px, 20px}
        
        @return [object]: Object with T/R/B/L metrics
    */
    split: (value) => {
        const splitValue = {};
        const splitPositions = splitSpaceDelimited(value);
        const numPositions = splitPositions.length;
        const jumpBack = (numDimensions !== 1) ? 2 : 1;
        let j = 0;

        for (let i = 0; i < 4; i++) {
            splitValue[positions[i]] = splitPositions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = (j === numDimensions) ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: (values) => createDelimited(values, positions, ' ')
};