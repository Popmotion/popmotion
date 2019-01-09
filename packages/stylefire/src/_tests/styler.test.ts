import '../../jest.setup';
import styler from '../';

describe('styler', () => {
  test('css', () => {
    const div = document.createElement('div');

    const divStyler = styler(div);

    divStyler.set({ x: 0 });
    divStyler.render();

    expect(div).toHaveStyle('-webkit-transform: none');

    divStyler.set({ x: 100 });
    divStyler.render();

    expect(div).toHaveStyle(
      '-webkit-transform: translateX(100px) translateZ(0)'
    );

    divStyler.set({ scale: 1 });
    expect(div).toHaveStyle(
      '-webkit-transform: translateX(100px) translateZ(0)'
    );
    divStyler.render();

    expect(div).toHaveStyle(
      '-webkit-transform: translateX(100px) scale(1) translateZ(0)'
    );
  });

  test('css - disable hardware acceleration', () => {
    const div = document.createElement('div');

    const divStyler = styler(div, { enableHardwareAcceleration: false });

    divStyler.set({ x: 100 });
    divStyler.render();

    expect(div).toHaveStyle('-webkit-transform: translateX(100px)');
  });

  test('css - custom -webkit-transform', () => {
    const div = document.createElement('div');

    const divStyler = styler(div);

    divStyler.set({
      x: 100,
      '-webkit-transform': ({ x }) => `translateY(${x})`
    });

    divStyler.render();

    expect(div).toHaveStyle('-webkit-transform: translateY(100px)');
  });

  test('css - -webkit-transform origin', () => {
    const div = document.createElement('div');

    const divStyler = styler(div);

    divStyler.set({
      originY: '100%'
    });

    divStyler.render();

    expect(div).toHaveStyle('-webkit-transform-origin: 0 100%');
  });

  test('-webkit-transform as string', () => {
    const div = document.createElement('div');

    const divStyler = styler(div);

    divStyler.set({
      '-webkit-transform': 'rotateX(90deg)'
    });

    divStyler.render();

    expect(div).toHaveStyle('-webkit-transform: rotateX(90deg)');
  });
});
