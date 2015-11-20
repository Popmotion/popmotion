import chai from 'chai';
import Process from '../src/process/Process';

const expect = chai.expect;

const testFunc = () => {};

describe('new Process()', () => {
    it('should assign a single function argument to `render`', () => {
        const process = new Process(testFunc);

        expect(process.render).to.equal(testFunc);
    });

    it ('should correctly assign an object', () => {
        const process = new Process({
            update: testFunc,
            preRender: testFunc
        });

        expect(process.update).to.equal(testFunc);
        expect(process.preRender).to.equal(testFunc);
    });
});
