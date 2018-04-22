import * as React from 'react';
import { createContext } from 'react';
import { Animated, GestureResponderHandlers } from 'react-native';
import poseFactory, { AnimatedPoser } from 'animated-pose';
import {
  getStylesFromPoser,
  getProps,
  addDragPoses,
  makeDraggable
} from '../inc/utils';
import { PoseComponentProps, ValueMap, ChildAsFunction } from '../types';

export const PoseParentContext = createContext({});

class PoseComponent extends React.PureComponent<PoseComponentProps> {
  poser: AnimatedPoser;
  values: ValueMap;
  panHandlers: GestureResponderHandlers;

  private childrenHandlers: PoseContextProps = {
    registerAsChild: props => this.poser.addChild(props),
    onUnmount: child => this.poser.removeChild(child)
  };

  constructor(props: PoseComponentProps) {
    super(props);
    const {
      poseConfig,
      registerAsChild,
      pose,
      draggable,
      ...remainingProps
    } = props;

    const config = {
      ...poseConfig,
      props: getProps(remainingProps)
    };

    if (pose) config.initialPose = pose;

    if (draggable) {
      config._drag = { x: 0, y: 0 };
    }

    this.poser = registerAsChild
      ? registerAsChild(config)
      : poseFactory(config);

    if (draggable) this.panHandlers = makeDraggable(this.poser, props);
  }

  componentDidUpdate(prevProps: PoseComponentProps) {
    const { pose } = this.props;
    if (pose !== prevProps.pose) this.setPose(pose);
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;
    if (onUnmount) onUnmount(this.poser);
    this.poser.destroy();
  }

  setPose(pose: CurrentPose) {
    const { onPoseComplete } = this.props;
    const poseList: string[] = Array.isArray(pose) ? pose : [pose];

    Promise.all(poseList.map(key => key && this.poser.set(key))).then(
      () => onPoseComplete && onPoseComplete()
    );
  }

  render() {
    const { Component, children, style, ...props } = this.props;

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {Component ? (
          <Component
            {...getProps(props)}
            style={[style, getStylesFromPoser(this.poser)]}
            {...(this.panHandlers ? this.panHandlers : {})}
          >
            {children}
          </Component>
        ) : (
          (children(this.poser.get()) as ChildAsFunction)
        )}
      </PoseParentContext.Provider>
    );
  }
}

export { PoseComponent };
