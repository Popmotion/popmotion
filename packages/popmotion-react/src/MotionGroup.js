import React, { PureComponent, createContext, cloneElement } from 'react';

export const MotionGroupContext = createContext();

export default class MotionGroup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    const { children } = this.props;
    return (
      <MotionGroupContext.Provider value={this.groupApi}>
        {children}
      </MotionGroupContext.Provider>
    );
  }
}
