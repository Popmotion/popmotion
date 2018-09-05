import React from 'react';
import posed from '../posed';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });

test('posed', () => {
  const Test = posed.div();

  const wrapper = mount(<Test pose="init" />);
  expect(wrapper.props().pose).toBe('init');
});
