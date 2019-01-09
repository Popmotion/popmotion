import { buildStyleProperty, createStyleBuilder } from '../build-styles';

describe('buildStyleProperty', () => {
  it('Should correctly parse Stylefire style objects into React-style objects', () => {
    expect(buildStyleProperty({ x: 0 })).toEqual({
      '-webkit-transform': 'none'
    });

    expect(buildStyleProperty({ x: 1 })).toEqual({
      '-webkit-transform': 'translateX(1px) translateZ(0)'
    });

    expect(buildStyleProperty({ x: 1 }, false)).toEqual({
      '-webkit-transform': 'translateX(1px)'
    });

    expect(buildStyleProperty({ scale: 1 })).toEqual({
      '-webkit-transform': 'none'
    });

    expect(buildStyleProperty({ scale: 1, x: 100 })).toEqual({
      '-webkit-transform': 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(
      buildStyleProperty({ scale: 1, y: 0, x: 100, width: 100, opacity: 0 })
    ).toEqual({
      width: '100px',
      opacity: 0,
      '-webkit-transform':
        'translateX(100px) translateY(0px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ scale: 1, x: 100, originX: 100 })).toEqual({
      '-webkit-transform-origin': '100% 0 0',
      '-webkit-transform': 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ scale: 1, x: 100, originX: 100 })).toEqual({
      '-webkit-transform-origin': '100% 0 0',
      '-webkit-transform': 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(
      buildStyleProperty({ scale: 1, x: 100, originX: 100, originY: 50 })
    ).toEqual({
      '-webkit-transform-origin': '100% 50% 0',
      '-webkit-transform': 'translateX(100px) scale(1) translateZ(0)'
    });
  });
});

describe('createStyleBuilder', () => {
  it('Should return styles using reusable data structures', () => {
    const buildStyles = createStyleBuilder();

    expect(buildStyles({ x: 100 })).toEqual({
      '-webkit-transform': 'translateX(100px) translateZ(0)'
    });

    const a = buildStyles({ x: 200 });
    const b = buildStyles({ x: 300 });

    expect(a).toBe(b);
  });
});
