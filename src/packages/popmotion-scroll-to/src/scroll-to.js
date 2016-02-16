import { actor, tween, easing, calc } from 'popmotion';

const DEFAULT_ACTION = tween({
    duration: 500,
    ease: easing.cubicBezier(0.25, 0.16, 0.45, 1)
});

let currentAction = DEFAULT_ACTION;

const renderElementScroll = ({ state, on }) => {
    on.element.scrollLeft = state.scrollX;
    on.element.scrollTop = state.scrollY;
};

const renderViewportScroll = ({ state }) => window.scroll(state.scrollX, state.scrollY);

/*
    Get element scroll position
    @param [HTMLElement]
    @return [object] {x, y}
*/
const getElementScroll = element => {
    return {
        x: element.scrollLeft,
        y: element.scrollTop
    };
}

/*
    Get viewport scroll position
    @return [object] {x, y}
*/
const getViewportScroll = () => {
    return {
        x: window.scrollX || window.pageXOffset,
        y: window.scrollY || window.pageYOffset
    };
}

/*
    Parse point from HTMLElement, object, number or string
*/
const parsePoint = (point, currentPoint) => {
    let typeOfPoint = typeof point;
    let scrollPoint = {
        x: currentPoint.x,
        y: point ? currentPoint.y : 0
    };

    // If this is an HTML element, get its position
    if (point && (point instanceof HTMLElement || point.tag === 'svg')) {
        let boundingBox = point.getBoundingClientRect();

        scrollPoint.x = boundingBox.left + currentPoint.x;
        scrollPoint.y = boundingBox.top + currentPoint.y;

    // If it's a number/relative value, parse
    } else if (typeOfPoint === 'number' || typeOfPoint === 'string') {
        scrollPoint.y = parseAxis(point, currentPoint.y);

    // If it's an object, parse both
    } else if (typeOfPoint === 'object') {
        scrollPoint.y = parseAxis(point.y, currentPoint.y);
        scrollPoint.x = parseAxis(point.x, currentPoint.x);
    }

    return scrollPoint;
}

/*
    Parse a single axis from number/relative value to new value
    @param [string || number]
    @param [number]
    @return [number]
*/
const parseAxis = (axis, currentAxis) => {
    let scrollAxis = currentAxis;

    switch (typeof axis) {
        case 'number':
            scrollAxis = axis;
            break;
        case 'string':
            scrollAxis = calc.relativeValue(currentAxis, axis);
            break;
    }

    return scrollAxis;
}

let scrollTo = (point, element) => {
    let currentPoint = element ? getElementScroll(element) : getViewportScroll();
    let scrollPoint = parsePoint(point, currentPoint);
    let actorToScroll = element ? actor({ on: element }) : viewportActor;
    let scrollSetter = element ? renderElementScroll : renderViewportScroll;

    actorToScroll.start(currentAction.inherit({
        values: {
            scrollX: {
                current: currentPoint.x,
                to: scrollPoint.x
            },
            scrollY: {
                current: currentPoint.y,
                to: scrollPoint.y
            }
        },
        onRender: scrollSetter
    }));
}

scrollTo.setMovement = action => {
    currentAction = action;
    return scrollTo;
};

export default scrollTo;