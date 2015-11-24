import chai from 'chai';
import Process from '../src/process/Process';

const expect = chai.expect;

const testFunc = () => {};

describe('new Process()', () => {
    it('should assign a single function argument to `render`', () => {
        const process = new Process(testFunc);

        expect(process.render).to.equal(testFunc);
    });

    it('should correctly assign an object argument', () => {
        const process = new Process({
            update: testFunc,
            preRender: testFunc
        });

        expect(process.update).to.equal(testFunc);
        expect(process.preRender).to.equal(testFunc);
    });
});

describe('Process.once', () => {
    it('should fire callback once', (done) => {
        let count = 0;
        const process = new Process(() => {
            count++;
            expect(count).to.equal(1);
            done();
        });

        process.once();
    })
})