import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Animate from './animate';
// import * as Worklet from './worklet';

// storiesOf('worklet', module).add('tween', () => <Worklet.Tween />);

storiesOf('animate', module).add('keyframes', () => <Animate.Keyframes />);
// .add('decay', () => <Animate.Decay />)
// .add('spring', () => <Animate.Spring />);
