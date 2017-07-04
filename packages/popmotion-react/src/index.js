import React from 'react';
import { value, composite } from 'popmotion';

export class MotionValue extends React.Component {
  static defaultProps = {
    v: 0
  };

  constructor(props) {
    super(props);

    const { v, onStateChange, initialState } = props;

    const isCompositeValue = (typeof v !== 'number');

    this.valueState = initialState;
    this.state = {
      isCompositeValue,
      v,
      velocity: !isCompositeValue ? 0 : Object.keys(v)
        .reduce((acc, key) => {
          acc[key] = 0;
          return acc;
        }, {}),
      setStateTo: onStateChange ? Object.keys(onStateChange)
        .reduce((acc, key) => {
          acc[key] = (e) => onStateChange[key](this.value, this.valueState, this.state.setStateTo, e);
          this.valueState = key;
          return acc;
        }, {}) : null
    };
  }

  componentDidMount() {
    const { initialState } = this.props;
    const { v, isCompositeValue, setStateTo } = this.state;

    const onValueUpdate = (value) => {
      this.setState({
        v: value,
        velocity: this.value.getVelocity()
      });
    };

    this.value = !isCompositeValue
      ? value(v, onValueUpdate)
      : composite(
        Object.keys(v).reduce((acc, key) => {
          acc[key] = value(v[key]);
          return acc;
        }, {}),
        {
          onUpdate: onValueUpdate
        }
      );

    if (initialState && setStateTo) setStateTo[initialState](this.value, initialState, setStateTo);
  }

  componentWillReceiveProps(nextProps) {
    const { setStateTo } = this.state;
    const { state, onStateChange } = this.props;

    if (state !== nextProps.state) {
      onStateChange[nextProps.state](this.value, this.valueState, setStateTo);
      this.valueState = nextProps.state;
    }
  }

  componentWillUnmount() {
    if (this.value) this.value.stop();
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}
