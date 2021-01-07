import { Axis } from "../geometry/types"
import { LayoutNode } from "../types"

export function pixelsToPercent(pixels: number, axis: Axis): number {
    return (pixels / (axis.max - axis.min)) * 100
}

/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 *
 * Currently accepts a single value for all border radius rather than space-delimited.
 */
export function correctBorderRadius(latest: string | number, node: LayoutNode) {
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
        if (latest.endsWith("px")) {
            latest = parseFloat(latest)
        } else {
            return latest
        }
    }

    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    const { x, y } = node.getTarget()
    return `${pixelsToPercent(latest, x)}% ${pixelsToPercent(latest, y)}%`
}
