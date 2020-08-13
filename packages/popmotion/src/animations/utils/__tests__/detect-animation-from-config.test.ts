import { detectAnimationFromOptions } from "../detect-animation-from-options"
import { SpringAnimator } from "../../spring"
import { KeyframesAnimator } from "../../keyframes"
import { DecayAnimator } from "../../decay"

describe("detectAnimationFromOptions", () => {
    test("it selects the correct animation effect from any given config", () => {
        expect(detectAnimationFromOptions({ stiffness: 300 })).toBe(
            SpringAnimator
        )
        expect(detectAnimationFromOptions({ duration: 2 })).toBe(
            KeyframesAnimator
        )
        expect(detectAnimationFromOptions({ power: 2 })).toBe(DecayAnimator)
        expect(detectAnimationFromOptions({ a: 2 })).toBe(undefined)
    })
})
