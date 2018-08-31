import React from "react";

import { storiesOf } from "@storybook/react";

import {
  PoseDOM,
  PoserFLIP,
  PoserPassive,
  PoseDrag,
  PoseHover,
  PoserManualValues,
  PoseOpacity,
  PoseFocus,
  PoseFullScreenFlip,
  PoseClick,
  UnitTypeError,
  Auto
} from "./plugins/pose";
import {
  ReactPose,
  ReactPoseChildren,
  Group,
  EmailList,
  UserPoseInPoseGroup,
  PoseKey,
  PoseKeyFail,
  Hover,
  Filter,
  DragChildren,
  SingleFilter
} from "./plugins/react-pose";

storiesOf("Plugin: Pose", module)
  .add("pose", () => <PoseDOM />)
  .add("pose flip", () => <PoserFLIP />)
  .add("passive values", () => <PoserPassive />)
  .add("manual values", () => <PoserManualValues />)
  .add("drag", () => <PoseDrag />)
  .add("hover", () => <PoseHover />)
  .add("focus", () => <PoseFocus />)
  .add("click", () => <PoseClick />)
  .add("opacity", () => <PoseOpacity />)
  .add("width/height auto", () => <Auto />)
  .add("full screen flip", () => <PoseFullScreenFlip />)
  .add("unit type error", () => <UnitTypeError />);

storiesOf("Plugin: React Pose", module)
  .add("pose", () => <ReactPose />)
  .add("children", () => <ReactPoseChildren />)
  .add("group", () => <Group />)
  .add("email list", () => <EmailList />)
  .add("user-defined poses within PoseGroup", () => <UserPoseInPoseGroup />)
  .add("pose key test", () => <PoseKey />)
  .add("hover", () => <Hover />)
  .add("image filter", () => <Filter />)
  .add("pose key fail test", () => <PoseKeyFail />)
  .add("drag w/ children", () => <DragChildren />)
  .add("single filter", () => (
    <SingleFilter
      src="https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/5b4a5c2d88251b376ea105c1/5b4ae647575d1fa91f1f2def/1531635336765/DSCF2959.jpg?format=1500w"
      height="300"
    />
  ));

// import { Decay, DecayModifyTarget, DecayPower, DecayTimeConstant } from './decay';
// import { Keyframes, KeyframesDuration, KeyframesLoop, KeyframesLinear, KeyframesTimes } from './keyframes';
// import { PhysicsVelocity, PhysicsAcceleration, PhysicsFriction, PhysicsSpring, PhysicsChangeSpringTarget } from './physics';
import {
  TweenBasic,
  TweenLoop,
  TweenYoyo,
  TweenFlip,
  TweenWithVelocity
} from "./tween";
// import { Spring, SpringVelocity, SpringHeavier, SpringStiffer, SpringStifferDamping } from './spring';
// import { TimelineTest } from './timeline';
// import { Chain, Composite, Delay, Crossfade, Merge, Parallel, Stagger } from './compositors';
//import { DraggableDOM, DraggableReact } from './plugins/draggable';
// import { SpinnableDOM } from "./plugins/spinnable";
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

import {
  AnimateText,
  TextPoseGroup,
  ExternalPoser,
  ViaPoseProp
} from "./plugins/text";
storiesOf("SplitText", module)
  .add("animate text", () => <AnimateText />)
  .add("pose group", () => <TextPoseGroup />)
  .add("external poser", () => <ExternalPoser />)
  .add("via pose prop", () => <ViaPoseProp />);

storiesOf("tween", module)
  .add("default props", () => <TweenBasic />)
  .add("loop", () => <TweenLoop />)
  .add("yoyo", () => <TweenYoyo />)
  .add("flip", () => <TweenFlip />)
  .add("track velocity", () => <TweenWithVelocity />);

import { Drag, DragWithDeltaPointer, Multitouch } from "./pointer";
storiesOf("pointer", module)
  .add("drag", () => <Drag />)
  .add("drag with delta pointer", () => <DragWithDeltaPointer />)
  .add("multitouch", () => <Multitouch />);

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

// storiesOf("Plugin: Spinnable", module).add("spinnable", () => <SpinnableDOM />);

// storiesOf('Plugin: React', module)
// .add('react', () => <PopmotionReact />)
