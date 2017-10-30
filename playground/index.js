import React from 'react';

import { storiesOf } from '@storybook/react';

import { Decay, DecayModifyTarget, DecayPower, DecayTimeConstant } from './decay';
import { Keyframes, KeyframesDuration, KeyframesLoop, KeyframesLinear, KeyframesTimes } from './keyframes';
import { PhysicsVelocity, PhysicsAcceleration, PhysicsFriction, PhysicsSpring, PhysicsChangeSpringTarget } from './physics';
import { TweenBasic, TweenLoop, TweenYoyo, TweenFlip, TweenWithVelocity } from './tween';
import { Spring, SpringVelocity, SpringHeavier, SpringStiffer, SpringStifferDamping } from './spring';
import { Drag } from './pointer';


storiesOf('decay', module)
.add('default decay', () => <Decay />)
.add('modify target', () => <DecayModifyTarget />)
.add('increased power', () => <DecayPower />)
.add('increased time constant', () => <DecayTimeConstant />);

storiesOf('keyframes', module)
.add('default keyframes', () => <Keyframes />)
.add('linear easing', () => <KeyframesLinear />)
.add('longer duration', () => <KeyframesDuration />)
.add('loop', () => <KeyframesLoop />)
.add('relative times', () => <KeyframesTimes />);

storiesOf('physics', module)
.add('constant velocity', () => <PhysicsVelocity />)
.add('acceleration', () => <PhysicsAcceleration />)
.add('friction', () => <PhysicsFriction />)
.add('spring to', () => <PhysicsSpring />)
.add('change spring target', () => <PhysicsChangeSpringTarget />);

storiesOf('spring', module)
.add('basic spring', () => <Spring />)
.add('increased velocity', () => <SpringVelocity />)
.add('increased mass', () => <SpringHeavier />)
.add('increased stiffness', () => <SpringStiffer />)
.add('increased stiffness and damping', () => <SpringStifferDamping />);

storiesOf('tween', module)
.add('default props', () => <TweenBasic />)
.add('loop', () => <TweenLoop />)
.add('yoyo', () => <TweenYoyo />)
.add('flip', () => <TweenFlip />)
.add('track velocity', () => <TweenWithVelocity />);

storiesOf('pointer', module)
.add('drag', () => <Drag />);