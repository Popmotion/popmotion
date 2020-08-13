import { createAttractor, attract, attractExpo } from "../attract"

describe("createAttractor", () => {
    test("Will create an attractor", () => {
        const attractor = createAttractor()
        expect(attractor(0.5, 10, 5)).toEqual(7.5)
    })
})

describe("attract", () => {
    test("Attracts to origin with a linear curve", () => {
        expect(attract(0.5, 10, 5)).toEqual(7.5)
        expect(attract(0.5, 10, 15)).toEqual(12.5)
        expect(attract(1, 10, 5)).toEqual(10)
        expect(attract(0, 10, 5)).toEqual(5)
    })
})

describe("attractExpo", () => {
    test("Attracts to origin with an exponential curve", () => {
        expect(attractExpo(0.5, 10, 5)).toBeCloseTo(8.9, 1)
        expect(attractExpo(0.5, 10, 15)).toBeCloseTo(11.1, 1)
        expect(attractExpo(1, 10, 5)).toEqual(10)
        expect(attractExpo(0, 10, 5)).toBeCloseTo(7.8, 1)
    })
})
