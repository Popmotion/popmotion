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

export const circularMotion = (v, key, { values }) => {
    const originX = (values.originX) ? values.originX.current : 0;
    const originY = (values.originY) ? values.originY.current : 0;

    return pointFromAngleAndDistance({
        x: originX,
        y: originY 
    }, values.angle.current, values.distance.current)[key];
};

/*
    Combine transformers into one function that calls every
    transformer in the array and returns the result

    @param [array]
    @return [function]
*/
export const chain = (transformers) => {
    const numTransformers = transformers.length;
    let i = 0;

    /*
        @param [number]
        @param [string]
        @param [Action]
        @return [number]
    */
    return (v, key, a) => {
        for (i = 0; i < numTransformers; i++) {
            v = transformers[i](v, key, a);
        }

        return v;
    };
};