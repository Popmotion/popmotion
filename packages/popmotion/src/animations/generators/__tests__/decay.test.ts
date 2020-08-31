import { decay } from "../decay"
import { animateSync } from "./utils"

describe("decay", () => {
    test("Runs animations with default values ", () => {
        expect(animateSync(decay({}), 200)).toEqual([0])
    })

    test("Runs animations as a decay", () => {
        expect(
            animateSync(
                decay({
                    from: 100,
                    velocity: 100,
                    power: 0.8,
                    timeConstant: 350,
                    restDelta: 0.5,
                }),
                200
            )
        ).toEqual([100, 135, 154, 166, 172, 175, 177, 179, 179, 180])
    })

    test("Runs animations as a decay with modifyTarget", () => {
        expect(
            animateSync(
                decay({
                    from: 100,
                    velocity: 100,
                    power: 0.8,
                    modifyTarget: (v) => v * 2,
                }),
                200
            )
        ).toEqual([100, 213, 277, 313, 334, 345, 352, 355, 357, 358, 359, 360])
    })
})
