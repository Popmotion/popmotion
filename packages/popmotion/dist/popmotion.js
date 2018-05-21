(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.popmotion = {})));
}(this, (function (exports) { 'use strict';

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
    var currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return Date.now(); };
    var willRenderNextFrame = false;
    var MAX_ELAPSED = 40;
    var defaultElapsed = 16.7;
    var useDefaultElapsed = true;
    var currentFramestamp = 0;
    var elapsed = 0;
    function startRenderLoop() {
        if (willRenderNextFrame)
            return;
        willRenderNextFrame = true;
        useDefaultElapsed = true;
        onNextFrame(processFrame);
    }
    var frameStart = createRenderStep(startRenderLoop);
    var frameUpdate = createRenderStep(startRenderLoop);
    var frameRender = createRenderStep(startRenderLoop);
    var frameEnd = createRenderStep(startRenderLoop);
    function processFrame(framestamp) {
        willRenderNextFrame = false;
        elapsed = useDefaultElapsed
            ? defaultElapsed
            : Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1);
        if (!useDefaultElapsed)
            defaultElapsed = elapsed;
        currentFramestamp = framestamp;
        frameStart.process();
        frameUpdate.process();
        frameRender.process();
        frameEnd.process();
        if (willRenderNextFrame)
            useDefaultElapsed = false;
    }
    var onFrameUpdate = frameUpdate.schedule;
    var onFrameRender = frameRender.schedule;
    var onFrameEnd = frameEnd.schedule;
    var cancelOnFrameUpdate = frameUpdate.cancel;
    var timeSinceLastFrame = function () { return elapsed; };
    var currentFrameTime = function () { return currentFramestamp; };

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
    var getValueFromFunctionString = function (value) { return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')')); };
    var splitCommaDelimited = function (value) { return typeof value === 'string' ? value.split(/,\s*/) : [value]; };
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
    var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
    var generateToken = function (token) { return '${' + token + '}'; };
    var complex = {
        test: function (v) {
            var matches = v.match && v.match(FLOAT_REGEX);
            return (matches !== undefined && matches.constructor === Array && matches.length > 1);
        },
        parse: function (v) {
            var parsedValue = {};
            v.match(FLOAT_REGEX).forEach(function (value, i) { return parsedValue[i] = parseFloat(value); });
            return parsedValue;
        },
        createTransformer: function (prop) {
            var counter = 0;
            var template = prop.replace(FLOAT_REGEX, function () { return generateToken("" + counter++); });
            return function (v) {
                var output = template;
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        output = output.replace(generateToken(key), v[key].toString());
                    }
                }
                return output;
            };
        }
    };
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

    var styleValueTypes_es = /*#__PURE__*/Object.freeze({
        getValueFromFunctionString: getValueFromFunctionString,
        splitCommaDelimited: splitCommaDelimited,
        splitColorValues: splitColorValues,
        number: number,
        alpha: alpha,
        degrees: degrees,
        percent: percent,
        px: px,
        scale: scale,
        complex: complex,
        rgbUnit: rgbUnit,
        rgba: rgba,
        hsla: hsla,
        hex: hex,
        color: color
    });

    var isNum = function (v) { return typeof v === 'number'; };
    var isPoint = function (point) {
        return point.x !== undefined && point.y !== undefined;
    };
    var isPoint3D = function (point) {
        return point.z !== undefined;
    };
    var toDecimal = function (num, precision) {
        if (precision === void 0) { precision = 2; }
        precision = Math.pow(10, precision);
        return Math.round(num * precision) / precision;
    };
    var ZERO_POINT = {
        x: 0,
        y: 0,
        z: 0
    };
    var distance1D = function (a, b) { return Math.abs(a - b); };
    var angle = function (a, b) {
        if (b === void 0) { b = ZERO_POINT; }
        return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
    };
    var degreesToRadians = function (degrees) { return degrees * Math.PI / 180; };
    var dilate = function (a, b, dilation) { return a + ((b - a) * dilation); };
    var distance = function (a, b) {
        if (b === void 0) { b = ZERO_POINT; }
        if (isNum(a) && isNum(b)) {
            return distance1D(a, b);
        }
        else if (isPoint(a) && isPoint(b)) {
            var xDelta = distance1D(a.x, b.x);
            var yDelta = distance1D(a.y, b.y);
            var zDelta = (isPoint3D(a) && isPoint3D(b)) ? distance1D(a.z, b.z) : 0;
            return Math.sqrt((Math.pow(xDelta, 2)) + (Math.pow(yDelta, 2)) + (Math.pow(zDelta, 2)));
        }
        return 0;
    };
    var getProgressFromValue = function (from, to, value) {
        var toFromDifference = to - from;
        return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
    };
    var getValueFromProgress = function (from, to, progress) {
        return (-progress * from) + (progress * to) + from;
    };
    var pointFromAngleAndDistance = function (origin, angle, distance) {
        angle = degreesToRadians(angle);
        return {
            x: distance * Math.cos(angle) + origin.x,
            y: distance * Math.sin(angle) + origin.y
        };
    };
    var radiansToDegrees = function (radians) { return radians * 180 / Math.PI; };
    var smooth = function (newValue, oldValue, duration, smoothing) {
        if (smoothing === void 0) { smoothing = 0; }
        return toDecimal(oldValue + (duration * (newValue - oldValue) / Math.max(smoothing, duration)));
    };
    var speedPerFrame = function (xps, frameDuration) {
        return (isNum(xps)) ? xps / (1000 / frameDuration) : 0;
    };
    var speedPerSecond = function (velocity, frameDuration) {
        return frameDuration ? velocity * (1000 / frameDuration) : 0;
    };
    var stepProgress = function (steps, progress) {
        var segment = 1 / (steps - 1);
        var target = 1 - (1 / steps);
        var progressOfTarget = Math.min(progress / target, 1);
        return Math.floor(progressOfTarget / segment) * segment;
    };

    var calc = /*#__PURE__*/Object.freeze({
        isPoint: isPoint,
        isPoint3D: isPoint3D,
        angle: angle,
        degreesToRadians: degreesToRadians,
        dilate: dilate,
        distance: distance,
        getProgressFromValue: getProgressFromValue,
        getValueFromProgress: getValueFromProgress,
        pointFromAngleAndDistance: pointFromAngleAndDistance,
        radiansToDegrees: radiansToDegrees,
        smooth: smooth,
        speedPerFrame: speedPerFrame,
        speedPerSecond: speedPerSecond,
        stepProgress: stepProgress
    });

    var noop = function (v) { return v; };
    var appendUnit = function (unit) { return function (v) { return "" + v + unit; }; };
    var applyOffset = function (from, to) {
        var hasReceivedFrom = true;
        if (to === undefined) {
            to = from;
            hasReceivedFrom = false;
        }
        var getOffset = function (v) { return v - from; };
        var applyOffsetTo = function (v) { return v + to; };
        return function (v) {
            if (hasReceivedFrom) {
                return applyOffsetTo(getOffset(v));
            }
            else {
                from = v;
                hasReceivedFrom = true;
                return to;
            }
        };
    };
    var blend = function (from, to, v) {
        var fromExpo = from * from;
        var toExpo = to * to;
        return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
    };
    var blendColor = function (from, to) {
        var fromColor = (typeof from === 'string') ? color.parse(from) : from;
        var toColor = (typeof to === 'string') ? color.parse(to) : to;
        var blended = __assign({}, fromColor);
        var blendFunc = (from.hue !== undefined ||
            typeof from === 'string' && hsla.test(from)) ? getValueFromProgress
            : blend;
        return function (v) {
            blended = __assign({}, blended);
            for (var key in blended) {
                if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                    blended[key] = blendFunc(fromColor[key], toColor[key], v);
                }
            }
            blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
            return blended;
        };
    };
    var clamp$1 = function (min, max) { return function (v) { return Math.min(Math.max(v, min), max); }; };
    var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
    var pipe = function () {
        var transformers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transformers[_i] = arguments[_i];
        }
        return transformers.reduce(combineFunctions);
    };
    var conditional = function (check, apply) { return function (v) { return check(v) ? apply(v) : v; }; };
    var slowInterpolate = function (input, output, rangeLength, rangeEasing) {
        var finalIndex = rangeLength - 1;
        if (input[0] > input[finalIndex]) {
            input.reverse();
            output.reverse();
        }
        return function (v) {
            if (v <= input[0]) {
                return output[0];
            }
            if (v >= input[finalIndex]) {
                return output[finalIndex];
            }
            var i = 1;
            for (; i < rangeLength; i++) {
                if (input[i] > v || i === finalIndex) {
                    break;
                }
            }
            var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
            var easedProgress = (rangeEasing) ? rangeEasing[i - 1](progressInRange) : progressInRange;
            return getValueFromProgress(output[i - 1], output[i], easedProgress);
        };
    };
    var fastInterpolate = function (minA, maxA, minB, maxB) { return function (v) {
        return (((v - minA) * (maxB - minB)) / (maxA - minA)) + minB;
    }; };
    var interpolate = function (input, output, rangeEasing) {
        var rangeLength = input.length;
        return rangeLength !== 2
            ? slowInterpolate(input, output, rangeLength, rangeEasing)
            : fastInterpolate(input[0], input[1], output[0], output[1]);
    };
    var generateStaticSpring = function (alterDisplacement) {
        if (alterDisplacement === void 0) { alterDisplacement = noop; }
        return function (constant, origin) { return function (v) {
            var displacement = origin - v;
            var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
            return (displacement <= 0) ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
        }; };
    };
    var linearSpring = generateStaticSpring();
    var nonlinearSpring = generateStaticSpring(Math.sqrt);
    var wrap = function (min, max) { return function (v) {
        var rangeSize = max - min;
        return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
    }; };
    var smooth$1 = function (strength) {
        if (strength === void 0) { strength = 50; }
        var previousValue = 0;
        var lastUpdated = 0;
        return function (v) {
            var currentFramestamp = currentFrameTime();
            var timeDelta = (currentFramestamp !== lastUpdated) ? currentFramestamp - lastUpdated : 0;
            var newValue = timeDelta ? smooth(v, previousValue, timeDelta, strength) : previousValue;
            lastUpdated = currentFramestamp;
            previousValue = newValue;
            return newValue;
        };
    };
    var snap = function (points) {
        if (typeof points === 'number') {
            return function (v) { return Math.round(v / points) * points; };
        }
        else {
            var i_1 = 0;
            var numPoints_1 = points.length;
            return function (v) {
                var lastDistance = Math.abs(points[0] - v);
                for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                    var point = points[i_1];
                    var distance$$1 = Math.abs(point - v);
                    if (distance$$1 === 0)
                        return point;
                    if (distance$$1 > lastDistance)
                        return points[i_1 - 1];
                    if (i_1 === numPoints_1 - 1)
                        return point;
                    lastDistance = distance$$1;
                }
            };
        }
    };
    var steps = function (st, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return function (v) {
            var progress = getProgressFromValue(min, max, v);
            return getValueFromProgress(min, max, stepProgress(st, progress));
        };
    };
    var transformMap = function (childTransformers) { return function (v) {
        var output = __assign({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    }; };

    var transformers = /*#__PURE__*/Object.freeze({
        appendUnit: appendUnit,
        applyOffset: applyOffset,
        blendColor: blendColor,
        clamp: clamp$1,
        pipe: pipe,
        conditional: conditional,
        interpolate: interpolate,
        generateStaticSpring: generateStaticSpring,
        linearSpring: linearSpring,
        nonlinearSpring: nonlinearSpring,
        wrap: wrap,
        smooth: smooth$1,
        snap: snap,
        steps: steps,
        transformMap: transformMap
    });

    var Chainable = (function () {
        function Chainable(props) {
            if (props === void 0) { props = {}; }
            this.props = props;
        }
        Chainable.prototype.applyMiddleware = function (middleware) {
            return this.create(__assign({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
        };
        Chainable.prototype.pipe = function () {
            var funcs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                funcs[_i] = arguments[_i];
            }
            var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
            return this.applyMiddleware(function (update) { return function (v) { return update(pipedUpdate(v)); }; });
        };
        Chainable.prototype.while = function (predicate) {
            return this.applyMiddleware(function (update, complete) { return function (v) { return predicate(v) ? update(v) : complete(); }; });
        };
        Chainable.prototype.filter = function (predicate) {
            return this.applyMiddleware(function (update, complete) { return function (v) { return predicate(v) && update(v); }; });
        };
        return Chainable;
    }());

    var Observer = (function () {
        function Observer(_a, observer) {
            var middleware = _a.middleware, onComplete = _a.onComplete;
            var _this = this;
            this.isActive = true;
            this.update = function (v) {
                if (_this.observer.update)
                    _this.updateObserver(v);
            };
            this.complete = function () {
                if (_this.observer.complete && _this.isActive)
                    _this.observer.complete();
                if (_this.onComplete)
                    _this.onComplete();
                _this.isActive = false;
            };
            this.error = function (err) {
                if (_this.observer.error && _this.isActive)
                    _this.observer.error(err);
                _this.isActive = false;
            };
            this.observer = observer;
            this.updateObserver = function (v) { return observer.update(v); };
            this.onComplete = onComplete;
            if (observer.update && middleware && middleware.length) {
                middleware.forEach(function (m) { return _this.updateObserver = m(_this.updateObserver, _this.complete); });
            }
        }
        return Observer;
    }());
    var createObserver = (function (observerCandidate, _a, onComplete) {
        var middleware = _a.middleware;
        if (typeof observerCandidate === 'function') {
            return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
        }
        else {
            return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
        }
    });

    var Action = (function (_super) {
        __extends(Action, _super);
        function Action() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Action.prototype.create = function (props) {
            return new Action(props);
        };
        Action.prototype.start = function (observerCandidate) {
            if (observerCandidate === void 0) { observerCandidate = {}; }
            var isComplete = false;
            var subscription = {
                stop: function () { return undefined; }
            };
            var _a = this.props, init = _a.init, observerProps = __rest(_a, ["init"]);
            var observer = createObserver(observerCandidate, observerProps, function () {
                isComplete = true;
                subscription.stop();
            });
            var api = init(observer);
            subscription = api
                ? __assign({}, subscription, api) : subscription;
            if (observerCandidate.registerParent) {
                observerCandidate.registerParent(subscription);
            }
            if (isComplete)
                subscription.stop();
            return subscription;
        };
        return Action;
    }(Chainable));
    var action = (function (init) { return new Action({ init: init }); });

    var BaseMulticast = (function (_super) {
        __extends(BaseMulticast, _super);
        function BaseMulticast() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.subscribers = [];
            return _this;
        }
        BaseMulticast.prototype.complete = function () {
            this.subscribers.forEach(function (subscriber) { return subscriber.complete(); });
        };
        BaseMulticast.prototype.error = function (err) {
            this.subscribers.forEach(function (subscriber) { return subscriber.error(err); });
        };
        BaseMulticast.prototype.update = function (v) {
            for (var i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i].update(v);
            }
        };
        BaseMulticast.prototype.subscribe = function (observerCandidate) {
            var _this = this;
            var observer = createObserver(observerCandidate, this.props);
            this.subscribers.push(observer);
            var subscription = {
                unsubscribe: function () {
                    var index = _this.subscribers.indexOf(observer);
                    if (index !== -1)
                        _this.subscribers.splice(index, 1);
                }
            };
            return subscription;
        };
        BaseMulticast.prototype.stop = function () {
            if (this.parent)
                this.parent.stop();
        };
        BaseMulticast.prototype.registerParent = function (subscription) {
            this.stop();
            this.parent = subscription;
        };
        return BaseMulticast;
    }(Chainable));

    var Multicast = (function (_super) {
        __extends(Multicast, _super);
        function Multicast() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Multicast.prototype.create = function (props) {
            return new Multicast(props);
        };
        return Multicast;
    }(BaseMulticast));
    var multicast = (function () { return new Multicast(); });

    var isValueList = function (v) { return Array.isArray(v); };
    var isSingleValue = function (v) {
        var typeOfV = typeof v;
        return (typeOfV === 'string' || typeOfV === 'number');
    };
    var ValueReaction = (function (_super) {
        __extends(ValueReaction, _super);
        function ValueReaction(props) {
            var _this = _super.call(this, props) || this;
            _this.scheduleVelocityCheck = function () { return onFrameEnd(_this.velocityCheck); };
            _this.velocityCheck = function () {
                if (currentFrameTime() !== _this.lastUpdated) {
                    _this.prev = _this.current;
                }
            };
            _this.prev = _this.current = props.value || 0;
            if (isSingleValue(_this.current)) {
                _this.updateCurrent = function (v) { return _this.current = v; };
                _this.getVelocityOfCurrent = function () { return _this.getSingleVelocity(_this.current, _this.prev); };
            }
            else if (isValueList(_this.current)) {
                _this.updateCurrent = function (v) { return _this.current = v.slice(); };
                _this.getVelocityOfCurrent = function () { return _this.getListVelocity(); };
            }
            else {
                _this.updateCurrent = function (v) {
                    _this.current = {};
                    for (var key in v) {
                        if (v.hasOwnProperty(key)) {
                            _this.current[key] = v[key];
                        }
                    }
                };
                _this.getVelocityOfCurrent = function () { return _this.getMapVelocity(); };
            }
            if (props.initialSubscription)
                _this.subscribe(props.initialSubscription);
            return _this;
        }
        ValueReaction.prototype.create = function (props) {
            return new ValueReaction(props);
        };
        ValueReaction.prototype.get = function () {
            return this.current;
        };
        ValueReaction.prototype.getVelocity = function () {
            return this.getVelocityOfCurrent();
        };
        ValueReaction.prototype.update = function (v) {
            _super.prototype.update.call(this, v);
            this.prev = this.current;
            this.updateCurrent(v);
            this.timeDelta = timeSinceLastFrame();
            this.lastUpdated = currentFrameTime();
            onFrameEnd(this.scheduleVelocityCheck);
        };
        ValueReaction.prototype.subscribe = function (observerCandidate) {
            var sub = _super.prototype.subscribe.call(this, observerCandidate);
            this.update(this.current);
            return sub;
        };
        ValueReaction.prototype.getSingleVelocity = function (current, prev) {
            return (typeof current === 'number' && typeof prev === 'number')
                ? speedPerSecond(current - prev, this.timeDelta)
                : speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
        };
        ValueReaction.prototype.getListVelocity = function () {
            var _this = this;
            return this.current.map(function (c, i) { return _this.getSingleVelocity(c, _this.prev[i]); });
        };
        ValueReaction.prototype.getMapVelocity = function () {
            var velocity = {};
            for (var key in this.current) {
                if (this.current.hasOwnProperty(key)) {
                    velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
                }
            }
            return velocity;
        };
        return ValueReaction;
    }(BaseMulticast));
    var value = (function (value, initialSubscription) { return new ValueReaction({ value: value, initialSubscription: initialSubscription }); });

    var multi = function (_a) {
        var getCount = _a.getCount, getFirst = _a.getFirst, getOutput = _a.getOutput, mapApi = _a.mapApi, setProp = _a.setProp, startActions = _a.startActions;
        return function (actions) {
            return action(function (_a) {
                var update = _a.update, complete = _a.complete, error = _a.error;
                var numActions = getCount(actions);
                var output = getOutput();
                var updateOutput = function () { return update(output); };
                var numCompletedActions = 0;
                var subs = startActions(actions, function (a, name) {
                    var hasCompleted = false;
                    return a.start({
                        complete: function () {
                            if (!hasCompleted) {
                                hasCompleted = true;
                                numCompletedActions++;
                                if (numCompletedActions === numActions)
                                    onFrameUpdate(complete);
                            }
                        },
                        error: error,
                        update: function (v) {
                            setProp(output, name, v);
                            onFrameUpdate(updateOutput, true);
                        }
                    });
                });
                return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                    api[methodName] = mapApi(subs, methodName);
                    return api;
                }, {});
            });
        };
    };

    var composite = multi({
        getOutput: function () { return ({}); },
        getCount: function (subs) { return Object.keys(subs).length; },
        getFirst: function (subs) { return subs[Object.keys(subs)[0]]; },
        mapApi: function (subs, methodName) { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs)
                .reduce(function (output, propKey) {
                if (subs[propKey][methodName]) {
                    (args[0] && args[0][propKey] !== undefined)
                        ? output[propKey] = subs[propKey][methodName](args[0][propKey])
                        : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
                var _a;
            }, {});
        }; },
        setProp: function (output, name, v) { return output[name] = v; },
        startActions: function (actions, starter) { return Object.keys(actions)
            .reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {}); }
    });

    var parallel = multi({
        getOutput: function () { return ([]); },
        getCount: function (subs) { return subs.length; },
        getFirst: function (subs) { return subs[0]; },
        mapApi: function (subs, methodName) { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0])
                        ? sub[methodName](args[0][i])
                        : sub[methodName].apply(sub, args);
                }
            });
        }; },
        setProp: function (output, name, v) { return output[name] = v; },
        startActions: function (actions, starter) { return actions.map(function (action, i) { return starter(action, i); }); }
    });
    var parallel$1 = (function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return parallel(actions);
    });

    var isColor = color.test;
    var convertToColorAction = function (init, props) { return (typeof props.from === 'string' && isColor(props.from) &&
        typeof props.to === 'string' && isColor(props.to)) ? init(__assign({}, props, { from: 0, to: 1 })).pipe(blendColor(props.from, props.to), color.transform)
        : init(props); };
    var createVectorTests = function (typeTests) {
        var testNames = Object.keys(typeTests);
        return {
            getVectorKeys: function (props) { return testNames.reduce(function (vectorKeys, key) {
                if (props[key] !== undefined && !typeTests[key](props[key])) {
                    vectorKeys.push(key);
                }
                return vectorKeys;
            }, []); },
            test: function (props) { return props && testNames.reduce(function (isVector, key) {
                return isVector || (props[key] !== undefined && !typeTests[key](props[key]));
            }, false); }
        };
    };
    var reduceArrayValue = function (i) { return function (props, key) {
        props[key] = props[key][i];
        return props;
    }; };
    var createArrayVector = function (init, props, vectorKeys) {
        var firstVectorKey = vectorKeys[0];
        var actionList = props[firstVectorKey].map(function (v, i) {
            return convertToColorAction(init, vectorKeys.reduce(reduceArrayValue(i), __assign({}, props)));
        });
        return parallel$1.apply(void 0, actionList);
    };
    var reduceObjectValue = function (key) { return function (props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    }; };
    var createObjectVector = function (init, props, vectorKeys) {
        var firstVectorKey = vectorKeys[0];
        var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
            map[key] = convertToColorAction(init, vectorKeys.reduce(reduceObjectValue(key), __assign({}, props)));
            return map;
        }, {});
        return composite(actionMap);
    };
    var createColorVector = function (init, props) { return convertToColorAction(init, props); };
    var vectorAction = function (init, typeTests) {
        var _a = createVectorTests(typeTests), test = _a.test, getVectorKeys = _a.getVectorKeys;
        return function (props) {
            var isVector = test(props);
            if (!isVector)
                return init(props);
            var vectorKeys = getVectorKeys(props);
            var testKey = vectorKeys[0];
            var testProp = props[testKey];
            if (Array.isArray(testProp)) {
                return createArrayVector(init, props, vectorKeys);
            }
            else if (typeof testProp === 'string' && isColor(testProp)) {
                return createColorVector(init, props, vectorKeys);
            }
            else {
                return createObjectVector(init, props, vectorKeys);
            }
        };
    };

    var frame = function () { return action(function (_a) {
        var update = _a.update;
        var isActive = true;
        var startTime = currentTime();
        var nextFrame = function () {
            if (!isActive)
                return;
            update(Math.max(currentFrameTime() - startTime, 0));
            onFrameUpdate(nextFrame);
        };
        onFrameUpdate(nextFrame);
        return {
            stop: function () { return isActive = false; }
        };
    }); };

    var decay = function (props) {
        if (props === void 0) { props = {}; }
        return action(function (_a) {
            var complete = _a.complete, update = _a.update;
            var _b = props.velocity, velocity = _b === void 0 ? 0 : _b, _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.power, power = _d === void 0 ? 0.8 : _d, _e = props.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = props.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = props.modifyTarget;
            var elapsed = 0;
            var amplitude = power * velocity;
            var idealTarget = Math.round(from + amplitude);
            var target = (typeof modifyTarget === 'undefined')
                ? idealTarget
                : modifyTarget(idealTarget);
            var timer = frame().start(function () {
                elapsed += timeSinceLastFrame();
                var delta = -amplitude * Math.exp(-elapsed / timeConstant);
                var isMoving = (delta > restDelta || delta < -restDelta);
                var current = isMoving ? target + delta : target;
                update(current);
                if (!isMoving) {
                    timer.stop();
                    complete();
                }
            });
            return {
                stop: function () { return timer.stop(); }
            };
        });
    };
    var index = vectorAction(decay, {
        from: number.test,
        modifyTarget: function (func) { return typeof func === 'function'; },
        velocity: number.test
    });

    var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
    var createReversedEasing = function (easing) {
        return function (p) { return 1 - easing(1 - p); };
    };
    var createMirroredEasing = function (easing) {
        return function (p) { return (p <= 0.5) ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2; };
    };
    var linear = function (p) { return p; };
    var createExpoIn = function (power) { return function (p) { return Math.pow(p, power); }; };
    var easeIn = createExpoIn(2);
    var easeOut = createReversedEasing(easeIn);
    var easeInOut = createMirroredEasing(easeIn);
    var circIn = function (p) { return 1 - Math.sin(Math.acos(p)); };
    var circOut = createReversedEasing(circIn);
    var circInOut = createMirroredEasing(circOut);
    var createBackIn = function (power) { return function (p) { return (p * p) * ((power + 1) * p - power); }; };
    var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
    var backOut = createReversedEasing(backIn);
    var backInOut = createMirroredEasing(backIn);
    var createAnticipateEasing = function (power) {
        var backEasing = createBackIn(power);
        return function (p) { return ((p *= 2) < 1) ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1))); };
    };
    var anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
    var NEWTON_ITERATIONS = 8;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var K_SPLINE_TABLE_SIZE = 11;
    var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
    var FLOAT_32_SUPPORTED = (typeof Float32Array !== 'undefined');
    var a = function (a1, a2) { return 1.0 - 3.0 * a2 + 3.0 * a1; };
    var b = function (a1, a2) { return 3.0 * a2 - 6.0 * a1; };
    var c = function (a1) { return 3.0 * a1; };
    var getSlope = function (t, a1, a2) { return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1); };
    var calcBezier = function (t, a1, a2) { return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t; };
    function cubicBezier(mX1, mY1, mX2, mY2) {
        var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
        var _precomputed = false;
        var binarySubdivide = function (aX, aA, aB) {
            var i = 0;
            var currentX;
            var currentT;
            do {
                currentT = aA + (aB - aA) / 2.0;
                currentX = calcBezier(currentT, mX1, mX2) - aX;
                if (currentX > 0.0) {
                    aB = currentT;
                }
                else {
                    aA = currentT;
                }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
            return currentT;
        };
        var newtonRaphsonIterate = function (aX, aGuessT) {
            var i = 0;
            var currentSlope = 0;
            var currentX;
            for (; i < NEWTON_ITERATIONS; ++i) {
                currentSlope = getSlope(aGuessT, mX1, mX2);
                if (currentSlope === 0.0) {
                    return aGuessT;
                }
                currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
        };
        var calcSampleValues = function () {
            for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
                sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
            }
        };
        var getTForX = function (aX) {
            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = K_SPLINE_TABLE_SIZE - 1;
            var dist = 0.0;
            var guessForT = 0.0;
            var initialSlope = 0.0;
            for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += K_SAMPLE_STEP_SIZE;
            }
            --currentSample;
            dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
            initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT);
            }
            else if (initialSlope === 0.0) {
                return guessForT;
            }
            else {
                return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
            }
        };
        var precompute = function () {
            _precomputed = true;
            if (mX1 != mY1 || mX2 != mY2) {
                calcSampleValues();
            }
        };
        var resolver = function (aX) {
            var returnValue;
            if (!_precomputed) {
                precompute();
            }
            if (mX1 === mY1 && mX2 === mY2) {
                returnValue = aX;
            }
            else if (aX === 0) {
                returnValue = 0;
            }
            else if (aX === 1) {
                returnValue = 1;
            }
            else {
                returnValue = calcBezier(getTForX(aX), mY1, mY2);
            }
            return returnValue;
        };
        return resolver;
    }

    var easing = /*#__PURE__*/Object.freeze({
        createReversedEasing: createReversedEasing,
        createMirroredEasing: createMirroredEasing,
        linear: linear,
        createExpoIn: createExpoIn,
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut,
        circIn: circIn,
        circOut: circOut,
        circInOut: circInOut,
        createBackIn: createBackIn,
        backIn: backIn,
        backOut: backOut,
        backInOut: backInOut,
        createAnticipateEasing: createAnticipateEasing,
        anticipate: anticipate,
        cubicBezier: cubicBezier
    });

    var scrubber = function (_a) {
        var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, _d = _a.ease, ease = _d === void 0 ? linear : _d;
        return action(function (_a) {
            var update = _a.update;
            return ({
                seek: function (progress) { return update(progress); }
            });
        }).pipe(ease, function (v) { return getValueFromProgress(from, to, v); });
    };
    var scrubber$1 = vectorAction(scrubber, {
        ease: function (func) { return typeof func === 'function'; },
        from: number.test,
        to: number.test
    });

    var clampProgress = clamp$1(0, 1);
    var tween = function (props) {
        if (props === void 0) { props = {}; }
        return action(function (_a) {
            var update = _a.update, complete = _a.complete;
            var _b = props.duration, duration = _b === void 0 ? 300 : _b, _c = props.ease, ease = _c === void 0 ? easeOut : _c, _d = props.flip, flip = _d === void 0 ? 0 : _d, _e = props.loop, loop = _e === void 0 ? 0 : _e, _f = props.yoyo, yoyo = _f === void 0 ? 0 : _f;
            var _g = props.from, from = _g === void 0 ? 0 : _g, _h = props.to, to = _h === void 0 ? 1 : _h, _j = props.elapsed, elapsed = _j === void 0 ? 0 : _j, _k = props.playDirection, playDirection = _k === void 0 ? 1 : _k, _l = props.flipCount, flipCount = _l === void 0 ? 0 : _l, _m = props.yoyoCount, yoyoCount = _m === void 0 ? 0 : _m, _o = props.loopCount, loopCount = _o === void 0 ? 0 : _o;
            var playhead = scrubber$1({ from: from, to: to, ease: ease }).start(update);
            var progress = 0;
            var tweenTimer;
            var isActive = false;
            var reverseTween = function () { return playDirection *= -1; };
            var isTweenComplete = function () {
                var isComplete = (playDirection === 1)
                    ? isActive && elapsed >= duration
                    : isActive && elapsed <= 0;
                if (!isComplete)
                    return false;
                if (isComplete && !loop && !flip && !yoyo)
                    return true;
                var isStepTaken = false;
                if (loop && loopCount < loop) {
                    elapsed = 0;
                    loopCount++;
                    isStepTaken = true;
                }
                else if (flip && flipCount < flip) {
                    elapsed = duration - elapsed;
                    _a = [to, from], from = _a[0], to = _a[1];
                    playhead = scrubber$1({ from: from, to: to, ease: ease }).start(update);
                    flipCount++;
                    isStepTaken = true;
                }
                else if (yoyo && yoyoCount < yoyo) {
                    reverseTween();
                    yoyoCount++;
                    isStepTaken = true;
                }
                return !isStepTaken;
                var _a;
            };
            var updateTween = function () {
                progress = clampProgress(getProgressFromValue(0, duration, elapsed));
                playhead.seek(progress);
            };
            var startTimer = function () {
                isActive = true;
                tweenTimer = frame().start(function () {
                    elapsed += timeSinceLastFrame() * playDirection;
                    updateTween();
                    if (isTweenComplete() && complete) {
                        tweenTimer.stop();
                        onFrameUpdate(complete, true);
                    }
                });
            };
            var stopTimer = function () {
                isActive = false;
                if (tweenTimer)
                    tweenTimer.stop();
            };
            startTimer();
            return {
                isActive: function () { return isActive; },
                getElapsed: function () { return clamp$1(0, duration)(elapsed); },
                getProgress: function () { return progress; },
                stop: function () {
                    stopTimer();
                },
                pause: function () {
                    stopTimer();
                    return this;
                },
                resume: function () {
                    startTimer();
                    return this;
                },
                seek: function (newProgress) {
                    elapsed = getValueFromProgress(0, duration, newProgress);
                    onFrameUpdate(updateTween, true);
                    return this;
                },
                reverse: function () {
                    reverseTween();
                    return this;
                }
            };
        });
    };

    var clampProgress$1 = clamp$1(0, 1);
    var defaultEasings = function (values, easing) {
        return values.map(function () { return easing || easeOut; }).splice(0, values.length - 1);
    };
    var defaultTimings = function (values) {
        var numValues = values.length;
        return values.map(function (value, i) { return (i !== 0) ? i / (numValues - 1) : 0; });
    };
    var interpolateScrubbers = function (input, scrubbers, update) {
        var rangeLength = input.length;
        var finalInputIndex = rangeLength - 1;
        var finalScrubberIndex = finalInputIndex - 1;
        var subs = scrubbers.map(function (scrub) { return scrub.start(update); });
        return function (v) {
            if (v <= input[0]) {
                subs[0].seek(0);
            }
            if (v >= input[finalInputIndex]) {
                subs[finalScrubberIndex].seek(1);
            }
            var i = 1;
            for (; i < rangeLength; i++) {
                if (input[i] > v || i === finalInputIndex)
                    break;
            }
            var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
            subs[i - 1].seek(clampProgress$1(progressInRange));
        };
    };
    var keyframes = function (_a) {
        var easings = _a.easings, _b = _a.ease, ease = _b === void 0 ? linear : _b, times = _a.times, values = _a.values, tweenProps = __rest(_a, ["easings", "ease", "times", "values"]);
        easings = Array.isArray(easings)
            ? easings
            : defaultEasings(values, easings);
        times = times || defaultTimings(values);
        var scrubbers = easings.map(function (easing, i) { return scrubber$1({
            from: values[i],
            to: values[i + 1],
            ease: easing
        }); });
        return tween(__assign({}, tweenProps, { ease: ease })).applyMiddleware(function (update) { return interpolateScrubbers(times, scrubbers, update); });
    };

    var physics = function (props) {
        if (props === void 0) { props = {}; }
        return action(function (_a) {
            var complete = _a.complete, update = _a.update;
            var _b = props.acceleration, acceleration = _b === void 0 ? 0 : _b, _c = props.friction, friction = _c === void 0 ? 0 : _c, _d = props.velocity, velocity = _d === void 0 ? 0 : _d, springStrength = props.springStrength, to = props.to;
            var _e = props.restSpeed, restSpeed = _e === void 0 ? 0.001 : _e, _f = props.from, from = _f === void 0 ? 0 : _f;
            var current = from;
            var timer = frame().start(function () {
                var elapsed = Math.max(timeSinceLastFrame(), 16);
                if (acceleration)
                    velocity += speedPerFrame(acceleration, elapsed);
                if (friction)
                    velocity *= Math.pow((1 - friction), (elapsed / 100));
                if (springStrength !== undefined && to !== undefined) {
                    var distanceToTarget = to - current;
                    velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
                }
                current += speedPerFrame(velocity, elapsed);
                update(current);
                var isComplete = (restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed));
                if (isComplete) {
                    timer.stop();
                    complete();
                }
            });
            return {
                set: function (v) {
                    current = v;
                    return this;
                },
                setAcceleration: function (v) {
                    acceleration = v;
                    return this;
                },
                setFriction: function (v) {
                    friction = v;
                    return this;
                },
                setSpringStrength: function (v) {
                    springStrength = v;
                    return this;
                },
                setSpringTarget: function (v) {
                    to = v;
                    return this;
                },
                setVelocity: function (v) {
                    velocity = v;
                    return this;
                },
                stop: function () { return timer.stop(); }
            };
        });
    };
    var index$1 = vectorAction(physics, {
        acceleration: number.test,
        friction: number.test,
        velocity: number.test,
        from: number.test,
        to: number.test,
        springStrength: number.test
    });

    var spring = function (props) {
        if (props === void 0) { props = {}; }
        return action(function (_a) {
            var update = _a.update, complete = _a.complete;
            var _b = props.velocity, velocity = _b === void 0 ? 0.0 : _b;
            var _c = props.from, from = _c === void 0 ? 0.0 : _c, _d = props.to, to = _d === void 0 ? 0.0 : _d, _e = props.stiffness, stiffness = _e === void 0 ? 100 : _e, _f = props.damping, damping = _f === void 0 ? 10 : _f, _g = props.mass, mass = _g === void 0 ? 1.0 : _g, _h = props.restSpeed, restSpeed = _h === void 0 ? 0.01 : _h, _j = props.restDelta, restDelta = _j === void 0 ? 0.01 : _j;
            var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
            var t = 0;
            var delta = to - from;
            var position = from;
            var prevPosition = position;
            var springTimer = frame().start(function () {
                var timeDelta = timeSinceLastFrame();
                t += timeDelta;
                var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
                var angularFreq = Math.sqrt(stiffness / mass) / 1000;
                prevPosition = position;
                if (dampingRatio < 1) {
                    var envelope = Math.exp(-dampingRatio * angularFreq * t);
                    var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                    position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta)
                        / expoDecay * Math.sin(expoDecay * t)
                        + delta * Math.cos(expoDecay * t));
                }
                else {
                    var envelope = Math.exp(-angularFreq * t);
                    position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
                }
                velocity = speedPerSecond(position - prevPosition, timeDelta);
                var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
                if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                    position = to;
                    update(position);
                    springTimer.stop();
                    complete();
                }
                else {
                    update(position);
                }
            });
            return {
                stop: function () { return springTimer.stop(); }
            };
        });
    };
    var index$2 = vectorAction(spring, {
        from: number.test,
        to: number.test,
        stiffness: number.test,
        damping: number.test,
        mass: number.test,
        velocity: number.test
    });

    var DEFAULT_DURATION = 300;
    var flattenTimings = function (instructions) {
        var flatInstructions = [];
        var lastArg = instructions[instructions.length - 1];
        var isStaggered = typeof lastArg === 'number';
        var staggerDelay = isStaggered ? lastArg : 0;
        var segments = isStaggered ? instructions.slice(0, -1) : instructions;
        var numSegments = segments.length;
        var offset = 0;
        segments.forEach(function (item, i) {
            flatInstructions.push(item);
            if (i !== numSegments - 1) {
                var duration = item.duration || DEFAULT_DURATION;
                offset += staggerDelay;
                flatInstructions.push("-" + (duration - offset));
            }
        });
        return flatInstructions;
    };
    var flattenArrayInstructions = function (instructions, instruction) {
        Array.isArray(instruction)
            ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
        return instructions;
    };
    var convertDefToProps = function (props, def, i) {
        var duration = props.duration, easings = props.easings, times = props.times, values = props.values;
        var numValues = values.length;
        var prevTimeTo = times[numValues - 1];
        var timeFrom = def.at === 0 ? 0 : def.at / duration;
        var timeTo = (def.at + def.duration) / duration;
        if (i === 0) {
            values.push(def.from);
            times.push(timeFrom);
        }
        else {
            if (prevTimeTo !== timeFrom) {
                if (def.from !== undefined) {
                    values.push(values[numValues - 1]);
                    times.push(timeFrom);
                    easings.push(linear);
                }
                var from = def.from !== undefined ? def.from : values[numValues - 1];
                values.push(from);
                times.push(timeFrom);
                easings.push(linear);
            }
            else if (def.from !== undefined) {
                values.push(def.from);
                times.push(timeFrom);
                easings.push(linear);
            }
        }
        values.push(def.to);
        times.push(timeTo);
        easings.push(def.ease || easeInOut);
        return props;
    };
    var timeline = function (instructions, _a) {
        var _b = _a === void 0 ? {} : _a, duration = _b.duration, elapsed = _b.elapsed, ease = _b.ease, loop = _b.loop, flip = _b.flip, yoyo = _b.yoyo;
        var playhead = 0;
        var calculatedDuration = 0;
        var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
        var animationDefs = [];
        flatInstructions.forEach(function (instruction) {
            if (typeof instruction === 'string') {
                playhead += parseFloat(instruction);
            }
            else if (typeof instruction === 'number') {
                playhead = instruction;
            }
            else {
                var def = __assign({}, instruction, { at: playhead });
                def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
                animationDefs.push(def);
                playhead += def.duration;
                calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
            }
        });
        var tracks = {};
        var numDefs = animationDefs.length;
        for (var i = 0; i < numDefs; i++) {
            var def = animationDefs[i];
            var track = def.track;
            if (track === undefined) {
                throw new Error('No track defined');
            }
            if (!tracks.hasOwnProperty(track))
                tracks[track] = [];
            tracks[track].push(def);
        }
        var trackKeyframes = {};
        for (var key in tracks) {
            if (tracks.hasOwnProperty(key)) {
                var keyframeProps = tracks[key].reduce(convertDefToProps, {
                    duration: calculatedDuration,
                    easings: [],
                    times: [],
                    values: []
                });
                trackKeyframes[key] = keyframes(__assign({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                    elapsed: elapsed,
                    loop: loop,
                    yoyo: yoyo,
                    flip: flip }));
            }
        }
        return composite(trackKeyframes);
    };

    var listen = function (element, events, options) { return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () { return eventNames.forEach(function (eventName) { return element.removeEventListener(eventName, update, options); }); }
        };
    }); };

    var defaultPointerPos = function () { return ({
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    }); };
    var eventToPoint = function (e, point) {
        if (point === void 0) { point = defaultPointerPos(); }
        point.clientX = point.x = e.clientX;
        point.clientY = point.y = e.clientY;
        point.pageX = e.pageX;
        point.pageY = e.pageY;
        return point;
    };

    var points = [defaultPointerPos()];
    var isTouchDevice = false;
    if (typeof document !== 'undefined') {
        var updatePointsLocation = function (_a) {
            var touches = _a.touches;
            isTouchDevice = true;
            var numTouches = touches.length;
            points.length = 0;
            for (var i = 0; i < numTouches; i++) {
                var thisTouch = touches[i];
                points.push(eventToPoint(thisTouch));
            }
        };
        listen(document, 'touchstart touchmove', true)
            .start(updatePointsLocation);
    }
    var multitouch = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.preventDefault, preventDefault = _c === void 0 ? true : _c, _d = _b.scale, scale = _d === void 0 ? 1.0 : _d, _e = _b.rotate, rotate = _e === void 0 ? 0.0 : _e;
        return action(function (_a) {
            var update = _a.update;
            var output = {
                touches: points,
                scale: scale,
                rotate: rotate
            };
            var initialDistance = 0.0;
            var initialRotation = 0.0;
            var isGesture = points.length > 1;
            if (isGesture) {
                var firstTouch = points[0], secondTouch = points[1];
                initialDistance = distance(firstTouch, secondTouch);
                initialRotation = angle(firstTouch, secondTouch);
            }
            var updatePoint = function () {
                if (isGesture) {
                    var firstTouch = points[0], secondTouch = points[1];
                    var newDistance = distance(firstTouch, secondTouch);
                    var newRotation = angle(firstTouch, secondTouch);
                    output.scale = scale * (newDistance / initialDistance);
                    output.rotate = rotate + (newRotation - initialRotation);
                }
                update(output);
            };
            var onMove = function (e) {
                if (preventDefault || e.touches.length > 1)
                    e.preventDefault();
                onFrameUpdate(updatePoint);
            };
            var updateOnMove = listen(document, 'touchmove', { passive: !preventDefault })
                .start(onMove);
            if (isTouchDevice)
                onFrameUpdate(updatePoint);
            return {
                stop: function () {
                    cancelOnFrameUpdate(updatePoint);
                    updateOnMove.stop();
                }
            };
        });
    };
    var getIsTouchDevice = function () { return isTouchDevice; };

    var point = defaultPointerPos();
    var isMouseDevice = false;
    if (typeof document !== 'undefined') {
        var updatePointLocation = function (e) {
            isMouseDevice = true;
            eventToPoint(e, point);
        };
        listen(document, 'mousedown mousemove', true)
            .start(updatePointLocation);
    }
    var mouse = function (_a) {
        var _b = (_a === void 0 ? {} : _a).preventDefault, preventDefault = _b === void 0 ? true : _b;
        return action(function (_a) {
            var update = _a.update;
            var updatePoint = function () { return update(point); };
            var onMove = function (e) {
                if (preventDefault)
                    e.preventDefault();
                onFrameUpdate(updatePoint);
            };
            var updateOnMove = listen(document, 'mousemove').start(onMove);
            if (isMouseDevice)
                onFrameUpdate(updatePoint);
            return {
                stop: function () {
                    cancelOnFrameUpdate(updatePoint);
                    updateOnMove.stop();
                }
            };
        });
    };

    var getFirstTouch = function (_a) {
        var firstTouch = _a[0];
        return firstTouch;
    };
    var pointer = function (props) {
        if (props === void 0) { props = {}; }
        return getIsTouchDevice()
            ? multitouch(props).pipe(function (_a) {
                var touches = _a.touches;
                return touches;
            }, getFirstTouch)
            : mouse(props);
    };
    var index$3 = (function (_a) {
        if (_a === void 0) { _a = {}; }
        var x = _a.x, y = _a.y, props = __rest(_a, ["x", "y"]);
        if (x !== undefined || y !== undefined) {
            var applyXOffset_1 = applyOffset(x || 0);
            var applyYOffset_1 = applyOffset(y || 0);
            var delta_1 = { x: 0, y: 0 };
            return pointer(props).pipe(function (point) {
                delta_1.x = applyXOffset_1(point.x);
                delta_1.y = applyYOffset_1(point.y);
                return delta_1;
            });
        }
        else {
            return pointer(props);
        }
    });

    var chain = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return action(function (_a) {
            var update = _a.update, complete = _a.complete;
            var i = 0;
            var current;
            var playCurrent = function () {
                current = actions[i].start({
                    complete: function () {
                        i++;
                        (i >= actions.length) ? complete() : playCurrent();
                    },
                    update: update
                });
            };
            playCurrent();
            return {
                stop: function () { return current && current.stop(); }
            };
        });
    };

    var crossfade = function (a, b) { return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(__assign({}, observer, { update: function (_a) {
                var va = _a[0], vb = _a[1];
                observer.update(getValueFromProgress(va, vb, balance));
            } }));
        return {
            setBalance: function (v) { return balance = v; },
            stop: function () { return fadable.stop(); }
        };
    }); };

    var delay = function (timeToDelay) { return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () { return clearTimeout(timeout); }
        };
    }); };

    var merge = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return action(function (observer) {
            var subs = actions.map(function (thisAction) { return thisAction.start(observer); });
            return {
                stop: function () { return subs.forEach(function (sub) { return sub.stop(); }); }
            };
        });
    };

    var schedule = function (scheduler, schedulee) { return action(function (_a) {
        var update = _a.update, complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () { return latest !== undefined && update(latest); },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) { return latest = v; },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    }); };

    var stagger = function (actions, interval) {
        var intervalIsNumber = typeof interval === 'number';
        var actionsWithDelay = actions.map(function (a, i) {
            var timeToDelay = intervalIsNumber ? interval * i : interval(i);
            return chain(delay(timeToDelay), a);
        });
        return parallel$1.apply(void 0, actionsWithDelay);
    };

    var warning = function () { };
    var invariant = function () { };

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
            var setValue = function (unmappedKey, value) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                var currentValue = state[key];
                state[key] = value;
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
                set: function (values, value) {
                    if (typeof values === 'string') {
                        if (value !== undefined) {
                            setValue(values, value);
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
    var styleRule = function (key, value) {
        return "" + SEMI_COLON + key + COLON + value;
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
            var value = state[key];
            var valueType = getValueType(key);
            if (isTransformKey) {
                if ((valueType.default && value !== valueType.default) ||
                    (!valueType.default && value !== 0)) {
                    transformIsDefault = false;
                }
            }
            if (valueType &&
                (typeof value === NUMBER || typeof value === OBJECT) &&
                valueType.transform) {
                value = valueType.transform(value);
            }
            if (isTransformKey) {
                transformString += key + '(' + value + ') ';
                transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
            }
            else if (isTransformOriginProp(key)) {
                state[key] = value;
                hasTransformOrigin = true;
            }
            else {
                propertyString += styleRule(prefixer(key, true), value);
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
                var value = state[key];
                if (isTransformProp(key)) {
                    hasTransform = true;
                }
                else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                    hasDashArray = true;
                    dashArrayStyles[key] = percentToPixels(value, pathLength);
                }
                else if (isPath && key === 'pathOffset') {
                    props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
                }
                else {
                    props[camelToDash(key)] = value;
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
    function index$4 (nodeOrSelector, props) {
        var node = typeof nodeOrSelector === 'string'
            ? document.querySelector(nodeOrSelector)
            : nodeOrSelector;
        return getStyler(node, props);
    }

    var css$1 = function (element, props) {
        warning(false, 'css() is deprecated, use styler instead');
        return index$4(element, props);
    };
    var svg$1 = function (element, props) {
        warning(false, 'svg() is deprecated, use styler instead');
        return index$4(element, props);
    };

    exports.action = action;
    exports.multicast = multicast;
    exports.value = value;
    exports.decay = index;
    exports.keyframes = keyframes;
    exports.everyFrame = frame;
    exports.physics = index$1;
    exports.spring = index$2;
    exports.timeline = timeline;
    exports.tween = tween;
    exports.listen = listen;
    exports.pointer = index$3;
    exports.mouse = mouse;
    exports.multitouch = multitouch;
    exports.chain = chain;
    exports.composite = composite;
    exports.crossfade = crossfade;
    exports.delay = delay;
    exports.merge = merge;
    exports.parallel = parallel$1;
    exports.schedule = schedule;
    exports.stagger = stagger;
    exports.calc = calc;
    exports.easing = easing;
    exports.transform = transformers;
    exports.styler = index$4;
    exports.css = css$1;
    exports.svg = svg$1;
    exports.valueTypes = styleValueTypes_es;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
