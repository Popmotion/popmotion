import { Renderer } from 'popmotion';

class ElementScroll extends Renderer {
  onRender() {
    const { element } = this.props;
    const { top, left } = this.values;
    element.scrollLeft = left;
    element.scrollTop = top;
  }

  onRead(key = 'top') {
    const { element } = this.props;
    return (key === 'top') ? element.scrollTop : element.scrollLeft;
  }
}

export const elementScroll = (element) => new ElementScroll({ element });

class ViewportScroll extends Renderer {
  onRender() {
    const { top, left } = this.values;
    if (typeof window !== undefined) window.scrollTop(left, top);
  }

  onRead(key) {

  }
}

export const viewportScroll = () => new ViewportScroll();



// import { createAdapter, tween, easing, calc } from 'popmotion';

// // Default smooth tween for scrolling
// const DEFAULT_ACTION = tween({
//   duration: 600,
//   ease: easing.cubicBezier(0.25, 0.16, 0.45, 1)
// });

// // Allow user-override
// let currentAction = DEFAULT_ACTION;


// /*
//   Window scroll adapter
// */
// const viewportScrollAdapter = createAdapter({
//   setter: (viewport, { scrollX, scrollY }) => {
//     viewport.scroll(scrollX, scrollY);
//   },
//   getter: (viewport, key) => viewport[key]
// });

// /*
//   Parse point from HTMLElement, object, number or string
// */
// const parsePoint = (point, currentPoint) => {
//   let typeOfPoint = typeof point;
//   let scrollPoint = {
//     x: currentPoint.x,
//     y: point ? currentPoint.y : 0
//   };

//   // If this is an HTML element, get its position
//   if (point && (point instanceof HTMLElement || point.tag === 'svg')) {
//     let boundingBox = point.getBoundingClientRect();

//     scrollPoint.x = boundingBox.left + currentPoint.x;
//     scrollPoint.y = boundingBox.top + currentPoint.y;

//   // If it's a number/relative value, parse
//   } else if (typeOfPoint === 'number' || typeOfPoint === 'string') {
//     scrollPoint.y = parseAxis(point, currentPoint.y);

//   // If it's an object, parse both
//   } else if (typeOfPoint === 'object') {
//     scrollPoint.y = parseAxis(point.y, currentPoint.y);
//     scrollPoint.x = parseAxis(point.x, currentPoint.x);
//   }

//   return scrollPoint;
// };

// /*
//   Parse a single axis from number/relative value to new value
//   @param [string || number]
//   @param [number]
//   @return [number]
// */
// const parseAxis = (axis, currentAxis) => {
//   let scrollAxis = currentAxis;

//   switch (typeof axis) {
//   case 'number':
//     scrollAxis = axis;
//     break;
//   case 'string':
//     scrollAxis = calc.relativeValue(currentAxis, axis);
//     break;
//   }

//   return scrollAxis;
// };
