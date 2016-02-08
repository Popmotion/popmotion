/*
    Core render loop

    Some decicisons here have been taken in the name of performance. All hail performance.
    (It turns out microoptimisations do matter when you have 16ms)
*/
import timer from './timer';
import tick from './tick';
import manager from './manager';

const processStepOrder = [
    { name: 'onFrameStart' },
    { name: 'onUpdate' },
    { name: 'willRender', decideRender: true },
    { name: 'onPreRender', isRender: true },
    { name: 'onRender', isRender: true },
    { name: 'onPostRender', isRender: true },
    { name: 'onFrameEnd' },
    { name: 'onCleanup' }
];
const numProcessSteps = processStepOrder.length;

// [boolean]: Is loop running?
let isRunning = false;

/*
    [timestamp]: Frame timestamp
    [int]: Time since last frame
*/
function fireAll(frameStamp, elapsed) {
    const activeIds = manager.getActiveIds();
    const activeProcessCount = activeIds.length;

    for (let i = 0; i < numProcessSteps; i++) {
        const step = processStepOrder[i];

        for (let i2 = 0; i2 < activeProcessCount; i2++) {
            const process = manager.activeProcesses[activeIds[i2]];
            let result = false;

            // Check if this process has this step, or if it's a render step that we're rendering this frame
            if (process && process[step.name] && (!step.isRender || (step.isRender && process._renderThisFrame === true))) {
                result = process[step.name].call(process, process, frameStamp, elapsed);
            }

            // If this is a decide render step and it returns `false`, set willRender to false
            if (step.decideRender) {
                process._renderThisFrame = (process[step.name] && result !== true) ? false : true;
            }
        }
    }

    return manager.getNonBackgroundRunningCount();
}

// Function to fire every frame
function frame(frameStamp) {
    timer.update(frameStamp);
    isRunning = fireAll(frameStamp, timer.getElapsed());

    if (isRunning) {
        tick(frame);
    }
}

// Start loop
function start() {
    if (!isRunning) {
        timer.start();
        isRunning = true;
        tick(frame);
    }
}

// Exports
export const getProcessId = manager.getProcessId;

/*
    [int]: Process ID to activate
    [Process]: Process to activate
*/
export function activate(id, process) {
    manager.activate(id, process);

    if (!isRunning) {
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
export const deactivate = manager.deactivate;