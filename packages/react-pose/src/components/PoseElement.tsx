import React, { createContext, createElement } from 'react';
import pose, { Poser, PoserProps } from 'popmotion-pose';

export type CurrentPose = string;

export type PoseContextProps = {
  getParentPoseProps?: () => PoserProps;
  createAsChild?: (element: Element, props: PoserProps) => Poser;
  onUnmount?: (child: Poser) => any;
  getPoseFromParent?: () => CurrentPose;
};

export type PoseElementProps = {
  children?: React.Node;
  elementType: string;
  poseProps: PoserProps;
  pose?: CurrentPose;
  newTree?: boolean;
  onChange?: { [key: string]: (v: any) => any };
  innerRef?: (el: Element) => any;
  [key: string]: any;
} & PoseContextProps;

export const PoseParentContext = createContext({});

export class PoseElement extends React.PureComponent<PoseElementProps> {
  props: PoseElementProps;
  poser: Poser;
  ref: Element;
  styleProps: { [key: string]: any };

  /**
   * Children handlers
   * =============================================
   */
  private childrenHandlers: PoseContextProps = {
    createAsChild: (element, props) => this.poser.addChild(element, props),
    onUnmount: child => this.poser.removeChild(child),
    getParentPoseProps: () => this.props.poseProps,
    getPoseFromParent: () => this.props.pose
  };

  /**
   * Lifecycle
   * =============================================
   */
  getPose() {
    const { getPoseFromParent, pose: initialPose } = this.props;
    return getPoseFromParent && !initialPose
      ? getPoseFromParent()
      : initialPose;
  }

  getSetProps() {
    const {
      children,
      elementType,
      poseProps,
      onChange,
      innerRef,
      ...props
    } = this.props;
    return props;
  }

  setRef = (ref: Element) => {
    const { innerRef } = this.props;
    if (innerRef) innerRef(ref);
    this.ref = ref;
  };

  componentDidMount() {
    if (!this.ref) return;

    const { poseProps, onChange, createAsChild } = this.props;
    const props = {
      ...poseProps,
      initialPose: this.getPose(),
      onChange
    };

    this.poser = (createAsChild || pose)(this.ref, props);
  }

  componentDidUpdate(prevProps: PoseElementProps) {
    if (this.props.pose !== prevProps.pose)
      this.poser.set(this.props.pose, this.getSetProps());
  }

  componentWillUnmount() {
    if (!this.poser) return;
    const { onUnmount } = this.props;
    if (onUnmount) onUnmount(this.poser);
    this.poser.destroy();
  }

  render() {
    const { elementType, children, ...remaining } = this.props;

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {createElement(elementType, remaining, {
          ...children,
          ref: this.setRef
        })}
      </PoseParentContext.Provider>
    );
  }
}
