import React from "react";

import { storiesOf } from "@storybook/react";

import { PoseDOM, PoserFLIP, PoserPassive, PoseDrag } from "./plugins/pose";
import {
  ReactPose,
  ReactPoseChildren,
  Group,
  EmailList
} from "./plugins/react-pose";

storiesOf("Plugin: Pose", module)
  .add("pose", () => <PoseDOM />)
  .add("pose flip", () => <PoserFLIP />)
  .add("passive values", () => <PoserPassive />)
  .add("drag", () => <PoseDrag />);

storiesOf("Plugin: React Pose", module)
  .add("pose", () => <ReactPose />)
  .add("children", () => <ReactPoseChildren />)
  .add("group", () => <Group />)
  .add("email list", () => <EmailList />);

// import { Decay, DecayModifyTarget, DecayPower, DecayTimeConstant } from './decay';
// import { Keyframes, KeyframesDuration, KeyframesLoop, KeyframesLinear, KeyframesTimes } from './keyframes';
// import { PhysicsVelocity, PhysicsAcceleration, PhysicsFriction, PhysicsSpring, PhysicsChangeSpringTarget } from './physics';
// import { TweenBasic, TweenLoop, TweenYoyo, TweenFlip, TweenWithVelocity } from './tween';
// import { Spring, SpringVelocity, SpringHeavier, SpringStiffer, SpringStifferDamping } from './spring';
// import { Drag, DragWithDeltaPointer, Multitouch } from './pointer';
// import { TimelineTest } from './timeline';
// import { Chain, Composite, Delay, Crossfade, Merge, Parallel, Stagger } from './compositors';
//import { DraggableDOM, DraggableReact } from './plugins/draggable';
//import { SpinnableDOM, SpinnableReact } from './plugins/spinnable';
//import { PopmotionReact } from './plugins/react';

// storiesOf('decay', module)
// .add('default decay', () => <Decay />)
// .add('modify target', () => <DecayModifyTarget />)
// .add('increased power', () => <DecayPower />)
// .add('increased time constant', () => <DecayTimeConstant />);

// storiesOf('keyframes', module)
// .add('default keyframes', () => <Keyframes />)
// .add('linear easing', () => <KeyframesLinear />)
// .add('longer duration', () => <KeyframesDuration />)
// .add('loop', () => <KeyframesLoop />)
// .add('relative times', () => <KeyframesTimes />);

// storiesOf('physics', module)
// .add('constant velocity', () => <PhysicsVelocity />)
// .add('acceleration', () => <PhysicsAcceleration />)
// .add('friction', () => <PhysicsFriction />)
// .add('spring to', () => <PhysicsSpring />)
// .add('change spring target', () => <PhysicsChangeSpringTarget />);

// storiesOf('spring', module)
// .add('basic spring', () => <Spring />)
// .add('increased velocity', () => <SpringVelocity />)
// .add('increased mass', () => <SpringHeavier />)
// .add('increased stiffness', () => <SpringStiffer />)
// .add('increased stiffness and damping', () => <SpringStifferDamping />);

// storiesOf('tween', module)
// .add('default props', () => <TweenBasic />)
// .add('loop', () => <TweenLoop />)
// .add('yoyo', () => <TweenYoyo />)
// .add('flip', () => <TweenFlip />)
// .add('track velocity', () => <TweenWithVelocity />);

// storiesOf('pointer', module)
// .add('drag', () => <Drag />)
// .add('drag with delta pointer', () => <DragWithDeltaPointer />)
// .add('multitouch', () => <Multitouch />);

// storiesOf('compositors', module)
// .add('chain', () => <Chain />)
// .add('composite', () => <Composite />)
// .add('crossfade', () => <Crossfade />)
// .add('delay', () => <Delay />)
// .add('merge', () => <Merge />)
// .add('parallel', () => <Parallel />)
// .add('stagger', () => <Stagger />);

// storiesOf('timeline', module)
// .add('timeline', () => <TimelineTest />);

// Commented as there's currently a "Recursion in resolving" error with plugins calling popmotion
// storiesOf('Plugin: Draggable', module)
// .add('draggable', () => <DraggableDOM />)
// .add('draggable React', () => <DraggableReact />);

// storiesOf('Plugin: Spinnable', module)
// .add('spinnable', () => <SpinnableDOM />)
// .add('spinnable React', () => <SpinnableReact />);

// storiesOf('Plugin: React', module)
// .add('react', () => <PopmotionReact />)
