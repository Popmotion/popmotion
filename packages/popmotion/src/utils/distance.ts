import { Point } from "../types"
import { isPoint } from "./is-point"
import { isPoint3D } from "./is-point-3d"
import { isNum } from "./inc"

const distance1D = (a: number, b: number) => Math.abs(a - b)

/*
  Distance

  Returns the distance between two n dimensional points.

  @param [object/number]: x and y or just x of point A
  @param [object/number]: (optional): x and y or just x of point B
  @return [number]: The distance between the two points
*/

export function distance<P extends Point | number>(a: P, b: P): number {
    if (isNum(a) && isNum(b)) {
        // 1D dimensions
        return distance1D(a, b)
    } else if (isPoint(a) && isPoint(b)) {
        // Multi-dimensional
        const xDelta = distance1D(a.x, b.x)
        const yDelta = distance1D(a.y, b.y)
        const zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0

        return Math.sqrt(xDelta ** 2 + yDelta ** 2 + zDelta ** 2)
    }
}
