import React from 'react';
import styler from 'stylefire';

const styles = { width: '100px', height: '100px', background: 'red' };
export const Box = ({ innerRef, ...props }) => <div style={styles} ref={innerRef} {...props} />;

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
