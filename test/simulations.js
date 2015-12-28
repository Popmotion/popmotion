import chai from 'chai';
import simulations from '../src/actions/simulate/simulations';

const expect = chai.expect;

describe('simulations.velocity()', () => {
    it('should increment velocity by the given acceleration value', () => {
        let value = {
          velocity: 10,
          acceleration: 10
        };

        simulations.velocity(value, 100);

        expect(value.velocity).to.equal(11);
    });

    it('should increment velocity by the given acceleration function return value', () => {
        let value = {
          velocity: 10,
          acceleration: () => -10
        };

        simulations.velocity(value, 100);

        expect(value.velocity).to.equal(9);
    });
});
