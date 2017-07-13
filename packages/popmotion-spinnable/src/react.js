import React from 'react';
import spinnable from './';

export default class Spinnable extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = (ref) => {
      if (ref) {
        const { friction, onSpin, transformSpin } = this.props;
        this.spin = spinnable(ref, { friction, onSpin, transformSpin });
      }
    };
  }

  componentWillUnmount() {
    this.spin.stop();
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
