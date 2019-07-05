import React, { useEffect, useRef } from 'react';
import { BaseAnimation } from './inc';
import { tween, value, chain, delay } from '../packages/popmotion/lib';
import { wrap, distance } from '../packages/popcorn/lib';
import styler from '../packages/stylefire/lib';

export class TweenBasic extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 'radial-gradient(circle at 50% 100%, #e66465, #9198e5)',
      to: 'radial-gradient(circle at 50% 0%, #e66465, #9198e5)',
      loop: Infinity,
      duration: 3000
    }).start(v => styler.set('background-image', v));
}

export class TweenLoop extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 0,
      to: 300,
      loop: Infinity,
      duration: 1000,
      repeatDelay: 1000
    }).start(v => styler.set('x', v));
}

export class TweenFlip extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 0,
      to: 300,
      flip: Infinity,
      duration: 1000,
      repeatDelay: 1000
    }).start(v => styler.set('x', v));
}

export class TweenYoyo extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 0,
      to: 300,
      yoyo: Infinity,
      duration: 1000,
      repeatDelay: 1000
    }).start(v => {
      styler.set('x', v);
    });
}

export class TweenWithVelocity extends BaseAnimation {
  getAnimation = styler => {
    const val = value(0).subscribe(v => styler.set('x', v));
    return tween({
      loop: Infinity,
      to: 300,
      duration: 3000
    }).start(val);
  };
}

const count = 100;
const len = Math.floor(Math.sqrt(count));
const max = Math.hypot(len, len);
const col = wrap(0, len);
const row = i => Math.floor(i / len);
const stagger = 0.1;

const Cell = ({ i }) => {
  const ref = useRef(null);
  const x = col(i);
  const y = row(i);
  const d = distance({ x, y }, { x: len / 2, y: len / 2 });
  const n = Math.max(d / max, 0.05);

  useEffect(() => {
    const s = styler(ref.current);
    s.set();

    chain(
      delay(d * stagger),
      tween({
        from: 1,
        to: Math.min(1, 0.2 + n),
        duration: 500,
        yoyo: Infinity,
        repeatDelay: 1000
      })
    ).start(v => s.set('scale', v));
    chain(
      delay(d * stagger),
      tween({
        from: 0,
        to: Math.max(0, (0.5 - n) * 50),
        duration: 500,
        yoyo: Infinity,
        repeatDelay: 1000
      })
    ).start(v => s.set('y', v));
    chain(
      delay(d * stagger),
      tween({
        from: 1,
        to: 0.5,
        duration: 500,
        yoyo: Infinity,
        repeatDelay: 1000
      })
    ).start(v => s.set('opacity', v));
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div
        ref={ref}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '50%',
          background: 'black'
        }}
        key={`cell_${i}`}
      />
    </div>
  );
};

export class TweenRepeat extends React.Component {
  cells() {
    return Array.from(Array(count).keys()).map(i => {
      return <Cell key={i} i={i} />;
    });
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${len}, 1fr)`,
          gridGap: 8,
          height: 320,
          width: 320,
          margin: '32px auto'
        }}
      >
        {' '}
        {this.cells()}
      </div>
    );
  }
}
