import { color, complex, RGBA, HSLA } from "style-value-types"
import { mix } from "./mix"
import { mixColor } from "./mix-color"
import { isNum } from "./inc"
import { pipe } from "./pipe"
import { invariant } from "hey-listen"

type MixComplex = (p: number) => string

type BlendableArray = Array<number | RGBA | HSLA | string>
type BlendableObject = {
    [key: string]: string | number | RGBA | HSLA
}

function getMixer(origin: any, target: any) {
    if (isNum(origin)) {
        return (v: number) => mix(origin, target as number, v)
    } else if (color.test(origin)) {
        return mixColor(origin, target as HSLA | RGBA | string)
    } else {
        return mixComplex(origin as string, target as string)
    }
}

export const mixArray = (from: BlendableArray, to: BlendableArray) => {
    const output = [...from]
    const numValues = output.length

    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]))

    return (v: number) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v)
        }
        return output
    }
}

export const mixObject = (origin: BlendableObject, target: BlendableObject) => {
    const output = { ...origin, ...target }
    const blendValue: { [key: string]: (v: number) => any } = {}

    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key])
        }
    }

    return (v: number) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v)
        }
        return output
    }
}

function analyse(value: string) {
    const parsed = complex.parse(value)
    const numValues = parsed.length
    let numNumbers = 0
    let numRGB = 0
    let numHSL = 0

    for (let i = 0; i < numValues; i++) {
        // Parsed complex values return with colors first, so if we've seen any number
        // we're already past that part of the array and don't need to continue running typeof
        if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++
        } else {
            if ((parsed[i] as HSLA).hue !== undefined) {
                numHSL++
            } else {
                numRGB++
            }
        }
    }

    return { parsed, numNumbers, numRGB, numHSL }
}

export const mixComplex = (origin: string, target: string): MixComplex => {
    const template = complex.createTransformer(target)
    const originStats = analyse(origin)
    const targetStats = analyse(target)

    // Test if both values have the same number of each value type (number/rgb/hsla), or that the origin
    // has the same or more numbers as the target, and throw if not.
    invariant(
        originStats.numHSL === targetStats.numHSL &&
            originStats.numRGB === targetStats.numRGB &&
            originStats.numNumbers >= targetStats.numNumbers,
        `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type.`
    )

    return pipe(
        mixArray(originStats.parsed, targetStats.parsed),
        template
    ) as MixComplex
}
