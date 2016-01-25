import { currentTime } from '../inc/utils';

const MAX_ELAPSED = 33;

let current = 0;
let elapsed = 16.7;
let dilation = 1;

export default {
    update: (framestamp) => {
        elapsed = Math.min(framestamp - current, MAX_ELAPSED) * dilation;
        current = framestamp;
    },

    start: () => current = currentTime(),

    getElapsed: () => elapsed
};

export const setDilation = (newDilation) => dilation = newDilation;