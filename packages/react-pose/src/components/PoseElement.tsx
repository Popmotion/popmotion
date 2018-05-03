import * as React from 'react';
import { createContext, createElement } from 'react';
import poseFactory, { Poser, PoserProps } from 'popmotion-pose';
import {
  ChildRegistration,
  CurrentPose,
  PoseContextProps,
  PoseElementProps,
  PopStyle
} from './PoseElement.types';

export const PoseParentContext = createContext({});

type Ref = (ref: Element) => any;
type RefSetters = {
  ref?: Ref;
  innerRef?: Ref;
  hostRef?: Ref;
};

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
      getParentPoseProps,
      registerChild,
      onUnmount,
      getInitialPoseFromParent,
      popFromFlow,
      values,
      parentValues,
      onDragStart,
      onDragEnd,
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

  /**
   * We need to get a ref to the underlying DOM element. Styled Components and
   * other libraries use `innerRef`, though this will be swallowed if the
   * styled component is not a primitive (ie styled(Component)).
   *
   * Instead we pass another function, `hostRef`, as recommended by Facebook
   * https://github.com/facebook/react/issues/11401
   *
   * We also only pass `ref` to DOM primitive components.
   */
  getRefs = (): RefSetters => {
    const refs: RefSetters = {};
    const { elementType } = this.props;

    if (typeof elementType === 'string') {
      refs.ref = this.setRef;
    } else {
      refs.innerRef = this.setRef;
      refs.hostRef = this.setRef;
    }

    return refs;
  };

  setRef = (ref: Element) => {
    if (ref instanceof Element || (this.ref && ref === null)) {
      const { innerRef } = this.props;
      if (innerRef) innerRef(ref);
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
      parentValues,
      onDragStart,
      onDragEnd
    } = this.props;
    const props: PoserProps = {
      ...poseProps,
      initialPose: this.getInitialPose(),
      values: values || poseProps.values,
      parentValues: parentValues ? objectToMap(parentValues) : parentValues,
      transitionProps: this.getSetProps(),
      onDragStart,
      onDragEnd,
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

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {createElement(
          elementType,
          { ...this.getSetProps(), ...this.getRefs() },
          children
        )}
      </PoseParentContext.Provider>
    );
  }
}

export { PoseElement };
