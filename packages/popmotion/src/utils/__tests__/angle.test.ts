import { angle } from "../angle"

const a = { x: 0, y: 0 }
const b = { x: 1, y: 0 }
const c = { x: 1, y: 1 }
const d = { x: 0, y: 1 }

test("angle", () => {
    expect(angle(a, a)).toBe(0)
    expect(angle(a, d)).toBe(90)
    expect(angle(d, a)).toBe(-90)
    expect(angle(d, b)).toBe(-45)
    expect(angle(a, c)).toBe(45)
    expect(angle(c)).toBe(-135)
})
