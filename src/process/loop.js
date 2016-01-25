import timer from './timer';
import tick from './tick';

const processOrder = [
    { step: 'onFrameStart' },
    { step: 'onUpdate' },
    { step: 'willRender', decideRender: true },
    { step: 'onRender', isRender: true },
    { step: 'postRender', isRender: true },
    { step: 'onFrameEnd' },
    { step: 'onCleanup' }
];
const numProcessSteps = processOrder.length;

// [boolean]: Is loop running?
let isRunning = false;

// [int]: Process ID, incremented for each new process
let currentProcessId = 0;

// [int]: Number of running processes
let runningCount = 0;

// [int]: Number of running non-background processes
let activeCount = 0;

// [array]: Array of active process IDs
const runningIds = [];

// [object]: Map of active processes
const runningProcesses = {};

// [array]: Array of process IDs queued for activation
let activateQueue = [];

// [array]: Array of process IDs queued for deactivation
let deactivateQueue = [];

/*
    Update lists

    @param [number]
    @param [array]
    @param [array]
*/
function updateLists(id, inList, outList) {
    const inPosition = inList.indexOf(inList);
    const outPosition = outList.indexOf(outList);

    if (inPosition === -1) {
        inList.push(id);
    }

    if (outPosition > -1) {
        outList.splice(outPosition, 1);
    }
}

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

function resolveQueues() {
    let activateQueueLength = activateQueue.length;
    let deactivateQueueLength = deactivateQueue.length;

    while (deactivateQueue--) {
        const id = deactivateQueue[deactivateQueueLength];
        const activeIdIndex = runningIds.indexOf(id);
        const process = runningProcesses[id];

        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);
            updateCount(false, process.isLazy);
            runningProcesses[id] = undefined;
        }

        if (process.onEnd) {
            process.onEnd(process);
        }
    }

    while (activateQueueLength--) {
        const id = activateQueue[activateQueueLength];
        const activeIdIndex = runningIds.indexOf(id);
        const process = runningProcesses[id];

        if (activeIdIndex === -1) {
            runningIds.push(id);
        }

        updateCount(true, process.isLazy);

        if (process.onStart) {
            process.onStart(process);
        }
    }

    activateQueue = [];
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

    resolveQueues();

    const numRunning = runningCount;

    for (let i = 0; i < numProcessSteps; i++) {
        method = processOrder[i];
        methodName = method.step;
        isRenderStep = method.isRender ? true : false;

        for (let i2 = 0; i2 < numRunning; i2++) {
            process = runningProcesses[runningIds[i2]];

            if (process && process[methodName] && (!isRenderStep || (isRenderStep && process._renderThisFrame === true))) {
                result = process[methodName].call(process, process, frameStamp, elapsed);
            }

            if (method.decideRender) {
                process._renderThisFrame = (process[methodName] && result !== true) ? false : true; 
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
    updateLists(id, activateQueue, deactivateQueue);
    
    runningProcesses[id] = process;

    if (!isRunning) {
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
export function deactivate(id) {
    updateLists(id, deactivateQueue, activateQueue);
}