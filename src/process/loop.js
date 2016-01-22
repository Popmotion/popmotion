import timer from './timer';
import tick from './tick';

const processOrder = [
    { step: 'onFrameStart' },
    { step: 'onUpdate' },
    { step: 'willRender', decideRender: true },
    { step: 'preRender', isRender: true },
    { step: 'onRender', isRender: true },
    { step: 'postRender', isRender: true },
    { step: 'onFrameEnd' },
    { step: 'onCleanup' }
];
const numProcessSteps = processOrder.length;

// [int]: Process ID, incremented for each new process
let currentProcessId = 0;

// [int]: Number of running processes
let runningCount = 0;

// [int]: Number of running non-background processes
let activeCount = 0;

// [array]: Array of active process IDs
let runningIds = [];

// [object]: Map of active processes
let runningProcesses = {};

// [array]: Array of process IDs queued for deactivation
let deactivateQueue = [];

// [boolean]: Is loop running?
let isRunning = false;

/*
    Update running

    [boolean]: `true` to add
    [boolean]: `true` if lazy
*/
function updateCount(add, isLazy) {
    const modify = add ? 1 : -1;

    runningCount += modify;

    if (!isLazy) {
        activeCount += modify;
    }
}

function purge() {
    let queueLength = deactivateQueue.length;

    while (queueLength--) {
        const idToDelete = deactivateQueue[queueLength];
        const activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, runningProcesses[idToDelete].isLazy);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
}

/*
    [timestamp]: Frame timestamp
    [int]: Time since last frame
*/
function fireAll(frameStamp, elapsed) {
    let method = {};
    let methodName = '';
    let isRenderStep = false;
    let process;
    let result;

    purge();

    const numRunning = runningCount;

    for (let i = 0; i < numProcessSteps; i++) {
        method = processOrder[i];
        methodName = method.step;
        isRenderStep = method.isRender ? true : false;

        for (let i = 0; i < numRunning; i++) {
            process = runningProcesses[runningIds[i]];

            if (process && process[methodName] && (!isRenderStep || (isRenderStep && process._render === true))) {
                result = process[methodName].call(process, process, frameStamp, elapsed);
            }

            if (method.decideRender) {
                process._render = (process[methodName] && result === false) ? false : true; 
            }
        }
    }

    return activeCount ? true : false;
}

// Function to fire every frame
function frame() {
    tick((frameStamp) => {
        if (isRunning) {
            frame();
        }

        timer.update(frameStamp);
        isRunning = fireAll(frameStamp, timer.getElapsed());
    });
}

// Start loop
function start() {
    if (!isRunning) {
        timer.start();
        isRunning = true;
        frame();
    }
}

// Stop loop
function stop() {
    isRunning = false;
}

// Exports
export function getProcessId() {
    return currentProcessId++;
}

/*
    [int]: Process ID to activate
    [Process]: Process to activate
*/
export function activate(id, process) {
    const queueIndex = deactivateQueue.indexOf(id);
    const isQueued = (queueIndex > -1);
    const isRunning = (runningIds.indexOf(id) > -1);

    // Remove from deactivateQueue if queued
    if (isQueued) {
        deactivateQueue.splice(queueIndex, 1);
    }

    // Add to running processes array if not there
    if (!isRunning) {
        runningIds.push(id);
        runningProcesses[id] = process;

        updateCount(true, process.isLazy);
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
export function deactivate(id) {
    if (deactivateQueue.indexOf(id) === -1) {
        deactivateQueue.push(id);
    }
}