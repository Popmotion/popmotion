import chai from 'chai';
import loop from '../src/process/loop';

const expect = chai.expect;

const testFunc = () => {};
let testCount = {
    active: 1,
    running: 1
};

describe('loop', () => {
    it('should return sequentially updating process IDs', () => {
        const id = loop.getProcessId();
        expect(loop.getProcessId()).to.equal(id + 1);
    });
});