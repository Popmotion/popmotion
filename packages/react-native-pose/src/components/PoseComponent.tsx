import * as React from 'react';
import { createContext } from 'react';
import poseFactory, { AnimatedPoser } from 'animated-pose';
import { getStylesFromPoser, getProps } from '../inc/utils';
import { PoseComponentProps, ValueMap, ChildAsFunction } from '../types';

export const PoseParentContext = createContext({});

class PoseComponent extends React.PureComponent<PoseComponentProps> {
  poser: AnimatedPoser;
  values: ValueMap;

  private childrenHandlers: PoseContextProps = {
    registerAsChild: props => this.poser.addChild(props),
    onUnmount: child => this.poser.removeChild(child)
  };

  constructor(props: PoseComponentProps) {
    super(props);
    const { poseConfig, registerAsChild, pose, ...remainingProps } = props;

    const config = {
      ...poseConfig,
      props: getProps(remainingProps)
    };

    if (pose) config.initialPose = pose;

    this.poser = registerAsChild
      ? registerAsChild(config)
      : poseFactory(config);
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
          >
            {children}
          </Component>
        ) : (
          (children(this.values) as ChildAsFunction)
        )}
      </PoseParentContext.Provider>
    );
  }
}

export { PoseComponent };
