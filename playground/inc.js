import React, { forwardRef } from 'react';
import { styler } from '../packages/popmotion/lib';

const style = { width: '100px', height: '100px', background: 'red' };
export const Box = forwardRef((props, innerRef) => (
  <div ref={innerRef} {...props} style={{ ...style, ...props.style }} />
));

export class BaseAnimation extends React.Component {
  setRef = dom => {
    if (!dom) return;
    this.animation = this.getAnimation(styler(dom));
  };

  componentWillUnmount() {
    this.animation.stop();
  }

  render() {
    return <Box ref={this.setRef} />;
  }
}
