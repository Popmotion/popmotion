import React from 'react';
import { posesToStyles } from './utils';
import pose from 'popmotion-pose';

export const PoseParentContext = React.createContext({});

export default class PoseElement extends React.PureComponent {
  constructor(props) {
    super(props);
    const { poses, current, getCurrentFromParent } = props;
    const currentPose = this.getInitialPose();
    this.style = poses && currentPose ? posesToStyles(poses[currentPose]) : {};
  }

  /**
   * Lifecycle
   * =============================================
   */
  componentDidMount() {
    if (!this.ref) return;

    this.poser = pose(this.ref, this.getPoseProps());
    const { onMount } = this.props;
    if (onMount) onMount(this.poser);
    if (this.children.size) this.children.forEach(child => this.poser.addChild(child));
  }

  componentDidUpdate({ current: prevCurrent }) {
    const { current } = this.props;
    if (prevCurrent !== current) this.poser.set(current);
  }

  componentWillUnmount() {
    if (!this.poser) return;

    const { onUnmount } = this.props;
    if (onUnmount) onUnmount(this.poser);
    this.poser.destroy();
  }

  setRef = ref => this.ref = ref;

  /**
   * Children handlers
   * =============================================
   */
  children = new Set();
  childrenHandlers = {
    onMount: child => this.children.add(child),
    onUnmount: child => {
      this.children.remove(child);
      this.poser.removeChild(child);
    },
    getCurrentFromParent: () => this.props.current
  }

  /**
   * Prop selectors
   * =============================================
   */
  getPoseProps() {
    const { elementType, children, draggable, poses } = this.props;

    return {
      draggable,
      initialPose: this.getInitialPose(),
      ...poses
    };
  }

  getDomProps({
    draggable,
    poses,
    current,
    style,
    onMount,
    onUnmount,
    getCurrentFromParent,
    ...props
  }) {
    props.style = { ...style, ...this.style };
    props.ref = this.setRef;
    return props;
  }
  
  getInitialPose() {
    const { current, getCurrentFromParent } = this.props;
    return (current) ? current : (getCurrentFromParent) ? getCurrentFromParent() : undefined;
  }

  render() {
    const { elementType, children, ...remaining } = this.props;

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {React.createElement(
          elementType,
          this.getDomProps(remaining),
          ...children
        )}
      </PoseParentContext.Provider>
    );
  }
}
