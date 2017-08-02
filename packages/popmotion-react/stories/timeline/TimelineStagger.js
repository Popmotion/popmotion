import React from 'react';
import styled from 'styled-components';
import { tween, value, css } from '../../../../lib/popmotion';
import timeline from '../../../popmotion-timeline/lib';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;

export default class Timeline extends React.Component {
  componentDidMount() {
    timeline([
      this.xSetters.map((setX) => tween({
        from: 0,
        to: 400,
        onUpdate: setX
      })),
      [
        ...this.xSetters.map((setX) => tween({
          from: 400,
          to: 0,
          onUpdate: setX
        })),
        50
      ]
    ]).start();
  }

  setRef = (ref) => {
    this.xSetters = this.xSetters || [];
    if (ref) {
      const renderer = css(ref);
      const x = value(0, (v) => renderer.set('x', v));
      this.xSetters.push(x);
    }
  };

  render() {
    return (
      <div>
        <Box innerRef={this.setRef} />
        <Box innerRef={this.setRef} />
        <Box innerRef={this.setRef} />
        <Box innerRef={this.setRef} />
      </div>
    );
  }
}
