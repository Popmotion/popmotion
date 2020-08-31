import { spring } from "../spring"
import { animateSync } from "./utils"

describe("decay", () => {
    test("Runs animations with default values ", () => {
        expect(animateSync(spring({}), 200)).toEqual([0])
    })
    test("Underdamped spring", () => {
        expect(
            animateSync(
                spring({
                    from: 100,
                    to: 1000,
                    stiffness: 300,
                    restSpeed: 10,
                    restDelta: 0.5,
                }),
                200
            )
        ).toEqual([100, 1343, 873, 1046, 984, 1005, 998, 1001, 1000])
    })
    test("Critically damped spring", () => {
        expect(
            animateSync(
                spring({
                    from: 100,
                    to: 1000,
                    stiffness: 100,
                    damping: 20,
                    restSpeed: 10,
                    restDelta: 0.5,
                }),
                200
            )
        ).toEqual([100, 635, 918, 984, 997, 1000])
    })
    test("Overdamped spring", () => {
        expect(
            animateSync(
                spring({
                    from: 100,
                    to: 1000,
                    stiffness: 300,
                    damping: 100,
                    restSpeed: 10,
                    restDelta: 0.5,
                }),
                200
            )
        ).toEqual([
            100,
            499,
            731,
            855,
            922,
            958,
            977,
            988,
            993,
            996,
            998,
            999,
            999,
            1000,
        ])
    })
})
