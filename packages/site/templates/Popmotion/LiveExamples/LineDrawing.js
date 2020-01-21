import Template from './Template';
import { AlignCenter } from './styled';
import { easing, styler, physics, tween, value } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const circle = styler(document.querySelector('path.outline'));

tween({ ease: easing.easeIn }).start({
  update: (v) => circle.set({
    opacity: v,
    pathLength: v * 45
  }),
  complete: () => physics({ velocity: -400 })
    .start(circle.set('rotation'))
});`;

class Example extends React.Component {
  setCircleRef = ref => {
    if (!ref) return;
    const circle = styler(ref);
    this.circlePathLength = value(0, v => circle.set('pathLength', v));
    this.circleOpacity = value(0, v => circle.set('opacity', v));
    this.circleRotation = value(0, v => circle.set('rotate', v));
  };

  setTickRef = ref => {
    if (!ref) return;
    const tick = styler(ref);
    this.tickProps = value(
      {
        opacity: 0,
        pathLength: 0
      },
      v => tick.set(v)
    );
  };

  componentDidMount() {
    if (this.props.isVisible) this.startAnimation();
  }

  componentWillReceiveProps({ isVisible: willBeVisible }) {
    const { isVisible } = this.props;
    if (!isVisible && willBeVisible) this.startAnimation();
    if (isVisible && !willBeVisible) this.stopAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation() {
    this.tickProps.update({
      opacity: 0,
      pathLength: 0
    });

    const showTick = () => {
      // Complete outline
      tween({
        from: this.circlePathLength.get(),
        to: 100
      }).start(this.circlePathLength);

      tween({
        to: { opacity: 1, pathLength: 100 }
      }).start(this.tickProps);
    };

    tween({ ease: easing.easeIn }).start({
      update: v => {
        this.circleOpacity.update(v);
        this.circlePathLength.update(v * 45);
      },
      complete: () => physics({ velocity: -400 }).start(this.circleRotation)
    });

    // Emulate data received after delay
    setTimeout(showTick, 2000);
  }

  stopAnimation() {
    this.circleRotation.stop();
  }

  render() {
    return (
      <svg
        width="200"
        height="200"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          strokeWidth="2"
          stroke="#14D790"
          fill="none"
          transform="translate(1, 1.2)"
        >
          <path
            ref={this.setCircleRef}
            d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
            opacity="0"
          />
          <path
            ref={this.setTickRef}
            d="M6.173 16.252l5.722 4.228 9.22-12.69"
            opacity="0"
          />
        </g>
      </svg>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template
    code={code}
    codepen="https://codepen.io/popmotion/pen/yPxNao?editors=0010"
  >
    <AlignCenter>
      <Example isVisible={isVisible} />
    </AlignCenter>
  </Template>
));
