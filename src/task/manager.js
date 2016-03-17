// [int]: Incremented for each new running task
let currentTaskId = 0;

// [int]: Number of all running taskes
let totalRunningCount = 0;

// [int]: Number of running taskes excluding background taskes
let nonBackgroundRunningCount = 0;

// [array]: Array of running task IDs
const runningIds = [];

// [object]: Map of running taskes
const activeTasks = {};

// [array]: Array of task IDs queued for activation
const activateQueue = [];

// [array]: Array of task IDs queued for deactivation
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
    activeTasks,

    // Activate a task
    activate: (id, task) => {
        activeTasks[id] = task;
        task.isActive = true;
        updateQueues(id, activateQueue, deactivateQueue);

        if (task.onActivate) {
            task.onActivate(task);
        }

        if (task.onActivateOnce) {
            task.onActivateOnce(task);
        }
    },

    // Deactivate a task
    deactivate: (id) => {
        const task = activeTasks[id];

        if (task) {
            updateQueues(id, deactivateQueue, activateQueue);
            task.isActive = false;

            if (task.onDeactivate) {
                task.onDeactivate(task);
            }
        }
    },

    // Number background taskes
    getNonBackgroundRunningCount: () => nonBackgroundRunningCount,

    // Increment current task ID and return
    getTaskId: () => currentTaskId++,

    // Resolve activate/deactivate taskes and return active ids
    getActiveIds: () => {
        /*
            task deactivate queue
        */
        const deactivateQueueLength = deactivateQueue.length;

        for (let i = 0; i < deactivateQueueLength; i++) {
            const id = deactivateQueue[i];
            const activeIdIndex = runningIds.indexOf(id);
            const task = activeTasks[id];

            // If this is a running task, deactivate
            if (activeIdIndex > -1) {
                runningIds.splice(activeIdIndex, 1);
                updateRunningCount(false, task.isLazy);
                delete activeTasks[id];
            }
        }

        /*
            Empty deactivate queue. We use `Array.splice` because it doesn't
            works on the original array so we don't have to garbage collect anything
        */
        deactivateQueue.splice(0, deactivateQueueLength);

        /*
            task activate queue
        */
        const activateQueueLength = activateQueue.length;

        for (let i = 0; i < activateQueueLength; i++) {
            const id = activateQueue[i];
            const activeIdIndex = runningIds.indexOf(id);
            const task = activeTasks[id];

            // If task isn't already running, activate
            if (activeIdIndex === -1 && task) {
                if (task.isPriority) {
                    runningIds.unshift(id);
                } else {
                    runningIds.push(id);
                }

                updateRunningCount(true, task.isLazy);
            }
        }

        activateQueue.splice(0, activateQueueLength);

        return runningIds;
    }
};
