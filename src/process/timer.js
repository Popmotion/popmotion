const hasPerformanceNow = (typeof performance !== 'undefined' && performance.now);
const currentTime = () => hasPerformanceNow ? performance.now() : new Date().getTime();

const MAX_ELAPSED = 33;

let base = 0;
let current = 0;
let elapsed = 16.7;
let dilation = 1;
let lostTime = 0;

export default {
    update: (framestamp) => {
        if (base === 0) {
            current = base = framestamp;
        }

        const prev = current;
        const lossAdjusted = framestamp - lostTime;
        const nonDilatedElapsed = Math.min(lossAdjusted - prev, MAX_ELAPSED);
        elapsed = nonDilatedElapsed * dilation;
        current += elapsed;
        lostTime += nonDilatedElapsed - elapsed;
    },

    start: () => current = currentTime(),

    getElapsed: () => elapsed
};

export function setDilation(newDilation) {
    dilation = newDilation;
}