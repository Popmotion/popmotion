import { invariant, warning } from 'hey-listen';

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

var getPoseValues = function (_a) {
    var transition = _a.transition, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, afterChildren = _a.afterChildren, beforeChildren = _a.beforeChildren, preTransition = _a.preTransition, props = __rest(_a, ["transition", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition"]);
    return props;
};
var selectPoses = function (_a) {
    var label = _a.label, props = _a.props, values = _a.values, parentValues = _a.parentValues, ancestorValues = _a.ancestorValues, onChange = _a.onChange, passive = _a.passive, initialPose = _a.initialPose, poses = __rest(_a, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"]);
    return poses;
};
var selectAllValues = function (values, selectValue) {
    var allValues = {};
    values.forEach(function (value, key) { return allValues[key] = selectValue(value); });
    return allValues;
};

var resolveProp = function (target, props) {
    return typeof target === 'function' ? target(props) : target;
};
var poseDefault = function (pose, prop, defaultValue, resolveProps) {
    return pose && pose[prop] !== undefined
        ? resolveProp(pose[prop], resolveProps)
        : defaultValue;
};
var startChildAnimations = function (children, next, pose, props) {
    var animations = [];
    var delay = poseDefault(pose, 'delayChildren', 0, props);
    var stagger = poseDefault(pose, 'staggerChildren', 0, props);
    var staggerDirection = poseDefault(pose, 'staggerDirection', 1, props);
    var maxStaggerDuration = (children.size - 1) * stagger;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) { return i * stagger; }
        : function (i) { return maxStaggerDuration - i * stagger; };
    Array.from(children).forEach(function (child, i) {
        animations.push(child.set(next, __assign({}, props, { delay: delay + generateStaggerDuration(i) })));
    });
    return animations;
};
var createPoseSetter = function (setterProps) { return function (next, nextProps) {
    if (nextProps === void 0) { nextProps = {}; }
    var state = setterProps.state, poses = setterProps.poses, startAction = setterProps.startAction, stopAction = setterProps.stopAction, getInstantTransition = setterProps.getInstantTransition, addActionDelay = setterProps.addActionDelay, getTransitionProps = setterProps.getTransitionProps, resolveTarget = setterProps.resolveTarget, transformPose = setterProps.transformPose;
    var children = state.children, values = state.values, props = state.props, activeActions = state.activeActions, activePoses = state.activePoses;
    var _a = nextProps.delay, delay = _a === void 0 ? 0 : _a;
    var hasChildren = children.size;
    var nextPose = poses[next];
    var baseTransitionProps = __assign({}, props, nextProps);
    var getChildAnimations = function () {
        return hasChildren
            ? startChildAnimations(children, next, nextPose, baseTransitionProps)
            : [];
    };
    var getParentAnimations = function () {
        if (!nextPose)
            return [];
        if (transformPose)
            nextPose = transformPose(nextPose, next, state);
        var preTransition = nextPose.preTransition, getTransition = nextPose.transition;
        if (preTransition)
            nextPose.preTransition(baseTransitionProps);
        return Object.keys(getPoseValues(nextPose)).map(function (key) {
            return new Promise(function (complete) {
                var value = values.get(key);
                var transitionProps = __assign({}, baseTransitionProps, { key: key,
                    value: value });
                var target = resolveTarget(value, resolveProp(nextPose[key], transitionProps));
                if (activeActions.has(key))
                    stopAction(activeActions.get(key));
                var resolveTransitionProps = __assign({ to: target }, transitionProps, getTransitionProps(value, target, transitionProps));
                var transition = getTransition(resolveTransitionProps);
                if (transition === false)
                    transition = getInstantTransition(value, resolveTransitionProps);
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
        }
        else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
            return Promise.all(getChildAnimations()).then(function () {
                return Promise.all(getParentAnimations());
            });
        }
    }
    return Promise.all(getParentAnimations().concat(getChildAnimations()));
}; };

var isScale = function (key) { return key.includes('scale'); };
var defaultReadValueFromSource = function (key) { return (isScale(key) ? 1 : 0); };
var getInitialValue = function (poses, key, initialPose, props, readValueFromSource) {
    if (readValueFromSource === void 0) { readValueFromSource = defaultReadValueFromSource; }
    var posesToSearch = Array.isArray(initialPose)
        ? initialPose
        : [initialPose];
    var pose = posesToSearch.find(function (name) { return poses[name] && poses[name][key] !== undefined; });
    return pose
        ? resolveProp(poses[pose][key], props)
        : readValueFromSource(key, props);
};
var createValues = function (values, _a, pose) {
    var userSetValues = _a.userSetValues, createValue = _a.createValue, convertValue = _a.convertValue, readValueFromSource = _a.readValueFromSource, initialPose = _a.initialPose, poses = _a.poses, props = _a.props;
    return function (key) {
        if (values.has(key))
            return;
        var value;
        if (userSetValues && userSetValues[key] !== undefined) {
            value = convertValue(userSetValues[key], key, props);
        }
        else {
            var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource);
            value = createValue(initValue, key, props);
        }
        values.set(key, value);
    };
};
var scrapeValuesFromPose = function (values, props) { return function (key) {
    var pose = props.poses[key];
    Object.keys(getPoseValues(pose)).forEach(createValues(values, props, pose));
}; };
var getAncestorValue = function (key, fromParent, ancestors) {
    if (fromParent === true) {
        return ancestors[0] && ancestors[0].values.get(key);
    }
    else {
        var foundAncestor = ancestors.find(function (_a) {
            var label = _a.label;
            return label === fromParent;
        });
        return foundAncestor && foundAncestor.values.get(key);
    }
};
var bindPassiveValues = function (values, _a) {
    var passive = _a.passive, ancestorValues = _a.ancestorValues, createValue = _a.createValue, readValue = _a.readValue, props = _a.props;
    return function (key) {
        var _a = passive[key], valueKey = _a[0], passiveProps = _a[1], fromParent = _a[2];
        var valueToBind = fromParent && ancestorValues.length
            ? getAncestorValue(valueKey, fromParent, ancestorValues)
            : values.has(valueKey) ? values.get(valueKey) : false;
        if (!valueToBind)
            return;
        var newValue = createValue(readValue(valueToBind), key, props, {
            passiveParent: valueToBind,
            passiveProps: passiveProps,
            props: props
        });
        values.set(key, newValue);
    };
};
var createValueMap = function (props) {
    var poses = props.poses, passive = props.passive;
    var values = new Map();
    Object.keys(poses).forEach(scrapeValuesFromPose(values, props));
    if (passive)
        Object.keys(passive).forEach(bindPassiveValues(values, props));
    return values;
};

var applyDefaultTransition = function (pose, key, defaultTransitions) {
    return __assign({}, pose, { transition: defaultTransitions.has(key)
            ? defaultTransitions.get(key)
            : defaultTransitions.get('default') });
};
var generateTransitions = function (poses, defaultTransitions) {
    Object.keys(poses).forEach(function (key) {
        var pose = poses[key];
        invariant(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
        poses[key] = pose.transition
            ? pose
            : applyDefaultTransition(pose, key, defaultTransitions);
    });
    return poses;
};

var createTransitionMap = function (key) { return function (map) { return function (props) {
    var switchKey = props[key];
    var transition = map[switchKey] || map.default;
    return transition ? transition(props) : false;
}; }; };
var eachValue = createTransitionMap('key');
var fromPose = createTransitionMap('prevPoseKey');

var poseFactory = function (_a) {
    var getDefaultProps = _a.getDefaultProps, defaultTransitions = _a.defaultTransitions, bindOnChange = _a.bindOnChange, startAction = _a.startAction, stopAction = _a.stopAction, readValue = _a.readValue, readValueFromSource = _a.readValueFromSource, resolveTarget = _a.resolveTarget, createValue = _a.createValue, convertValue = _a.convertValue, getInstantTransition = _a.getInstantTransition, getTransitionProps = _a.getTransitionProps, addActionDelay = _a.addActionDelay, selectValueToRead = _a.selectValueToRead, transformPose = _a.transformPose, extendAPI = _a.extendAPI;
    return function (config) {
        warning(!config.hasOwnProperty('transformProps'), 'config.transformProps is deprecated. Use config.props instead.');
        var parentValues = config.parentValues, _a = config.ancestorValues, ancestorValues = _a === void 0 ? [] : _a;
        if (parentValues)
            ancestorValues.unshift({ values: parentValues });
        var activeActions = new Map();
        var activePoses = new Map();
        var children = new Set();
        var poses = generateTransitions(selectPoses(config), defaultTransitions);
        var props = config.props || config.transformProps || {};
        if (getDefaultProps)
            props = __assign({}, props, getDefaultProps(config));
        var passive = config.passive, userSetValues = config.values, initialPose = config.initialPose;
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
        if (onChange)
            Object.keys(onChange).forEach(bindOnChange(values, onChange));
        var set = createPoseSetter({
            state: state,
            poses: poses,
            getInstantTransition: getInstantTransition,
            getTransitionProps: getTransitionProps,
            startAction: startAction,
            stopAction: stopAction,
            resolveTarget: resolveTarget,
            addActionDelay: addActionDelay,
            transformPose: transformPose
        });
        var api = {
            set: set,
            get: function (valueName) {
                return valueName
                    ? selectValueToRead(values.get(valueName))
                    : selectAllValues(values, selectValueToRead);
            },
            has: function (poseName) { return !!poses[poseName]; },
            setProps: function (newProps) {
                props = __assign({}, props, newProps);
            },
            setTransitionProps: function (newProps) {
                warning(false, 'setTransformProps is deprecated. Use setProps instead.');
                props = __assign({}, props, newProps);
            },
            _addChild: function (childConfig, factory) {
                var child = factory(__assign({ initialPose: initialPose }, childConfig, { ancestorValues: [{ label: config.label, values: values }].concat(ancestorValues) }));
                children.add(child);
                return child;
            },
            removeChild: function (child) { return children.delete(child); },
            clearChildren: function () {
                children.forEach(function (child) { return child.destroy(); });
                children.clear();
            },
            destroy: function () {
                activeActions.forEach(stopAction);
                children.forEach(function (child) { return child.destroy(); });
            }
        };
        return extendAPI(api, state, config);
    };
};

export default poseFactory;
export { eachValue, fromPose };
