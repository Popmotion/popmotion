import { spring, tween, action, easing, pointer, transform, decay, keyframes, physics, value, chain, delay, listen } from 'popmotion';
import { percent, number, degrees, px } from 'style-value-types';
import { __rest, __assign } from 'tslib';
import poseFactory from 'pose-core';
import { invariant } from 'hey-listen';
import 'popmotion/action';
import styler from 'stylefire';
import 'popmotion/reactions/value';

var createTransitionMap = function (key) {
    return function (map) {
        return function (props) {
            var switchKey = props[key];
            var transition = map[switchKey] || map.default;
            return transition ? transition(props) : false;
        };
    };
};
var eachValue = /*#__PURE__*/createTransitionMap('key');

var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));

var linear = easing.linear;
var interpolate = transform.interpolate;
var singleAxisPointer = function (axis) {
    return function (from) {
        return pointer((_a = {}, _a[axis] = from, _a)).pipe(function (v) {
            return v[axis];
        });
        var _a;
    };
};
var pointerX = /*#__PURE__*/singleAxisPointer('x');
var pointerY = /*#__PURE__*/singleAxisPointer('y');
var createPointer = function (axisPointerCreator, min, max, measurement) {
    return function (_a) {
        var from = _a.from,
            type = _a.type,
            dimensions = _a.dimensions,
            dragBounds = _a.dragBounds;
        var axisPointer = axisPointerCreator(dimensions.measurementAsPixels(measurement, from, type));
        var transformQueue = [];
        if (dragBounds) {
            if (dragBounds[min] !== undefined) transformQueue.push(function (v) {
                return Math.max(v, dimensions.measurementAsPixels(measurement, dragBounds[min], type));
            });
            if (dragBounds[max] !== undefined) transformQueue.push(function (v) {
                return Math.min(v, dimensions.measurementAsPixels(measurement, dragBounds[max], type));
            });
        }
        if (type === percent) {
            transformQueue.push(interpolate([0, dimensions.get(measurement)], [0, 100]));
        }
        return transformQueue.length ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
    };
};
var just = function (from) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        update(from);
        complete();
    });
};
var underDampedSpring = function (_a) {
    var from = _a.from,
        velocity = _a.velocity,
        to = _a.to;
    return spring({
        from: from,
        to: to,
        velocity: velocity,
        stiffness: 500,
        damping: 25,
        restDelta: 0.5,
        restSpeed: 10
    });
};
var overDampedSpring = function (_a) {
    var from = _a.from,
        velocity = _a.velocity,
        to = _a.to;
    return spring({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
};
var linearTween = function (_a) {
    var from = _a.from,
        to = _a.to;
    return tween({ from: from, to: to, ease: linear });
};
var intelligentTransition = /*#__PURE__*/eachValue({
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    default: tween
});
var dragAction = /*#__PURE__*/eachValue({
    x: /*#__PURE__*/createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width),
    y: /*#__PURE__*/createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height)
});
var intelligentDragEnd = function (_a) {
    var from = _a.from;
    return just(from);
};
var defaultTransitions = /*#__PURE__*/new Map([['default', intelligentTransition], ['dragging', dragAction], ['dragEnd', intelligentDragEnd]]);

var valueTypeTests = [number, degrees, percent, px];
var testValueType = function (v) {
    return function (type) {
        return type.test(v);
    };
};
var createPassiveValue = function (init, parent, transform$$1) {
    var raw = value(init).pipe(transform$$1);
    parent.raw.subscribe(raw);
    return { raw: raw };
};
var createValue = function (init) {
    var type = valueTypeTests.find(testValueType(init));
    var raw = value(type === number ? type.parse(init) : init);
    return { raw: raw, type: type };
};
var addActionDelay = function (delay$$1, transition) {
    if (delay$$1 === void 0) {
        delay$$1 = 0;
    }
    return chain(delay(delay$$1), transition);
};
var animationLookup = /*#__PURE__*/new Map([['tween', tween], ['spring', spring], ['decay', decay], ['keyframes', keyframes], ['physics', physics]]);
var getAction = function (v, _a, _b) {
    var from = _b.from,
        to = _b.to,
        velocity = _b.velocity;
    var type = _a.type,
        def = __rest(_a, ["type"]);
    invariant(animationLookup.has(type), "You specified invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
    return animationLookup.get(type)(__assign({ from: from,
        to: to,
        velocity: velocity }, def));
};
var isAction = function (action$$1) {
    return typeof action$$1.start !== 'undefined';
};
var pose = function (_a) {
    var transformPose = _a.transformPose,
        addListenerToValue = _a.addListenerToValue,
        extendAPI = _a.extendAPI,
        readValueFromSource = _a.readValueFromSource;
    return poseFactory({
        bindOnChange: function (values, onChange) {
            return function (key) {
                if (!values.has(key)) return;
                var raw = values.get(key).raw;
                raw.subscribe(onChange[key]);
            };
        },
        readValue: function (_a) {
            var raw = _a.raw;
            return raw.get();
        },
        createValue: function (init, key, _a, _b) {
            var elementStyler = _a.elementStyler;
            var _c = _b === void 0 ? {} : _b,
                passiveParent = _c.passiveParent,
                passiveProps = _c.passiveProps;
            var val = passiveParent ? createPassiveValue(init, passiveParent, passiveProps) : createValue(init);
            if (addListenerToValue) {
                val.raw.subscribe(addListenerToValue(key, elementStyler));
            }
            return val;
        },
        convertValue: function (raw, key, _a) {
            var elementStyler = _a.elementStyler;
            if (addListenerToValue) {
                raw.subscribe(addListenerToValue(key, elementStyler));
            }
            return {
                raw: raw,
                type: valueTypeTests.find(testValueType(raw.get()))
            };
        },
        getTransitionProps: function (_a, to) {
            var raw = _a.raw,
                type = _a.type;
            return {
                from: type ? type.parse(raw.get()) : raw.get(),
                velocity: raw.getVelocity(),
                to: type ? type.parse(to) : to,
                type: type
            };
        },
        resolveTarget: function (_a, to) {
            var type = _a.type;
            return type ? type.parse(to) : to;
        },
        selectValueToRead: function (_a) {
            var raw = _a.raw;
            return raw;
        },
        startAction: function (_a, action$$1, complete) {
            var raw = _a.raw,
                type = _a.type;
            var reaction = {
                update: function (v) {
                    return raw.update(v);
                },
                complete: complete
            };
            return type ? action$$1.pipe(type.transform).start(reaction) : action$$1.start(reaction);
        },
        stopAction: function (action$$1) {
            return action$$1.stop();
        },
        getInstantTransition: function (_, _a) {
            var to = _a.to;
            return just(to);
        },
        convertTransitionDefinition: function (val, def, props) {
            if (isAction(def)) return def;
            var delay$$1 = def.delay,
                min = def.min,
                max = def.max,
                round = def.round,
                remainingDef = __rest(def, ["delay", "min", "max", "round"]);
            var action$$1 = getAction(val, remainingDef, props);
            var outputPipe = [];
            if (delay$$1) addActionDelay(delay$$1, action$$1);
            if (min !== undefined) outputPipe.push(function (v) {
                return Math.max(v, min);
            });
            if (max !== undefined) outputPipe.push(function (v) {
                return Math.min(v, max);
            });
            if (round) outputPipe.push(Math.round);
            return outputPipe.length ? action$$1.pipe.apply(action$$1, outputPipe) : action$$1;
        },
        addActionDelay: addActionDelay,
        defaultTransitions: defaultTransitions,
        transformPose: transformPose,
        readValueFromSource: readValueFromSource,
        extendAPI: extendAPI
    });
};

var createDimensions = function (element) {
    var hasMeasured = false;
    var current = {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    return {
        get: function (measurement) {
            return measurement ? current[measurement] : current;
        },
        measure: function () {
            current = element.getBoundingClientRect();
            hasMeasured = true;
            return current;
        },
        measurementAsPixels: function (measurement, value$$1, type) {
            return type === percent && typeof value$$1 === 'number' ? value$$1 / 100 * current[measurement] : value$$1;
        },
        has: function () {
            return hasMeasured;
        }
    };
};

var makeDraggable = function (element, activeActions, setPose, _a) {
    var onDragStart = _a.onDragStart,
        onDragEnd = _a.onDragEnd;
    var dragStartListener = listen(element, 'mousedown touchstart').start(function (startEvent) {
        startEvent.preventDefault();
        setPose('dragging');
        if (onDragStart) onDragStart(startEvent);
        var dragEndListener = listen(document, 'mouseup touchend').start(function (endEvent) {
            activeActions.get('dragEndListener').stop();
            setPose('dragEnd');
            if (onDragEnd) onDragEnd(endEvent);
        });
        activeActions.set('dragEndListener', dragEndListener);
    });
    activeActions.set('dragStartListener', dragStartListener);
};
var appendEventListeners = function (element, activeActions, setPose, _a) {
    var props = _a.props;
    if (props.draggable) makeDraggable(element, activeActions, setPose, props);
};

var ORIGIN_START = 0;
var ORIGIN_CENTER = '50%';
var ORIGIN_END = '100%';
var findCenter = function (_a) {
    var top = _a.top,
        right = _a.right,
        bottom = _a.bottom,
        left = _a.left;
    return {
        x: (left + right) / 2,
        y: (top + bottom) / 2
    };
};
var positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
var positionalPropsDict = /*#__PURE__*/new Set(positionalProps);
var checkPositionalProp = function (key) {
    return positionalPropsDict.has(key);
};
var hasPositionalProps = function (pose) {
    return Object.keys(pose).some(checkPositionalProp);
};
var isFlipPose = function (flip, key, state) {
    return state.props.element instanceof HTMLElement && (flip === true || key === 'flip');
};
var resolveProp = function (target, props) {
    return typeof target === 'function' ? target(props) : target;
};
var setValue = function (_a, key, to) {
    var values = _a.values,
        props = _a.props;
    if (values.has(key)) {
        var raw = values.get(key).raw;
        raw.update(to);
        raw.update(to);
    } else {
        values.set(key, {
            raw: value(to, function (v) {
                return props.elementStyler.set(key, v);
            })
        });
    }
};
var explicitlyFlipPose = function (state, nextPose) {
    var _a = state.props,
        dimensions = _a.dimensions,
        elementStyler = _a.elementStyler;
    dimensions.measure();
    var width = nextPose.width,
        height = nextPose.height,
        top = nextPose.top,
        left = nextPose.left,
        bottom = nextPose.bottom,
        right = nextPose.right,
        remainingPose = __rest(nextPose, ["width", "height", "top", "left", "bottom", "right"]);
    elementStyler.set(positionalProps.reduce(function (acc, key) {
        if (nextPose[key] !== undefined) {
            acc[key] = resolveProp(nextPose[key], state.props);
        }
        return acc;
    }, {})).render();
    return implicitlyFlipPose(state, remainingPose);
};
var implicitlyFlipPose = function (state, nextPose) {
    var _a = state.props,
        dimensions = _a.dimensions,
        element = _a.element,
        elementStyler = _a.elementStyler;
    if (!dimensions.has()) return {};
    var prev = dimensions.get();
    var transform$$1 = element.style.transform;
    element.style.transform = '';
    var next = element.getBoundingClientRect();
    element.style.transform = transform$$1;
    var originX = prev.left === next.left ? ORIGIN_START : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;
    var originY = prev.top === next.top ? ORIGIN_START : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;
    elementStyler.set({ originX: originX, originY: originY });
    var flipPoseProps = {};
    if (prev.width !== next.width) {
        setValue(state, 'scaleX', prev.width / next.width);
        flipPoseProps.scaleX = 1;
    }
    if (prev.height !== next.height) {
        setValue(state, 'scaleY', prev.height / next.height);
        flipPoseProps.scaleY = 1;
    }
    var prevCenter = findCenter(prev);
    var nextCenter = findCenter(next);
    if (originX === ORIGIN_CENTER) {
        setValue(state, 'x', prevCenter.x - nextCenter.x);
        flipPoseProps.x = 0;
    }
    if (originY === ORIGIN_CENTER) {
        setValue(state, 'y', prevCenter.y - nextCenter.y);
        flipPoseProps.y = 0;
    }
    elementStyler.render();
    return __assign({}, nextPose, flipPoseProps);
};
var flipPose = function (props, nextPose) {
    return hasPositionalProps(nextPose) ? explicitlyFlipPose(props, nextPose) : implicitlyFlipPose(props, nextPose);
};

var dragPoses = function (draggable) {
    var dragging = {
        preTransition: function (_a) {
            var dimensions = _a.dimensions;
            return dimensions.measure();
        }
    };
    var dragEnd = {};
    if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = 0;
    if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = 0;
    return { dragging: dragging, dragEnd: dragEnd };
};
var createPoseConfig = function (element, _a) {
    var onDragStart = _a.onDragStart,
        onDragEnd = _a.onDragEnd,
        draggable = _a.draggable,
        dragBounds = _a.dragBounds,
        config = __rest(_a, ["onDragStart", "onDragEnd", "draggable", "dragBounds"]);
    var poseConfig = __assign({ flip: {} }, config, { props: __assign({}, config.props, { draggable: draggable,
            onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            dragBounds: dragBounds,
            element: element, elementStyler: styler(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
    if (draggable) {
        var _b = dragPoses(draggable),
            dragging = _b.dragging,
            dragEnd = _b.dragEnd;
        poseConfig.dragging = __assign({}, poseConfig.dragging, dragging);
        poseConfig.dragEnd = __assign({}, poseConfig.dragEnd, dragEnd);
    }
    return poseConfig;
};
var domPose = /*#__PURE__*/pose({
    transformPose: function (_a, name, state) {
        var flip = _a.flip,
            pose$$1 = __rest(_a, ["flip"]);
        return isFlipPose(flip, name, state) ? flipPose(state, pose$$1) : pose$$1;
    },
    addListenerToValue: function (key, elementStyler) {
        return function (v) {
            return elementStyler.set(key, v);
        };
    },
    readValueFromSource: function (key, _a) {
        var elementStyler = _a.elementStyler;
        var value$$1 = elementStyler.get(key);
        return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
    },
    extendAPI: function (api, _a, config) {
        var props = _a.props,
            activeActions = _a.activeActions;
        var measure = props.dimensions.measure;
        var poserApi = __assign({}, api, { addChild: function (element, childConfig) {
                return api._addChild(createPoseConfig(element, childConfig), domPose);
            }, measure: measure, flip: function (op) {
                if (op) {
                    measure();
                    op();
                }
                return api.set('flip');
            } });
        appendEventListeners(props.element, activeActions, api.set, config);
        return poserApi;
    }
});
var domPose$1 = function (element, config) {
    return domPose(createPoseConfig(element, config));
};

export default domPose$1;
