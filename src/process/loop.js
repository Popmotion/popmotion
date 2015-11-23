const timer = require('./timer');
const systemTick = require('./system-tick');

const processOrder = ['update', 'preRender', 'render', 'postRender', 'cleanup'];
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

    @param [boolean]
    @param [boolean]
*/
const updateCount = (add, isBackground) => {
    const modify = add ? 1 : -1;

    runningCount += modify;

    if (!isBackground) {
        activeCount += modify;
    }
}

/*
    Purge items in the deactivate queue from our runningProcesses
*/
const purge = () => {
    let queueLength = deactivateQueue.length;

    while (queueLength--) {
        const idToDelete = deactivateQueue[queueLength];
        const activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, runningProcesses[idToDelete].isBackground);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
}

/*
    Fire one process stage
*/
const fire = (method, framestamp, elapsed) => {
    for (let i = 0; i < runningCount; i++) {
        let process = runningProcesses[runningIds[i]];

        if (process && process[method]) {
            process[method].call(process.scope, process.scope, framestamp, elapsed);
        }
    }
}

/*
    Fire all active processes
    
    @param [int]: Timestamp of executing frames
    @param [int]: Time since previous frame
    @return [boolean]: True if active processes found
*/
const fireAll = (framestamp, elapsed) => {
    purge();

    for (let i = 0; i < numProcessSteps; i++) {
        fire(processOrder[i], framestamp, elapsed);
    }

    purge();

    return activeCount ? true : false;
}

const loop = {
    /*
        Fire all active processes once per frame
    */
    frame: () => {
        systemTick((framestamp) => {
            if (isRunning) {
                loop.frame();
            }

            timer.update(framestamp);
            isRunning = fireAll(framestamp, timer.getElapsed());
        });
    },

    start: () => {
        if (!isRunning) {
            timer.start();
            isRunning = true;
            loop.frame();
        }
    },

    stop: () => {
        isRunning = false;
    }
};

module.exports = {
    // Increments and returns the latest process ID
    getProcessId: () => currentProcessId++,

    /*
        @param [Process]
        @param [int]
    */
    activate: (process, processId) => {
        const queueIndex = deactivateQueue.indexOf(processId);
        const isQueued = (queueIndex > -1);
        const isRunning = (runningIds.indexOf(processId) > -1);

        // Remove from deactivateQueue if queued
        if (isQueued) {
            deactivateQueue.splice(queueIndex, 1);
        }

        // Add to running processes array if not there
        if (!isRunning) {
            runningIds.push(processId);
            runningProcesses[processId] = process;

            updateCount(true, process.isBackground);
            loop.start();
        }
    },

    /*
        @param [int]
    */
    deactivate: (processId) => {
        if (deactivateQueue.indexOf(processId) === -1) {
            deactivateQueue.push(processId);
        }
    }
};