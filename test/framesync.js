import chai from 'chai';

import onNextFrame from '../src/framesync/on-next-frame';
import {
  onFrameStart,
  onFrameUpdate,
  onFrameRender,
  onFrameEnd
} from '../src/framesync/render-loop';
import createRenderStep from '../src/framesync/create-render-step';

const { expect } = chai;
const noop = () => {};

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

describe('createRenderStep()', () => {
  it('should create a render step with schedule, cancel and process methods', () => {
    const renderStep = createRenderStep();
    expect(renderStep.schedule).to.be.a('function');
    expect(renderStep.cancel).to.be.a('function');
    expect(renderStep.process).to.be.a('function');
  });

  it('should run a provided method when scheduled', (done) => {
    const renderStep = createRenderStep(noop);
    renderStep.schedule(() => done());
    renderStep.process();
  });

  it('should not run a provided method if cancelled', (done) => {
    let counter = 0;
    const incrementCounter = () => counter++;
    const renderStepA = createRenderStep(noop);
    const renderStepB = createRenderStep(noop);

    renderStepA.schedule(incrementCounter);
    renderStepB.schedule(() => {
      if (counter === 0) {
        done();
      }
    });
    renderStepA.cancel(incrementCounter);
    renderStepA.process();
    renderStepB.process();
  });

  it('should not run a scheduled method more than once', () => {
    let counter = 0;
    const incrementCounter = () => counter++;
    const renderStepA = createRenderStep(noop);
    renderStepA.schedule(incrementCounter);
    renderStepA.process();
    renderStepA.process();
    renderStepA.process();
    expect(counter).to.equal(1);
  });
});

describe('render loop', () => {
  it('should run render steps in specified order', (done) => {
    let counter = 0;
    onFrameStart(() => {
      counter += 1;
      expect(counter).to.equal(1);
    });
    onFrameUpdate(() => {
      counter += 2;
      expect(counter).to.equal(3);
    });
    onFrameRender(() => {
      counter += 4;
      expect(counter).to.equal(7);
    });
    onFrameEnd(() => {
      counter += 5;
      if (counter === 12) {
        done();
      }
    });
  });
});
