import { getProgressFromValue, getValueFromProgress, restrict } from '../inc/calc';

export const map = (from, to) => {
    const mapLength = from.length;

    return (value) => {
        for (let i = 1; i < mapLength; i++) {
            if (value < from[i] || i === mapLength) {
                return getValueFromProgress(restrict(getProgressFromValue(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
            }
        }
    };
};
