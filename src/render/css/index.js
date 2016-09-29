import value from '../../value/value';
import valueGroup from '../../value/value-group';
import render from './render';
import onFrameRender from '../../framesync';
import types from './value-types';

export default function renderCSS(element, values, disableHardwareAcceleration) {
  const valuesWithTypes = {};

  for (let key in values) {
    valuesWithTypes[key] = value();
  }

  const group = valueGroup(valuesWithTypes);
  const renderer = render(element, disableHardwareAcceleration);

  group.addListener((v) => onFrameRender(renderer(v)));

  group.__immediateRender = () => { 
    renderer(group.state);
    return group;
  };

  return group;
}

box.color = '#f00';

const box = css(document.getElementByTag('header'), {

});

box.set({
  color: '#f00'
});

box.color.red.set(0)

