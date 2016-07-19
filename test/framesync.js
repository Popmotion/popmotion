import chai from 'chai';

import onNextFrame from '../src/framesync/on-next-frame';
import { onNextUpdate, onNextRender } from '../src/framesync/loop';
import coreTimer from '../src/framesync/core-timer';

const { expect } = chai;

describe('onNextFrame()', () => {
  it('should fire a callback', (done) => {
    onNextFrame(() => done());
  });

  it('should provide a framestamp to the callback', (done) => {
    onNextFrame((framestamp) => {
      if (typeof framestamp === 'number') {
        done();
      }
    });
  });
});

describe('onNextUpdate()', () => {
  it('should activate loop and fire a callback', (done) => {
    onNextUpdate(() => done());
  });
});

describe('onNextRender()', () => {
  it('should activate loop and fire a callback', (done) => {
    onNextRender(() => done());
  });

  it('should fire after `onUpdate`, in the same frame', (done) => {
    onNextUpdate((updateElapsed) => onNextRender((renderElapsed) => done((updateElapsed === renderElapsed) ? null : new Error())));
  });
});

describe('coreTimer', () => {
  coreTimer.current = 0;

  it('should have a default dilation of 1', () => {
    expect(coreTimer.dilation).to.equal(1);
  });

  it('should increase `current` by `framestamp`', () => {
    coreTimer.update(10);
    expect(coreTimer.current).to.equal(10);
  });

  it('should make elapsed `framestamp` * `dilation`', () => {
    coreTimer.dilation = 2;
    coreTimer.update(20);
    expect(coreTimer.elapsed).to.equal(20);
  });
});
