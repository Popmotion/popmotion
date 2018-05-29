(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('popmotion'), require('popmotion/action'), require('popmotion/reactions/value'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'popmotion', 'popmotion/action', 'popmotion/reactions/value', 'react'], factory) :
    (factory((global.pose = {}),null,null,null,global.React));
}(this, (function (exports,popmotion,action,value,React) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    var __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    var clamp = function (min, max) { return function (v) { return Math.max(Math.min(v, max), min); }; };
    var contains = function (term) { return function (v) { return (typeof v === 'string' && v.indexOf(term) !== -1); }; };
    var createUnitType = function (unit) { return ({
        test: contains(unit),
        parse: parseFloat,
        transform: function (v) { return "" + v + unit; }
    }); };
    var isFirstChars = function (term) { return function (v) { return (typeof v === 'string' && v.indexOf(term) === 0); }; };
    var getValueFromFunctionString = function (value$$1) { return value$$1.substring(value$$1.indexOf('(') + 1, value$$1.lastIndexOf(')')); };
    var splitCommaDelimited = function (value$$1) { return typeof value$$1 === 'string' ? value$$1.split(/,\s*/) : [value$$1]; };
    function splitColorValues(terms) {
        var numTerms = terms.length;
        return function (v) {
            var values = {};
            var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
            for (var i = 0; i < numTerms; i++) {
                values[terms[i]] = (valuesArray[i] !== undefined) ? parseFloat(valuesArray[i]) : 1;
            }
            return values;
        };
    }
    var number = {
        test: function (v) { return typeof v === 'number'; },
        parse: parseFloat,
        transform: function (v) { return v; }
    };
    var alpha = __assign$1({}, number, { transform: clamp(0, 1) });
    var degrees = createUnitType('deg');
    var percent = createUnitType('%');
    var px = createUnitType('px');
    var scale = __assign$1({}, number, { default: 1 });
    var clampRgbUnit = clamp(0, 255);
    var rgbUnit = __assign$1({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
    var rgbaTemplate = function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
        return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
    };
    var rgba = {
        test: isFirstChars('rgb'),
        parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
        transform: function (_a) {
            var red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
            return rgbaTemplate({
                red: rgbUnit.transform(red),
                green: rgbUnit.transform(green),
                blue: rgbUnit.transform(blue),
                alpha: alpha
            });
        }
    };
    var hslaTemplate = function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
        return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
    };
    var hsla = {
        test: isFirstChars('hsl'),
        parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
        transform: function (_a) {
            var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
            return hslaTemplate({
                hue: Math.round(hue),
                saturation: percent.transform(saturation),
                lightness: percent.transform(lightness),
                alpha: alpha
            });
        }
    };
    var hex = __assign$1({}, rgba, { test: isFirstChars('#'), parse: function (v) {
            var r, g, b;
            if (v.length > 4) {
                r = v.substr(1, 2);
                g = v.substr(3, 2);
                b = v.substr(5, 2);
            }
            else {
                r = v.substr(1, 1);
                g = v.substr(2, 1);
                b = v.substr(3, 1);
                r += r;
                g += g;
                b += b;
            }
            return {
                red: parseInt(r, 16),
                green: parseInt(g, 16),
                blue: parseInt(b, 16),
                alpha: 1
            };
        } });
    var isRgba = function (v) { return v.red !== undefined; };
    var isHsla = function (v) { return v.hue !== undefined; };
    var color = {
        test: function (v) { return rgba.test(v) || hsla.test(v) || hex.test(v); },
        parse: function (v) {
            if (rgba.test(v)) {
                return rgba.parse(v);
            }
            else if (hsla.test(v)) {
                return hsla.parse(v);
            }
            else if (hex.test(v)) {
                return hex.parse(v);
            }
            return v;
        },
        transform: function (v) {
            if (isRgba(v)) {
                return rgba.transform(v);
            }
            else if (isHsla(v)) {
                return hsla.transform(v);
            }
            return v;
        },
    };

    var HEY_LISTEN = 'Hey, listen! ';
    var warning = function () { };
    var invariant = function () { };
    {
        warning = function (check, message) {
            if (!check && typeof console !== 'undefined') {
                console.warn(HEY_LISTEN + message);
            }
        };
        invariant = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN.toUpperCase() + message);
            }
        };
    }

    var getPoseValues = function (_a) {
        var transition = _a.transition,
            delay = _a.delay,
            delayChildren = _a.delayChildren,
            staggerChildren = _a.staggerChildren,
            staggerDirection = _a.staggerDirection,
            afterChildren = _a.afterChildren,
            beforeChildren = _a.beforeChildren,
            preTransition = _a.preTransition,
            props = __rest(_a, ["transition", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition"]);
        return props;
    };
    var selectPoses = function (_a) {
        var label = _a.label,
            props = _a.props,
            values = _a.values,
            parentValues = _a.parentValues,
            ancestorValues = _a.ancestorValues,
            onChange = _a.onChange,
            passive = _a.passive,
            initialPose = _a.initialPose,
            poses = __rest(_a, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"]);
        return poses;
    };
    var selectAllValues = function (values, selectValue) {
        var allValues = {};
        values.forEach(function (value$$1, key) {
            return allValues[key] = selectValue(value$$1);
        });
        return allValues;
    };

    var resolveProp = function (target, props) {
        return typeof target === 'function' ? target(props) : target;
    };
    var poseDefault = function (pose, prop, defaultValue, resolveProps) {
        return pose && pose[prop] !== undefined ? resolveProp(pose[prop], resolveProps) : defaultValue;
    };
    var startChildAnimations = function (children, next, pose, props) {
        var animations = [];
        var delay = poseDefault(pose, 'delayChildren', 0, props);
        var stagger = poseDefault(pose, 'staggerChildren', 0, props);
        var staggerDirection = poseDefault(pose, 'staggerDirection', 1, props);
        var maxStaggerDuration = (children.size - 1) * stagger;
        var generateStaggerDuration = staggerDirection === 1 ? function (i) {
            return i * stagger;
        } : function (i) {
            return maxStaggerDuration - i * stagger;
        };
        Array.from(children).forEach(function (child, i) {
            animations.push(child.set(next, __assign({}, props, { delay: delay + generateStaggerDuration(i) })));
        });
        return animations;
    };
    var resolveTransition = function (transition, key, value$$1, props, convertTransitionDefinition, getInstantTransition) {
        var resolvedTransition;
        if (typeof transition === 'function') {
            resolvedTransition = transition(props);
        } else if (transition[key] || transition.default) {
            var keyTransition = transition[key] || transition.default;
            if (typeof keyTransition === 'function') {
                resolvedTransition = keyTransition(props);
            } else {
                resolvedTransition = keyTransition;
            }
        } else {
            resolvedTransition = transition;
        }
        return resolvedTransition === false ? getInstantTransition(value$$1, props) : convertTransitionDefinition(value$$1, resolvedTransition, props);
    };
    var createPoseSetter = function (setterProps) {
        return function (next, nextProps) {
            if (nextProps === void 0) {
                nextProps = {};
            }
            var state = setterProps.state,
                poses = setterProps.poses,
                startAction = setterProps.startAction,
                stopAction = setterProps.stopAction,
                getInstantTransition = setterProps.getInstantTransition,
                addActionDelay = setterProps.addActionDelay,
                getTransitionProps = setterProps.getTransitionProps,
                resolveTarget = setterProps.resolveTarget,
                transformPose = setterProps.transformPose,
                convertTransitionDefinition = setterProps.convertTransitionDefinition;
            var children = state.children,
                values = state.values,
                props = state.props,
                activeActions = state.activeActions,
                activePoses = state.activePoses;
            var _a = nextProps.delay,
                delay = _a === void 0 ? 0 : _a;
            var hasChildren = children.size;
            var nextPose = poses[next];
            var baseTransitionProps = __assign({}, props, nextProps);
            var getChildAnimations = function () {
                return hasChildren ? startChildAnimations(children, next, nextPose, baseTransitionProps) : [];
            };
            var getParentAnimations = function () {
                if (!nextPose) return [];
                if (transformPose) nextPose = transformPose(nextPose, next, state);
                var preTransition = nextPose.preTransition,
                    getTransition = nextPose.transition;
                if (preTransition) nextPose.preTransition(baseTransitionProps);
                return Object.keys(getPoseValues(nextPose)).map(function (key) {
                    return new Promise(function (complete) {
                        var value$$1 = values.get(key);
                        var transitionProps = __assign({}, baseTransitionProps, { key: key,
                            value: value$$1 });
                        var target = resolveTarget(value$$1, resolveProp(nextPose[key], transitionProps));
                        if (activeActions.has(key)) stopAction(activeActions.get(key));
                        var resolveTransitionProps = __assign({ to: target }, transitionProps, getTransitionProps(value$$1, target, transitionProps));
                        var transition = resolveTransition(getTransition, key, value$$1, resolveTransitionProps, convertTransitionDefinition, getInstantTransition);
                        var poseDelay = resolveProp(nextPose.delay, transitionProps);
                        if (delay || poseDelay) {
                            transition = addActionDelay(delay || poseDelay, transition);
                        }
                        activeActions.set(key, startAction(value$$1, transition, complete));
                        activePoses.set(key, next);
                    });
                });
            };
            if (nextPose && hasChildren) {
                if (resolveProp(nextPose.beforeChildren, baseTransitionProps)) {
                    return Promise.all(getParentAnimations()).then(function () {
                        return Promise.all(getChildAnimations());
                    });
                } else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
                    return Promise.all(getChildAnimations()).then(function () {
                        return Promise.all(getParentAnimations());
                    });
                }
            }
            return Promise.all(getParentAnimations().concat(getChildAnimations()));
        };
    };

    var isScale = function (key) {
        return key.includes('scale');
    };
    var defaultReadValueFromSource = function (key) {
        return isScale(key) ? 1 : 0;
    };
    var getInitialValue = function (poses, key, initialPose, props, readValueFromSource) {
        if (readValueFromSource === void 0) {
            readValueFromSource = defaultReadValueFromSource;
        }
        var posesToSearch = Array.isArray(initialPose) ? initialPose : [initialPose];
        var pose = posesToSearch.find(function (name) {
            return poses[name] && poses[name][key] !== undefined;
        });
        return pose ? resolveProp(poses[pose][key], props) : readValueFromSource(key, props);
    };
    var createValues = function (values, _a, pose) {
        var userSetValues = _a.userSetValues,
            createValue = _a.createValue,
            convertValue = _a.convertValue,
            readValueFromSource = _a.readValueFromSource,
            initialPose = _a.initialPose,
            poses = _a.poses,
            props = _a.props;
        return function (key) {
            if (values.has(key)) return;
            var value$$1;
            if (userSetValues && userSetValues[key] !== undefined) {
                value$$1 = convertValue(userSetValues[key], key, props);
            } else {
                var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource);
                value$$1 = createValue(initValue, key, props);
            }
            values.set(key, value$$1);
        };
    };
    var scrapeValuesFromPose = function (values, props) {
        return function (key) {
            var pose = props.poses[key];
            Object.keys(getPoseValues(pose)).forEach(createValues(values, props, pose));
        };
    };
    var getAncestorValue = function (key, fromParent, ancestors) {
        if (fromParent === true) {
            return ancestors[0] && ancestors[0].values.get(key);
        } else {
            var foundAncestor = ancestors.find(function (_a) {
                var label = _a.label;
                return label === fromParent;
            });
            return foundAncestor && foundAncestor.values.get(key);
        }
    };
    var bindPassiveValues = function (values, _a) {
        var passive = _a.passive,
            ancestorValues = _a.ancestorValues,
            createValue = _a.createValue,
            readValue = _a.readValue,
            props = _a.props;
        return function (key) {
            var _a = passive[key],
                valueKey = _a[0],
                passiveProps = _a[1],
                fromParent = _a[2];
            var valueToBind = fromParent && ancestorValues.length ? getAncestorValue(valueKey, fromParent, ancestorValues) : values.has(valueKey) ? values.get(valueKey) : false;
            if (!valueToBind) return;
            var newValue = createValue(readValue(valueToBind), key, props, {
                passiveParent: valueToBind,
                passiveProps: passiveProps,
                props: props
            });
            values.set(key, newValue);
        };
    };
    var createValueMap = function (props) {
        var poses = props.poses,
            passive = props.passive;
        var values = new Map();
        Object.keys(poses).forEach(scrapeValuesFromPose(values, props));
        if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));
        return values;
    };

    var applyDefaultTransition = function (pose, key, defaultTransitions) {
        return __assign({}, pose, { transition: defaultTransitions.has(key) ? defaultTransitions.get(key) : defaultTransitions.get('default') });
    };
    var generateTransitions = function (poses, defaultTransitions) {
        Object.keys(poses).forEach(function (key) {
            var pose = poses[key];
            invariant(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
            poses[key] = pose.transition !== undefined ? pose : applyDefaultTransition(pose, key, defaultTransitions);
        });
        return poses;
    };

    var poseFactory = function (_a) {
        var getDefaultProps = _a.getDefaultProps,
            defaultTransitions = _a.defaultTransitions,
            bindOnChange = _a.bindOnChange,
            startAction = _a.startAction,
            stopAction = _a.stopAction,
            readValue = _a.readValue,
            readValueFromSource = _a.readValueFromSource,
            resolveTarget = _a.resolveTarget,
            createValue = _a.createValue,
            convertValue = _a.convertValue,
            getInstantTransition = _a.getInstantTransition,
            getTransitionProps = _a.getTransitionProps,
            addActionDelay = _a.addActionDelay,
            selectValueToRead = _a.selectValueToRead,
            convertTransitionDefinition = _a.convertTransitionDefinition,
            transformPose = _a.transformPose,
            extendAPI = _a.extendAPI;
        return function (config) {
            var parentValues = config.parentValues,
                _a = config.ancestorValues,
                ancestorValues = _a === void 0 ? [] : _a;
            if (parentValues) ancestorValues.unshift({ values: parentValues });
            var activeActions = new Map();
            var activePoses = new Map();
            var children = new Set();
            var poses = generateTransitions(selectPoses(config), defaultTransitions);
            var props = config.props || {};
            if (getDefaultProps) props = __assign({}, props, getDefaultProps(config));
            var passive = config.passive,
                userSetValues = config.values,
                initialPose = config.initialPose;
            var values = createValueMap({
                poses: poses,
                passive: passive,
                ancestorValues: ancestorValues,
                readValue: readValue,
                createValue: createValue,
                convertValue: convertValue,
                readValueFromSource: readValueFromSource,
                userSetValues: userSetValues,
                initialPose: initialPose,
                props: props
            });
            var state = {
                activeActions: activeActions,
                activePoses: activePoses,
                children: children,
                props: props,
                values: values
            };
            var onChange = config.onChange;
            if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));
            var set = createPoseSetter({
                state: state,
                poses: poses,
                getInstantTransition: getInstantTransition,
                getTransitionProps: getTransitionProps,
                convertTransitionDefinition: convertTransitionDefinition,
                startAction: startAction,
                stopAction: stopAction,
                resolveTarget: resolveTarget,
                addActionDelay: addActionDelay,
                transformPose: transformPose
            });
            var api = {
                set: set,
                get: function (valueName) {
                    return valueName ? selectValueToRead(values.get(valueName)) : selectAllValues(values, selectValueToRead);
                },
                has: function (poseName) {
                    return !!poses[poseName];
                },
                setProps: function (newProps) {
                    return props = __assign({}, props, newProps);
                },
                _addChild: function (childConfig, factory) {
                    var child = factory(__assign({ initialPose: initialPose }, childConfig, { ancestorValues: [{ label: config.label, values: values }].concat(ancestorValues) }));
                    children.add(child);
                    return child;
                },
                removeChild: function (child) {
                    return children.delete(child);
                },
                clearChildren: function () {
                    children.forEach(function (child) {
                        return child.destroy();
                    });
                    children.clear();
                },
                destroy: function () {
                    activeActions.forEach(stopAction);
                    children.forEach(function (child) {
                        return child.destroy();
                    });
                }
            };
            return extendAPI(api, state, config);
        };
    };

    var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined;
    var prevTime = 0;
    var onNextFrame = hasRAF
        ? function (callback) { return window.requestAnimationFrame(callback); }
        : function (callback) {
            var currentTime = Date.now();
            var timeToCall = Math.max(0, 16.7 - (currentTime - prevTime));
            prevTime = currentTime + timeToCall;
            setTimeout(function () { return callback(prevTime); }, timeToCall);
        };

    function createRenderStep(startRenderLoop) {
        var functionsToRun = [];
        var functionsToRunNextFrame = [];
        var numThisFrame = 0;
        var isProcessing = false;
        var i = 0;
        return {
            cancel: function (callback) {
                var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
                if (indexOfCallback !== -1) {
                    functionsToRunNextFrame.splice(indexOfCallback, 1);
                }
            },
            process: function () {
                isProcessing = true;
                _a = [functionsToRunNextFrame, functionsToRun], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
                functionsToRunNextFrame.length = 0;
                numThisFrame = functionsToRun.length;
                for (i = 0; i < numThisFrame; i++) {
                    functionsToRun[i]();
                }
                isProcessing = false;
                var _a;
            },
            schedule: function (callback, immediate) {
                if (immediate === void 0) { immediate = false; }
                startRenderLoop();
                var addToCurrentBuffer = immediate && isProcessing;
                var buffer = addToCurrentBuffer ? functionsToRun : functionsToRunNextFrame;
                if (buffer.indexOf(callback) === -1) {
                    buffer.push(callback);
                    if (addToCurrentBuffer) {
                        numThisFrame = functionsToRun.length;
                    }
                }
            },
        };
    }

    var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now !== undefined;
    var willRenderNextFrame = false;
    function startRenderLoop() {
        if (willRenderNextFrame)
            return;
        willRenderNextFrame = true;
        onNextFrame(processFrame);
    }
    var frameStart = createRenderStep(startRenderLoop);
    var frameUpdate = createRenderStep(startRenderLoop);
    var frameRender = createRenderStep(startRenderLoop);
    var frameEnd = createRenderStep(startRenderLoop);
    function processFrame(framestamp) {
        willRenderNextFrame = false;
        frameStart.process();
        frameUpdate.process();
        frameRender.process();
        frameEnd.process();
    }
    var onFrameRender = frameRender.schedule;

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

    var __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    var createStyler = function (_a) {
        var onRead = _a.onRead, onRender = _a.onRender, _b = _a.aliasMap, aliasMap = _b === void 0 ? {} : _b, _c = _a.useCache, useCache = _c === void 0 ? true : _c;
        return function (props) {
            var state = {};
            var changedValues = [];
            var hasChanged = false;
            var setValue = function (unmappedKey, value$$1) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                var currentValue = state[key];
                state[key] = value$$1;
                if (state[key] !== currentValue) {
                    if (changedValues.indexOf(key) === -1) {
                        changedValues.push(key);
                    }
                    if (!hasChanged) {
                        hasChanged = true;
                        onFrameRender(render);
                    }
                }
            };
            function render(forceRender) {
                if (forceRender === void 0) { forceRender = false; }
                if (forceRender || hasChanged) {
                    onRender(state, props, changedValues);
                    hasChanged = false;
                    changedValues.length = 0;
                }
                return this;
            }
            return {
                get: function (unmappedKey) {
                    var key = aliasMap[unmappedKey] || unmappedKey;
                    return (key)
                        ? (useCache && state[key] !== undefined)
                            ? state[key]
                            : onRead(key, props)
                        : state;
                },
                set: function (values, value$$1) {
                    if (typeof values === 'string') {
                        if (value$$1 !== undefined) {
                            setValue(values, value$$1);
                        }
                        else {
                            return function (v) { return setValue(values, v); };
                        }
                    }
                    else {
                        for (var key in values) {
                            if (values.hasOwnProperty(key)) {
                                setValue(key, values[key]);
                            }
                        }
                    }
                    return this;
                },
                render: render,
            };
        };
    };

    var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
    var REPLACE_TEMPLATE = '$1-$2';
    var camelToDash = function (str) { return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase(); };
    var setDomAttrs = function (element, attrs) {
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                element.setAttribute(key, attrs[key]);
            }
        }
    };

    var camelCache = new Map();
    var dashCache = new Map();
    var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
    var numPrefixes = prefixes.length;
    var testElement;
    var testPrefix = function (key) {
        if (typeof document === 'undefined')
            return;
        testElement = testElement || document.createElement('div');
        for (var i = 0; i < numPrefixes; i++) {
            var prefix = prefixes[i];
            var noPrefix = (prefix === '');
            var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
            if (prefixedPropertyName in testElement.style) {
                camelCache.set(key, prefixedPropertyName);
                dashCache.set(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
            }
        }
    };
    var prefixer = (function (key, asDashCase) {
        if (asDashCase === void 0) { asDashCase = false; }
        var cache = asDashCase ? dashCache : camelCache;
        if (!cache.has(key))
            testPrefix(key);
        return cache.get(key) || key;
    });

    var axes = ['', 'X', 'Y', 'Z'];
    var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
    var TRANSFORM_ORIGIN_X = 'transformOriginX';
    var TRANSFORM_ORIGIN_Y = 'transformOriginY';
    var transformProps = order.reduce(function (acc, key) {
        return axes.reduce(function (axesAcc, axesKey) {
            axesAcc.push(key + axesKey);
            return axesAcc;
        }, acc);
    }, ['x', 'y', 'z']);
    var transformPropDictionary = transformProps.reduce(function (dict, key) {
        dict[key] = true;
        return dict;
    }, {});
    var isTransformProp = function (key) { return transformPropDictionary[key] === true; };
    var sortTransformProps = function (a, b) { return transformProps.indexOf(a) - transformProps.indexOf(b); };
    var isTransformOriginProp = function (key) { return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y; };

    var valueTypes = {
        color: color,
        backgroundColor: color,
        outlineColor: color,
        fill: color,
        stroke: color,
        borderColor: color,
        borderTopColor: color,
        borderRightColor: color,
        borderBottomColor: color,
        borderLeftColor: color,
        borderRadius: px,
        width: px,
        maxWidth: px,
        height: px,
        maxHeight: px,
        top: px,
        left: px,
        bottom: px,
        right: px,
        rotate: degrees,
        rotateX: degrees,
        rotateY: degrees,
        rotateZ: degrees,
        scale: scale,
        scaleX: scale,
        scaleY: scale,
        scaleZ: scale,
        skewX: degrees,
        skewY: degrees,
        distance: px,
        translateX: px,
        translateY: px,
        translateZ: px,
        perspective: px,
        opacity: alpha,
        transformOriginX: percent,
        transformOriginY: percent,
        transformOriginZ: px
    };
    var getValueType = (function (key) { return valueTypes[key]; });

    var aliasMap = {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        originX: 'transformOriginX',
        originY: 'transformOriginY',
        originZ: 'transformOriginZ'
    };
    var NUMBER = 'number';
    var OBJECT = 'object';
    var COLON = ':';
    var SEMI_COLON = ';';
    var TRANSFORM_ORIGIN = 'transform-origin';
    var TRANSFORM = 'transform';
    var TRANSLATE_Z = 'translateZ';
    var TRANSFORM_NONE = ';transform: none';
    var styleRule = function (key, value$$1) {
        return "" + SEMI_COLON + key + COLON + value$$1;
    };
    function buildStylePropertyString(state, changedValues, enableHardwareAcceleration, blacklist) {
        if (changedValues === void 0) { changedValues = true; }
        if (enableHardwareAcceleration === void 0) { enableHardwareAcceleration = true; }
        var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
        var propertyString = '';
        var transformString = '';
        var hasTransformOrigin = false;
        var transformIsDefault = true;
        var hasTransform = false;
        var transformHasZ = false;
        var numChangedValues = valuesToChange.length;
        for (var i = 0; i < numChangedValues; i++) {
            var key = valuesToChange[i];
            if (isTransformProp(key)) {
                hasTransform = true;
                for (var stateKey in state) {
                    if (isTransformProp(stateKey) &&
                        valuesToChange.indexOf(stateKey) === -1) {
                        valuesToChange.push(stateKey);
                    }
                }
                break;
            }
        }
        valuesToChange.sort(sortTransformProps);
        var totalNumChangedValues = valuesToChange.length;
        for (var i = 0; i < totalNumChangedValues; i++) {
            var key = valuesToChange[i];
            if (blacklist.has(key))
                continue;
            var isTransformKey = isTransformProp(key);
            var value$$1 = state[key];
            var valueType = getValueType(key);
            if (isTransformKey) {
                if ((valueType.default && value$$1 !== valueType.default) ||
                    (!valueType.default && value$$1 !== 0)) {
                    transformIsDefault = false;
                }
            }
            if (valueType &&
                (typeof value$$1 === NUMBER || typeof value$$1 === OBJECT) &&
                valueType.transform) {
                value$$1 = valueType.transform(value$$1);
            }
            if (isTransformKey) {
                transformString += key + '(' + value$$1 + ') ';
                transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
            }
            else if (isTransformOriginProp(key)) {
                state[key] = value$$1;
                hasTransformOrigin = true;
            }
            else {
                propertyString += styleRule(prefixer(key, true), value$$1);
            }
        }
        if (hasTransformOrigin) {
            propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY ||
                0) + " " + (state.transformOriginZ || 0));
        }
        if (hasTransform) {
            if (!transformHasZ && enableHardwareAcceleration) {
                transformString += TRANSLATE_Z + "(0)";
            }
            propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
        }
        return propertyString;
    }

    var SCROLL_LEFT = 'scrollLeft';
    var SCROLL_TOP = 'scrollTop';
    var scrollValues = new Set([SCROLL_LEFT, SCROLL_TOP]);
    var cssStyler = createStyler({
        onRead: function (key, _a) {
            var element = _a.element, preparseOutput = _a.preparseOutput;
            var valueType = getValueType(key);
            if (isTransformProp(key)) {
                return valueType ? valueType.default || 0 : 0;
            }
            else if (scrollValues.has(key)) {
                return element[key];
            }
            else {
                var domValue = window
                    .getComputedStyle(element, null)
                    .getPropertyValue(prefixer(key, true)) || 0;
                return preparseOutput && valueType && valueType.parse
                    ? valueType.parse(domValue)
                    : domValue;
            }
        },
        onRender: function (state, _a, changedValues) {
            var element = _a.element, enableHardwareAcceleration = _a.enableHardwareAcceleration;
            element.style.cssText += buildStylePropertyString(state, changedValues, enableHardwareAcceleration, scrollValues);
            if (changedValues.indexOf(SCROLL_LEFT) !== -1)
                element.scrollLeft = state.scrollLeft;
            if (changedValues.indexOf(SCROLL_TOP) !== -1)
                element.scrollTop = state.scrollTop;
        },
        aliasMap: aliasMap,
        uncachedValues: scrollValues
    });
    var css = (function (element, props) {
        return cssStyler(__assign$2({ element: element, enableHardwareAcceleration: true, preparseOutput: true }, props));
    });

    var ZERO_NOT_ZERO = 0.0000001;
    var percentToPixels = function (percent$$1, length) {
        return (percent$$1 / 100) * length + 'px';
    };
    var build = function (state, dimensions, isPath, pathLength) {
        var hasTransform = false;
        var hasDashArray = false;
        var props = {};
        var dashArrayStyles = isPath ? {
            pathLength: '0',
            pathSpacing: "" + pathLength
        } : undefined;
        var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
        var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
        var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
        var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
        var scaleTransformX = -transformOriginX * (scale$$1 * 1);
        var scaleTransformY = -transformOriginY * (scaleY * 1);
        var scaleReplaceX = transformOriginX / scale$$1;
        var scaleReplaceY = transformOriginY / scaleY;
        var transform = {
            translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
            scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
            rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
            skewX: "skewX(" + state.skewX + ") ",
            skewY: "skewY(" + state.skewY + ") "
        };
        for (var key in state) {
            if (state.hasOwnProperty(key)) {
                var value$$1 = state[key];
                if (isTransformProp(key)) {
                    hasTransform = true;
                }
                else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value$$1 === 'number') {
                    hasDashArray = true;
                    dashArrayStyles[key] = percentToPixels(value$$1, pathLength);
                }
                else if (isPath && key === 'pathOffset') {
                    props['stroke-dashoffset'] = percentToPixels(-value$$1, pathLength);
                }
                else {
                    props[camelToDash(key)] = value$$1;
                }
            }
        }
        if (hasDashArray) {
            props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
        }
        if (hasTransform) {
            props.transform = '';
            for (var key in transform) {
                if (transform.hasOwnProperty(key)) {
                    var defaultValue = (key === 'scale') ? '1' : '0';
                    props.transform += transform[key].replace(/undefined/g, defaultValue);
                }
            }
        }
        return props;
    };

    var valueTypes$1 = {
        fill: color,
        stroke: color,
        scale: scale,
        scaleX: scale,
        scaleY: scale,
        opacity: alpha,
        fillOpacity: alpha,
        strokeOpacity: alpha
    };
    var getValueType$1 = (function (key) { return valueTypes$1[key]; });

    var svgStyler = createStyler({
        onRead: function (key, _a) {
            var element = _a.element;
            if (!isTransformProp(key)) {
                return element.getAttribute(key);
            }
            else {
                var valueType = getValueType$1(key);
                return valueType ? valueType.default : 0;
            }
        },
        onRender: function (state, _a, changedValues) {
            var dimensions = _a.dimensions, element = _a.element, isPath = _a.isPath, pathLength = _a.pathLength;
            setDomAttrs(element, build(state, dimensions, isPath, pathLength));
        },
        aliasMap: {
            x: 'translateX',
            y: 'translateY',
            background: 'fill'
        }
    });
    var svg = (function (element) {
        var _a = element.getBBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var props = {
            element: element,
            dimensions: { x: x, y: y, width: width, height: height },
            isPath: false
        };
        if (element.tagName === 'path') {
            props.isPath = true;
            props.pathLength = element.getTotalLength();
        }
        return svgStyler(props);
    });

    var viewport = createStyler({
        useCache: false,
        onRead: function (key) {
            return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
        },
        onRender: function (_a) {
            var _b = _a.scrollTop, scrollTop = _b === void 0 ? 0 : _b, _c = _a.scrollLeft, scrollLeft = _c === void 0 ? 0 : _c;
            return window.scrollTo(scrollLeft, scrollTop);
        }
    });

    var cache = new WeakMap();
    var createDOMStyler = function (node, props) {
        var styler;
        if (node instanceof HTMLElement) {
            styler = css(node, props);
        }
        else if (node instanceof SVGElement) {
            styler = svg(node);
        }
        else if (typeof window !== 'undefined' && node === window) {
            styler = viewport(node);
        }
        invariant(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
        cache.set(node, styler);
        return styler;
    };
    var getStyler = function (node, props) {
        return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
    };
    function index (nodeOrSelector, props) {
        var node = typeof nodeOrSelector === 'string'
            ? document.querySelector(nodeOrSelector)
            : nodeOrSelector;
        return getStyler(node, props);
    }

    var createTransitionMap$1 = function (key) {
        return function (map) {
            return function (props) {
                var switchKey = props[key];
                var transition = map[switchKey] || map.default;
                return transition ? transition(props) : false;
            };
        };
    };
    var eachValue$1 = /*#__PURE__*/createTransitionMap$1('key');

    var BoundingBoxDimension;
    (function (BoundingBoxDimension) {
        BoundingBoxDimension["width"] = "width";
        BoundingBoxDimension["height"] = "height";
        BoundingBoxDimension["left"] = "left";
        BoundingBoxDimension["right"] = "right";
        BoundingBoxDimension["top"] = "top";
        BoundingBoxDimension["bottom"] = "bottom";
    })(BoundingBoxDimension || (BoundingBoxDimension = {}));

    var linear = popmotion.easing.linear;
    var interpolate = popmotion.transform.interpolate;
    var singleAxisPointer = function (axis) {
        return function (from) {
            return popmotion.pointer((_a = {}, _a[axis] = from, _a)).pipe(function (v) {
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
        return popmotion.action(function (_a) {
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
        return popmotion.spring({
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
        return popmotion.spring({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
    };
    var linearTween = function (_a) {
        var from = _a.from,
            to = _a.to;
        return popmotion.tween({ from: from, to: to, ease: linear });
    };
    var intelligentTransition = /*#__PURE__*/eachValue$1({
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
        default: popmotion.tween
    });
    var dragAction = /*#__PURE__*/eachValue$1({
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
        var raw = popmotion.value(init).pipe(transform$$1);
        parent.raw.subscribe(raw);
        return { raw: raw };
    };
    var createValue = function (init) {
        var type = valueTypeTests.find(testValueType(init));
        var raw = popmotion.value(type === number ? type.parse(init) : init);
        return { raw: raw, type: type };
    };
    var addActionDelay = function (delay$$1, transition) {
        if (delay$$1 === void 0) {
            delay$$1 = 0;
        }
        return popmotion.chain(popmotion.delay(delay$$1), transition);
    };
    var animationLookup = /*#__PURE__*/new Map([['tween', popmotion.tween], ['spring', popmotion.spring], ['decay', popmotion.decay], ['keyframes', popmotion.keyframes], ['physics', popmotion.physics]]);
    var easeIn = popmotion.easing.easeIn,
        easeOut = popmotion.easing.easeOut,
        easeInOut = popmotion.easing.easeInOut,
        circIn = popmotion.easing.circIn,
        circOut = popmotion.easing.circOut,
        circInOut = popmotion.easing.circInOut,
        backIn = popmotion.easing.backIn,
        backOut = popmotion.easing.backOut,
        backInOut = popmotion.easing.backInOut,
        anticipate = popmotion.easing.anticipate;
    var easingLookup = /*#__PURE__*/new Map([['easeIn', easeIn], ['easeOut', easeOut], ['easeInOut', easeInOut], ['circIn', circIn], ['circOut', circOut], ['circInOut', circInOut], ['backIn', backIn], ['backOut', backOut], ['backInOut', backInOut], ['anticipate', anticipate]]);
    var getAction = function (v, _a, _b) {
        var from = _b.from,
            to = _b.to,
            velocity = _b.velocity;
        var _c = _a.type,
            type = _c === void 0 ? 'tween' : _c,
            ease = _a.ease,
            def = __rest(_a, ["type", "ease"]);
        invariant(animationLookup.has(type), "Invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
        if (type === 'tween') {
            var typeOfEase = typeof ease;
            if (typeOfEase !== 'function') {
                if (typeOfEase === 'string') {
                    invariant(easingLookup.has(ease), "Invalid easing type '" + ease + "'. popmotion.io/pose/api/transition");
                    ease = easingLookup.get(ease);
                } else if (Array.isArray(ease)) {
                    invariant(ease.length === 4, "Cubic bezier arrays must contain four numerical values.");
                    var x1 = ease[0],
                        y1 = ease[1],
                        x2 = ease[2],
                        y2 = ease[3];
                    ease = popmotion.easing.cubicBezier(x1, y1, x2, y2);
                }
            }
        }
        return animationLookup.get(type)(__assign({ from: from,
            to: to,
            velocity: velocity,
            ease: ease }, def));
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
        var dragStartListener = popmotion.listen(element, 'mousedown touchstart').start(function (startEvent) {
            startEvent.preventDefault();
            setPose('dragging');
            if (onDragStart) onDragStart(startEvent);
            var dragEndListener = popmotion.listen(document, 'mouseup touchend').start(function (endEvent) {
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
    var resolveProp$1 = function (target, props) {
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
                raw: popmotion.value(to, function (v) {
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
                acc[key] = resolveProp$1(nextPose[key], state.props);
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
                element: element, elementStyler: index(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
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

    var PoseParentContext = React.createContext({});
    var calcPopFromFlowStyle = function (el) {
        var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
        return {
            position: 'absolute',
            top: offsetTop,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
    };
    var hasPose = function (pose, key) {
        return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
    };
    var objectToMap = function (obj) {
        return Object.keys(obj).reduce(function (map, key) {
            map.set(key, { raw: obj[key] });
            return map;
        }, new Map());
    };
    var PoseElement = (function (_super) {
        __extends(PoseElement, _super);
        function PoseElement() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.children = new Set();
            _this.childrenHandlers = {
                registerChild: function (props) {
                    _this.children.add(props);
                    if (_this.poser)
                        _this.flushChildren();
                },
                onUnmount: function (child) { return _this.poser.removeChild(child); },
                getParentPoseConfig: function () { return _this.props.poseConfig; },
                getInitialPoseFromParent: function () { return _this.getInitialPose(); }
            };
            _this.getRefs = function () {
                var refs = {};
                var elementType = _this.props.elementType;
                if (typeof elementType === 'string') {
                    refs.ref = _this.setRef;
                }
                else {
                    refs.innerRef = _this.setRef;
                    refs.hostRef = _this.setRef;
                }
                return refs;
            };
            _this.setRef = function (ref) {
                if (ref instanceof Element || (_this.ref && ref === null)) {
                    var innerRef = _this.props.innerRef;
                    if (innerRef)
                        innerRef(ref);
                    _this.ref = ref;
                }
            };
            return _this;
        }
        PoseElement.prototype.getInitialPose = function () {
            var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
            if (initialPose) {
                return initialPose;
            }
            else {
                var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
                var thisPose = Array.isArray(pose) ? pose : [pose];
                var thisInternalPose = Array.isArray(_pose) ? _pose : [_pose];
                return Array.isArray(parentPose)
                    ? parentPose.concat(thisPose, thisInternalPose) : [parentPose].concat(thisPose, thisInternalPose);
            }
        };
        PoseElement.prototype.getFirstPose = function () {
            var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
            if (!initialPose)
                return;
            var thisPose = Array.isArray(pose) ? pose : [pose];
            var thisInternalPose = Array.isArray(_pose) ? _pose : [_pose];
            return thisPose.concat(thisInternalPose);
        };
        PoseElement.prototype.getSetProps = function () {
            var _a = this.props, children = _a.children, elementType = _a.elementType, poseConfig = _a.poseConfig, onChange = _a.onChange, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, props = __rest(_a, ["children", "elementType", "poseConfig", "onChange", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd"]);
            if (popFromFlow && this.ref && this.ref instanceof HTMLElement) {
                if (!this.popStyle) {
                    props.style = __assign({}, props.style, calcPopFromFlowStyle(this.ref));
                    this.popStyle = props.style;
                }
                else {
                    props.style = this.popStyle;
                }
            }
            else {
                this.popStyle = null;
            }
            if (typeof onChange === 'function')
                props.onChange = onChange;
            return props;
        };
        PoseElement.prototype.componentDidMount = function () {
            var _this = this;
            invariant(typeof this.ref !== 'undefined', "No DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the hostRef prop to your underlying DOM element.");
            var _a = this.props, poseConfig = _a.poseConfig, onChange = _a.onChange, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd;
            var config = __assign({}, poseConfig, { initialPose: this.getInitialPose(), values: values || poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
                onDragEnd: onDragEnd, onChange: onValueChange
                    ? onValueChange
                    : typeof onChange !== 'function' ? onChange : undefined });
            warning(onChange === undefined || typeof onChange === 'function', 'The onChange prop is deprecated. Use onValueChange instead.');
            if (!registerChild) {
                this.initPoser(domPose$1(this.ref, config));
            }
            else {
                registerChild({
                    element: this.ref,
                    poseConfig: config,
                    onRegistered: function (poser) { return _this.initPoser(poser); }
                });
            }
        };
        PoseElement.prototype.UNSAFE_componentWillUpdate = function (_a) {
            var pose = _a.pose, _pose = _a._pose;
            if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
                this.poser.measure();
        };
        PoseElement.prototype.componentDidUpdate = function (prevProps) {
            var _a = this.props, pose = _a.pose, _pose = _a._pose;
            this.poser.setProps(this.getSetProps());
            if (pose !== prevProps.pose || pose === 'flip')
                this.setPose(pose);
            if (_pose !== prevProps._pose || _pose === 'flip')
                this.setPose(_pose);
        };
        PoseElement.prototype.componentWillUnmount = function () {
            if (!this.poser)
                return;
            var onUnmount = this.props.onUnmount;
            if (onUnmount)
                onUnmount(this.poser);
            this.poser.destroy();
        };
        PoseElement.prototype.initPoser = function (poser) {
            this.poser = poser;
            this.flushChildren();
            var firstPose = this.getFirstPose();
            if (firstPose)
                this.setPose(firstPose);
        };
        PoseElement.prototype.setPose = function (pose) {
            var _this = this;
            var onPoseComplete = this.props.onPoseComplete;
            var poseList = Array.isArray(pose) ? pose : [pose];
            Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(); });
        };
        PoseElement.prototype.flushChildren = function () {
            var _this = this;
            this.children.forEach(function (_a) {
                var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
                return onRegistered(_this.poser.addChild(element, poseConfig));
            });
            this.children.clear();
        };
        PoseElement.prototype.render = function () {
            var _a = this.props, elementType = _a.elementType, children = _a.children;
            return (React.createElement(PoseParentContext.Provider, { value: this.childrenHandlers }, React.createElement(elementType, __assign({}, this.getSetProps(), this.getRefs()), children)));
        };
        return PoseElement;
    }(React.PureComponent));

    var supportedElements = [
        'a',
        'article',
        'aside',
        'audio',
        'b',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dialog',
        'div',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'i',
        'iframe',
        'img',
        'input',
        'label',
        'legend',
        'li',
        'nav',
        'object',
        'ol',
        'option',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'section',
        'select',
        'span',
        'strong',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'ul',
        'video',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan'
    ];

    var PoseElementComponent = PoseElement;
    var componentCache = new Map();
    var createComponentFactory = function (key) {
        var componentFactory = function (poseConfig) {
            if (poseConfig === void 0) { poseConfig = {}; }
            return function (_a) {
                var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = __rest(_a, ["withParent"]);
                return !withParent || props.parentValues ? (React.createElement(PoseElementComponent, __assign({ poseConfig: poseConfig, elementType: key }, props))) : (React.createElement(PoseParentContext.Consumer, null, function (parentCtx) { return (React.createElement(PoseElementComponent, __assign({ poseConfig: poseConfig, elementType: key }, props, parentCtx))); }));
            };
        };
        componentCache.set(key, componentFactory);
        return componentFactory;
    };
    var getComponentFactory = function (key) {
        return componentCache.has(key)
            ? componentCache.get(key)
            : createComponentFactory(key);
    };
    var posed = (function (component) {
        return getComponentFactory(component);
    });
    supportedElements.reduce(function (acc, key) {
        acc[key] = getComponentFactory(key);
        return acc;
    }, posed);

    var Children = React.Children, cloneElement = React.cloneElement;
    var getKey = function (child) { return child.key; };
    var animateChildrenList = function (incomingChildren, pose, initialPose) {
        var children = [];
        Children.forEach(incomingChildren, function (child) {
            return children.push(cloneElement(child, { pose: pose, initialPose: initialPose }));
        });
        return children;
    };
    var mergeChildren = function (_a) {
        var incomingChildren = _a.incomingChildren, displayedChildren = _a.displayedChildren, isLeaving = _a.isLeaving, removeFromTree = _a.removeFromTree, preEnterPose = _a.preEnterPose, enterPose = _a.enterPose, exitPose = _a.exitPose, flipMove = _a.flipMove;
        var children = [];
        var prevKeys = displayedChildren.map(getKey);
        var nextKeys = incomingChildren.map(getKey);
        var entering = new Set(nextKeys.filter(function (key) { return isLeaving.has(key) || prevKeys.indexOf(key) === -1; }));
        entering.forEach(function (key) { return isLeaving.delete(key); });
        var leaving = prevKeys.filter(function (key) {
            return !entering.has(key) && (isLeaving.has(key) || nextKeys.indexOf(key) === -1);
        });
        leaving.forEach(function (key) { return isLeaving.add(key); });
        var moving = new Set(prevKeys.filter(function (key, i) {
            var nextIndex = nextKeys.indexOf(key);
            return !entering.has(key) && nextIndex !== -1 && i !== nextIndex;
        }));
        incomingChildren.forEach(function (child) {
            var newChildProps = entering.has(child.key)
                ? { initialPose: preEnterPose, _pose: enterPose }
                : moving.has(child.key) && flipMove
                    ? { _pose: [enterPose, 'flip'] }
                    : { _pose: enterPose };
            children.push(cloneElement(child, newChildProps));
        });
        leaving.forEach(function (key) {
            var child = displayedChildren.find(function (c) { return c.key === key; });
            var newChild = cloneElement(child, {
                _pose: exitPose,
                onPoseComplete: removeFromTree(key),
                popFromFlow: flipMove
            });
            var insertionIndex = prevKeys.indexOf(key);
            children.splice(insertionIndex, 0, newChild);
        });
        return children;
    };
    var handleIncomingChildren = function (props) {
        var displayedChildren = props.displayedChildren, incomingChildren = props.incomingChildren, animateOnMount = props.animateOnMount, preEnterPose = props.preEnterPose, enterPose = props.enterPose;
        if (!displayedChildren && animateOnMount) {
            return animateChildrenList(incomingChildren, enterPose, preEnterPose);
        }
        else if (displayedChildren) {
            return mergeChildren(props);
        }
        else {
            return animateChildrenList(incomingChildren, enterPose);
        }
    };
    var makeChildList = function (children) {
        var list = [];
        Children.forEach(children, function (child) { return child && list.push(child); });
        return list;
    };
    var removeFromChildren = function (children, key) {
        return children.filter(function (child) { return child.key !== key; });
    };

    var Fragment = React.Fragment;
    var PoseGroup = (function (_super) {
        __extends(PoseGroup, _super);
        function PoseGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                incomingChildren: [],
                isLeaving: new Set(),
                removeFromTree: function (key) { return function () {
                    var isLeaving = _this.state.isLeaving;
                    isLeaving.delete(key);
                    _this.removeFromChildren(key);
                }; }
            };
            return _this;
        }
        PoseGroup.prototype.removeFromChildren = function (key) {
            var children = this.state.children;
            this.setState({
                children: removeFromChildren(children, key)
            });
        };
        PoseGroup.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return this.state !== nextState;
        };
        PoseGroup.prototype.render = function () {
            var children = this.state.children;
            return React.createElement(Fragment, null, children);
        };
        PoseGroup.defaultProps = {
            flipMove: true,
            preEnterPose: 'exit',
            enterPose: 'enter',
            exitPose: 'exit',
            singleChildOnly: false
        };
        PoseGroup.getDerivedStateFromProps = function (props, _a) {
            var isLeaving = _a.isLeaving, removeFromTree = _a.removeFromTree, children = _a.children;
            var incomingChildren = makeChildList(props.children);
            return {
                incomingChildren: incomingChildren,
                children: handleIncomingChildren(__assign({}, props, { incomingChildren: incomingChildren, displayedChildren: children, isLeaving: isLeaving,
                    removeFromTree: removeFromTree }))
            };
        };
        return PoseGroup;
    }(React.Component));

    exports.default = posed;
    exports.PoseGroup = PoseGroup;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
