import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { detectFlow, utils } from 'popmotion';

const { isArray } = utils; 
 
export default class Flow extends Component {
    componentDidMount() {
        this.flow = detectFlow(this.getNode());
        this.setValues(this.props.values);

        if (this.props.actions) {
            this.props.actions.forEach((action) => this.startAction(action));
        }
    }

    componentWillUnmount() {
        this.flow.stop();
    }

    componentWillReceiveProps(newProps) {
        // Handle new `values`
        if (this.props.values !== newProps.values) {
            this.setValues(newProps.values);
        }

        // Handle explicit actions
        if (newProps.actions) {
            // Stop absent actions
            this.props.actions.forEach((action) => {
                if (newProps.actions.indexOf(action) === -1) {
                    for (let key in this.flow.activeActions) {
                        if (this.flow.activeActions.hasOwnProperty(key) && this.flow.activeActions[key].parentId === action.id) {
                            this.flow.activeActions[key].stop();
                        }
                    }
                }
            });

            // Start new actions
            newProps.actions.forEach((action) => {
                if (!this.props.actions || this.props.actions && this.props.actions.indexOf(action) === -1) {
                    this.startAction(action);
                }
            });
        } else {
            this.flow.stop();
        }
    }

    setValues(values) {
        if (this.props.behavior) {
            const actions = this.props.behavior(this.flow, values);

            if (actions) {
                if (isArray(actions)) {
                    actions.forEach((action) => this.startAction(action));
                } else {
                    this.startAction(actions);
                }
            } else {
                this.flow.set({ values });
            }
        } else {
            this.flow.set({ values });
        }
    }

    startAction(action) {
        this.flow.connect(action).start(this.props.input);
    }

    render() {
        return this.props.children;
    }

    getNode() {
        const node = ReactDOM.findDOMNode(this);
        return node;
    }
}

Flow.displayName = "Flow";
Flow.propTypes = {
    actions: PropTypes.array,
    behavior: PropTypes.func,
    input: PropTypes.object,
    values: PropTypes.object
};