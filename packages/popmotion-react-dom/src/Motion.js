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
    if (this.props.onWillAppear) {
      this.props.onWillAppear(this.flow, onComplete);
    }
    return true;
  }

  componentWillEnter(onComplete) {
    if (this.props.onWillEnter) {
      this.props.onWillEnter(this.flow, onComplete);
    }
    return true;
  }

  componentWillLeave(onComplete) {
    if (this.props.onWillLeave) {
      this.props.onWillLeave(this.flow, onComplete);
    }
    return true;
  }

  startAction(action) {
    if (Array.isArray(action)) {
      action.forEach((singleAction) => this.flow.connect(singleAction).start());
    } else {
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
