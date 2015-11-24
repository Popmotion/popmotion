const currentTime = require('../inc/utils').currentTime;
const MAX_ELAPSED = 33;

let current = 0;
let elapsed = 16.7;

const timer = {
    update: (framestamp) => {
        const prev = current;
        current = framestamp;
        elapsed = Math.min(current - prev, MAX_ELAPSED);

        return current;
    },

    start: () => current = currentTime(),

    getElapsed: () => elapsed
};

module.exports = timer;