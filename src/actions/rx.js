const { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } = require('framesync');

const action = (constructor) => ({
  start: function (observer) {
    const api = constructor({
      update: observer
    });

    return api;
  },
  bind: function (observer) {
    return {
      start: () => this.start(observer)
    };
  }
});

const clock = () => action(({ update }) => {
  const nextFrame = () => {
    update();
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => cancelOnFrameUpdate(nextFrame)
  };
});

const tween = ({ from, to, duration, ease }) => action(({ update }) => {
  let elapsed = 0;

  const updateTween = () => {
    elapsed += timeSinceLastFrame();
    // const progress = clampProgress(getProgressFromValue(0, duration, elapsed));
    // const current = getValueFromProgress(from, to, ease(progress));
    update(elapsed);
  };

  const tweenProcess = clock().start(updateTween);

  return {
    stop: () => tweenProcess.stop()
  };
});

const moveBox = tween({
  from: 0,
  to: 1,
  ease: (v) => v,
  duration: 500
}).start((v) => console.log(v));

setTimeout(() => { moveBox.stop(); tween({}).start((v) => console.log(v))}, 500)


// const merge = (...streams) => {
//   return createStream(({ update }) => {
//     const subs = streams.map((stream) => stream.subscribe((v) => update(v)));
//     return () => subs.forEach((sub) => sub.unsubscribe());
//   });
// };

// const combine = (...streams) => {
//   const output = new Array(streams.length);
//   return createStream(({ update }) => {
//     const subs = streams.map((stream, i) => stream.subscribe((v) => {
//       output[i] = v;
//       // Only emit if all have been fired
//       update(output);
//     }));
//     return () => subs.forEach((sub) => sub.unsubscribe());
//   });
// };

