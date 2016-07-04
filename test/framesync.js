import chai from 'chai';

import onNextFrame from '../src/framesync/on-next-frame';

const { expect } = chai;

describe('onNextFrame()', (done) => {
  it('should fire a callback', () => {
    onNextFrame(done);
  });

  it('should provide a framestamp to the callback', (done) => {
    onNextFrame((framestamp) => {
      if (typeof framestamp === 'number') {
        done();
      }
    });
  });
});
