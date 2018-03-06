import React from 'react';
import pose from 'popmotion-pose';

export default class PoseElement extends React.PureComponent {
  componentDidMount() {
    this.poser = pose(this.ref);
  }

  componentWillUnmount() {
    if (this.poser) this.poser.destroy();
  }

  setRef = (ref) => {
    if (ref) this.ref = ref;
  };

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
