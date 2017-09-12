import action from './action';
import { onFrameUpdate } from 'framesync';
import { Observer } from './types';

type Point2D = {
  x: number,
  y: number
};

type PointerProps = {
  preventDefault?: boolean
};

type PointerInterface = {
  stop: () => void
};

type EventToPoint = (e: MouseEvent | TouchEvent) => Point2D;

const isTouchEvent = (e: TouchEvent | MouseEvent): e is TouchEvent =>
  (<TouchEvent>e).touches !== undefined;

const mouseEventToPoint = ({ clientX, clientY }: MouseEvent): Point2D => ({
  x: clientX,
  y: clientY
});

const touchEventToPoint = ({ changedTouches }: TouchEvent): Point2D => ({
  x: changedTouches[0].clientX,
  y: changedTouches[0].clientY
});

const pointer = (
  startEvent: MouseEvent | TouchEvent,
  { preventDefault = true }: PointerProps = {}
) => {
  const isTouch = isTouchEvent(startEvent);
  const moveEventName = isTouch ? 'touchmove' : 'mousemove';
  const eventToPoint: EventToPoint = isTouch ? touchEventToPoint : mouseEventToPoint;

  return action(({ update }: Observer): PointerInterface => {
    let point: Point2D = eventToPoint(startEvent);

    const updatePoint = () => update(point);

    const onPointerMove = (moveEvent: TouchEvent | MouseEvent) => {
      point = eventToPoint(moveEvent);
      onFrameUpdate(updatePoint);
    };

    onFrameUpdate(updatePoint);

    document.documentElement.addEventListener(moveEventName, onPointerMove);

    return {
      stop: () => document.documentElement.removeEventListener(moveEventName, onPointerMove)
    };
  });
};

export default pointer;
