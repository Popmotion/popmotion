import React from 'react';
import { chain, colorTween, composite, css, easing } from 'popmotion';
import styled from 'styled-components';
import { verticalGradient, MAIN, MAIN_FADE, PURPLE, PURPLE_BURN, BLUE, BLUE_BURN, YELLOW, YELLOW_BURN } from '~/styles/vars';

const COLOR_SEGMENT_DURATION = 30000;
const MAIN_COLORS = [MAIN, PURPLE, BLUE, YELLOW];
const BURN_COLORS = [MAIN_FADE, PURPLE_BURN, BLUE_BURN, YELLOW_BURN];

const Container = styled.div`
  background: ${verticalGradient(MAIN_FADE, MAIN)};
  padding: 75px;
  text-align: center;
`;

export default class extends React.Component {
  componentDidMount() {
    const renderer = css(this.containerRef);
    const setBackgroundGradient = ({ top, bottom }) => renderer.set('background', verticalGradient(bottom, top));

    const colorCycle = MAIN_COLORS.map((color, i) => {
      const nextIndex = MAIN_COLORS[i + 1] ? i + 1 : 0;
      const nextColor = MAIN_COLORS[nextIndex];
      const burnColor = BURN_COLORS[i];
      const nextBurnColor = BURN_COLORS[nextIndex];

      return composite({
        top: colorTween({
          from: color,
          to: nextColor,
          duration: COLOR_SEGMENT_DURATION,
          ease: easing.linear
        }),
        bottom: colorTween({
          from: burnColor,
          to: nextBurnColor,
          duration: COLOR_SEGMENT_DURATION,
          ease: easing.linear
        })
      }).output(setBackgroundGradient);
    });

    this.hueChange = chain(colorCycle).start();
  }

  componentWillUnmount() {
    if (this.hueChange) this.hueChange.stop();
  }

  setRef = (ref) => this.containerRef = ref;

  render() {
    const { children } = this.props;
    return (
      <Container innerRef={this.setRef}>
        {children}
      </Container>
    );
  }
}