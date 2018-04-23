import * as React from 'react';
import { createContext } from 'react';
import { GestureResponderHandlers } from 'react-native';
import poseFactory, { AnimatedPoser } from 'animated-pose';
import { getStylesFromPoser, filterProps, makeDraggable } from '../inc/utils';
import {
  PoseComponentProps,
  ValueMap,
  CurrentPose,
  PoseContextProps
} from '../types';

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
    const { poseConfig, registerAsChild, pose, draggable } = props;

    const config = {
      ...poseConfig,
      props: filterProps(props)
    };

    if (pose) config.initialPose = pose;

    if (draggable) {
      config._drag = { x: 0, y: 0 };
      config.props = {
        ...config.props,
        useNativeDriver: false
      };
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

  componentDidMount() {
    const { poseOnMount } = this.props;
    if (poseOnMount) this.setPose(poseOnMount);
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
            {...filterProps(props)}
            style={[style, getStylesFromPoser(this.poser)]}
            {...(this.panHandlers ? this.panHandlers : {})}
          >
            {children}
          </Component>
        ) : typeof children === 'function' ? (
          children(this.poser.get())
        ) : null}
      </PoseParentContext.Provider>
    );
  }
}

export { PoseComponent };
