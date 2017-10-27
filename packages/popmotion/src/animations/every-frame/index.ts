import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action from '../../action';
import { Action } from '../../chainable/types';

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
