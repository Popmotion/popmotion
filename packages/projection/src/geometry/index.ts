import { BoundingBox, Box, Projection } from "./types"

const identityProjection = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
})

export const projection = (): Projection => ({
    x: identityProjection(),
    y: identityProjection(),
})

export const box = (): Box => ({
    x: { min: 0, max: 0 },
    y: { min: 0, max: 0 },
})

export const convertBoundingBox = ({
    top,
    left,
    right,
    bottom,
}: BoundingBox): Box => ({
    x: { min: left, max: right },
    y: { min: top, max: bottom },
})
