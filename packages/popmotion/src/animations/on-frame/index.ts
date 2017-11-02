import { cancelOnFrameUpdate, currentFrameTime, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';

const frame = (): Action => action(({ update }) => {
  const nextFrame = () => {
    update(currentFrameTime());
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => cancelOnFrameUpdate(nextFrame)
  };
});

export default frame;
