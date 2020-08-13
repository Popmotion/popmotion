import {
    defaultEasing,
    defaultOffset,
    convertOffsetToTimes,
} from "../keyframes"
import { linear, easeInOut } from "../../easing"

describe("defaultEasing", () => {
    test("correctly returns a default easing array", () => {
        expect(defaultEasing([0, 1], linear)).toEqual([linear])
        expect(defaultEasing([0, 1, 2], linear)).toEqual([linear, linear])
        expect(defaultEasing([0, 1, 2])).toEqual([easeInOut, easeInOut])
    })
})

describe("defaultOffset", () => {
    test("correctly returns a default times array", () => {
        expect(defaultOffset([0, 1])).toEqual([0, 1])
        expect(defaultOffset([0, 1, 2])).toEqual([0, 0.5, 1])
        expect(defaultOffset([0, 1, 2, 3])).toEqual([0, 1 / 3, (1 / 3) * 2, 1])
    })
})

describe("convertOffsetToTimes", () => {
    test("correctly converts offsets to times", () => {
        expect(convertOffsetToTimes([0, 0.5, 1], 500)).toEqual([0, 250, 500])
    })
})
