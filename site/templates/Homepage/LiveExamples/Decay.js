import Template from './Template';
import { Ball, Carousel, Item, VerticalCenter } from './styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';

const code = `const slider = document.querySelector('.slider');
const sliderX = value(0, styler(slider).set('x'))

listen(slider, 'mousedown touchstart').start(() => {
  pointer({ x: sliderX.get() })
    .pipe(({ x }) => x, clampMovement)
    .start(sliderX);
});
  
listen(document, 'mouseup touchend').start(() => {
  decay({
    from: sliderX.get(),
    velocity: sliderX.getVelocity()
  }).pipe(clampMovement)
    .start(sliderX);
});`;

const generateItems = () => {
  const renderedItems = [];
  for (let i = 0; i < 30; i++) {
    renderedItems.push(<Item />);
  }
  return renderedItems;
};

const items = generateItems();

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    const sliderStyler = styler(ref);
    this.sliderX = value(0, sliderStyler.set('x'));
    const sliderWidth = ref.lastChild.offsetLeft + ref.lastChild.offsetWidth;
    const clampMovement = transform.clamp(- (sliderWidth - ref.offsetWidth), 0);
    
    listen(ref, 'mousedown touchstart')
      .start(() => pointer({ x: this.sliderX.get() })
        .pipe(({ x }) => x, clampMovement)
        .start(this.sliderX)
      );

    listen(document, 'mouseup touchend')
      .start(() => decay({
        from: this.sliderX.get(),
        velocity: this.sliderX.getVelocity()
      }).pipe(clampMovement).start(this.sliderX)
    );
  }

  componentWillUnmount() {
    this.sliderX && this.sliderX.stop();
  }

  render() {
    return (
      <Carousel innerRef={this.startAnimation}>
        {items}
      </Carousel>
    );
  }
}

export default () => (
  <Template code={code}>
    <VerticalCenter>
      <Example />
    </VerticalCenter>
  </Template>
);
