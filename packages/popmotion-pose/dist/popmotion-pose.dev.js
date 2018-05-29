(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.pose = {})));
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
    var onFrameStart = frameStart.schedule;
    var onFrameUpdate = frameUpdate.schedule;
    var onFrameRender = frameRender.schedule;
    var onFrameEnd = frameEnd.schedule;
    var cancelOnFrameStart = frameStart.cancel;
    var cancelOnFrameUpdate = frameUpdate.cancel;
    var cancelOnFrameRender = frameRender.cancel;
    var cancelOnFrameEnd = frameEnd.cancel;
    var timeSinceLastFrame = function () { return elapsed; };
    var currentFrameTime = function () { return currentFramestamp; };

    var framesync_es = /*#__PURE__*/Object.freeze({
        currentTime: currentTime,
        onFrameStart: onFrameStart,
        onFrameUpdate: onFrameUpdate,
        onFrameRender: onFrameRender,
        onFrameEnd: onFrameEnd,
        cancelOnFrameStart: cancelOnFrameStart,
        cancelOnFrameUpdate: cancelOnFrameUpdate,
        cancelOnFrameRender: cancelOnFrameRender,
        cancelOnFrameEnd: cancelOnFrameEnd,
        timeSinceLastFrame: timeSinceLastFrame,
        currentFrameTime: currentFrameTime
    });

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

    var HEY_LISTEN = 'Hey, listen! ';
    var invariant = function () { };
    {
        invariant = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN.toUpperCase() + message);
            }
        };
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
    function index (nodeOrSelector, props) {
        var node = typeof nodeOrSelector === 'string'
            ? document.querySelector(nodeOrSelector)
            : nodeOrSelector;
        return getStyler(node, props);
    }

    var HEY_LISTEN$1 = 'Hey, listen! ';
    var invariant$1 = function () { };
    {
        invariant$1 = function (check, message) {
            if (!check) {
                throw new Error(HEY_LISTEN$1.toUpperCase() + message);
            }
        };
    }

    var isNum = function (v) {
        return typeof v === 'number';
    };
    var isPoint = function (point) {
        return point.x !== undefined && point.y !== undefined;
    };
    var isPoint3D = function (point) {
        return point.z !== undefined;
    };
    var toDecimal = function (num, precision) {
        if (precision === void 0) {
            precision = 2;
        }
        precision = Math.pow(10, precision);
        return Math.round(num * precision) / precision;
    };
    var ZERO_POINT = {
        x: 0,
        y: 0,
        z: 0
    };
    var distance1D = function (a, b) {
        return Math.abs(a - b);
    };
    var angle = function (a, b) {
        if (b === void 0) {
            b = ZERO_POINT;
        }
        return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
    };
    var degreesToRadians = function (degrees$$1) {
        return degrees$$1 * Math.PI / 180;
    };
    var dilate = function (a, b, dilation) {
        return a + (b - a) * dilation;
    };
    var distance = function (a, b) {
        if (b === void 0) {
            b = ZERO_POINT;
        }
        if (isNum(a) && isNum(b)) {
            return distance1D(a, b);
        } else if (isPoint(a) && isPoint(b)) {
            var xDelta = distance1D(a.x, b.x);
            var yDelta = distance1D(a.y, b.y);
            var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
            return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
        }
        return 0;
    };
    var getProgressFromValue = function (from, to, value) {
        var toFromDifference = to - from;
        return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
    };
    var getValueFromProgress = function (from, to, progress) {
        return -progress * from + progress * to + from;
    };
    var pointFromAngleAndDistance = function (origin, angle, distance) {
        angle = degreesToRadians(angle);
        return {
            x: distance * Math.cos(angle) + origin.x,
            y: distance * Math.sin(angle) + origin.y
        };
    };
    var radiansToDegrees = function (radians) {
        return radians * 180 / Math.PI;
    };
    var smooth = function (newValue, oldValue, duration, smoothing) {
        if (smoothing === void 0) {
            smoothing = 0;
        }
        return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
    };
    var speedPerFrame = function (xps, frameDuration) {
        return isNum(xps) ? xps / (1000 / frameDuration) : 0;
    };
    var speedPerSecond = function (velocity, frameDuration) {
        return frameDuration ? velocity * (1000 / frameDuration) : 0;
    };
    var stepProgress = function (steps, progress) {
        var segment = 1 / (steps - 1);
        var target = 1 - 1 / steps;
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

    var noop = function (v) {
        return v;
    };
    var appendUnit = function (unit) {
        return function (v) {
            return "" + v + unit;
        };
    };
    var applyOffset = function (from, to) {
        var hasReceivedFrom = true;
        if (to === undefined) {
            to = from;
            hasReceivedFrom = false;
        }
        var getOffset = function (v) {
            return v - from;
        };
        var applyOffsetTo = function (v) {
            return v + to;
        };
        return function (v) {
            if (hasReceivedFrom) {
                return applyOffsetTo(getOffset(v));
            } else {
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
        var fromColor = typeof from === 'string' ? color.parse(from) : from;
        var toColor = typeof to === 'string' ? color.parse(to) : to;
        var blended = __assign({}, fromColor);
        var blendFunc = from.hue !== undefined || typeof from === 'string' && hsla.test(from) ? getValueFromProgress : blend;
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
    var clamp$1 = function (min, max) {
        return function (v) {
            return Math.min(Math.max(v, min), max);
        };
    };
    var combineFunctions = function (a, b) {
        return function (v) {
            return b(a(v));
        };
    };
    var pipe = function () {
        var transformers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transformers[_i] = arguments[_i];
        }
        return transformers.reduce(combineFunctions);
    };
    var conditional = function (check, apply) {
        return function (v) {
            return check(v) ? apply(v) : v;
        };
    };
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
            var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
            return getValueFromProgress(output[i - 1], output[i], easedProgress);
        };
    };
    var fastInterpolate = function (minA, maxA, minB, maxB) {
        return function (v) {
            return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
        };
    };
    var interpolate = function (input, output, rangeEasing) {
        var rangeLength = input.length;
        return rangeLength !== 2 ? slowInterpolate(input, output, rangeLength, rangeEasing) : fastInterpolate(input[0], input[1], output[0], output[1]);
    };
    var generateStaticSpring = function (alterDisplacement) {
        if (alterDisplacement === void 0) {
            alterDisplacement = noop;
        }
        return function (constant, origin) {
            return function (v) {
                var displacement = origin - v;
                var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
                return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
            };
        };
    };
    var linearSpring = /*#__PURE__*/generateStaticSpring();
    var nonlinearSpring = /*#__PURE__*/generateStaticSpring(Math.sqrt);
    var wrap = function (min, max) {
        return function (v) {
            var rangeSize = max - min;
            return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
        };
    };
    var smooth$1 = function (strength) {
        if (strength === void 0) {
            strength = 50;
        }
        var previousValue = 0;
        var lastUpdated = 0;
        return function (v) {
            var currentFramestamp = currentFrameTime();
            var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
            var newValue = timeDelta ? smooth(v, previousValue, timeDelta, strength) : previousValue;
            lastUpdated = currentFramestamp;
            previousValue = newValue;
            return newValue;
        };
    };
    var snap = function (points) {
        if (typeof points === 'number') {
            return function (v) {
                return Math.round(v / points) * points;
            };
        } else {
            var i_1 = 0;
            var numPoints_1 = points.length;
            return function (v) {
                var lastDistance = Math.abs(points[0] - v);
                for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                    var point = points[i_1];
                    var distance$$1 = Math.abs(point - v);
                    if (distance$$1 === 0) return point;
                    if (distance$$1 > lastDistance) return points[i_1 - 1];
                    if (i_1 === numPoints_1 - 1) return point;
                    lastDistance = distance$$1;
                }
            };
        }
    };
    var steps = function (st, min, max) {
        if (min === void 0) {
            min = 0;
        }
        if (max === void 0) {
            max = 1;
        }
        return function (v) {
            var progress = getProgressFromValue(min, max, v);
            return getValueFromProgress(min, max, stepProgress(st, progress));
        };
    };
    var transformMap = function (childTransformers) {
        return function (v) {
            var output = __assign({}, v);
            for (var key in childTransformers) {
                if (childTransformers.hasOwnProperty(key)) {
                    var childTransformer = childTransformers[key];
                    output[key] = childTransformer(v[key]);
                }
            }
            return output;
        };
    };

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

    var Chainable = /*#__PURE__*/function () {
        function Chainable(props) {
            if (props === void 0) {
                props = {};
            }
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
            return this.applyMiddleware(function (update) {
                return function (v) {
                    return update(pipedUpdate(v));
                };
            });
        };
        Chainable.prototype.while = function (predicate) {
            return this.applyMiddleware(function (update, complete) {
                return function (v) {
                    return predicate(v) ? update(v) : complete();
                };
            });
        };
        Chainable.prototype.filter = function (predicate) {
            return this.applyMiddleware(function (update, complete) {
                return function (v) {
                    return predicate(v) && update(v);
                };
            });
        };
        return Chainable;
    }();

    var Observer = /*#__PURE__*/function () {
        function Observer(_a, observer) {
            var middleware = _a.middleware,
                onComplete = _a.onComplete;
            var _this = this;
            this.isActive = true;
            this.update = function (v) {
                if (_this.observer.update) _this.updateObserver(v);
            };
            this.complete = function () {
                if (_this.observer.complete && _this.isActive) _this.observer.complete();
                if (_this.onComplete) _this.onComplete();
                _this.isActive = false;
            };
            this.error = function (err) {
                if (_this.observer.error && _this.isActive) _this.observer.error(err);
                _this.isActive = false;
            };
            this.observer = observer;
            this.updateObserver = function (v) {
                return observer.update(v);
            };
            this.onComplete = onComplete;
            if (observer.update && middleware && middleware.length) {
                middleware.forEach(function (m) {
                    return _this.updateObserver = m(_this.updateObserver, _this.complete);
                });
            }
        }
        return Observer;
    }();
    var createObserver = function (observerCandidate, _a, onComplete) {
        var middleware = _a.middleware;
        if (typeof observerCandidate === 'function') {
            return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
        } else {
            return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
        }
    };

    var Action = /*#__PURE__*/function (_super) {
        __extends(Action, _super);
        function Action() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Action.prototype.create = function (props) {
            return new Action(props);
        };
        Action.prototype.start = function (observerCandidate) {
            if (observerCandidate === void 0) {
                observerCandidate = {};
            }
            var isComplete = false;
            var subscription = {
                stop: function () {
                    return undefined;
                }
            };
            var _a = this.props,
                init = _a.init,
                observerProps = __rest(_a, ["init"]);
            var observer = createObserver(observerCandidate, observerProps, function () {
                isComplete = true;
                subscription.stop();
            });
            var api = init(observer);
            subscription = api ? __assign({}, subscription, api) : subscription;
            if (observerCandidate.registerParent) {
                observerCandidate.registerParent(subscription);
            }
            if (isComplete) subscription.stop();
            return subscription;
        };
        return Action;
    }(Chainable);
    var action = function (init) {
        return new Action({ init: init });
    };

    var BaseMulticast = /*#__PURE__*/function (_super) {
        __extends(BaseMulticast, _super);
        function BaseMulticast() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.subscribers = [];
            return _this;
        }
        BaseMulticast.prototype.complete = function () {
            this.subscribers.forEach(function (subscriber) {
                return subscriber.complete();
            });
        };
        BaseMulticast.prototype.error = function (err) {
            this.subscribers.forEach(function (subscriber) {
                return subscriber.error(err);
            });
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
                    var index$$1 = _this.subscribers.indexOf(observer);
                    if (index$$1 !== -1) _this.subscribers.splice(index$$1, 1);
                }
            };
            return subscription;
        };
        BaseMulticast.prototype.stop = function () {
            if (this.parent) this.parent.stop();
        };
        BaseMulticast.prototype.registerParent = function (subscription) {
            this.stop();
            this.parent = subscription;
        };
        return BaseMulticast;
    }(Chainable);

    var Multicast = /*#__PURE__*/function (_super) {
        __extends(Multicast, _super);
        function Multicast() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Multicast.prototype.create = function (props) {
            return new Multicast(props);
        };
        return Multicast;
    }(BaseMulticast);

    var isValueList = function (v) {
        return Array.isArray(v);
    };
    var isSingleValue = function (v) {
        var typeOfV = typeof v;
        return typeOfV === 'string' || typeOfV === 'number';
    };
    var ValueReaction = /*#__PURE__*/function (_super) {
        __extends(ValueReaction, _super);
        function ValueReaction(props) {
            var _this = _super.call(this, props) || this;
            _this.scheduleVelocityCheck = function () {
                return onFrameEnd(_this.velocityCheck);
            };
            _this.velocityCheck = function () {
                if (currentFrameTime() !== _this.lastUpdated) {
                    _this.prev = _this.current;
                }
            };
            _this.prev = _this.current = props.value || 0;
            if (isSingleValue(_this.current)) {
                _this.updateCurrent = function (v) {
                    return _this.current = v;
                };
                _this.getVelocityOfCurrent = function () {
                    return _this.getSingleVelocity(_this.current, _this.prev);
                };
            } else if (isValueList(_this.current)) {
                _this.updateCurrent = function (v) {
                    return _this.current = v.slice();
                };
                _this.getVelocityOfCurrent = function () {
                    return _this.getListVelocity();
                };
            } else {
                _this.updateCurrent = function (v) {
                    _this.current = {};
                    for (var key in v) {
                        if (v.hasOwnProperty(key)) {
                            _this.current[key] = v[key];
                        }
                    }
                };
                _this.getVelocityOfCurrent = function () {
                    return _this.getMapVelocity();
                };
            }
            if (props.initialSubscription) _this.subscribe(props.initialSubscription);
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
            return typeof current === 'number' && typeof prev === 'number' ? speedPerSecond(current - prev, this.timeDelta) : speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
        };
        ValueReaction.prototype.getListVelocity = function () {
            var _this = this;
            return this.current.map(function (c, i) {
                return _this.getSingleVelocity(c, _this.prev[i]);
            });
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
    }(BaseMulticast);
    var value = function (value, initialSubscription) {
        return new ValueReaction({ value: value, initialSubscription: initialSubscription });
    };

    var multi = function (_a) {
        var getCount = _a.getCount,
            getFirst = _a.getFirst,
            getOutput = _a.getOutput,
            mapApi = _a.mapApi,
            setProp = _a.setProp,
            startActions = _a.startActions;
        return function (actions) {
            return action(function (_a) {
                var update = _a.update,
                    complete = _a.complete,
                    error = _a.error;
                var numActions = getCount(actions);
                var output = getOutput();
                var updateOutput = function () {
                    return update(output);
                };
                var numCompletedActions = 0;
                var subs = startActions(actions, function (a, name) {
                    var hasCompleted = false;
                    return a.start({
                        complete: function () {
                            if (!hasCompleted) {
                                hasCompleted = true;
                                numCompletedActions++;
                                if (numCompletedActions === numActions) onFrameUpdate(complete);
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

    var composite = /*#__PURE__*/multi({
        getOutput: function () {
            return {};
        },
        getCount: function (subs) {
            return Object.keys(subs).length;
        },
        getFirst: function (subs) {
            return subs[Object.keys(subs)[0]];
        },
        mapApi: function (subs, methodName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return Object.keys(subs).reduce(function (output, propKey) {
                    if (subs[propKey][methodName]) {
                        args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                    }
                    return output;
                    var _a;
                }, {});
            };
        },
        setProp: function (output, name, v) {
            return output[name] = v;
        },
        startActions: function (actions, starter) {
            return Object.keys(actions).reduce(function (subs, key) {
                subs[key] = starter(actions[key], key);
                return subs;
            }, {});
        }
    });

    var parallel = /*#__PURE__*/multi({
        getOutput: function () {
            return [];
        },
        getCount: function (subs) {
            return subs.length;
        },
        getFirst: function (subs) {
            return subs[0];
        },
        mapApi: function (subs, methodName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return subs.map(function (sub, i) {
                    if (sub[methodName]) {
                        return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                    }
                });
            };
        },
        setProp: function (output, name, v) {
            return output[name] = v;
        },
        startActions: function (actions, starter) {
            return actions.map(function (action, i) {
                return starter(action, i);
            });
        }
    });
    var parallel$1 = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return parallel(actions);
    };

    var isColor = color.test;
    var convertToColorAction = function (init, props) {
        return typeof props.from === 'string' && isColor(props.from) && typeof props.to === 'string' && isColor(props.to) ? init(__assign({}, props, { from: 0, to: 1 })).pipe(blendColor(props.from, props.to), color.transform) : init(props);
    };
    var createVectorTests = function (typeTests) {
        var testNames = Object.keys(typeTests);
        return {
            getVectorKeys: function (props) {
                return testNames.reduce(function (vectorKeys, key) {
                    if (props[key] !== undefined && !typeTests[key](props[key])) {
                        vectorKeys.push(key);
                    }
                    return vectorKeys;
                }, []);
            },
            test: function (props) {
                return props && testNames.reduce(function (isVector, key) {
                    return isVector || props[key] !== undefined && !typeTests[key](props[key]);
                }, false);
            }
        };
    };
    var reduceArrayValue = function (i) {
        return function (props, key) {
            props[key] = props[key][i];
            return props;
        };
    };
    var createArrayVector = function (init, props, vectorKeys) {
        var firstVectorKey = vectorKeys[0];
        var actionList = props[firstVectorKey].map(function (v, i) {
            return convertToColorAction(init, vectorKeys.reduce(reduceArrayValue(i), __assign({}, props)));
        });
        return parallel$1.apply(void 0, actionList);
    };
    var reduceObjectValue = function (key) {
        return function (props, propKey) {
            props[propKey] = props[propKey][key];
            return props;
        };
    };
    var createObjectVector = function (init, props, vectorKeys) {
        var firstVectorKey = vectorKeys[0];
        var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
            map[key] = convertToColorAction(init, vectorKeys.reduce(reduceObjectValue(key), __assign({}, props)));
            return map;
        }, {});
        return composite(actionMap);
    };
    var createColorVector = function (init, props) {
        return convertToColorAction(init, props);
    };
    var vectorAction = function (init, typeTests) {
        var _a = createVectorTests(typeTests),
            test = _a.test,
            getVectorKeys = _a.getVectorKeys;
        return function (props) {
            var isVector = test(props);
            if (!isVector) return init(props);
            var vectorKeys = getVectorKeys(props);
            var testKey = vectorKeys[0];
            var testProp = props[testKey];
            if (Array.isArray(testProp)) {
                return createArrayVector(init, props, vectorKeys);
            } else if (typeof testProp === 'string' && isColor(testProp)) {
                return createColorVector(init, props, vectorKeys);
            } else {
                return createObjectVector(init, props, vectorKeys);
            }
        };
    };

    var frame = function () {
        return action(function (_a) {
            var update = _a.update;
            var isActive = true;
            var startTime = currentTime();
            var nextFrame = function () {
                if (!isActive) return;
                update(Math.max(currentFrameTime() - startTime, 0));
                onFrameUpdate(nextFrame);
            };
            onFrameUpdate(nextFrame);
            return {
                stop: function () {
                    return isActive = false;
                }
            };
        });
    };

    var decay = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var complete = _a.complete,
                update = _a.update;
            var _b = props.velocity,
                velocity = _b === void 0 ? 0 : _b,
                _c = props.from,
                from = _c === void 0 ? 0 : _c,
                _d = props.power,
                power = _d === void 0 ? 0.8 : _d,
                _e = props.timeConstant,
                timeConstant = _e === void 0 ? 350 : _e,
                _f = props.restDelta,
                restDelta = _f === void 0 ? 0.5 : _f,
                modifyTarget = props.modifyTarget;
            var elapsed = 0;
            var amplitude = power * velocity;
            var idealTarget = Math.round(from + amplitude);
            var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
            var timer = frame().start(function () {
                elapsed += timeSinceLastFrame();
                var delta = -amplitude * Math.exp(-elapsed / timeConstant);
                var isMoving = delta > restDelta || delta < -restDelta;
                var current = isMoving ? target + delta : target;
                update(current);
                if (!isMoving) {
                    timer.stop();
                    complete();
                }
            });
            return {
                stop: function () {
                    return timer.stop();
                }
            };
        });
    };
    var index$1 = /*#__PURE__*/vectorAction(decay, {
        from: number.test,
        modifyTarget: function (func) {
            return typeof func === 'function';
        },
        velocity: number.test
    });

    var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
    var createReversedEasing = function (easing) {
        return function (p) {
            return 1 - easing(1 - p);
        };
    };
    var createMirroredEasing = function (easing) {
        return function (p) {
            return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
        };
    };
    var linear = function (p) {
        return p;
    };
    var createExpoIn = function (power) {
        return function (p) {
            return Math.pow(p, power);
        };
    };
    var easeIn = /*#__PURE__*/createExpoIn(2);
    var easeOut = /*#__PURE__*/createReversedEasing(easeIn);
    var easeInOut = /*#__PURE__*/createMirroredEasing(easeIn);
    var circIn = function (p) {
        return 1 - Math.sin(Math.acos(p));
    };
    var circOut = /*#__PURE__*/createReversedEasing(circIn);
    var circInOut = /*#__PURE__*/createMirroredEasing(circOut);
    var createBackIn = function (power) {
        return function (p) {
            return p * p * ((power + 1) * p - power);
        };
    };
    var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
    var backOut = /*#__PURE__*/createReversedEasing(backIn);
    var backInOut = /*#__PURE__*/createMirroredEasing(backIn);
    var createAnticipateEasing = function (power) {
        var backEasing = createBackIn(power);
        return function (p) {
            return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
        };
    };
    var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
    var NEWTON_ITERATIONS = 8;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var K_SPLINE_TABLE_SIZE = 11;
    var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
    var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
    var a = function (a1, a2) {
        return 1.0 - 3.0 * a2 + 3.0 * a1;
    };
    var b = function (a1, a2) {
        return 3.0 * a2 - 6.0 * a1;
    };
    var c = function (a1) {
        return 3.0 * a1;
    };
    var getSlope = function (t, a1, a2) {
        return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
    };
    var calcBezier = function (t, a1, a2) {
        return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    };
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
                } else {
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
            } else if (initialSlope === 0.0) {
                return guessForT;
            } else {
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
            } else if (aX === 0) {
                returnValue = 0;
            } else if (aX === 1) {
                returnValue = 1;
            } else {
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
        var _b = _a.from,
            from = _b === void 0 ? 0 : _b,
            _c = _a.to,
            to = _c === void 0 ? 1 : _c,
            _d = _a.ease,
            ease = _d === void 0 ? linear : _d;
        return action(function (_a) {
            var update = _a.update;
            return {
                seek: function (progress) {
                    return update(progress);
                }
            };
        }).pipe(ease, function (v) {
            return getValueFromProgress(from, to, v);
        });
    };
    var scrubber$1 = /*#__PURE__*/vectorAction(scrubber, {
        ease: function (func) {
            return typeof func === 'function';
        },
        from: number.test,
        to: number.test
    });

    var clampProgress = /*#__PURE__*/clamp$1(0, 1);
    var tween = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            var _b = props.duration,
                duration = _b === void 0 ? 300 : _b,
                _c = props.ease,
                ease = _c === void 0 ? easeOut : _c,
                _d = props.flip,
                flip = _d === void 0 ? 0 : _d,
                _e = props.loop,
                loop = _e === void 0 ? 0 : _e,
                _f = props.yoyo,
                yoyo = _f === void 0 ? 0 : _f;
            var _g = props.from,
                from = _g === void 0 ? 0 : _g,
                _h = props.to,
                to = _h === void 0 ? 1 : _h,
                _j = props.elapsed,
                elapsed = _j === void 0 ? 0 : _j,
                _k = props.playDirection,
                playDirection = _k === void 0 ? 1 : _k,
                _l = props.flipCount,
                flipCount = _l === void 0 ? 0 : _l,
                _m = props.yoyoCount,
                yoyoCount = _m === void 0 ? 0 : _m,
                _o = props.loopCount,
                loopCount = _o === void 0 ? 0 : _o;
            var playhead = scrubber$1({ from: from, to: to, ease: ease }).start(update);
            var progress = 0;
            var tweenTimer;
            var isActive = false;
            var reverseTween = function () {
                return playDirection *= -1;
            };
            var isTweenComplete = function () {
                var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
                if (!isComplete) return false;
                if (isComplete && !loop && !flip && !yoyo) return true;
                var isStepTaken = false;
                if (loop && loopCount < loop) {
                    elapsed = 0;
                    loopCount++;
                    isStepTaken = true;
                } else if (flip && flipCount < flip) {
                    elapsed = duration - elapsed;
                    _a = [to, from], from = _a[0], to = _a[1];
                    playhead = scrubber$1({ from: from, to: to, ease: ease }).start(update);
                    flipCount++;
                    isStepTaken = true;
                } else if (yoyo && yoyoCount < yoyo) {
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
                if (tweenTimer) tweenTimer.stop();
            };
            startTimer();
            return {
                isActive: function () {
                    return isActive;
                },
                getElapsed: function () {
                    return clamp$1(0, duration)(elapsed);
                },
                getProgress: function () {
                    return progress;
                },
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

    var clampProgress$1 = /*#__PURE__*/clamp$1(0, 1);
    var defaultEasings = function (values, easing) {
        return values.map(function () {
            return easing || easeOut;
        }).splice(0, values.length - 1);
    };
    var defaultTimings = function (values) {
        var numValues = values.length;
        return values.map(function (value, i) {
            return i !== 0 ? i / (numValues - 1) : 0;
        });
    };
    var interpolateScrubbers = function (input, scrubbers, update) {
        var rangeLength = input.length;
        var finalInputIndex = rangeLength - 1;
        var finalScrubberIndex = finalInputIndex - 1;
        var subs = scrubbers.map(function (scrub) {
            return scrub.start(update);
        });
        return function (v) {
            if (v <= input[0]) {
                subs[0].seek(0);
            }
            if (v >= input[finalInputIndex]) {
                subs[finalScrubberIndex].seek(1);
            }
            var i = 1;
            for (; i < rangeLength; i++) {
                if (input[i] > v || i === finalInputIndex) break;
            }
            var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
            subs[i - 1].seek(clampProgress$1(progressInRange));
        };
    };
    var keyframes = function (_a) {
        var easings = _a.easings,
            _b = _a.ease,
            ease = _b === void 0 ? linear : _b,
            times = _a.times,
            values = _a.values,
            tweenProps = __rest(_a, ["easings", "ease", "times", "values"]);
        easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
        times = times || defaultTimings(values);
        var scrubbers = easings.map(function (easing, i) {
            return scrubber$1({
                from: values[i],
                to: values[i + 1],
                ease: easing
            });
        });
        return tween(__assign({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
            return interpolateScrubbers(times, scrubbers, update);
        });
    };

    var physics = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var complete = _a.complete,
                update = _a.update;
            var _b = props.acceleration,
                acceleration = _b === void 0 ? 0 : _b,
                _c = props.friction,
                friction = _c === void 0 ? 0 : _c,
                _d = props.velocity,
                velocity = _d === void 0 ? 0 : _d,
                springStrength = props.springStrength,
                to = props.to;
            var _e = props.restSpeed,
                restSpeed = _e === void 0 ? 0.001 : _e,
                _f = props.from,
                from = _f === void 0 ? 0 : _f;
            var current = from;
            var timer = frame().start(function () {
                var elapsed = Math.max(timeSinceLastFrame(), 16);
                if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
                if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
                if (springStrength !== undefined && to !== undefined) {
                    var distanceToTarget = to - current;
                    velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
                }
                current += speedPerFrame(velocity, elapsed);
                update(current);
                var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
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
                stop: function () {
                    return timer.stop();
                }
            };
        });
    };
    var index$1$1 = /*#__PURE__*/vectorAction(physics, {
        acceleration: number.test,
        friction: number.test,
        velocity: number.test,
        from: number.test,
        to: number.test,
        springStrength: number.test
    });

    var spring = function (props) {
        if (props === void 0) {
            props = {};
        }
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            var _b = props.velocity,
                velocity = _b === void 0 ? 0.0 : _b;
            var _c = props.from,
                from = _c === void 0 ? 0.0 : _c,
                _d = props.to,
                to = _d === void 0 ? 0.0 : _d,
                _e = props.stiffness,
                stiffness = _e === void 0 ? 100 : _e,
                _f = props.damping,
                damping = _f === void 0 ? 10 : _f,
                _g = props.mass,
                mass = _g === void 0 ? 1.0 : _g,
                _h = props.restSpeed,
                restSpeed = _h === void 0 ? 0.01 : _h,
                _j = props.restDelta,
                restDelta = _j === void 0 ? 0.01 : _j;
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
                    position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
                } else {
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
                } else {
                    update(position);
                }
            });
            return {
                stop: function () {
                    return springTimer.stop();
                }
            };
        });
    };
    var index$2 = /*#__PURE__*/vectorAction(spring, {
        from: number.test,
        to: number.test,
        stiffness: number.test,
        damping: number.test,
        mass: number.test,
        velocity: number.test
    });

    var listen = function (element, events, options) {
        return action(function (_a) {
            var update = _a.update;
            var eventNames = events.split(' ').map(function (eventName) {
                element.addEventListener(eventName, update, options);
                return eventName;
            });
            return {
                stop: function () {
                    return eventNames.forEach(function (eventName) {
                        return element.removeEventListener(eventName, update, options);
                    });
                }
            };
        });
    };

    var defaultPointerPos = function () {
        return {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            x: 0,
            y: 0
        };
    };
    var eventToPoint = function (e, point) {
        if (point === void 0) {
            point = defaultPointerPos();
        }
        point.clientX = point.x = e.clientX;
        point.clientY = point.y = e.clientY;
        point.pageX = e.pageX;
        point.pageY = e.pageY;
        return point;
    };

    var points = [/*#__PURE__*/defaultPointerPos()];
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
        listen(document, 'touchstart touchmove', true).start(updatePointsLocation);
    }
    var multitouch = function (_a) {
        var _b = _a === void 0 ? {} : _a,
            _c = _b.preventDefault,
            preventDefault = _c === void 0 ? true : _c,
            _d = _b.scale,
            scale$$1 = _d === void 0 ? 1.0 : _d,
            _e = _b.rotate,
            rotate = _e === void 0 ? 0.0 : _e;
        return action(function (_a) {
            var update = _a.update;
            var output = {
                touches: points,
                scale: scale$$1,
                rotate: rotate
            };
            var initialDistance = 0.0;
            var initialRotation = 0.0;
            var isGesture = points.length > 1;
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                initialDistance = distance(firstTouch, secondTouch);
                initialRotation = angle(firstTouch, secondTouch);
            }
            var updatePoint = function () {
                if (isGesture) {
                    var firstTouch = points[0],
                        secondTouch = points[1];
                    var newDistance = distance(firstTouch, secondTouch);
                    var newRotation = angle(firstTouch, secondTouch);
                    output.scale = scale$$1 * (newDistance / initialDistance);
                    output.rotate = rotate + (newRotation - initialRotation);
                }
                update(output);
            };
            var onMove = function (e) {
                if (preventDefault || e.touches.length > 1) e.preventDefault();
                onFrameUpdate(updatePoint);
            };
            var updateOnMove = listen(document, 'touchmove', { passive: !preventDefault }).start(onMove);
            if (isTouchDevice) onFrameUpdate(updatePoint);
            return {
                stop: function () {
                    cancelOnFrameUpdate(updatePoint);
                    updateOnMove.stop();
                }
            };
        });
    };
    var getIsTouchDevice = function () {
        return isTouchDevice;
    };

    var point = /*#__PURE__*/defaultPointerPos();
    var isMouseDevice = false;
    if (typeof document !== 'undefined') {
        var updatePointLocation = function (e) {
            isMouseDevice = true;
            eventToPoint(e, point);
        };
        listen(document, 'mousedown mousemove', true).start(updatePointLocation);
    }
    var mouse = function (_a) {
        var _b = (_a === void 0 ? {} : _a).preventDefault,
            preventDefault = _b === void 0 ? true : _b;
        return action(function (_a) {
            var update = _a.update;
            var updatePoint = function () {
                return update(point);
            };
            var onMove = function (e) {
                if (preventDefault) e.preventDefault();
                onFrameUpdate(updatePoint);
            };
            var updateOnMove = listen(document, 'mousemove').start(onMove);
            if (isMouseDevice) onFrameUpdate(updatePoint);
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
        if (props === void 0) {
            props = {};
        }
        return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
            var touches = _a.touches;
            return touches;
        }, getFirstTouch) : mouse(props);
    };
    var index$3 = function (_a) {
        if (_a === void 0) {
            _a = {};
        }
        var x = _a.x,
            y = _a.y,
            props = __rest(_a, ["x", "y"]);
        if (x !== undefined || y !== undefined) {
            var applyXOffset_1 = applyOffset(x || 0);
            var applyYOffset_1 = applyOffset(y || 0);
            var delta_1 = { x: 0, y: 0 };
            return pointer(props).pipe(function (point) {
                delta_1.x = applyXOffset_1(point.x);
                delta_1.y = applyYOffset_1(point.y);
                return delta_1;
            });
        } else {
            return pointer(props);
        }
    };

    var chain = function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete;
            var i = 0;
            var current;
            var playCurrent = function () {
                current = actions[i].start({
                    complete: function () {
                        i++;
                        i >= actions.length ? complete() : playCurrent();
                    },
                    update: update
                });
            };
            playCurrent();
            return {
                stop: function () {
                    return current && current.stop();
                }
            };
        });
    };

    var delay = function (timeToDelay) {
        return action(function (_a) {
            var complete = _a.complete;
            var timeout = setTimeout(complete, timeToDelay);
            return {
                stop: function () {
                    return clearTimeout(timeout);
                }
            };
        });
    };

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
        values.forEach(function (value, key) {
            return allValues[key] = selectValue(value);
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
    var resolveTransition = function (transition, key, value, props, convertTransitionDefinition, getInstantTransition) {
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
        return resolvedTransition === false ? getInstantTransition(value, props) : convertTransitionDefinition(value, resolvedTransition, props);
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
                        var value = values.get(key);
                        var transitionProps = __assign({}, baseTransitionProps, { key: key,
                            value: value });
                        var target = resolveTarget(value, resolveProp(nextPose[key], transitionProps));
                        if (activeActions.has(key)) stopAction(activeActions.get(key));
                        var resolveTransitionProps = __assign({ to: target }, transitionProps, getTransitionProps(value, target, transitionProps));
                        var transition = resolveTransition(getTransition, key, value, resolveTransitionProps, convertTransitionDefinition, getInstantTransition);
                        var poseDelay = resolveProp(nextPose.delay, transitionProps);
                        if (delay || poseDelay) {
                            transition = addActionDelay(delay || poseDelay, transition);
                        }
                        activeActions.set(key, startAction(value, transition, complete));
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
            var value;
            if (userSetValues && userSetValues[key] !== undefined) {
                value = convertValue(userSetValues[key], key, props);
            } else {
                var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource);
                value = createValue(initValue, key, props);
            }
            values.set(key, value);
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
            invariant$1(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
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

    var createTransitionMap$1 = function (key) { return function (map) { return function (props) {
        var switchKey = props[key];
        var transition = map[switchKey] || map.default;
        return transition ? transition(props) : false;
    }; }; };
    var eachValue$1 = createTransitionMap$1('key');

    var BoundingBoxDimension;
    (function (BoundingBoxDimension) {
        BoundingBoxDimension["width"] = "width";
        BoundingBoxDimension["height"] = "height";
        BoundingBoxDimension["left"] = "left";
        BoundingBoxDimension["right"] = "right";
        BoundingBoxDimension["top"] = "top";
        BoundingBoxDimension["bottom"] = "bottom";
    })(BoundingBoxDimension || (BoundingBoxDimension = {}));

    var linear$1 = easing.linear;
    var interpolate$1 = transformers.interpolate;
    var singleAxisPointer = function (axis) { return function (from) {
        return index$3((_a = {}, _a[axis] = from, _a)).pipe(function (v) { return v[axis]; });
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
        if (type === percent) {
            transformQueue.push(interpolate$1([0, dimensions.get(measurement)], [0, 100]));
        }
        return transformQueue.length
            ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
    }; };
    var just = function (from) {
        return action(function (_a) {
            var update = _a.update, complete = _a.complete;
            update(from);
            complete();
        });
    };
    var underDampedSpring = function (_a) {
        var from = _a.from, velocity = _a.velocity, to = _a.to;
        return index$2({
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
        return index$2({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
    };
    var linearTween = function (_a) {
        var from = _a.from, to = _a.to;
        return tween({ from: from, to: to, ease: linear$1 });
    };
    var intelligentTransition = eachValue$1({
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
    var dragAction = eachValue$1({
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

    var valueTypeTests = [number, degrees, percent, px];
    var testValueType = function (v) { return function (type) { return type.test(v); }; };
    var createPassiveValue = function (init, parent, transform) {
        var raw = value(init).pipe(transform);
        parent.raw.subscribe(raw);
        return { raw: raw };
    };
    var createValue = function (init) {
        var type = valueTypeTests.find(testValueType(init));
        var raw = value(type === number ? type.parse(init) : init);
        return { raw: raw, type: type };
    };
    var addActionDelay = function (delay$$1, transition) {
        if (delay$$1 === void 0) { delay$$1 = 0; }
        return chain(delay(delay$$1), transition);
    };
    var animationLookup = new Map([
        ['tween', tween],
        ['spring', index$2],
        ['decay', index$1],
        ['keyframes', keyframes],
        ['physics', index$1$1]
    ]);
    var easeIn$1 = easing.easeIn, easeOut$1 = easing.easeOut, easeInOut$1 = easing.easeInOut, circIn$1 = easing.circIn, circOut$1 = easing.circOut, circInOut$1 = easing.circInOut, backIn$1 = easing.backIn, backOut$1 = easing.backOut, backInOut$1 = easing.backInOut, anticipate$1 = easing.anticipate;
    var easingLookup = new Map([
        ['easeIn', easeIn$1],
        ['easeOut', easeOut$1],
        ['easeInOut', easeInOut$1],
        ['circIn', circIn$1],
        ['circOut', circOut$1],
        ['circInOut', circInOut$1],
        ['backIn', backIn$1],
        ['backOut', backOut$1],
        ['backInOut', backInOut$1],
        ['anticipate', anticipate$1]
    ]);
    var getAction = function (v, _a, _b) {
        var from = _b.from, to = _b.to, velocity = _b.velocity;
        var _c = _a.type, type = _c === void 0 ? 'tween' : _c, ease = _a.ease, def = __rest(_a, ["type", "ease"]);
        invariant$1(animationLookup.has(type), "Invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
        if (type === 'tween') {
            var typeOfEase = typeof ease;
            if (typeOfEase !== 'function') {
                if (typeOfEase === 'string') {
                    invariant$1(easingLookup.has(ease), "Invalid easing type '" + ease + "'. popmotion.io/pose/api/transition");
                    ease = easingLookup.get(ease);
                }
                else if (Array.isArray(ease)) {
                    invariant$1(ease.length === 4, "Cubic bezier arrays must contain four numerical values.");
                    var x1 = ease[0], y1 = ease[1], x2 = ease[2], y2 = ease[3];
                    ease = easing.cubicBezier(x1, y1, x2, y2);
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
            getInstantTransition: function (_, _a) {
                var to = _a.to;
                return just(to);
            },
            convertTransitionDefinition: function (val, def, props) {
                if (isAction(def))
                    return def;
                var delay$$1 = def.delay, min = def.min, max = def.max, round = def.round, remainingDef = __rest(def, ["delay", "min", "max", "round"]);
                var action$$1 = getAction(val, remainingDef, props);
                var outputPipe = [];
                if (delay$$1)
                    addActionDelay(delay$$1, action$$1);
                if (min !== undefined)
                    outputPipe.push(function (v) { return Math.max(v, min); });
                if (max !== undefined)
                    outputPipe.push(function (v) { return Math.min(v, max); });
                if (round)
                    outputPipe.push(Math.round);
                return outputPipe.length ? action$$1.pipe.apply(action$$1, outputPipe) : action$$1;
            },
            addActionDelay: addActionDelay,
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
            measurementAsPixels: function (measurement, value, type) {
                return type === percent && typeof value === 'number'
                    ? value / 100 * current[measurement]
                    : value;
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

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var calc$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var isNum = function (v) { return typeof v === 'number'; };
    exports.isPoint = function (point) {
        return point.x !== undefined && point.y !== undefined;
    };
    exports.isPoint3D = function (point) {
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
    exports.angle = function (a, b) {
        if (b === void 0) { b = ZERO_POINT; }
        return exports.radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
    };
    exports.degreesToRadians = function (degrees) { return degrees * Math.PI / 180; };
    exports.dilate = function (a, b, dilation) { return a + ((b - a) * dilation); };
    exports.distance = function (a, b) {
        if (b === void 0) { b = ZERO_POINT; }
        if (isNum(a) && isNum(b)) {
            return distance1D(a, b);
        }
        else if (exports.isPoint(a) && exports.isPoint(b)) {
            var xDelta = distance1D(a.x, b.x);
            var yDelta = distance1D(a.y, b.y);
            var zDelta = (exports.isPoint3D(a) && exports.isPoint3D(b)) ? distance1D(a.z, b.z) : 0;
            return Math.sqrt((Math.pow(xDelta, 2)) + (Math.pow(yDelta, 2)) + (Math.pow(zDelta, 2)));
        }
        return 0;
    };
    exports.getProgressFromValue = function (from, to, value) {
        var toFromDifference = to - from;
        return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
    };
    exports.getValueFromProgress = function (from, to, progress) {
        return (-progress * from) + (progress * to) + from;
    };
    exports.pointFromAngleAndDistance = function (origin, angle, distance) {
        angle = exports.degreesToRadians(angle);
        return {
            x: distance * Math.cos(angle) + origin.x,
            y: distance * Math.sin(angle) + origin.y
        };
    };
    exports.radiansToDegrees = function (radians) { return radians * 180 / Math.PI; };
    exports.smooth = function (newValue, oldValue, duration, smoothing) {
        if (smoothing === void 0) { smoothing = 0; }
        return toDecimal(oldValue + (duration * (newValue - oldValue) / Math.max(smoothing, duration)));
    };
    exports.speedPerFrame = function (xps, frameDuration) {
        return (isNum(xps)) ? xps / (1000 / frameDuration) : 0;
    };
    exports.speedPerSecond = function (velocity, frameDuration) {
        return frameDuration ? velocity * (1000 / frameDuration) : 0;
    };
    exports.stepProgress = function (steps, progress) {
        var segment = 1 / (steps - 1);
        var target = 1 - (1 / steps);
        var progressOfTarget = Math.min(progress / target, 1);
        return Math.floor(progressOfTarget / segment) * segment;
    };

    });

    unwrapExports(calc$1);
    var calc_1 = calc$1.isPoint;
    var calc_2 = calc$1.isPoint3D;
    var calc_3 = calc$1.angle;
    var calc_4 = calc$1.degreesToRadians;
    var calc_5 = calc$1.dilate;
    var calc_6 = calc$1.distance;
    var calc_7 = calc$1.getProgressFromValue;
    var calc_8 = calc$1.getValueFromProgress;
    var calc_9 = calc$1.pointFromAngleAndDistance;
    var calc_10 = calc$1.radiansToDegrees;
    var calc_11 = calc$1.smooth;
    var calc_12 = calc$1.speedPerFrame;
    var calc_13 = calc$1.speedPerSecond;
    var calc_14 = calc$1.stepProgress;

    var transformers$1 = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });



    var noop = function (v) { return v; };
    exports.appendUnit = function (unit) { return function (v) { return "" + v + unit; }; };
    exports.applyOffset = function (from, to) {
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
    exports.blendColor = function (from, to) {
        var fromColor = (typeof from === 'string') ? styleValueTypes_es.color.parse(from) : from;
        var toColor = (typeof to === 'string') ? styleValueTypes_es.color.parse(to) : to;
        var blended = __assign({}, fromColor);
        var blendFunc = (from.hue !== undefined ||
            typeof from === 'string' && styleValueTypes_es.hsla.test(from)) ? calc$1.getValueFromProgress
            : blend;
        return function (v) {
            blended = __assign({}, blended);
            for (var key in blended) {
                if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                    blended[key] = blendFunc(fromColor[key], toColor[key], v);
                }
            }
            blended.alpha = calc$1.getValueFromProgress(fromColor.alpha, toColor.alpha, v);
            return blended;
        };
    };
    exports.clamp = function (min, max) { return function (v) { return Math.min(Math.max(v, min), max); }; };
    var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
    exports.pipe = function () {
        var transformers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            transformers[_i] = arguments[_i];
        }
        return transformers.reduce(combineFunctions);
    };
    exports.conditional = function (check, apply) { return function (v) { return check(v) ? apply(v) : v; }; };
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
            var progressInRange = calc$1.getProgressFromValue(input[i - 1], input[i], v);
            var easedProgress = (rangeEasing) ? rangeEasing[i - 1](progressInRange) : progressInRange;
            return calc$1.getValueFromProgress(output[i - 1], output[i], easedProgress);
        };
    };
    var fastInterpolate = function (minA, maxA, minB, maxB) { return function (v) {
        return (((v - minA) * (maxB - minB)) / (maxA - minA)) + minB;
    }; };
    exports.interpolate = function (input, output, rangeEasing) {
        var rangeLength = input.length;
        return rangeLength !== 2
            ? slowInterpolate(input, output, rangeLength, rangeEasing)
            : fastInterpolate(input[0], input[1], output[0], output[1]);
    };
    exports.generateStaticSpring = function (alterDisplacement) {
        if (alterDisplacement === void 0) { alterDisplacement = noop; }
        return function (constant, origin) { return function (v) {
            var displacement = origin - v;
            var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
            return (displacement <= 0) ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
        }; };
    };
    exports.linearSpring = exports.generateStaticSpring();
    exports.nonlinearSpring = exports.generateStaticSpring(Math.sqrt);
    exports.wrap = function (min, max) { return function (v) {
        var rangeSize = max - min;
        return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
    }; };
    exports.smooth = function (strength) {
        if (strength === void 0) { strength = 50; }
        var previousValue = 0;
        var lastUpdated = 0;
        return function (v) {
            var currentFramestamp = framesync_es.currentFrameTime();
            var timeDelta = (currentFramestamp !== lastUpdated) ? currentFramestamp - lastUpdated : 0;
            var newValue = timeDelta ? calc$1.smooth(v, previousValue, timeDelta, strength) : previousValue;
            lastUpdated = currentFramestamp;
            previousValue = newValue;
            return newValue;
        };
    };
    exports.snap = function (points) {
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
                    var distance = Math.abs(point - v);
                    if (distance === 0)
                        return point;
                    if (distance > lastDistance)
                        return points[i_1 - 1];
                    if (i_1 === numPoints_1 - 1)
                        return point;
                    lastDistance = distance;
                }
            };
        }
    };
    exports.steps = function (st, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return function (v) {
            var progress = calc$1.getProgressFromValue(min, max, v);
            return calc$1.getValueFromProgress(min, max, calc$1.stepProgress(st, progress));
        };
    };
    exports.transformMap = function (childTransformers) { return function (v) {
        var output = __assign({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    }; };

    });

    unwrapExports(transformers$1);
    var transformers_1 = transformers$1.appendUnit;
    var transformers_2 = transformers$1.applyOffset;
    var transformers_3 = transformers$1.blendColor;
    var transformers_4 = transformers$1.clamp;
    var transformers_5 = transformers$1.pipe;
    var transformers_6 = transformers$1.conditional;
    var transformers_7 = transformers$1.interpolate;
    var transformers_8 = transformers$1.generateStaticSpring;
    var transformers_9 = transformers$1.linearSpring;
    var transformers_10 = transformers$1.nonlinearSpring;
    var transformers_11 = transformers$1.wrap;
    var transformers_12 = transformers$1.smooth;
    var transformers_13 = transformers$1.snap;
    var transformers_14 = transformers$1.steps;
    var transformers_15 = transformers$1.transformMap;

    var chainable = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });

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
            var pipedUpdate = funcs.length === 1 ? funcs[0] : transformers$1.pipe.apply(void 0, funcs);
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
    exports.default = Chainable;

    });

    unwrapExports(chainable);

    var observer = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.Observer = Observer;
    exports.default = (function (observerCandidate, _a, onComplete) {
        var middleware = _a.middleware;
        if (typeof observerCandidate === 'function') {
            return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
        }
        else {
            return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
        }
    });

    });

    unwrapExports(observer);
    var observer_1 = observer.Observer;

    var action$1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });


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
            var observer$$1 = observer.default(observerCandidate, observerProps, function () {
                isComplete = true;
                subscription.stop();
            });
            var api = init(observer$$1);
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
    }(chainable.default));
    exports.Action = Action;
    exports.default = (function (init) { return new Action({ init: init }); });

    });

    unwrapExports(action$1);
    var action_1 = action$1.Action;

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
    var isFlipPose = function (flip, key, state) {
        return state.props.element instanceof HTMLElement &&
            (flip === true || key === 'flip');
    };
    var resolveProp$1 = function (target, props) {
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
                raw: value(to, function (v) { return props.elementStyler.set(key, v); })
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
                acc[key] = resolveProp$1(nextPose[key], state.props);
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

    var reactions = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });


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
            var observer$$1 = observer.default(observerCandidate, this.props);
            this.subscribers.push(observer$$1);
            var subscription = {
                unsubscribe: function () {
                    var index = _this.subscribers.indexOf(observer$$1);
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
    }(chainable.default));
    exports.BaseMulticast = BaseMulticast;

    });

    unwrapExports(reactions);
    var reactions_1 = reactions.BaseMulticast;

    var value$1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });



    var isValueList = function (v) { return Array.isArray(v); };
    var isSingleValue = function (v) {
        var typeOfV = typeof v;
        return (typeOfV === 'string' || typeOfV === 'number');
    };
    var ValueReaction = (function (_super) {
        __extends(ValueReaction, _super);
        function ValueReaction(props) {
            var _this = _super.call(this, props) || this;
            _this.scheduleVelocityCheck = function () { return framesync_es.onFrameEnd(_this.velocityCheck); };
            _this.velocityCheck = function () {
                if (framesync_es.currentFrameTime() !== _this.lastUpdated) {
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
            this.timeDelta = framesync_es.timeSinceLastFrame();
            this.lastUpdated = framesync_es.currentFrameTime();
            framesync_es.onFrameEnd(this.scheduleVelocityCheck);
        };
        ValueReaction.prototype.subscribe = function (observerCandidate) {
            var sub = _super.prototype.subscribe.call(this, observerCandidate);
            this.update(this.current);
            return sub;
        };
        ValueReaction.prototype.getSingleVelocity = function (current, prev) {
            return (typeof current === 'number' && typeof prev === 'number')
                ? calc$1.speedPerSecond(current - prev, this.timeDelta)
                : calc$1.speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
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
    }(reactions.BaseMulticast));
    exports.ValueReaction = ValueReaction;
    exports.default = (function (value, initialSubscription) { return new ValueReaction({ value: value, initialSubscription: initialSubscription }); });

    });

    unwrapExports(value$1);
    var value_1 = value$1.ValueReaction;

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
                element: element, elementStyler: index(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
        if (draggable) {
            var _b = dragPoses(draggable), dragging = _b.dragging, dragEnd = _b.dragEnd;
            poseConfig.dragging = __assign({}, poseConfig.dragging, dragging);
            poseConfig.dragEnd = __assign({}, poseConfig.dragEnd, dragEnd);
        }
        return poseConfig;
    };
    var domPose = pose({
        transformPose: function (_a, name, state) {
            var flip = _a.flip, pose$$1 = __rest(_a, ["flip"]);
            return isFlipPose(flip, name, state) ? flipPose(state, pose$$1) : pose$$1;
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
