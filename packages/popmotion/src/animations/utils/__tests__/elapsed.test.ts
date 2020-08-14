import { loopElapsed, reverseElapsed, hasRepeatDelayElapsed } from "../elapsed"

describe("loopElapsed", () => {
    test("Correctly loops the provided elapsed", () => {
        expect(loopElapsed(1100, 1000)).toBe(100)
        expect(loopElapsed(1100, 1000, 300)).toBe(-200)
    })
})

describe("reverseElapsed", () => {
    test("Correctly reverses the provided elapsed forwards -> backwards", () => {
        expect(reverseElapsed(1100, 1000, 0, false)).toBe(900)
        expect(reverseElapsed(1100, 1000, 300, false)).toBe(1200)
    })
    test("Correctly reverses the provided elapsed backwards -> forwards", () => {
        expect(reverseElapsed(-100, 1000, 0, true)).toBe(100)
        expect(reverseElapsed(-100, 1000, 300, true)).toBe(-200)
    })
})

describe("hasRepeatDelayElapsed", () => {
    test("Correctly determines if repeatDelay has elapsed during forward playback", () => {
        expect(hasRepeatDelayElapsed(1100, 1000, 50, true)).toBe(true)
        expect(hasRepeatDelayElapsed(1100, 1000, 101, true)).toBe(false)
        expect(hasRepeatDelayElapsed(1100, 1000, 100, true)).toBe(true)
    })
    test("Correctly determines if repeatDelay has elapsed during reverse playback", () => {
        expect(hasRepeatDelayElapsed(-100, 1000, 50, false)).toBe(true)
        expect(hasRepeatDelayElapsed(-100, 1000, 101, false)).toBe(false)
        expect(hasRepeatDelayElapsed(-100, 1000, 100, false)).toBe(true)
    })
})
