import React from 'react';
import pose from 'popmotion-pose';

export default class PoseElement extends React.PureComponent {
  componentDidMount() {
    if (!this.ref) return;

    this.poser = pose(this.ref, this.getPoseProps());
  }

  componentDidUpdate({ current: prevCurrent }) {
    const { current } = this.props;
    if (prevCurrent !== current) this.poser.set(current);
  }

  componentWillUnmount() {
    if (this.poser) this.poser.destroy();
  }

  setRef = (ref) => this.ref = ref;

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
    ...props
  }) {
    props.ref = this.setRef;
    return props;
  }

  render() {
    const { elementType, children, ...remaining } = this.props;

    return React.createElement(
      elementType,
      this.getDomProps(remaining),
      ...children
    );
  }
}
