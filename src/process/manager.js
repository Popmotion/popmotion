// [int]: Incremented for each new running process
let currentProcessId = 0;

// [int]: Number of all running processes
let totalRunningCount = 0;

// [int]: Number of running processes excluding background processes
let nonBackgroundRunningCount = 0;

// [array]: Array of running process IDs
const runningIds = [];

// [object]: Map of running processes
const activeProcesses = {};

// [array]: Array of process IDs queued for activation
const activateQueue = [];

// [array]: Array of process IDs queued for deactivation
const deactivateQueue = [];

/*
    Update activate/deactivate queues

    @param [number]
    @param [array]
    @param [array]
*/
const updateQueues = (id, inList, outList) => {
    const inPosition = inList.indexOf(id);
    const outPosition = outList.indexOf(id);

    if (inPosition === -1) {
        inList.push(id);
    }

    if (outPosition > -1) {
        outList.splice(outPosition, 1);
    }
};

/*
    Update running

    [boolean]: `true` to add
    [boolean]: `true` if lazy
*/
const updateRunningCount = (add, isLazy) => {
    const modify = add ? 1 : -1;

    totalRunningCount += modify;

    if (!isLazy) {
        nonBackgroundRunningCount += modify;
    }
};

export default {
    activeProcesses,

    // Activate a process
    activate: (id, process) => {
        activeProcesses[id] = process;
        process.isActive = true;
        updateQueues(id, activateQueue, deactivateQueue);
    },

    // Deactivate a process
    deactivate: (id) => {
        process.isActive = false;
        updateQueues(id, deactivateQueue, activateQueue);
    },

    // Number background processes
    getNonBackgroundRunningCount: () => nonBackgroundRunningCount,

    // Increment current process ID and return
    getProcessId: () => currentProcessId++,

    // Resolve activate/deactivate processes and return active ids
    getActiveIds: () => {
        /*
            Process deactivate queue
        */
        const deactivateQueueLength = deactivateQueue.length;

        for (let i = 0; i < deactivateQueueLength; i++) {
            const id = deactivateQueue[i];
            const activeIdIndex = runningIds.indexOf(id);
            const process = activeProcesses[id];

            // If this is a running process, deactivate
            if (activeIdIndex > -1) {
                runningIds.splice(activeIdIndex, 1);
                updateRunningCount(false, process.isLazy);
                delete activeProcesses[id];

                if (process.onDeactivate) {
                    process.onDeactivate(process);
                }
            }
        }

        /*
            Empty deactivate queue. We use `Array.splice` because it doesn't
            works on the original array so we don't have to garbage collect anything
        */
        deactivateQueue.splice(0, deactivateQueueLength);

        /*
            Process activate queue
        */
        const activateQueueLength = activateQueue.length;

        for (let i = 0; i < activateQueueLength; i++) {
            const id = activateQueue[i];
            const activeIdIndex = runningIds.indexOf(id);
            const process = activeProcesses[id];

            // If process isn't already running, activate
            if (activeIdIndex === -1 && process) {
                runningIds.push(id);
                updateRunningCount(true, process.isLazy);

                if (process.onActivate) {
                    process.onActivate(process);
                }
            }
        }

        activateQueue.splice(0, activateQueueLength);

        return runningIds;
    }
};
