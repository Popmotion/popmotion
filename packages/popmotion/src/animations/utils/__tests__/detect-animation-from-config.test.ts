import { detectAnimationFromOptions } from "../detect-animation-from-options"
import { decay } from "../../generators/decay"
import { spring } from "../../generators/spring"
import { keyframes } from "../../generators/keyframes"

describe("detectAnimationFromOptions", () => {
    test("it selects the correct animation effect from any given config", () => {
        expect(detectAnimationFromOptions({ stiffness: 300 } as any)).toBe(
            spring
        )
        expect(detectAnimationFromOptions({ duration: 2 } as any)).toBe(
            keyframes
        )
        expect(detectAnimationFromOptions({ a: 2 } as any)).toBe(keyframes)
        expect(detectAnimationFromOptions({ type: "keyframes" })).toBe(
            keyframes
        )
        expect(detectAnimationFromOptions({ type: "decay" })).toBe(decay)
        expect(detectAnimationFromOptions({ type: "spring" })).toBe(spring)

        expect(detectAnimationFromOptions({ to: [0, 1] })).toBe(keyframes)

        expect(detectAnimationFromOptions({ type: "spring", to: [0, 1] })).toBe(
            keyframes
        )
    })
})
