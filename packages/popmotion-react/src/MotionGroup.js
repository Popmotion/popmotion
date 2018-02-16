import React, { PureComponent, createContext } from 'react';

export const MotionGroupContext = createContext();

export default class MotionGroup extends PureComponent {
  requestLock = () => {

  };

  releaseLock = () => {
    
  };

  render() {
    const { children } = this.props;
    return (
      <MotionGroupContext.Provider value={{ requestLock: this.requestLock }}>
        {children}
      </MotionGroupContext.Provider>
    );
  }
}
