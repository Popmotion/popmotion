import chai from 'chai';
import Action from '../src/simple-actions/Action';

const expect = chai.expect;

describe('Action', () => {
  const testAction = new Action();

  it('should have correct methods', () => {
    expect(testAction).to.have.a.property('start').that.is.a('function');
    expect(testAction).to.have.a.property('stop').that.is.a('function');
    expect(testAction).to.have.a.property('update').that.is.a('function');
    expect(testAction).to.have.a.property('complete').that.is.a('function');
    expect(testAction).to.have.a.property('getCurrent').that.is.a('function');
    expect(testAction).to.have.a.property('getVelocity').that.is.a('function');
  });

  it('playback methods should return `this`', () => {
    expect(testAction.start()).to.equal(testAction);
    expect(testAction.stop()).to.equal(testAction);
    expect(testAction.update()).to.equal(testAction);
    expect(testAction.complete()).to.equal(testAction);
  });

  it('getters should return `current` and `velocity`, 0 as default', () => {
    expect(testAction.getCurrent()).to.equal(0);
    expect(testAction.getVelocity()).to.equal(0);
    testAction.current = 5;
    testAction.velocity = 5;
    expect(testAction.getCurrent()).to.equal(5);
    expect(testAction.getVelocity()).to.equal(5);
  });
});
