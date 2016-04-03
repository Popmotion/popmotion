import { task } from 'popmotion';

export default ((callback, limit = 35, renderStep = 'onFrameStart') => {
    let wait = false;
    const definition = {};

    definition[renderStep] = callback;

    const callbackTask = task(definition);

    return () => {
        if (!wait) {
            callbackTask.once();
            wait = true;

            setTimeout(() => wait = false, limit);
        }
    };
})