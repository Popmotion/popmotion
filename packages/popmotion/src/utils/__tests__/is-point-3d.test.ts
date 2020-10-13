import { isPoint3D } from "../is-point-3d"

test("isPoint3D", () => {
    expect(isPoint3D(9 as any)).toBe(false)
    expect(isPoint3D({ x: 0, y: 0 })).toBe(false)
    expect(isPoint3D({ x: 0, y: 0, z: 0 })).toBe(true)
    expect(isPoint3D({ z: 0 } as any)).toBe(false)
})
