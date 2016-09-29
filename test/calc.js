import chai from 'chai';
import * as calc from '../src/inc/calc';

const expect = chai.expect;

const a = {
  x: 0,
  y: 0
};

const b = {
  x: 1,
  y: 1
};

describe('angle()', () => {
    it('should return the correct angle between two points', () => {
        expect(calc.angle(a, a)).to.equal(0);
        expect(calc.angle(b, a)).to.equal(45);
    });

    it('should assume a second point of 0,0', () => {
        expect(calc.angle(b)).to.equal(45);
    });
});

describe('degreesToRadians()', () => {
    it('should correctly convert degrees to radians', () => {
        expect(calc.degreesToRadians(45)).to.equal(0.7853981633974483);
    });
});

describe('dilate()', () => {
    it('should return the difference between a and b as factored by dilation', () => {
        expect(calc.dilate(0, 80, .5)).to.equal(40);
        expect(calc.dilate(100, 200, 2)).to.equal(300);
    });
});

describe('distance()', () => {
    it('should return the correct distance between two 1D points', () => {
        expect(calc.distance(-100, 100)).to.equal(200);
    });

    it('should return the correct distance between two 2D points', () => {
        expect(calc.distance(a, b)).to.equal(1.4142135623730951);
    });

    it('should return the correct distance between two 3D points', () => {
        expect(calc.distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 10 })).to.equal(10);
    });
});

describe('getValueFromProgress()', () => {
    it('should return correct value has calculated from progress 0-1 and range', () => {
        expect(calc.getValueFromProgress(0.5, 100, 200)).to.equal(150);
        expect(calc.getValueFromProgress(-1, 100, 200)).to.equal(0);
    });
});

describe('getProgressFromValue()', () => {
    it('should return, as a number representing 0 as the lower limit and 1 as the upper limit, a progress of a value between given limits', () => {
        expect(calc.getProgressFromValue(50, 0, 100)).to.equal(.5);
        expect(calc.getProgressFromValue(50, 100, 200)).to.equal(-0.5);
    });
});

describe('pointFromAngleAndDistance()', () => {
    it('should return the correct point, as described by the provided origin point, angle in degrees, and distance', () => {
        expect(calc.pointFromAngleAndDistance(a, 45, 100)).to.deep.equal({
            x: 70.71067811865476,
            y: 70.71067811865474
        });
    });
});

describe('radiansToDegrees()', () => {
    it('should correctly convert degrees into radians', () => {
        expect(calc.radiansToDegrees(0.7853981633974483)).to.equal(45);
    });
});

describe('random()', () => {
    it('should generate a number between the two numbers provided', () => {
        expect(calc.random(100, 200)).to.be.within(100, 200)
    });

    it('should assume a lower limit of 0 and upper limit of 1 if no arguments are passed', () => {
        expect(calc.random()).to.be.within(0, 1)
    });
});

describe('relativeValue()', () => {
    it('should correctly add relative value to existing value', () => {
        console.log(calc.relativeValue(10, '+=5'))
        expect(calc.relativeValue(10, '+=5')).to.equal(15);
    });

    it('should correctly divide existing value by relative value', () => {
        expect(calc.relativeValue(10, '/=5')).to.equal(2);
    });

    it('should correctly subtract relative value from existing value', () => {
        expect(calc.relativeValue(10, '-=5')).to.equal(5);
    });

    it('should correctly multiply existing value by relative value', () => {
        expect(calc.relativeValue(10, '*=5')).to.equal(50);
    });
});

describe('restrict()', () => {
    it('should return the value if within provided limits', () => {
        expect(calc.restrict(5, -100, 200)).to.equal(5);
    });
    it('should return the lower limit if value is lower than range', () => {
        expect(calc.restrict(-200, -100, 200)).to.equal(-100);
    });
    it('should return the upper limit if value is higher than range', () => {
        expect(calc.restrict(1000, -100, 200)).to.equal(200);
    });
});

describe('smooth()', () => {
    it('should return value if smoothing is equal or less than frame duration', () => {
        expect(calc.smooth(100, 0, 16.7, 0)).to.equal(100);
    });
});
