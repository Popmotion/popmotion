import { pointFromVector } from "../point-from-vector"

test("pointFromVector", () => {
    expect(pointFromVector({ x: 0, y: 0 }, 45, 100)).toEqual({
        x: 70.71067811865476,
        y: 70.71067811865474,
    })
})
