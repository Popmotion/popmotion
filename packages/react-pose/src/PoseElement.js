import React from 'react';
import { posesToStyles } from './utils';
import pose from 'popmotion-pose';

export const PoseParentContext = React.createContext();

export default class PoseElement extends React.PureComponent {
  constructor(props) {
    super(props);
    const { poses, current } = props;
    this.style = poses && current ? posesToStyles(poses[current]) : {};
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
  }

  componentDidUpdate({ current: prevCurrent }) {
    const { current } = this.props;
    if (prevCurrent !== current) this.poser.set(current);
  }

  componentWillUnmount() {
    if (!this.poser) return;

    const { onUnmount } = this.props;
    if (onUnmount) this.onUnmount(this.poser);
    this.poser.destroy();
  }

  setRef = (ref) => this.ref = ref;

  /**
   * Children handlers
   * =============================================
   */
  childrenHandlers = {
    onMount: child => this.poser.addChild(child),
    onUnmount: child => this.poser.removeChild(child)
  }

  /**
   * Prop selectors
   * =============================================
   */
  getPoseProps() {
    const { elementType, children, draggable, poses, current } = this.props;

    return {
      draggable,
      initialPose: current,
      ...poses
    };
  }

  getDomProps({
    draggable,
    poses,
    current,
    style,
    ...props
  }) {
    props.style = { ...style, ...this.style };
    props.ref = this.setRef;
    return props;
  }

  render() {
    const { elementType, children, ...remaining } = this.props;

    return (
      <PoseParentContext.Provider value={this.childrenHandlers}>
        {}
      </PoseParentContext.Provider>
    );
  }
}
