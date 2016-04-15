import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FlowTransitionChild extends Component {
    componentDidMount() {
        this.flow = ReactDOM.findDOMNode(this);
    }

    componentWillAppear(onComplete) {
        this.props.onWillAppear(this.flow, onComplete);
        return true;
    }

    componentWillEnter(onComplete) {
        this.props.onWillEnter(this.flow, onComplete);
        return true;
    }

    componentWillLeave(onComplete) {
        this.props.onWillLeave(this.flow, onComplete);
        return true;
    }

    render() {
        return this.props.children;
    }
}

FlowTransitionChild.displayName = 'FlowTransitionChild';