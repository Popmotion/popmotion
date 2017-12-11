import React from 'react';
import value from 'popmotion/reactions/value';

export class MotionValue extends React.Component {
  static defaultProps = {
    v: 0
  };

  constructor(props) {
    super(props);

    const { v, onStateChange, initialState } = props;

    const isCompositeValue = (typeof v !== 'number');

    this.value = value(v);
    this.valueState = initialState;
    this.state = {
      v,
      setRef: (ref) => {
        if (ref !== null) this.ref = ref;
      },
      velocity: this.value.getVelocity(),
      state: this.valueState,
      setStateTo: onStateChange ? Object.keys(onStateChange)
        .reduce((acc, key) => {
          acc[key] = (arg) => {
            const { state, setStateTo } = this.state;
            const isArgFunction = (typeof arg === 'function');
            const e = isArgFunction ? undefined : arg;
            const onComplete = isArgFunction ? arg : undefined;

            onStateChange[key]({
              value: this.value,
              ref: this.ref,
              previousState: state,
              setStateTo,
              e,
              onComplete
            });

            this.setState({ state: key });
          };
          return acc;
        }, {}) : null
    };
  }

  componentDidMount() {
    const { v, setStateTo, state } = this.state;

    const onValueUpdate = (value) => {
      this.setState({
        v: value,
        velocity: this.value.getVelocity()
      });
    };

    this.value.subscribe(onValueUpdate);

    if (state && setStateTo) setStateTo[state]();
  }

  componentWillReceiveProps(nextProps) {
    const { setStateTo } = this.state;
    const { state } = this.props;

    if (state !== nextProps.state) {
      setStateTo[nextProps.state]();
    }
  }

  transitionGroupLifecycleMethod(method, onComplete) {
    const { setStateTo } = this.state;
    if (setStateTo[method]) setStateTo[method](onComplete);
  }

  componentWillAppear(onComplete) {
    this.transitionGroupLifecycleMethod('componentWillAppear', onComplete);
  }

  componentDidAppear() {
    this.transitionGroupLifecycleMethod('componentDidAppear');
  }

  componentWillEnter(onComplete) {
    this.transitionGroupLifecycleMethod('componentWillEnter', onComplete);
  }

  componentDidEnter() {
    this.transitionGroupLifecycleMethod('componentDidEnter');
  }

  componentWillLeave(onComplete) {
    this.transitionGroupLifecycleMethod('componentWillLeave', onComplete);
  }

  componentDidLeave() {
    this.transitionGroupLifecycleMethod('componentDidLeave');
  }

  componentWillUnmount() {
    if (this.value) this.value.stop();
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}
