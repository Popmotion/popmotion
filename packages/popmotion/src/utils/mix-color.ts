import { mix } from "./mix"
import { hsla, rgba, hex, Color } from "style-value-types"
import { invariant } from "hey-listen"
import { hslaToRgba } from "./hsla-to-rgba"

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
export const mixLinearColor = (from: number, to: number, v: number) => {
    const fromExpo = from * from
    const toExpo = to * to
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo))
}

const colorTypes = [hex, rgba, hsla]
const getColorType = (v: Color | string) =>
    colorTypes.find((type) => type.test(v))

const notAnimatable = (color: Color | string) =>
    `'${color}' is not an animatable color. Use the equivalent color code instead.`

export const mixColor = (from: Color | string, to: Color | string) => {
    let fromColorType = getColorType(from)
    let toColorType = getColorType(to)

    invariant(!!fromColorType, notAnimatable(from))
    invariant(!!toColorType, notAnimatable(to))

    let fromColor = fromColorType.parse(from)
    let toColor = toColorType.parse(to)

    if (fromColorType === hsla) {
        fromColor = hslaToRgba(fromColor)
        fromColorType = rgba
    }

    if (toColorType === hsla) {
        toColor = hslaToRgba(toColor)
        toColorType = rgba
    }

    const blended = { ...fromColor }

    return (v: number) => {
        for (const key in blended) {
            if (key !== "alpha") {
                blended[key] = mixLinearColor(fromColor[key], toColor[key], v)
            }
        }

        blended.alpha = mix(fromColor.alpha, toColor.alpha, v)
        return fromColorType.transform(blended)
    }
}
