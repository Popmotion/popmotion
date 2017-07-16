import React from 'react';
import styled from 'styled-components';
import { tween, colorTween, value, css } from '../../../lib/popmotion';
import timeline from '../../popmotion-timeline/lib';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;

export default class Timeline extends React.Component {
  setRef = (ref) => {
    if (ref) {
      const renderer = css(ref);
      const rotateY = value(0, (v) => renderer.set('rotateZ', v));
      const x = value(0, (v) => renderer.set('x', v));
      const backgroundColor = value(renderer.get('backgroundColor'), (v) => renderer.set('backgroundColor', v));

      timeline([
        tween({
          to: 400,
          onUpdate: x
        }),
        tween({
          from: 400,
          to: 0,
          onUpdate: x
        }),
        '+200',
        tween({
          to: 400,
          onUpdate: x
        }),
        '-100',
        colorTween({
          from: '#000',
          to: '#0f0',
          onUpdate: backgroundColor
        })
      ]).start();
    }
  };

  render() {
    return (
      <Box innerRef={this.setRef} />
    );
  }
}
