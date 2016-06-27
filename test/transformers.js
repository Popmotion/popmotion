import chai from 'chai';
import * as transformers from '../src/inc/transformers';
import appendUnit from '../src/transformers/append-unit';
import between from '../src/transformers/between';

const expect = chai.expect;

describe('appendUnit()', () => {
  it('should return a function that converts a value to a value plus unit', () => {
    const addPercentage = appendUnit('%');
    expect(addPercentage(50)).to.equal('50%');
    expect(addPercentage('50')).to.equal('50%');
  });
});

describe('between()', () => {
  it('should return a function that restricts values to between x and y', () => {
    const betweener = between(-50, 50);
    expect(betweener(-100)).to.equal(-50);
    expect(betweener(0)).to.equal(0);
    expect(betweener(100)).to.equal(50);
  });
});

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