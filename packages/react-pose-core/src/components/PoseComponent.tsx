import * as React from 'react';
import { createContext } from 'react';
import { AnimatedPoser } from 'animated-pose';
import {
  PoseComponentProps,
  ValueMap,
  CurrentPose,
  PoseContextProps
} from '../types';

const filterProps = ({
  registerAsChild,
  onUnmount,
  Component,
  pose,
  poseKey,
  draggable,
  onDragStart,
  onDragEnd,
  factoryConfig,
  poseConfig,
  ...props
}: PoseComponentProps): PoseComponentProps => props;

export const PoseParentContext = createContext({});

class PoseComponent extends React.PureComponent<PoseComponentProps> {
  poser: AnimatedPoser;
  values: ValueMap;
  extraProps: PoseComponentProps;

  private childrenHandlers: PoseContextProps = {
    registerAsChild: props => this.poser.addChild(props),
    onUnmount: child => this.poser.removeChild(child)
  };

  constructor(props: PoseComponentProps) {
    super(props);

    const { poseConfig, factoryConfig, registerAsChild, pose } = props;
    const { transformConfig, poseFactory, getProps } = factoryConfig;

    const config = {
      ...poseConfig,
      props: filterProps(props)
    };

    if (pose) config.initialPose = pose;
    if (transformConfig) transformConfig(config, props);

    this.poser = registerAsChild
      ? registerAsChild(config)
      : poseFactory(config);

    if (getProps) this.extraProps = getProps(this.poser, config, props);
  }

  componentDidUpdate(prevProps: PoseComponentProps) {
    const { pose, poseKey } = this.props;

    this.poser.setProps(filterProps(this.props));
    if (pose !== prevProps.pose || poseKey !== prevProps.poseKey)
      this.setPose(pose);
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
    const { Component, children, style, factoryConfig, ...props } = this.props;
    const { getStylesFromPoser } = factoryConfig;

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {Component ? (
          <Component
            {...filterProps(props)}
            style={[style, getStylesFromPoser(this.poser)]}
            {...(this.extraProps ? this.extraProps : {})}
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
