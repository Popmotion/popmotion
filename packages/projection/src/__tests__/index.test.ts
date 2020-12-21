import { layoutNode } from ".."
import { Projection } from "../geometry/types"

describe("layoutNode", () => {
    test("Correctly assigns root node", () => {
        const parent = layoutNode()
        const child = layoutNode({}, parent)
        const grandChild = layoutNode({}, child)

        expect(grandChild.scheduleUpdateProjection).toBe(
            parent.scheduleUpdateProjection
        )
    })

    test("Correctly projects tree", async () => {
        const promise = new Promise<Projection[]>((resolve) => {
            const parent = layoutNode()
            const grandChild = layoutNode(
                {
                    onProjectionUpdate: () => {
                        resolve([parent.projection, grandChild.projection])
                    },
                },
                parent
            )

            parent.setLayout({
                x: { min: 100, max: 200 },
                y: { min: 100, max: 300 },
            })

            grandChild.setLayout({
                x: { min: 110, max: 210 },
                y: { min: 110, max: 210 },
            })

            parent.setTarget({
                x: { min: 300, max: 350 },
                y: { min: 300, max: 700 },
            })
            grandChild.setTarget({
                x: { min: 300, max: 400 },
                y: { min: 300, max: 400 },
            })
        })

        return expect(promise).resolves.toEqual([
            {
                x: {
                    origin: 0.5,
                    originPoint: 150,
                    scale: 0.5,
                    translate: 175,
                },
                y: {
                    origin: 0.5,
                    originPoint: 200,
                    scale: 2,
                    translate: 300,
                },
            },
            {
                x: {
                    origin: 0.5,
                    originPoint: 350,
                    scale: 1,
                    translate: 0,
                },
                y: {
                    origin: 0.5,
                    originPoint: 350,
                    scale: 1,
                    translate: 0,
                },
            },
        ])
    })

    test("Only fires onProjectionUpdate when projection has updated", () => {
        const target = {
            x: { min: 300, max: 400 },
            y: { min: 300, max: 400 },
        }
        console.log("fires onProjectionUpdate")
        const promise = new Promise<number>((resolve) => {
            let updateCount = 0

            const parent = layoutNode()
            const grandChild = layoutNode(
                {
                    onProjectionUpdate: () => {
                        updateCount++
                    },
                },
                parent
            )

            parent.setLayout({
                x: { min: 100, max: 200 },
                y: { min: 100, max: 300 },
            })

            grandChild.setLayout({
                x: { min: 110, max: 210 },
                y: { min: 110, max: 210 },
            })

            parent.setTarget({
                x: { min: 300, max: 350 },
                y: { min: 300, max: 700 },
            })

            grandChild.setTarget(target)

            requestAnimationFrame(() => {
                grandChild.setTarget(target)

                requestAnimationFrame(() => {
                    grandChild.setTarget(target)

                    requestAnimationFrame(() => {
                        resolve(updateCount)
                    })
                })
            })
        })

        return expect(promise).resolves.toBe(1)
    })
})
