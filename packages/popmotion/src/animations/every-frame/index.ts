import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';

const everyFrame = (): Action => action(({ update }) => {
  const nextFrame = () => {
    update();
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => cancelOnFrameUpdate(nextFrame)
  };
});

export default everyFrame;
