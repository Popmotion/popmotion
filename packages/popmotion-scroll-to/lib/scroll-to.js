'use strict';

exports.__esModule = true;

var _popmotion = require('popmotion');

// Default smooth tween for scrolling
var DEFAULT_ACTION = (0, _popmotion.tween)({
    duration: 600,
    ease: _popmotion.easing.cubicBezier(0.25, 0.16, 0.45, 1)
});

// Allow user-override
var currentAction = DEFAULT_ACTION;

/*
    Element scroll adapter
*/
var elementScrollAdapter = (0, _popmotion.createAdapter)({
    setter: function (element, _ref) {
        var scrollLeft = _ref.scrollLeft;
        var scrollTop = _ref.scrollTop;

        element.scrollLeft = scrollLeft;
        element.scrollTop = scrollTop;
    },
    getter: function (element, key) {
        return element[key];
    },
    stateMap: {
        scrollX: 'scrollLeft',
        scrollY: 'scrollTop'
    }
});

/*
    Window scroll adapter
*/
var viewportScrollAdapter = (0, _popmotion.createAdapter)({
    setter: function (viewport, _ref2) {
        var scrollX = _ref2.scrollX;
        var scrollY = _ref2.scrollY;

        viewport.scroll(scrollX, scrollY);
    },
    getter: function (viewport, key) {
        return viewport[key];
    }
});

/*
    Parse point from HTMLElement, object, number or string
*/
var parsePoint = function (point, currentPoint) {
    var typeOfPoint = typeof point;
    var scrollPoint = {
        x: currentPoint.x,
        y: point ? currentPoint.y : 0
    };

    // If this is an HTML element, get its position
    if (point && (point instanceof HTMLElement || point.tag === 'svg')) {
        var boundingBox = point.getBoundingClientRect();

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
};

/*
    Parse a single axis from number/relative value to new value
    @param [string || number]
    @param [number]
    @return [number]
*/
var parseAxis = function (axis, currentAxis) {
    var scrollAxis = currentAxis;

    switch (typeof axis) {
        case 'number':
            scrollAxis = axis;
            break;
        case 'string':
            scrollAxis = _popmotion.calc.relativeValue(currentAxis, axis);
            break;
    }

    return scrollAxis;
};

var scrollTo = function (point, element) {
    var isViewport = element === undefined;
    var adapter = isViewport ? viewportScrollAdapter : elementScrollAdapter;
    element = isViewport ? window : element;
    var currentPoint = {
        x: adapter.get(element, 'scrollX'),
        y: adapter.get(element, 'scrollY')
    };
    var scrollPoint = parsePoint(point, currentPoint);

    currentAction.inherit({
        element: element, adapter: adapter,
        values: {
            scrollY: {
                from: currentPoint.y,
                to: scrollPoint.y
            },
            scrollX: {
                from: currentPoint.x,
                to: scrollPoint.x
            }
        }
    }).start();
};

scrollTo.setMovement = function (action) {
    currentAction = action;
    return scrollTo;
};

exports.default = scrollTo;
//# sourceMappingURL=data:application/json;base64,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QUN2QixXQUFPLFFBQVEsQ0FBQztDQUNuQixDQUFDOztrQkFFYSxRQUFRIiwiZmlsZSI6InNjcm9sbC10by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFkYXB0ZXIsIHR3ZWVuLCBlYXNpbmcsIGNhbGMgfSBmcm9tICdwb3Btb3Rpb24nO1xuXG4vLyBEZWZhdWx0IHNtb290aCB0d2VlbiBmb3Igc2Nyb2xsaW5nXG5jb25zdCBERUZBVUxUX0FDVElPTiA9IHR3ZWVuKHtcbiAgICBkdXJhdGlvbjogNjAwLFxuICAgIGVhc2U6IGVhc2luZy5jdWJpY0JlemllcigwLjI1LCAwLjE2LCAwLjQ1LCAxKVxufSk7XG5cbi8vIEFsbG93IHVzZXItb3ZlcnJpZGVcbmxldCBjdXJyZW50QWN0aW9uID0gREVGQVVMVF9BQ1RJT047XG5cbi8qXG4gICAgRWxlbWVudCBzY3JvbGwgYWRhcHRlclxuKi9cbmNvbnN0IGVsZW1lbnRTY3JvbGxBZGFwdGVyID0gY3JlYXRlQWRhcHRlcih7XG4gICAgc2V0dGVyOiAoZWxlbWVudCwgeyBzY3JvbGxMZWZ0LCBzY3JvbGxUb3AgfSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICB9LFxuICAgIGdldHRlcjogKGVsZW1lbnQsIGtleSkgPT4gZWxlbWVudFtrZXldLFxuICAgIHN0YXRlTWFwOiB7XG4gICAgICAgIHNjcm9sbFg6ICdzY3JvbGxMZWZ0JyxcbiAgICAgICAgc2Nyb2xsWTogJ3Njcm9sbFRvcCdcbiAgICB9XG59KTtcblxuLypcbiAgICBXaW5kb3cgc2Nyb2xsIGFkYXB0ZXJcbiovXG5jb25zdCB2aWV3cG9ydFNjcm9sbEFkYXB0ZXIgPSBjcmVhdGVBZGFwdGVyKHtcbiAgICBzZXR0ZXI6ICh2aWV3cG9ydCwgeyBzY3JvbGxYLCBzY3JvbGxZIH0pID0+IHtcbiAgICAgICAgdmlld3BvcnQuc2Nyb2xsKHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgIH0sXG4gICAgZ2V0dGVyOiAodmlld3BvcnQsIGtleSkgPT4gdmlld3BvcnRba2V5XVxufSk7XG5cbi8qXG4gICAgUGFyc2UgcG9pbnQgZnJvbSBIVE1MRWxlbWVudCwgb2JqZWN0LCBudW1iZXIgb3Igc3RyaW5nXG4qL1xuY29uc3QgcGFyc2VQb2ludCA9IChwb2ludCwgY3VycmVudFBvaW50KSA9PiB7XG4gICAgbGV0IHR5cGVPZlBvaW50ID0gdHlwZW9mIHBvaW50O1xuICAgIGxldCBzY3JvbGxQb2ludCA9IHtcbiAgICAgICAgeDogY3VycmVudFBvaW50LngsXG4gICAgICAgIHk6IHBvaW50ID8gY3VycmVudFBvaW50LnkgOiAwXG4gICAgfTtcblxuICAgIC8vIElmIHRoaXMgaXMgYW4gSFRNTCBlbGVtZW50LCBnZXQgaXRzIHBvc2l0aW9uXG4gICAgaWYgKHBvaW50ICYmIChwb2ludCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHBvaW50LnRhZyA9PT0gJ3N2ZycpKSB7XG4gICAgICAgIGxldCBib3VuZGluZ0JveCA9IHBvaW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHNjcm9sbFBvaW50LnggPSBib3VuZGluZ0JveC5sZWZ0ICsgY3VycmVudFBvaW50Lng7XG4gICAgICAgIHNjcm9sbFBvaW50LnkgPSBib3VuZGluZ0JveC50b3AgKyBjdXJyZW50UG9pbnQueTtcblxuICAgIC8vIElmIGl0J3MgYSBudW1iZXIvcmVsYXRpdmUgdmFsdWUsIHBhcnNlXG4gICAgfSBlbHNlIGlmICh0eXBlT2ZQb2ludCA9PT0gJ251bWJlcicgfHwgdHlwZU9mUG9pbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNjcm9sbFBvaW50LnkgPSBwYXJzZUF4aXMocG9pbnQsIGN1cnJlbnRQb2ludC55KTtcblxuICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBwYXJzZSBib3RoXG4gICAgfSBlbHNlIGlmICh0eXBlT2ZQb2ludCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc2Nyb2xsUG9pbnQueSA9IHBhcnNlQXhpcyhwb2ludC55LCBjdXJyZW50UG9pbnQueSk7XG4gICAgICAgIHNjcm9sbFBvaW50LnggPSBwYXJzZUF4aXMocG9pbnQueCwgY3VycmVudFBvaW50LngpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JvbGxQb2ludDtcbn07XG5cbi8qXG4gICAgUGFyc2UgYSBzaW5nbGUgYXhpcyBmcm9tIG51bWJlci9yZWxhdGl2ZSB2YWx1ZSB0byBuZXcgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmNvbnN0IHBhcnNlQXhpcyA9IChheGlzLCBjdXJyZW50QXhpcykgPT4ge1xuICAgIGxldCBzY3JvbGxBeGlzID0gY3VycmVudEF4aXM7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBheGlzKSB7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgc2Nyb2xsQXhpcyA9IGF4aXM7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHNjcm9sbEF4aXMgPSBjYWxjLnJlbGF0aXZlVmFsdWUoY3VycmVudEF4aXMsIGF4aXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsQXhpcztcbn07XG5cbmNvbnN0IHNjcm9sbFRvID0gKHBvaW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaXNWaWV3cG9ydCA9IChlbGVtZW50ID09PSB1bmRlZmluZWQpO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBpc1ZpZXdwb3J0ID8gdmlld3BvcnRTY3JvbGxBZGFwdGVyIDogZWxlbWVudFNjcm9sbEFkYXB0ZXI7XG4gICAgZWxlbWVudCA9IGlzVmlld3BvcnQgPyB3aW5kb3cgOiBlbGVtZW50O1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IHtcbiAgICAgICAgeDogYWRhcHRlci5nZXQoZWxlbWVudCwgJ3Njcm9sbFgnKSxcbiAgICAgICAgeTogYWRhcHRlci5nZXQoZWxlbWVudCwgJ3Njcm9sbFknKVxuICAgIH07XG4gICAgY29uc3Qgc2Nyb2xsUG9pbnQgPSBwYXJzZVBvaW50KHBvaW50LCBjdXJyZW50UG9pbnQpO1xuXG4gICAgY3VycmVudEFjdGlvbi5pbmhlcml0KHtcbiAgICAgICAgZWxlbWVudCwgYWRhcHRlcixcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBzY3JvbGxZOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFBvaW50LnksXG4gICAgICAgICAgICAgICAgdG86IHNjcm9sbFBvaW50LnlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxYOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFBvaW50LngsXG4gICAgICAgICAgICAgICAgdG86IHNjcm9sbFBvaW50LnhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLnN0YXJ0KCk7XG59O1xuXG5zY3JvbGxUby5zZXRNb3ZlbWVudCA9IChhY3Rpb24pID0+IHtcbiAgICBjdXJyZW50QWN0aW9uID0gYWN0aW9uO1xuICAgIHJldHVybiBzY3JvbGxUbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFRvO1xuIl19