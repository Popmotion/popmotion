import action from './action';
import { Observer, Observable } from './types';
import { onFrameUpdate, cancelOnFrameUpdate } from 'framesync';

const clock: Observable = action(({ update }: Observer) => {
  const nextFrame = () => {
    update();
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => cancelOnFrameUpdate(nextFrame)
  }
});

export default clock;
