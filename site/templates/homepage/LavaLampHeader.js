import React from 'react';
import { colorTween, composite, css } from 'popmotion';
import styled from 'styled-components';
import { verticalGradient, MAIN, MAIN_FADE, PURPLE, PURPLE_BURN } from '~/styles/vars';

const Container = styled.div`
  background: ${verticalGradient(MAIN_FADE, MAIN)};
  padding: 75px;
  text-align: center;
`;

export default class extends React.Component {
  componentDidMount() {
    const renderer = css(this.containerRef);
    const setBackgroundGradient = ({ top, bottom }) => renderer.set('background', verticalGradient(top, bottom));

    this.hueChange = composite({
      top: colorTween({
        from: MAIN,
        to: PURPLE,
        duration: 3000
      }),
      bottom: colorTween({
        from: MAIN_FADE,
        to: PURPLE_BURN,
        duration: 3000
      })
    }, {
      onUpdate: setBackgroundGradient
    }).start();
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