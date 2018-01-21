import everyFrame from 'popmotion/animations/every-frame';
import { onFrameRender, timeSinceLastFrame } from 'framesync';

type Lifecycle = {
  update: Function,
  render: Function
};

const gameLoop = ({ update, render }) => {
  let t = 0.0;
  const dt = 1000 / 30;
  let acc = 0.0;

  return (timestamp) => {
    acc += timeSinceLastFrame();

    while (acc >= dt) {
      update(t);
      acc -= dt;
      t += dt;
    }

    onFrameRender(render);
  };
};

everyFrame().start(gameLoop({
  update:

}));
