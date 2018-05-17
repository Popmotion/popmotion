(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('popmotion/animations/spring'), require('popmotion/animations/tween'), require('popmotion/action'), require('popmotion/easing'), require('popmotion/input/pointer'), require('popmotion/transformers'), require('style-value-types'), require('pose-core'), require('popmotion/reactions/value'), require('popmotion/compositors/chain'), require('popmotion/compositors/delay'), require('popmotion/input/listen'), require('stylefire')) :
    typeof define === 'function' && define.amd ? define(['exports', 'popmotion/animations/spring', 'popmotion/animations/tween', 'popmotion/action', 'popmotion/easing', 'popmotion/input/pointer', 'popmotion/transformers', 'style-value-types', 'pose-core', 'popmotion/reactions/value', 'popmotion/compositors/chain', 'popmotion/compositors/delay', 'popmotion/input/listen', 'stylefire'], factory) :
    (factory((global.pose = {}),null,null,null,null,null,null,global.valueTypes,null,null,null,null,null,null));
}(this, (function (exports,spring,tween,action,easing,pointer,transformers,styleValueTypes,poseFactory,value,chain,delayAction,listen,styler) { 'use strict';

    spring = spring && spring.hasOwnProperty('default') ? spring['default'] : spring;
    tween = tween && tween.hasOwnProperty('default') ? tween['default'] : tween;
    var action__default = 'default' in action ? action['default'] : action;
    pointer = pointer && pointer.hasOwnProperty('default') ? pointer['default'] : pointer;
    poseFactory = poseFactory && poseFactory.hasOwnProperty('default') ? poseFactory['default'] : poseFactory;
    var value__default = 'default' in value ? value['default'] : value;
    chain = chain && chain.hasOwnProperty('default') ? chain['default'] : chain;
    delayAction = delayAction && delayAction.hasOwnProperty('default') ? delayAction['default'] : delayAction;
    listen = listen && listen.hasOwnProperty('default') ? listen['default'] : listen;
    styler = styler && styler.hasOwnProperty('default') ? styler['default'] : styler;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var createTransitionMap = function (key) { return function (map) { return function (props) {
        var switchKey = props[key];
        var transition = map[switchKey] || map.default;
        return transition ? transition(props) : false;
    }; }; };
    var eachValue = createTransitionMap('key');

    var BoundingBoxDimension;
    (function (BoundingBoxDimension) {
        BoundingBoxDimension["width"] = "width";
        BoundingBoxDimension["height"] = "height";
        BoundingBoxDimension["left"] = "left";
        BoundingBoxDimension["right"] = "right";
        BoundingBoxDimension["top"] = "top";
        BoundingBoxDimension["bottom"] = "bottom";
    })(BoundingBoxDimension || (BoundingBoxDimension = {}));

    var singleAxisPointer = function (axis) { return function (from) {
        return pointer((_a = {}, _a[axis] = from, _a)).pipe(function (v) { return v[axis]; });
        var _a;
    }; };
    var pointerX = singleAxisPointer('x');
    var pointerY = singleAxisPointer('y');
    var createPointer = function (axisPointerCreator, min, max, measurement) { return function (_a) {
        var from = _a.from, type = _a.type, dimensions = _a.dimensions, dragBounds = _a.dragBounds;
        var axisPointer = axisPointerCreator(dimensions.measurementAsPixels(measurement, from, type));
        var transformQueue = [];
        if (dragBounds) {
            if (dragBounds[min] !== undefined)
                transformQueue.push(function (v) {
                    return Math.max(v, dimensions.measurementAsPixels(measurement, dragBounds[min], type));
                });
            if (dragBounds[max] !== undefined)
                transformQueue.push(function (v) {
                    return Math.min(v, dimensions.measurementAsPixels(measurement, dragBounds[max], type));
                });
        }
        if (type === styleValueTypes.percent) {
            transformQueue.push(transformers.interpolate([0, dimensions.get(measurement)], [0, 100]));
        }
        return transformQueue.length
            ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
    }; };
    var just = function (from) {
        return action__default(function (_a) {
            var update = _a.update, complete = _a.complete;
            update(from);
            complete();
        });
    };
    var underDampedSpring = function (_a) {
        var from = _a.from, velocity = _a.velocity, to = _a.to;
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
        var from = _a.from, velocity = _a.velocity, to = _a.to;
        return spring({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
    };
    var linearTween = function (_a) {
        var from = _a.from, to = _a.to;
        return tween({ from: from, to: to, ease: easing.linear });
    };
    var intelligentTransition = eachValue({
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
    var dragAction = eachValue({
        x: createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width),
        y: createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height)
    });
    var intelligentDragEnd = function (_a) {
        var from = _a.from;
        return just(from);
    };
    var defaultTransitions = new Map([
        ['default', intelligentTransition],
        ['dragging', dragAction],
        ['dragEnd', intelligentDragEnd]
    ]);

    var valueTypeTests = [styleValueTypes.number, styleValueTypes.degrees, styleValueTypes.percent, styleValueTypes.px];
    var testValueType = function (v) { return function (type) { return type.test(v); }; };
    var createPassiveValue = function (init, parent, transform) {
        var raw = value__default(init).pipe(transform);
        parent.raw.subscribe(raw);
        return { raw: raw };
    };
    var createValue = function (init) {
        var type = valueTypeTests.find(testValueType(init));
        var raw = value__default(type === styleValueTypes.number ? type.parse(init) : init);
        return { raw: raw, type: type };
    };
    var pose = function (_a) {
        var transformPose = _a.transformPose, addListenerToValue = _a.addListenerToValue, extendAPI = _a.extendAPI, readValueFromSource = _a.readValueFromSource;
        return poseFactory({
            bindOnChange: function (values, onChange) { return function (key) {
                if (!values.has(key))
                    return;
                var raw = values.get(key).raw;
                raw.subscribe(onChange[key]);
            }; },
            readValue: function (_a) {
                var raw = _a.raw;
                return raw.get();
            },
            createValue: function (init, key, _a, _b) {
                var elementStyler = _a.elementStyler;
                var _c = _b === void 0 ? {} : _b, passiveParent = _c.passiveParent, passiveProps = _c.passiveProps;
                var val = passiveParent
                    ? createPassiveValue(init, passiveParent, passiveProps)
                    : createValue(init);
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
                var raw = _a.raw, type = _a.type;
                return ({
                    from: type ? type.parse(raw.get()) : raw.get(),
                    velocity: raw.getVelocity(),
                    to: type ? type.parse(to) : to,
                    type: type
                });
            },
            resolveTarget: function (_a, to) {
                var type = _a.type;
                return (type ? type.parse(to) : to);
            },
            selectValueToRead: function (_a) {
                var raw = _a.raw;
                return raw;
            },
            startAction: function (_a, action$$1, complete) {
                var raw = _a.raw, type = _a.type;
                var reaction = {
                    update: function (v) { return raw.update(v); },
                    complete: complete
                };
                return type
                    ? action$$1.pipe(type.transform).start(reaction)
                    : action$$1.start(reaction);
            },
            stopAction: function (action$$1) { return action$$1.stop(); },
            getInstantTransition: function (_, to) { return just(to); },
            addActionDelay: function (delay, transition) {
                if (delay === void 0) { delay = 0; }
                return chain(delayAction(delay), transition);
            },
            defaultTransitions: defaultTransitions,
            transformPose: transformPose,
            readValueFromSource: readValueFromSource,
            extendAPI: extendAPI
        });
    };

    var createDimensions = (function (element) {
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
            get: function (measurement) { return (measurement ? current[measurement] : current); },
            measure: function () {
                current = element.getBoundingClientRect();
                hasMeasured = true;
                return current;
            },
            measurementAsPixels: function (measurement, value$$1, type) {
                return type === styleValueTypes.percent && typeof value$$1 === 'number'
                    ? value$$1 / 100 * current[measurement]
                    : value$$1;
            },
            has: function () { return hasMeasured; }
        };
    });

    var makeDraggable = function (element, activeActions, setPose, _a) {
        var onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd;
        var dragStartListener = listen(element, 'mousedown touchstart').start(function (startEvent) {
            startEvent.preventDefault();
            setPose('dragging');
            if (onDragStart)
                onDragStart(startEvent);
            var dragEndListener = listen(document, 'mouseup touchend').start(function (endEvent) {
                activeActions.get('dragEndListener').stop();
                setPose('dragEnd');
                if (onDragEnd)
                    onDragEnd(endEvent);
            });
            activeActions.set('dragEndListener', dragEndListener);
        });
        activeActions.set('dragStartListener', dragStartListener);
    };
    var appendEventListeners = (function (element, activeActions, setPose, _a) {
        var props = _a.props;
        if (props.draggable)
            makeDraggable(element, activeActions, setPose, props);
    });

    var ORIGIN_START = 0;
    var ORIGIN_CENTER = '50%';
    var ORIGIN_END = '100%';
    var findCenter = function (_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return ({
            x: (left + right) / 2,
            y: (top + bottom) / 2
        });
    };
    var positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
    var positionalPropsDict = new Set(positionalProps);
    var checkPositionalProp = function (key) { return positionalPropsDict.has(key); };
    var hasPositionalProps = function (pose) {
        return Object.keys(pose).some(checkPositionalProp);
    };
    var isFlipPose = function (pose, key, state) {
        return state.props.element instanceof HTMLElement &&
            (hasPositionalProps(pose) || key === 'flip');
    };
    var resolveProp = function (target, props) {
        return typeof target === 'function' ? target(props) : target;
    };
    var setValue = function (_a, key, to) {
        var values = _a.values, props = _a.props;
        if (values.has(key)) {
            var raw = values.get(key).raw;
            raw.update(to);
            raw.update(to);
        }
        else {
            values.set(key, {
                raw: value__default(to, function (v) { return props.elementStyler.set(key, v); })
            });
        }
    };
    var explicitlyFlipPose = function (state, nextPose) {
        var _a = state.props, dimensions = _a.dimensions, elementStyler = _a.elementStyler;
        dimensions.measure();
        var width = nextPose.width, height = nextPose.height, top = nextPose.top, left = nextPose.left, bottom = nextPose.bottom, right = nextPose.right, remainingPose = __rest(nextPose, ["width", "height", "top", "left", "bottom", "right"]);
        elementStyler
            .set(positionalProps.reduce(function (acc, key) {
            if (nextPose[key] !== undefined) {
                acc[key] = resolveProp(nextPose[key], state.props);
            }
            return acc;
        }, {}))
            .render();
        return implicitlyFlipPose(state, remainingPose);
    };
    var implicitlyFlipPose = function (state, nextPose) {
        var _a = state.props, dimensions = _a.dimensions, element = _a.element, elementStyler = _a.elementStyler;
        if (!dimensions.has())
            return {};
        var prev = dimensions.get();
        var transform = element.style.transform;
        element.style.transform = '';
        var next = element.getBoundingClientRect();
        element.style.transform = transform;
        var originX = prev.left === next.left
            ? ORIGIN_START
            : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;
        var originY = prev.top === next.top
            ? ORIGIN_START
            : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;
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
        return hasPositionalProps(nextPose)
            ? explicitlyFlipPose(props, nextPose)
            : implicitlyFlipPose(props, nextPose);
    };

    var dragPoses = function (draggable) {
        var dragging = {
            preTransition: function (_a) {
                var dimensions = _a.dimensions;
                return dimensions.measure();
            }
        };
        var dragEnd = {};
        if (draggable === true || draggable === 'x')
            dragging.x = dragEnd.x = 0;
        if (draggable === true || draggable === 'y')
            dragging.y = dragEnd.y = 0;
        return { dragging: dragging, dragEnd: dragEnd };
    };
    var createPoseConfig = function (element, _a) {
        var onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, draggable = _a.draggable, dragBounds = _a.dragBounds, config = __rest(_a, ["onDragStart", "onDragEnd", "draggable", "dragBounds"]);
        var poseConfig = __assign({ flip: {} }, config, { props: __assign({}, config.props, { draggable: draggable,
                onDragStart: onDragStart,
                onDragEnd: onDragEnd,
                dragBounds: dragBounds,
                element: element, elementStyler: styler(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
        if (draggable) {
            var _b = dragPoses(draggable), dragging = _b.dragging, dragEnd = _b.dragEnd;
            poseConfig.dragging = __assign({}, poseConfig.dragging, dragging);
            poseConfig.dragEnd = __assign({}, poseConfig.dragEnd, dragEnd);
        }
        return poseConfig;
    };
    var domPose = pose({
        transformPose: function (pose$$1, name, state) {
            return isFlipPose(pose$$1, name, state) ? flipPose(state, pose$$1) : pose$$1;
        },
        addListenerToValue: function (key, elementStyler) { return function (v) { return elementStyler.set(key, v); }; },
        readValueFromSource: function (key, _a) {
            var elementStyler = _a.elementStyler;
            var value$$1 = elementStyler.get(key);
            return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
        },
        extendAPI: function (api, _a, config) {
            var props = _a.props, activeActions = _a.activeActions;
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
    var domPose$1 = (function (element, config) {
        return domPose(createPoseConfig(element, config));
    });

    exports.default = domPose$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
