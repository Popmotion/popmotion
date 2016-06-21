/*
  Core render loop

  Some decicisons here have been taken in the name of performance. All hail performance.
  (It turns out microoptimisations do matter when you have 16ms)
*/
import timer from './timer';
import tick from './tick';
import manager from './manager';

const taskStepOrder = [
  { name: 'onFrameStart' },
  { name: 'onUpdate' },
  { name: 'willRender', decideRender: true },
  { name: 'onPreRender', isRender: true },
  { name: 'onRender', isRender: true },
  { name: 'onPostRender', isRender: true },
  { name: 'onFrameEnd' },
  { name: 'onCleanup' }
];
const numTaskSteps = taskStepOrder.length;

// [boolean]: Is loop running?
let isRunning = false;

/*
  [timestamp]: Frame timestamp
  [int]: Time since last frame
*/
function fireAll(frameStamp, elapsed) {
  const activeIds = manager.getActiveIds();
  const activeTaskCount = activeIds.length;

  for (let i = 0; i < numTaskSteps; i++) {
    const step = taskStepOrder[i];

    for (let i2 = 0; i2 < activeTaskCount; i2++) {
      const task = manager.activeTasks[activeIds[i2]];
      let result = false;

      // Check if this task has this step, or if it's a render step that we're rendering this frame
      if (task && task[step.name] && (!step.isRender || (step.isRender && task._renderThisFrame === true))) {
        result = task[step.name].call(task, task, frameStamp, elapsed);
      }

      // If this is a decide render step and it returns `false`, set willRender to false
      if (step.decideRender) {
        task._renderThisFrame = (task[step.name] && result !== true) ? false : true;
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
export const getTaskId = manager.getTaskId;

/*
  [int]: task ID to activate
  [task]: task to activate
*/
export function activate(id, task) {
  manager.activate(id, task);

  if (!isRunning) {
    start();
  }
}

/*
  [int]: task ID to deactivate
*/
export const deactivate = manager.deactivate;