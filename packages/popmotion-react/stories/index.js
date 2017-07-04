import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DragSingleChild from './DragSingleChild';
import RotateThreeCube from './RotateThreeCube';
import Toggle from './Toggle';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('MotionValue').add('Drag single child', () => <DragSingleChild />);
storiesOf('MotionValue').add('Rotate Three.js Cube', () => <RotateThreeCube />);
storiesOf('MotionValue').add('Toggle state', () => <Toggle />);

