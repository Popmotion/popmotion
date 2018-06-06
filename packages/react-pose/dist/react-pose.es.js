import { __rest, __assign, __extends } from 'tslib';
import { createElement, createContext, Fragment, Component, PureComponent, Children, cloneElement } from 'react';
import poseFactory from 'popmotion-pose';
import { invariant } from 'hey-listen';

var hasChanged = function (prev, next) {
    if (prev === next)
        return false;
    var prevIsArray = Array.isArray(prev);
    var nextIsArray = Array.isArray(next);
    if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
        return true;
    }
    else if (prevIsArray && nextIsArray) {
        var numPrev = prev.length;
        var numNext = next.length;
        if (numPrev !== numNext)
            return true;
        for (var i = numPrev; i < numPrev; i++) {
            if (prev[i] !== next[i])
                return true;
        }
    }
    return false;
};

var PoseParentContext = createContext({});
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
        var _a = this.props, children = _a.children, elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, props = __rest(_a, ["children", "elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd"]);
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
        return props;
    };
    PoseElement.prototype.componentDidMount = function () {
        var _this = this;
        invariant(typeof this.ref !== 'undefined', "No DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the hostRef prop to your underlying DOM element.");
        var _a = this.props, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd;
        var config = __assign({}, poseConfig, { initialPose: this.getInitialPose(), values: values || poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
            onDragEnd: onDragEnd, onChange: onValueChange });
        if (!registerChild) {
            this.initPoser(poseFactory(this.ref, config));
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
        var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
        this.poser.setProps(this.getSetProps());
        if (poseKey !== prevProps.key ||
            hasChanged(prevProps.pose, pose) ||
            pose === 'flip') {
            this.setPose(pose);
        }
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
        return (createElement(PoseParentContext.Provider, { value: this.childrenHandlers }, createElement(elementType, __assign({}, this.getSetProps(), this.getRefs()), children)));
    };
    return PoseElement;
}(PureComponent));

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

var componentCache = new Map();
var createComponentFactory = function (key) {
    var componentFactory = function (poseConfig) {
        if (poseConfig === void 0) { poseConfig = {}; }
        return function (_a) {
            var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = __rest(_a, ["withParent"]);
            return !withParent || props.parentValues ? (createElement(PoseElement, __assign({ poseConfig: poseConfig, elementType: key }, props))) : (createElement(PoseParentContext.Consumer, null, function (parentCtx) { return (createElement(PoseElement, __assign({ poseConfig: poseConfig, elementType: key }, props, parentCtx))); }));
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

var Children$1 = Children, cloneElement$1 = cloneElement;
var getKey = function (child) { return child.key; };
var animateChildrenList = function (incomingChildren, pose, initialPose) {
    var children = [];
    Children$1.forEach(incomingChildren, function (child) {
        return children.push(cloneElement$1(child, { pose: pose, initialPose: initialPose }));
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
        children.push(cloneElement$1(child, newChildProps));
    });
    leaving.forEach(function (key) {
        var child = displayedChildren.find(function (c) { return c.key === key; });
        var newChild = cloneElement$1(child, {
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
    Children$1.forEach(children, function (child) { return child && list.push(child); });
    return list;
};
var removeFromChildren = function (children, key) {
    return children.filter(function (child) { return child.key !== key; });
};

var Fragment$1 = Fragment;
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
        return createElement(Fragment$1, null, children);
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
}(Component));

export default posed;
export { PoseGroup };
