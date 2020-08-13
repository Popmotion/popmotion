import {
    reverseEasing,
    mirrorEasing,
    createExpoIn,
    createBackIn,
    createAnticipate,
} from "../utils"
import { easeOut, easeIn, easeInOut } from "../"

describe("reverseEasing", () => {
    test("correctly reverses an easing curve", () => {
        expect(reverseEasing(easeOut)(0.25)).toEqual(1 - easeOut(0.75))
    })
})

describe("mirrorEasing", () => {
    test("correctly mirrors an easing curve", () => {
        expect(mirrorEasing(easeIn)(0.25)).toEqual(easeInOut(0.25))
        expect(mirrorEasing(easeIn)(0.75)).toEqual(easeInOut(0.75))
    })
})

describe("createExpoIn", () => {
    test("creates an expoIn curve according to the provided power", () => {
        expect(createExpoIn(2)(0.5)).toEqual(0.25)
        expect(createExpoIn(3)(0.5)).toEqual(0.25 / 2)
        expect(createExpoIn(4)(0.5)).toEqual(0.25 / 4)
    })
})

describe("createBackIn", () => {
    test("creates an backIn curve according to the provided power", () => {
        expect(createBackIn(2)(0.5)).toEqual(-0.125)
        expect(createBackIn(3)(0.5)).toEqual(-0.25)
        expect(createBackIn(4)(0.5)).toEqual(-0.375)
    })
})

describe("createAnticipate", () => {
    test("creates an createAnticipate curve according to the provided power", () => {
        expect(createAnticipate(2)(0.25)).toEqual(-0.0625)
        expect(createAnticipate(3)(0.25)).toEqual(-0.125)
        expect(createAnticipate(4)(0.25)).toEqual(-0.1875)
    })
})
