import { getProgressFromValue, getValueFromProgress, restrict, pointFromAngleAndDistance } from '../inc/calc';

export const createMapper = (from, to) => {
    const mapLength = from.length;

    return (value) => {
        for (let i = 1; i < mapLength; i++) {
            if (value < from[i] || i === mapLength) {
                return getValueFromProgress(restrict(getProgressFromValue(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
            }
        }
    };
};

export const circularMotion = (v, key, { values }) => 
    pointFromAngleAndDistance({
        x: values.originX.current,
        y: values.originY.current 
    }, values.angle.current, values.distance.current)[key];

