import { buildStyleProperty, createStyleBuilder } from '../build-styles';

describe('buildStyleProperty', () => {
  it('Should correctly parse Stylefire style objects into React-style objects', () => {
    expect(buildStyleProperty({ x: 0 })).toEqual({
      transform: 'none'
    });

    expect(buildStyleProperty({ x: 1 })).toEqual({
      transform: 'translateX(1px) translateZ(0)'
    });

    expect(buildStyleProperty({ x: 1 }, false)).toEqual({
      transform: 'translateX(1px)'
    });

    expect(buildStyleProperty({ scale: 1 })).toEqual({
      transform: 'none'
    });

    expect(buildStyleProperty({ scale: 1, x: 100 })).toEqual({
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ backgroundColor: '#fff' })).toEqual({
      backgroundColor: '#fff'
    });

    expect(
      buildStyleProperty({ scale: 1, y: 0, x: 100, width: 100, opacity: 0 })
    ).toEqual({
      width: '100px',
      opacity: 0,
      transform: 'translateX(100px) translateY(0px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ scale: 1, x: 100, originX: 1 })).toEqual({
      transformOrigin: '100% 50% 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ scale: 1, x: 100, originX: 1 })).toEqual({
      transformOrigin: '100% 50% 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(
      buildStyleProperty({ scale: 1, x: 100, originX: 1, originY: 0.5 })
    ).toEqual({
      transformOrigin: '100% 50% 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });
  });

  it('Should correctly interpret progress values as percentages', () => {
    expect(buildStyleProperty({ originX: 0.5, originY: 0.5 })).toEqual({
      transformOrigin: '50% 50% 0'
    });
  });

  it('Should correctly apply `transform` if provided as a template function', () => {
    expect(
      buildStyleProperty({
        x: 100,
        transform: ({ x }, built) => `translateY(${x}) ${built}`
      })
    ).toEqual({
      transform: 'translateY(100px) translateX(100px) translateZ(0)'
    });
  });

  it(`If there's no transform values but a transform template, it still runs`, () => {
    expect(
      buildStyleProperty({
        transform: () => `scale(1)`
      })
    ).toEqual({
      transform: `scale(1)`
    });
  });

  it(`If there are transform values, but they're default, the transform template doesn't receive none`, () => {
    expect(
      buildStyleProperty({
        scale: 1,
        transform: (_, generated) => generated
      })
    ).toEqual({
      transform: `scale(1) translateZ(0)`
    });
  });

  it('should correctly round zIndex', () => {
    expect(buildStyleProperty({ zIndex: 0.5 })).toEqual({
      zIndex: 1
    });
  });
});

describe('createStyleBuilder', () => {
  it('Should return styles using reusable data structures', () => {
    const buildStyles = createStyleBuilder();

    expect(buildStyles({ x: 100 })).toEqual({
      transform: 'translateX(100px) translateZ(0)'
    });

    const a = buildStyles({ x: 200 });
    const b = buildStyles({ x: 300 });

    expect(a).toBe(b);
  });

  it('Return valid CSS', () => {
    const buildStyles = createStyleBuilder();

    expect(buildStyles({ backgroundColor: '#fff' })).toEqual({
      'background-color': '#fff'
    });
  });

  it('Can unset transform template', () => {
    const buildStyles = createStyleBuilder();

    expect(
      buildStyles({
        x: 100,
        transform: ({ x }, built) => `translateY(${x}) ${built}`
      })
    ).toEqual({
      transform: 'translateY(100px) translateX(100px) translateZ(0)'
    });

    expect(
      buildStyles({
        x: 100,
        transform: undefined
      })
    ).toEqual({
      transform: 'translateX(100px) translateZ(0)'
    });
  });
});
