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
  hostRef: HTMLElement;
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

  getRef(): Element {
    return this.hostRef || this.ref;
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
      hostRef,
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
    if (popFromFlow && this.getRef() && this.getRef() instanceof HTMLElement) {
      if (!this.popStyle) {
        props.style = {
          ...props.style,
          ...calcPopFromFlowStyle(this.getRef() as HTMLElement)
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

  setHostRef = (ref: HTMLElement) => {
    this.hostRef = ref;
  };

  setRef = (ref: Element) => {
    const { innerRef } = this.props;
    if (innerRef) innerRef(ref);
    this.ref = ref;
  };

  componentDidMount() {
    if (!this.getRef()) return;

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
      this.initPoser(poseFactory(this.getRef(), props));
    } else {
      registerChild({
        element: this.getRef(),
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
    this.hostRef = undefined;
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

    const isStatelessFunctionalComponent =
      typeof elementType === 'function' &&
      !(elementType.prototype && 'isReactComponent' in elementType.prototype)

    // Because we can't guarantee that `elementType` is a DOM primitive, we may
    // need to get a ref to an underlying DOM element. The standard is to accept
    // an `innerRef` prop (ala: Styled Components), so we pass that function
    // along.
    // Unfortunately when using Styled Components, it will intercept the
    // `innerRef` prop, and not pass it down to a wrapped component (when doing
    // styled(Component)``, hence we pass in a _third_ ref getting function
    // `hostRef`, which the consuming code can opt into if they want.
    // ( see https://github.com/facebook/react/issues/11401 )
    const elementProps = {
      innerRef: this.setHostRef,
      hostRef: this.setHostRef,
      // Functional components throw a warning when passed a `ref` prop
      ref: !isStatelessFunctionalComponent ? this.setRef : undefined,
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
