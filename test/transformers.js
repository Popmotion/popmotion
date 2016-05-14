import chai from 'chai';
import * as transformers from '../src/inc/transformers';

const expect = chai.expect;

describe('createMapper()', () => {
    const inputArray = [-100, 0, 100];
    const outputArray = [-200, 0, -200];
    const mapper = transformers.createMapper(inputArray, outputArray);

    it('should map in-range values from an input array to an output array', () => {
        expect(mapper(-100)).to.equal(-200);
        expect(mapper(0)).to.equal(0);
        expect(mapper(100)).to.equal(-200);
    });

    it('should cap out-of-range values', () => {
        expect(mapper(-200)).to.equal(-200);
        expect(mapper(200)).to.equal(-200);
    });
});