import { detectFlow } from 'popmotion';
import throttle from 'popmotion-throttle';
import debounce from 'popmotion-debounce';

let hasInitialised = false;
const elementsToCheck = [];

const init = () => {
    viewport = new Viewport();

    window.addEventListener('scroll', throttle(checkAll, 1000 / 30)); // 30fps
    window.addEventListener('resize', debounce(measureAll));

    trackViewport = true;
};

export const trackPosition = (element, callbacks) => {
    const flow = detectFlow(element);

    if (!hasInitialised) {
        init();
    }

    for (let key in callbacks) {
        if (callbacks.hasOwnProperty(key)) {
            flow[key] = callbacks[key];
        }
    }

    flow.onScreenTrackId = elementsToCheck.push(flow);
};

export const stopTracking = (element) => {
    const flow = detectFlow(element);
    delete elementsToCheck[flow.onScreenTrackId];
};

