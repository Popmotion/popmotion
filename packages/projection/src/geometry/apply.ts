import { LayoutNode } from "../types"
import { Axis, Box, Point, Projection } from "./types"

export function resetAxis(axis: Axis, originAxis: Axis) {
    axis.min = originAxis.min
    axis.max = originAxis.max
}

export function resetBox(box: Box, originBox: Box) {
    resetAxis(box.x, originBox.x)
    resetAxis(box.y, originBox.y)
}

/**
 * Scales a point based on a factor and an originPoint
 */
export function scalePoint(point: number, scale: number, originPoint: number) {
    const distanceFromOrigin = point - originPoint
    const scaled = scale * distanceFromOrigin
    return originPoint + scaled
}

/**
 * Applies a translate/scale delta to a point
 */
export function applyPointProjection(
    point: number,
    translate: number,
    scale: number,
    originPoint: number,
    boxScale?: number
): number {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint)
    }

    return scalePoint(point, scale, originPoint) + translate
}

/**
 * Applies a translate/scale delta to an axis
 */
export function applyAxisProjection(
    axis: Axis,
    translate: number = 0,
    scale: number = 1,
    originPoint: number,
    boxScale?: number
): void {
    axis.min = applyPointProjection(
        axis.min,
        translate,
        scale,
        originPoint,
        boxScale
    )

    axis.max = applyPointProjection(
        axis.max,
        translate,
        scale,
        originPoint,
        boxScale
    )
}

/**
 * Applies a translate/scale delta to a box
 */
export function applyBoxProjection(box: Box, { x, y }: Projection): void {
    applyAxisProjection(box.x, x.translate, x.scale, x.originPoint)
    applyAxisProjection(box.y, y.translate, y.scale, y.originPoint)
}

/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 */
export function applyTreeProjection(
    box: Box,
    treeScale: Point,
    path: LayoutNode[]
) {
    const pathLength = path.length
    if (!pathLength) return

    // Reset the treeScale
    treeScale.x = treeScale.y = 1

    /**
     * TODO: We already traverse the tree from top-down. Look into whether it's possible to do this
     * work culmulatively.
     */
    for (let i = 0; i < pathLength; i++) {
        const { projection } = path[i]

        // Incoporate each ancestor's scale into a culmulative treeScale for this component
        treeScale.x *= projection.x.scale
        treeScale.y *= projection.y.scale

        // Apply each ancestor's calculated projection into this component's recorded layout box
        applyBoxProjection(box, projection)
    }
}
