import { detectAnimationFromOptions } from "../detect-animation-from-options"
import { spring } from "../../spring"
import { keyframes } from "../../keyframes"

describe("detectAnimationFromOptions", () => {
    test("it selects the correct animation effect from any given config", () => {
        expect(detectAnimationFromOptions({ stiffness: 300 })).toBe(spring)
        expect(detectAnimationFromOptions({ duration: 2 })).toBe(keyframes)
        expect(detectAnimationFromOptions({ a: 2 })).toBe(keyframes)
        expect(detectAnimationFromOptions({ type: "keyframes" })).toBe(
            keyframes
        )
        expect(detectAnimationFromOptions({ type: "spring" })).toBe(spring)

        expect(detectAnimationFromOptions({ to: [0, 1] })).toBe(keyframes)

        expect(detectAnimationFromOptions({ type: "spring", to: [0, 1] })).toBe(
            keyframes
        )
    })
})
