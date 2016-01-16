import React, { Children, Component } from 'react';
import ReactDOM from 'react-dom';

export default class Actor extends Component {
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this))
        console.log(ui.select(ReactDOM.findDOMNode(this)))
    }

    render() {
        return this.props.children;
    }
}