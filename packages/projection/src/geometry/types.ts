export interface Axis {
    min: number
    max: number
    length?: number
}

export interface Box {
    x: Axis
    y: Axis
}

export interface RelativeBox {
    x: Partial<Axis>
    y: Partial<Axis>
}

export interface BoundingBox {
    top: number
    right: number
    bottom: number
    left: number
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
