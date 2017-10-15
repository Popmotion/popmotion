import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action from '../../action';

const everyFrame = () => action(({ update }) => {
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
