import build from '../build-styles';

describe('buildStylesProperty', () => {
  it('Should correctly parse Stylefire style objects into React-style', () => {
    expect(build({ x: 0 })).toEqual({});

    expect(build({ x: 1 })).toEqual({
      transform: 'translateX(1px) translateZ(0)'
    });

    expect(build({ x: 1 }, false)).toEqual({
      transform: 'translateX(1px) '
    });

    expect(build({ scale: 1 })).toEqual({});

    expect(build({ scale: 1, x: 100 })).toEqual({
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(build({ scale: 1, y: 0, x: 100, width: 100, opacity: 0 })).toEqual({
      width: '100px',
      opacity: 0,
      transform: 'translateX(100px) translateY(0px) scale(1) translateZ(0)'
    });

    expect(build({ scale: 1, x: 100, originX: 100 })).toEqual({
      transformOrigin: '100% 0 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(build({ scale: 1, x: 100, originX: 100 })).toEqual({
      transformOrigin: '100% 0 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(build({ scale: 1, x: 100, originX: 100, originY: 50 })).toEqual({
      transformOrigin: '100% 50% 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });
  });
});
