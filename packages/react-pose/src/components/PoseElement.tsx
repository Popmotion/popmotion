import * as React from 'react';
import { createContext, createElement } from 'react';
import reactLifecyclesCompat = require('react-lifecycles-compat');
import poseFactory, { Poser, PoserProps } from 'popmotion-pose';
import {
  ChildRegistration,
  CurrentPose,
  PoseContextProps,
  PoseElementProps,
  PopStyle
} from './PoseElement.types';

export const PoseParentContext = createContext({});

// Future enhancement: Memoize these functions for speed
function isReactComponent(component) {
  let proto;

  try {
    // Must use getPrototypeOf to capture the case where Proxy components are
    // used (they don't have a `.prototype`)
    proto = component.prototype || Object.getPrototypeOf(component);
  } catch {
    // getPrototypeOf will throw in ES5, so we return early here
    return false;
  }

  return 'isReactComponent' in proto;
}

function isStatelessFunctionalComponent(component) {
  return typeof component === 'function' && !isReactComponent(component);
}

function isDOMPrimitiveComponent(component) {
  return typeof component === 'string';
}

const calcPopFromFlowStyle = (el: HTMLElement): PopStyle => {
  const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;

  return {
    position: 'absolute',
    top: offsetTop,
    left: offsetLeft,
    width: offsetWidth,
    height: offsetHeight
  };
};

const hasPose = (pose: CurrentPose, key: string) =>
  Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;

const objectToMap = (obj: { [key: string]: any }): Map<string, any> =>
  Object.keys(obj).reduce((map, key) => {
    map.set(key, obj[key]);
    return map;
  }, new Map());

class PoseElement extends React.PureComponent<PoseElementProps> {
  props: PoseElementProps;
  poser: Poser;
  ref: Element;
  styleProps: { [key: string]: any };
  children: Set<ChildRegistration> = new Set();
  popStyle?: PopStyle;

  /**
   * Children handlers
   * =============================================
   */
  private childrenHandlers: PoseContextProps = {
    registerChild: props => {
      this.children.add(props);
      if (this.poser) this.flushChildren();
    },
    onUnmount: child => this.poser.removeChild(child),
    getParentPoseProps: () => this.props.poseProps,
    getInitialPoseFromParent: () => this.getInitialPose()
  };

  /**
   * Lifecycle
   * =============================================
   */

  getInitialPose(): CurrentPose {
    const { getInitialPoseFromParent, pose, initialPose } = this.props;

    if (initialPose) {
      return initialPose;
    } else {
      // Feel like this could probably be simpler
      const parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
      const thisPose = Array.isArray(pose) ? pose : [pose];

      return Array.isArray(parentPose)
        ? [...parentPose, ...thisPose]
        : [parentPose, ...thisPose];
    }
  }

  getFirstPose(): CurrentPose | void {
    const { pose } = this.props;
    return pose && pose !== this.getInitialPose() ? pose : undefined;
  }

  getSetProps() {
    const {
      children,
      elementType,
      poseProps,
      onChange, // Deprecated for 2.0.0
      onValueChange,
      innerRef,
      pose,
      initialPose,
      onPoseComplete,
      newTree,
      getParentPoseProps,
      registerChild,
      onUnmount,
      getInitialPoseFromParent,
      getPoseFromParent,
      popFromFlow,
      values,
      parentValues,
      ...props
    } = this.props;

    // If we're popping this element out from the DOM flow, build
    // and apply position: absolute styles that visually match the previous
    // location in the DOM
    if (popFromFlow && this.ref && this.ref instanceof HTMLElement) {
      if (!this.popStyle) {
        props.style = {
          ...props.style,
          ...calcPopFromFlowStyle(this.ref as HTMLElement)
        };
        this.popStyle = props.style;
      } else {
        props.style = this.popStyle;
      }
    } else {
      this.popStyle = null;
    }

    // Deprecated for 2.0.0
    // If this is a function, it's intended for the DOM element
    if (typeof onChange === 'function') props.onChange = onChange;

    return props;
  }

  setRef = (ref: Element) => {
    const { innerRef } = this.props;

    if (innerRef) {
      // The parent component which set `innerRef` is interested in the
      // immediately wrapped component, not necessarily the forwarded refs from
      // children.
      if (isDOMPrimitiveComponent(this.props.elementType)) {
        // If the posed element is a DOM primitive, then we always pass the ref
        // back
        innerRef(ref);
      } else if (!ref || isReactComponent(ref)) {
        // Otherwise, we only pass the ref back if it's _not_ the forwarded
        // ref (which would point to a DOM element)
        innerRef(ref);
      }
    }

    // In the `render()` function, we are setting both `ref` and `innerRef`.
    // We're only interested in the thing that results in a DOM node here, so we
    // only set the ref when we know what we got back was a DOM node.
    // NOTE: We don't check for a functional component here since it's not
    // possible to set a `ref` on one
    if (!ref || (!isReactComponent(ref) && !isStatelessFunctionalComponent(ref))) {
      this.ref = ref;
    }
  };

  componentDidMount() {
    if (!this.ref) return;

    const {
      poseProps,
      onChange, // Deprecated 2.0.0
      onValueChange,
      registerChild,
      values,
      parentValues
    } = this.props;
    const props: PoserProps = {
      ...poseProps,
      initialPose: this.getInitialPose(),
      values: values || poseProps.values,
      parentValues: parentValues ? objectToMap(parentValues) : parentValues,
      transitionProps: this.getSetProps(),
      onChange: onValueChange
        ? onValueChange
        : typeof onChange !== 'function' ? onChange : undefined // 2.0.0 set to just `onValueChange`
    };

    // If first in tree
    if (!registerChild) {
      this.initPoser(poseFactory(this.ref, props));
    } else {
      registerChild({
        element: this.ref,
        poserProps: props,
        onRegistered: poser => this.initPoser(poser)
      });
    }
  }

  UNSAFE_componentWillUpdate({ pose }: PoseElementProps) {
    if (hasPose(pose, 'flip')) this.poser.measure();
  }

  componentDidUpdate(prevProps: PoseElementProps) {
    const { pose } = this.props;
    this.poser.setTransitionProps(this.getSetProps());
    if (pose !== prevProps.pose || pose === 'flip') this.setPose(pose);
  }

  componentWillUnmount() {
    if (!this.poser) return;
    const { onUnmount } = this.props;
    if (onUnmount) onUnmount(this.poser);
    this.poser.destroy();
    this.ref = undefined;
  }

  initPoser(poser: Poser) {
    this.poser = poser;
    this.flushChildren();

    const firstPose = this.getFirstPose();
    if (firstPose) this.setPose(firstPose);
  }

  setPose(pose: CurrentPose) {
    const { onPoseComplete } = this.props;
    const poseList: string[] = Array.isArray(pose) ? pose : [pose];

    Promise.all(poseList.map(key => key && this.poser.set(key))).then(
      () => onPoseComplete && onPoseComplete()
    );
  }

  flushChildren() {
    this.children.forEach(({ element, poserProps, onRegistered }) =>
      onRegistered(this.poser.addChild(element, poserProps))
    );

    this.children.clear();
  }

  render() {
    const { elementType, children } = this.props;
    const props = this.getSetProps();

    const elementProps : {
      ref?: (ref: Element) => void;
      innerRef?: (ref: Element) => void;
      hostRef?: (ref: Element) => void;
    } = {
      // Functional components throw a warning when passed a `ref` prop
      ref: isStatelessFunctionalComponent(elementType) ? undefined : this.setRef,
    };

    if (!isDOMPrimitiveComponent(elementType)) {
      // We need to get a ref to an underlying DOM element. The standard is to
      // accept an `innerRef` prop (ala: Styled Components), so we pass that
      // function along.
      // Unfortunately when using Styled Components, it will intercept the
      // `innerRef` prop, and not pass it down to a wrapped component (when
      // doing styled(Component)``, hence we pass in another standard ref
      // getting function `hostRef`, which the consuming code can opt into if
      // they want.
      // ( see https://github.com/facebook/react/issues/11401 )
      elementProps.innerRef = this.setRef;
      elementProps.hostRef = this.setRef;
    }

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {createElement(
          elementType,
          {
            ...props,
            ...elementProps,
          },
          children
        )}
      </PoseParentContext.Provider>
    );
  }
}

reactLifecyclesCompat(PoseElement);

export { PoseElement };
