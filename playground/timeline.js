import React from 'react';
import timeline from '../packages/popmotion/lib/animations/timeline';
import { styler } from '../packages/popmotion/lib';
import { linear } from '../packages/popmotion/lib/easing';
import { Box } from './inc';

export class TimelineTest extends React.Component {
  setRefs = (ref) => {
    if (!ref) return;
    const [a, b] = ref.querySelectorAll('div');
    const aStyler = styler(a);
    const bStyler = styler(b);

    timeline([
      [
        { track: 'aX', from: 0, to: 100, duration: 1000 },
        { track: 'bX', from: 0, to: 100, duration: 1000 },
        100
      ],
      '+100',
      [
        { track: 'aX', to: 0 },
        { track: 'bX', to: 0 }
      ],
      { track: 'aX', to: 100 },
      '-200',
      { track: 'bX', to: 100 },
    ], {
      loop: Infinity
    }).start(({ aX, bX }) => {
      aStyler.set('x', aX);
      bStyler.set('x', bX);
    });
  };

  render() {
    return (
      <div ref={this.setRefs}>
        <Box />
        <Box />
      </div>
    );
  }
}
