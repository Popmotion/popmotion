import { cancelOnFrameUpdate, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';
import { angle, distance } from '../../calc';
import listen from '../listen';
import { PointerPoint, PointerProps } from '../pointer/types';
import { defaultPointerPos, eventToPoint } from '../pointer/utils';

const points: PointerPoint[] = [defaultPointerPos()];
let isTouchDevice = false;

if (typeof document !== 'undefined') {
  const updatePointsLocation = ({ touches }: TouchEvent) => {
    isTouchDevice = true;
    const numTouches = touches.length;

    // TODO: Optimisation would be to provide existing points to `eventToPoint`
    points.length = 0;

    for (let i = 0; i < numTouches; i++) {
      const thisTouch = touches[i];
      points.push(eventToPoint(thisTouch));
    }
  };

  listen(document, 'touchstart touchmove', true)
    .start(updatePointsLocation);
}

const multitouch = ({ preventDefault = true, scale = 1.0, rotate = 0.0 }: PointerProps = {}): Action => action(({ update }) => {
  const output = {
    touches: points,
    scale,
    rotate
  };

  let initialDistance = 0.0;
  let initialRotation = 0.0;

  const isGesture = points.length > 1;

  if (isGesture) {
    const [ firstTouch, secondTouch ] = points;
    initialDistance = distance(firstTouch, secondTouch);
    initialRotation = angle(firstTouch, secondTouch);
  }

  const updatePoint = () => {
    if (isGesture) {
      const [ firstTouch, secondTouch ] = points;
      const newDistance = distance(firstTouch, secondTouch);
      const newRotation = angle(firstTouch, secondTouch);

      output.scale = scale * (newDistance / initialDistance);
      output.rotate = rotate + (newRotation - initialRotation);
    }

    update(output);
  };

  const onMove = (e: TouchEvent) => {
    if (preventDefault || e.touches.length > 1) e.preventDefault();
    onFrameUpdate(updatePoint);
  };

  const updateOnMove = listen(document, 'touchmove', { passive: !preventDefault })
    .start(onMove);

  if (isTouchDevice) onFrameUpdate(updatePoint);

  return {
    stop: () => {
      cancelOnFrameUpdate(updatePoint);
      updateOnMove.stop();
    }
  };
});

export default multitouch;
export const getIsTouchDevice = () => isTouchDevice;
