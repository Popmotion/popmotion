import React, { Children, Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import FlowTransitionChild from './flow-transition-child-component';
import { detectFlow } from 'popmotion';

export default class FlowTransitionGroup extends Component {
    startAction(node, action, onComplete) {
        const nodeFlow = detectFlow(node);
        const connectedAction = nodeFlow.connect(action);
        connectedAction.onComplete = onComplete;
        connectedAction.start();
    }

    childWillAppear(node, onComplete) {
        if (this.props.onMount) {
            this.props.onMount(node);
        }

        if (this.props.enterOnMount) {
            if (this.props.mountValues) {
                const nodeFlow = detectFlow(node);

                nodeFlow.set({
                    values: this.props.mountValues
                });
            }

            this.childWillEnter(node, onComplete);
        } else {
            onComplete();
        }
    }

    childWillEnter(node, onComplete) {
        if (this.props.enter) {
            this.startAction(node, this.props.enter, onComplete);
        } else {
            onComplete();
        }
    }

    childWillLeave(node, onComplete) {
        if (this.props.leave) {
            this.startAction(node, this.props.leave, onComplete);
        } else {
            onComplete();
        }
    }

    wrapChild(node) {
        return (<FlowTransitionChild
            onWillAppear={ (node, callback) => this.childWillAppear(node, callback) }
            onWillEnter={ (node, callback) => this.childWillEnter(node, callback) }
            onWillLeave={ (node, callback) => this.childWillLeave(node, callback) } >
                { node }
            </FlowTransitionChild>
        );
    }

    render() {
        const { children, ...props } = this.props;

        return <ReactTransitionGroup { ...props }>{ Children.map(children, (child) => this.wrapChild(child)) }</ReactTransitionGroup>;
    }
}

FlowTransitionGroup.displayName = 'FlowTransitionGroup';
FlowTransitionGroup.propTypes = {
    component: PropTypes.string,
    enter: PropTypes.object,
    leave: PropTypes.object,
    enterOnMount: PropTypes.boolean,
    mountValues: PropTypes.object
};