import React from 'react';
import { styler } from '../packages/popmotion/lib';

const style = { width: '100px', height: '100px', background: 'red' };
export const Box = ({ innerRef, ...props }) => <div ref={innerRef} {...props} style={{ ...props.style, ...style }} />;

export class BaseAnimation extends React.Component {
  setRef = (dom) => {
    if (!dom) return;
    this.animation = this.getAnimation(styler(dom));
  };

  componentWillUnmount() {
    this.animation.stop();
  }

  render() {
    return <Box innerRef={this.setRef} />;
  }
}
