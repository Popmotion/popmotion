import { getProgressFromValue, getValueFromProgress, ease, restrict } from './calc';

const BLEND_ACCURACY = 10;

export default (outAction, inAction, key) => {
    const outValue = outAction.values[key];

    if (outAction.elapsed === undefined || !outValue) {
        return;
    }

    const inValue = inAction.values[key];
    const outTotalDuration = outValue.delay + outValue.duration;
    const timeUntilOutEnd = outTotalDuration - outAction.elapsed;
    const inPositionAtOutEnd = ease(restrict(getProgressFromValue(timeUntilOutEnd, 0, inValue.delay + inValue.duration), 0, 1), inValue.from, inValue.to, inValue.ease);
    const inBiggerThanOutAtStart = inValue.from > outValue.current;
    const inBiggerThanOutAtEnd = inPositionAtOutEnd > outValue.to;
    const tweensIntersect = inBiggerThanOutAtStart !== inBiggerThanOutAtEnd;

    const blendCurve = [[0, outValue.current], [timeUntilOutEnd, inPositionAtOutEnd]];

    // If tweens intersect, resolve tweens at a resolution to find exactly where
    if (tweensIntersect) {
        const timeStepToTest = timeUntilOutEnd / BLEND_ACCURACY;
        let foundP1 = false;
        let foundP2 = false;

        for (let i = 0; i <= BLEND_ACCURACY; i++) {
            const timeStep = i * timeStepToTest;
            const outAtTime = ease(getProgressFromValue(outAction.elapsed + timeStep, outValue.delay, outValue.duration), outValue.from, outValue.to, outValue.ease);
            const inAtTime = ease(getProgressFromValue(inAction.elapsed + timeStep, inValue.delay, inValue.duration), inValue.from, inValue.to, inValue.ease);

            if (!foundP1 && ((inBiggerThanOutAtStart && inAtTime < outAtTime) || (!inBiggerThanOutAtStart && inAtTime > outAtTime))) {
                blendCurve.splice(1, 0, [timeStep, inAtTime]);
                foundP1 = true;
            }

            if (foundP1 && ((inBiggerThanOutAtStart && inAtTime < outValue.current) || (!inBiggerThanOutAtStart && inAtTime > outValue.current))) {
                blendCurve[2] = [timeStep, inAtTime];
                foundP2 = true;
            }

            if (foundP2) {
                break;
            }
        }
    }

    if (blendCurve.length === 2) {
        // Pass between tweens using incoming easing if just two points
        return () => {
            if (blendProgress === 1) {
                inAction.blendCurve = undefined;
            }

            return ease(restrict(getProgressFromValue(inAction.elapsed, blendCurve[0][0], blendCurve[1][0]), 0, 1), outValue.current, inValue.current, inValue.ease);
        };
    } else {
        // Pass between tweens using bezier interpolation
        return () => {
            const blendProgress = restrict(getProgressFromValue(inAction.elapsed, blendCurve[0][0], blendCurve[2][0]), 0, 1);
            const aP = getValueFromProgress(blendProgress, blendCurve[0][1], blendCurve[1][1]);
            const bP = getValueFromProgress(blendProgress, blendCurve[1][1], blendCurve[2][1]);
console.log(blendProgress)
            if (blendProgress === 1) {
                inAction.blendCurve = undefined;
                return inValue.current;
            }

            return getValueFromProgress(blendProgress, aP, bP);
        };
    }
};
