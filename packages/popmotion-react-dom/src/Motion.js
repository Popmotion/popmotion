import React from 'react';
import { findDOMNode } from 'react-dom';
import { detectFlow } from 'popmotion';

class Motion extends React.Component {
  componentDidMount() {
    this.flow = detectFlow(findDOMNode(this));
    this.setValues(this.props.currentState);
  }

  componentWillUnmount() {
    this.flow.stop();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.values !== this.props.values) {
      this.flow.set(newProps.values);
    }

    // Set visual state
    if (newProps.currentState !== this.props.currentState) {
      if (newProps.onStateChange) {
        const action = newProps.onStateChange(this.flow, this.props.currentState, newProps.currentState);

        if (action) {
          this.startAction(action);
        } else {
          this.setValues(newProps.currentState);
        }
      } else {
        this.setValues(newProps.currentState);
      }
    }
  }

  componentWillAppear(onComplete) {
    if (this.props.onAppear) {
      this.startAction(this.props.onAppear, onComplete);  
    } else {
      onComplete();
    }

    return true;
  }

  componentWillEnter(onComplete) {
    if (this.props.onEnter) {
      this.startAction(this.props.onEnter, onComplete);  
    } else {
      onComplete();
    }

    return true;
  }

  componentWillLeave(onComplete) {
    if (this.props.onLeave) {
      this.startAction(this.props.onLeave, onComplete);
    } else {
      onComplete();
    }

    return true;
  }

  startAction(action, onComplete) {
    if (Array.isArray(action)) {
      action.forEach((singleAction) => this.flow.connect(singleAction).start());
    } else {
      if (onComplete) {
        action.onComplete = onComplete;
      }
      this.flow.connect(action).start();
    }
  }

  setValues(values) {
    this.flow.set({ values });
  }

  render() {
    return this.props.children;
  }
}

Motion.propTypes = {
  onStateChange: React.PropTypes.func,
  values: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};

export default Motion;
