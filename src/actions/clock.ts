import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action from './action';
import { Observable, Observer } from './action/types';

const clock: Observable = action(({ update }: Observer) => {
  const nextFrame = () => {
    update();
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => cancelOnFrameUpdate(nextFrame)
  };
});

export default clock;
