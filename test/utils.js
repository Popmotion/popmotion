import chai from 'chai'
import utils from '../src/inc/utils'

const expect = chai.expect

const testFunc = () => {}
const testObj = {}
const testNum = 1
const testString = ''
const testArray = []
const testRelativeValue = '+=10'

describe('each() ', () => {
    const testObject = {
        one: 1,
        two: 2,
        three: 3
    }

    it('should iterate over every item in an object', () => {
        let total = 0

        utils.each(testObject, (key, val) => {
            total += val
        })

        expect(total).to.equal(6)
    })

    it('should break on `return: false`', () => {
        let total = 0

        utils.each(testObject, (key, val) => {
            total += val
            return false
        })

        expect(total).to.equal(testObject.one)
    })
})

describe('hasChanged()', () => {
    const a = { prop: 0 }
    const b = { prop: 0 }
    const c = { prop: 1 }

    it('should return true if provided objects are different', () => expect(utils.hasChanged(a, c)).to.equal(true))
    it('should return false if provided objects are the same', () => expect(utils.hasChanged(a, b)).to.equal(false))
})

describe('isFunc()', () => {
    it('should return true if argument is a function', () => expect(utils.isFunc(testFunc)).to.equal(true))
    it('should return false if argument is not a function', () => {
        expect(utils.isFunc(testArray)).to.equal(false)
        expect(utils.isFunc(testString)).to.equal(false)
        expect(utils.isFunc(testObj)).to.equal(false)
    })
})

describe('isNum()', () => {
    it('should return true if argument is a number', () => expect(utils.isNum(testNum)).to.equal(true))
    it('should return false if argument is not a number', () => {
        expect(utils.isNum(testArray)).to.equal(false)
        expect(utils.isNum(testString)).to.equal(false)
        expect(utils.isNum(testObj)).to.equal(false)
    })
})

describe('isObj()', () => {
    it('should return true if argument is an object', () => expect(utils.isObj(testObj)).to.equal(true))
})

describe('isString()', () => {
    it('should return true if argument is a string', () => expect(utils.isString(testString)).to.equal(true))
    it('should return false if argument is not a string', () => {
        expect(utils.isString(testArray)).to.equal(false)
        expect(utils.isString(testNum)).to.equal(false)
        expect(utils.isString(testObj)).to.equal(false)
    })
})

describe('isRelativeValue()', () => {
    it('should return true if argument is a relative value', () => {
        expect(utils.isRelativeValue(testRelativeValue)).to.equal(true)
    })
    it('should return false if argument is not a relative value', () => {
        expect(utils.isRelativeValue(testNum)).to.equal(false)
        expect(utils.isRelativeValue(testString)).to.equal(false)
        expect(utils.isRelativeValue(testObj)).to.equal(false)
    })
})

describe('isArray()', () => {
    it('should return true if argument is an array', () => expect(utils.isArray(testArray)).to.equal(true))
    it('should return false if argument is not an array', () => {
        expect(utils.isArray(testFunc)).to.equal(false)
        expect(utils.isArray(testString)).to.equal(false)
        expect(utils.isArray(testObj)).to.equal(false)
    })
})

describe('copy()', () => {
    it('should return an identical deep object', () => {
        const obj = {
            test: 1,
            deep: {
                test: 1
            }
        }

        expect(utils.copy(obj)).to.deep.equal(obj)
    })
})

describe('merge()', () => {
    it('should merge two seperate objects', () => {
        const a = { test: 1 }
        const b = {
            deep: { foo: true }
        }

        expect(utils.merge(a, b)).to.deep.equal({
            test: 1,
            deep: { foo: true }
        })
    })
})

describe('splitValUnit()', () => {
    it('should split a string, containing a value and unit, into an object', () => {
        expect(utils.splitValUnit('200px')).to.deep.equal({
            value: '200',
            unit: 'px'
        })
        expect(utils.splitValUnit('100%')).to.deep.equal({
            value: '100',
            unit: '%'
        })
    })
})

describe('stepProgress()', () => {
    it('should return a stepped version of the given progress', () => {
        expect(utils.stepProgress(0, 2)).to.equal(0)
        expect(utils.stepProgress(.5, 2)).to.equal(1)
    })
})