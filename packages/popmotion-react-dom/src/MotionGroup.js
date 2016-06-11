import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { findDOMNode } from 'react-dom';
import { detectFlow } from 'popmotion';

class MotionGroup extends React.Component {
  componentDidMount() {
  this.flow = detectFlow(findDOMNode(this));
  this.setValues(this.props.currentState);
  }

  render() {
  const {
    onWillAppear,
    onWillEnter,
    onWillLeave
    children,
    ...props
  } = this.props;

  return {
    <ReactTransitionGroup { ...props }>
    { React.Children.map(children, (child) => (<Motion
      onAppear={ onAppear }
      onEnter={ onEnter }
      onLeave={ onLeave }
    >
      {component}
    </Motion>);
    ) }
    </ReactTransitionGroup>
  );
  }
}

MotionGroup.propTypes = {
  onStateChange: React.PropTypes.func,
  values: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};

export default MotionGroup;
