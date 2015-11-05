import chai from 'chai'
import calc from '../src/inc/calc'

const expect = chai.expect

const a = {
    x: 0,
    y: 0
}

const b = {
    x: 1,
    y: 1
}

describe('angle()', () => {
    it('should return the correct angle between two points', () => {
        expect(calc.angle(a, b))
    })
})