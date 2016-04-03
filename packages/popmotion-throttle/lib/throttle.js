import { task } from 'popmotion';

export default ((callback, limit = 35, renderStep = 'onFrameStart') => {
    let totalElapsed = 0;
    const definition = {};

    definition[renderStep] = (t, frameStamp, elapsed) => {
        totalElapsed += elapsed;

        if (totalElapsed >= limit) {
            callback();
            totalElapsed = 0;
        }
    };

    return task(definition).start();
})