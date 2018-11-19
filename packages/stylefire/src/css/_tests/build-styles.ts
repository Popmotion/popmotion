import { buildStyleProperty, buildStyleString } from '../build-styles';

describe('buildStyleProperty', () => {
  it('Should correctly parse Stylefire style objects into React-style objects', () => {
    expect(buildStyleProperty({ x: 0 })).toEqual({
      transform: 'none'
    });

    expect(buildStyleProperty({ x: 1 })).toEqual({
      transform: 'translateX(1px) translateZ(0)'
    });

    expect(buildStyleProperty({ x: 1 }, false)).toEqual({
      transform: 'translateX(1px) '
    });

    expect(buildStyleProperty({ scale: 1 })).toEqual({
      transform: 'none'
    });

    expect(buildStyleProperty({ scale: 1, x: 100 })).toEqual({
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(
      buildStyleProperty({ scale: 1, y: 0, x: 100, width: 100, opacity: 0 })
    ).toEqual({
      width: '100px',
      opacity: 0,
      transform: 'translateX(100px) translateY(0px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ scale: 1, x: 100, originX: 100 })).toEqual({
      transformOrigin: '100% 0 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(buildStyleProperty({ scale: 1, x: 100, originX: 100 })).toEqual({
      transformOrigin: '100% 0 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });

    expect(
      buildStyleProperty({ scale: 1, x: 100, originX: 100, originY: 50 })
    ).toEqual({
      transformOrigin: '100% 50% 0',
      transform: 'translateX(100px) scale(1) translateZ(0)'
    });
  });
});

describe('buildStyleString', () => {
  it('Should take style objects and convert changed values into style strings', () => {
    const styleString = buildStyleString();

    expect(styleString({ x: 100 })).toEqual(
      ';transform:translateX(100px) translateZ(0)'
    );
    expect(styleString({ x: 100 })).toEqual('');
    expect(styleString({ x: 100 })).toEqual('');
    expect(styleString({ x: 0 })).toEqual(';transform:none');
    expect(styleString({ x: 0 })).toEqual('');
    expect(
      styleString({ scale: 1, x: 100, opacity: 0.5, originX: 100, originY: 50 })
    ).toEqual(
      ';transform:translateX(100px) scale(1) translateZ(0);opacity:0.5;transform-origin:100% 50% 0'
    );
    expect(styleString({ opacity: 1, backgroundColor: '#fff' })).toEqual(
      ';transform:none;opacity:1;background-color:#fff'
    );
  });
});
