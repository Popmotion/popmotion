import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Worklet from './worklet';

storiesOf('worklet', module).add('tween', () => <Worklet.Tween />);
