import { circIn, bounceOut, bounceInOut } from "../"

describe("circIn", () => {
    test("correctly eases", () => {
        expect(circIn(0)).toEqual(0)
        expect(circIn(0.25)).toBeCloseTo(0.0317)
        expect(circIn(0.75)).toBeCloseTo(0.3385)
        expect(circIn(1)).toEqual(1)
    })
})

describe("bounceOut", () => {
    test("correctly eases", () => {
        expect(bounceOut(0)).toEqual(0)
        expect(bounceOut(0.25)).toBeCloseTo(0.472)
        expect(bounceOut(0.75)).toBeCloseTo(0.9588)
        expect(bounceOut(1)).toEqual(1)
    })
})

describe("bounceInOut", () => {
    test("correctly eases", () => {
        expect(bounceInOut(0)).toEqual(0)
        expect(bounceInOut(0.25)).toBeCloseTo(0.1406)
        expect(bounceInOut(0.75)).toBeCloseTo(0.85937)
        expect(bounceInOut(1)).toEqual(1)
    })
})
