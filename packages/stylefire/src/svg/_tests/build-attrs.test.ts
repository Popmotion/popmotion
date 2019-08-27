import { createAttrBuilder } from '../build';

const dimensions = {
  x: 100,
  y: 100,
  width: 50,
  height: 50
};

test('should correctly create SVG attrs', () => {
  const build = createAttrBuilder(dimensions);

  const { style, ...attrs } = build({
    x: 1,
    y: 2,
    cx: 0,
    translateX: 3,
    translateY: 4,
    scale: 2,
    rotate: 90,
    originX: 1,
    originY: 2,
    limitingConeAngle: 100,
    alignmentBaseline: 'bottom'
  });

  expect(style).toEqual({
    transform: 'translateX(3px) translateY(4px) scale(2) rotate(90deg)',
    transformOrigin: '150px 200px'
  });

  expect(attrs).toEqual({
    cx: 0,
    x: 1,
    y: 2,
    limitingConeAngle: 100,
    'alignment-baseline': 'bottom'
  });

  const { style: rotateStyle } = build({ rotate: 90 });
  expect(rotateStyle).toEqual({
    transform: 'rotate(90deg)',
    transformOrigin: '125px 125px'
  });

  const buildPath = createAttrBuilder(dimensions, 400);
  const pathAttrs = buildPath({
    pathLength: 0.25,
    pathSpacing: 0.5,
    pathOffset: 0.75
  });

  expect(pathAttrs).toEqual({
    'stroke-dasharray': '100px 200px',
    'stroke-dashoffset': '-300px',
    style: {}
  });

  const buildProps = createAttrBuilder(dimensions, 400, false);

  const props = buildProps({
    strokeWidth: 1,
    alignmentBaseline: 'bottom',
    pathLength: 0.25,
    pathSpacing: 0.5,
    pathOffset: 0.75
  });

  expect(props).toEqual({
    strokeWidth: 1,
    alignmentBaseline: 'bottom',
    strokeDasharray: '100px 200px',
    strokeDashoffset: '-300px',
    style: {}
  });
});
