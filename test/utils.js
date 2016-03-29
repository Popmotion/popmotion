import chai from 'chai';
import * as utils from '../src/inc/utils';

const expect = chai.expect;

const testFunc = () => {};
const testObj = {};
const testNum = 1;
const testString = '';
const testArray = [];
const testRelativeValue = '+=10';

describe('camelToDash()', () => {
    it('should convert camel-case to dash case', () => {
        expect(utils.camelToDash('testProperty')).to.equal('test-property');
    });
});

describe('currentTime()', () => {
    it('should return a valid timestamp', () => {
        expect(typeof utils.currentTime()).to.equal('number');
    });
});

describe('hasChanged()', () => {
    const a = { prop: 0 };
    const b = { prop: 0 };
    const c = { prop: 1 };

    it('should return true if provided objects are different', () => expect(utils.hasChanged(a, c)).to.equal(true));
    it('should return false if provided objects are the same', () => expect(utils.hasChanged(a, b)).to.equal(false));
});

describe('hasProperty()', () => {
    it('should return true if object has property', () => expect(utils.hasProperty({ foo: true }, 'foo')).to.equal(true));
    it('should return false if object does not have property', () => expect(utils.hasProperty({}, 'foo')).to.equal(false));
    it('should return false if object has property but is undefined', () => expect(utils.hasProperty({ foo: undefined }, 'foo')).to.equal(false));
});

describe('isArray()', () => {
    it('should return true if argument is an array', () => expect(utils.isArray(testArray)).to.equal(true));
    it('should return false if argument is not an array', () => {
        expect(utils.isArray(testFunc)).to.equal(false);
        expect(utils.isArray(testString)).to.equal(false);
        expect(utils.isArray(testObj)).to.equal(false);
    });
})

describe('isFunc()', () => {
    it('should return true if argument is a function', () => expect(utils.isFunc(testFunc)).to.equal(true));
    it('should return false if argument is not a function', () => {
        expect(utils.isFunc(testArray)).to.equal(false);
        expect(utils.isFunc(testString)).to.equal(false);
        expect(utils.isFunc(testObj)).to.equal(false);
    });
});

describe('isNum()', () => {
    it('should return true if argument is a number', () => expect(utils.isNum(testNum)).to.equal(true));
    it('should return false if argument is not a number', () => {
        expect(utils.isNum(testArray)).to.equal(false);
        expect(utils.isNum(testString)).to.equal(false);
        expect(utils.isNum(testObj)).to.equal(false);
    });
});

describe('isObj()', () => {
    it('should return true if argument is an object', () => expect(utils.isObj(testObj)).to.equal(true));
});

describe('isString()', () => {
    it('should return true if argument is a string', () => expect(utils.isString(testString)).to.equal(true));
    it('should return false if argument is not a string', () => {
        expect(utils.isString(testArray)).to.equal(false);
        expect(utils.isString(testNum)).to.equal(false);
        expect(utils.isString(testObj)).to.equal(false);
    });
});

describe('isRelativeValue()', () => {
    it('should return true if argument is a relative value', () => {
        expect(utils.isRelativeValue(testRelativeValue)).to.equal(true);
    });
    it('should return false if argument is not a relative value', () => {
        expect(utils.isRelativeValue(testNum)).to.equal(false);
        expect(utils.isRelativeValue(testString)).to.equal(false);
        expect(utils.isRelativeValue(testObj)).to.equal(false);
    });
});

describe('findValueAndUnit()', () => {
    it('should split a string, containing a value and unit, into an object', () => {
        expect(utils.findValueAndUnit('200px')).to.deep.equal({
            value: 200,
            unit: 'px'
        });

        expect(utils.findValueAndUnit('100%')).to.deep.equal({
            value: 100,
            unit: '%'
        });
    });
});

describe('toDecimal()', () => {
    const pi = 3.14159265359;

    it('should round to 2 decimal places if no precision is defined', () => {
        expect(utils.toDecimal(pi)).to.equal(3.14);
    });

    it('should round to the number of decimal places given if provided', () => {
        expect(utils.toDecimal(pi, 5)).to.equal(3.14159);
    });
});