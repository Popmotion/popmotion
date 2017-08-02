import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DragSingleChild from './react/DragSingleChild';
import TransitionGroup from './react/TransitionGroup';
import Toggle from './popmotion/Toggle';
import SpinnableDom from './spinnable/SpinnableDOM';
import SpinnableSvg from './spinnable/SpinnableSVG';
import Timeline from './timeline/Timeline';
import TimelineStagger from './timeline/TimelineStagger';
import DragXY from './draggable/DragXY';
import Inertia from './Inertia';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('MotionValue').add('Drag single child', () => <DragSingleChild />);
storiesOf('MotionValue').add('React TransitionGroup', () => <TransitionGroup />);
//storiesOf('MotionValue').add('Rotate Three.js Cube', () => <RotateThreeCube />);
storiesOf('MotionValue').add('Toggle state', () => <Toggle />);

// Spinnable
storiesOf('spinnable').add('Spinnable DOM', () => <SpinnableDom />);
storiesOf('spinnable').add('Spinnable SVG', () => <SpinnableSvg />);

// Timeline
storiesOf('timeline').add('Timeline example', () => <Timeline />);
storiesOf('timeline').add('Timeline stagger', () => <TimelineStagger />);

// Draggable
storiesOf('draggable').add('Drag XY', () => <DragXY />);

// Inertia
storiesOf('inertia').add('Throw to inertia', () => <Inertia />);
