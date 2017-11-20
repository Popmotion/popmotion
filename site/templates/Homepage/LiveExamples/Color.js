import Template from './Template';
import { ColorPanel, AlignCenter } from './styled';
import { GREEN, ACTION, BRAND, ENTITY } from '~/styles/vars';
import { styler, easing, keyframes } from 'popmotion';

const code = `keyframes({
  values: ['${GREEN}', '${ACTION}', '${BRAND}', '${ENTITY}', '${GREEN}'],
  duration: 10000,
  ease: easing.linear,
  loop: Infinity
})`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    this.animation = keyframes({
      values: [GREEN, ACTION, BRAND, ENTITY, GREEN],
      duration: 10000,
      ease: easing.linear,
      loop: Infinity
    }).start(this.boxStyler.set('background'));
  };

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <ColorPanel innerRef={this.startAnimation} />
    );
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
