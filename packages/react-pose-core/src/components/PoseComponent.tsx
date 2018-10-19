import * as React from 'react';
import { AnimatedPoser } from 'animated-pose';
import {
  PoseComponentProps,
  ValueMap,
  CurrentPose,
  PoseContextProps,
  Layout
} from '../types';
import { filterProps, hasChanged } from '../utils';

export const PoseParentContext = React.createContext({});

class PoseComponent extends React.PureComponent<PoseComponentProps> {
  props: PoseComponentProps;
  poser: AnimatedPoser;
  values: ValueMap;
  platformSpecificProps: PoseComponentProps;
  layout: Layout;
  ref: any;

  private childrenHandlers: PoseContextProps = {
    registerAsChild: props => this.poser.addChild(props),
    onUnmount: child => this.poser.removeChild(child)
  };

  constructor(props: PoseComponentProps) {
    super(props);

    const {
      poseConfig,
      factoryConfig,
      registerAsChild,
      pose,
      initialPose
    } = props;
    const {
      transformConfig,
      poseFactory,
      getProps,
      filterConfig
    } = factoryConfig;

    const filteredProps = filterProps(props)

    const config = {
      ...(typeof poseConfig === 'function' ? poseConfig(filteredProps) : poseConfig),
      //flipEnabled: flipMove,
      props: filteredProps
    };

    if (initialPose || pose) config.initialPose = initialPose || pose;
    if (transformConfig) transformConfig(config, props);

    this.poser = registerAsChild
      ? registerAsChild(filterConfig(config))
      : poseFactory(filterConfig(config));

    if (getProps)
      this.platformSpecificProps = getProps(
        this.poser,
        config,
        props,
        this.setLayout
      );
  }

  componentDidUpdate(prevProps: PoseComponentProps) {
    const { pose, poseKey } = this.props;

    this.poser.setProps(filterProps(this.props));
    if (poseKey !== prevProps.poseKey || hasChanged(prevProps.pose, pose)) {
      this.setPose(pose);
    }
  }

  componentDidMount() {
    const { initialPose, pose } = this.props;
    if (initialPose && pose) this.setPose(pose);
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
      () => onPoseComplete && onPoseComplete(pose)
    );
  }

  setLayout = (layout: Layout) => {
    const prevLayout = this.layout;
    const { factoryConfig, flipMove } = this.props;
    this.layout = layout;

    if (prevLayout && flipMove) {
      this.ref.setNativeProps({
        transform: factoryConfig
          .getStylesFromPoser(this.poser)
          .transform.map((rule: { [key: string]: any }) => {
            if (rule.translateX) return { translateX: prevLayout.x - layout.x };
            if (rule.translateY) return { translateY: prevLayout.y - layout.y };
            return rule;
          })
      });
      this.poser.flip(prevLayout, layout);
    }
  };

  setRef = (ref: any) => (this.ref = ref);

  popFromLayout() {
    if (!this.props.popFromLayout || !this.layout) return;

    const { x, y, width, height } = this.layout;

    return {
      position: 'absolute',
      top: y,
      left: x,
      width,
      height
    };
  }

  render() {
    const {
      Component,
      children,
      style,
      factoryConfig,
      flipMove,
      ...props
    } = this.props;
    const { getStylesFromPoser } = factoryConfig;

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {Component ? (
          <Component
            {...filterProps(props)}
            style={[
              style,
              getStylesFromPoser(this.poser),
              this.popFromLayout()
            ]}
            ref={flipMove ? this.setRef : undefined}
            {...(this.platformSpecificProps ? this.platformSpecificProps : {})}
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
