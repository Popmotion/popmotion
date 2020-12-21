export interface Axis {
    min: number
    max: number
}

export interface Box {
    x: Axis
    y: Axis
}

export interface Point {
    x: number
    y: number
}

export interface AxisProjection {
    translate: number
    scale: number
    origin: number
    originPoint: number
}

export interface Projection {
    x: AxisProjection
    y: AxisProjection
}
