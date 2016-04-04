import { task } from 'popmotion';

export default ((callback, wait = 200, renderStep = 'onFrameStart') => {
    let timer;
    const definition = {};

    definition[renderStep] = callback;

    const callbackTask = task(definition);

    return () => {
        clearTimeout(timer);

        timer = setTimeout(() => callbackTask.once(), wait);
    };
})