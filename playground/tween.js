import React from 'react';
import { BaseAnimation, Box } from './inc';
import tween from '../packages/popmotion/lib/animations/tween';
import value from '../packages/popmotion/lib/reactions/value';
import style from '../packages/popmotion/lib/reactions/style';

export class TweenBasic extends BaseAnimation {
  getAnimation = (styler) => tween({
    loop: Infinity,
    duration: 3000
  }).start((v) => styler.set('opacity', v));
}

export class TweenLoop extends BaseAnimation {
  getAnimation = (styler) => tween({
    from: 50,
    to: 300,
    loop: Infinity,
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class TweenFlip extends BaseAnimation {
  getAnimation = (styler) => tween({
    from: 50,
    to: 300,
    flip: Infinity,
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class TweenYoyo extends BaseAnimation {
  getAnimation = (styler) => tween({
    from: 50,
    to: 300,
    yoyo: Infinity,
    duration: 1000
  }).start((v) => styler.set('x', v));
}

export class TweenWithVelocity extends BaseAnimation {
  getAnimation = (styler) => {
    const val = value(0).subscribe((v) => styler.set('x', v));
    return tween({
      loop: Infinity,
      to: 300,
      duration: 3000
    }).start(val);
  }
}

export class TweenWithStyle extends React.Component {
  setRef = (dom) => {
    if (!dom) return;
    this.dom = dom;
  };

  componentDidMount() {
    tween().start(style(this.dom, 'opacity'));
  }

  componentWillUnmount() {
    this.animation.stop();
  }

  render() {
    return <Box innerRef={this.setRef} />;
  }
}
