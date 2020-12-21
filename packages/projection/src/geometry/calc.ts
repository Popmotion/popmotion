import { Axis, AxisProjection, Box, Projection } from "./types"
import { clamp, distance, mix, progress } from "popmotion"

/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
export function isNear(value: number, target = 0, maxDistance = 0.01): boolean {
    return distance(value, target) < maxDistance
}

function calcLength(axis: Axis) {
    return axis.max - axis.min
}

/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
export function calcOrigin(source: Axis, target: Axis): number {
    let origin = 0.5
    const sourceLength = calcLength(source)
    const targetLength = calcLength(target)

    if (targetLength > sourceLength) {
        origin = progress(target.min, target.max - sourceLength, source.min)
    } else if (sourceLength > targetLength) {
        origin = progress(source.min, source.max - targetLength, target.min)
    }

    return clamp(0, 1, origin)
}

/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
export function updateAxisProjection(
    projection: AxisProjection,
    source: Axis,
    target: Axis,
    origin?: number
) {
    projection.origin =
        origin === undefined ? calcOrigin(source, target) : origin
    projection.originPoint = mix(source.min, source.max, projection.origin)

    projection.scale = calcLength(target) / calcLength(source)
    if (isNear(projection.scale, 1, 0.0001)) projection.scale = 1

    projection.translate =
        mix(target.min, target.max, projection.origin) - projection.originPoint
    if (isNear(projection.translate)) projection.translate = 0
}

/**
 * Update the projection with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
export function updateBoxProjection(
    projection: Projection,
    source: Box,
    target: Box,
    origin?: number
): void {
    updateAxisProjection(projection.x, source.x, target.x, origin)
    updateAxisProjection(projection.y, source.y, target.y, origin)
}
