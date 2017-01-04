import React from 'react';

export default class Site extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  } 
}
