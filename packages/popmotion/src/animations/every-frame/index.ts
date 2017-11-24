import { currentFrameTime, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';

const frame = (): Action => action(({ update }) => {
  let isActive = true;

  const nextFrame = () => {
    if (!isActive) return;
    update(currentFrameTime());
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => isActive = false
  };
});

export default frame;
