import React from 'react';
import draggable from './';

export default class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.setRef = (ref) => {
      if (ref) {
        const { children, className, ...props } = this.props;
        this.drag = draggable(ref, props);
      }
    };
  }

  componentWillUnmount() {
    if (this.drag) this.drag.stop();
  }

  render() {
    const { children, className } = this.props;

    return (
      <div ref={this.setRef} className={className}>
        {children}
      </div>
    );
  }
}
