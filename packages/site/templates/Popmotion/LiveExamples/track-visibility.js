import React from 'react';
import OnStage from 'live-on-stage/lib/OnStage';

const trackVisibility = (Component) => {
  return class TrackedVisibilityComponent extends React.Component {
    state = {
      isVisible: false
    };
  
    show = () => this.setState({ isVisible: true });
  
    hide = () => this.setState({ isVisible: false });
  
    render() {
      return (
        <OnStage onLeave={this.hide} onEnter={this.show}>
          <Component {...this.props} isVisible={this.state.isVisible} />
        </OnStage>
      );
    }
  };
};

export default trackVisibility;