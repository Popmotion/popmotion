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
                left: 100,
                right: 200,
                top: 100,
                bottom: 300,
            })

            grandChild.setLayout({
                left: 110,
                right: 210,
                top: 110,
                bottom: 210,
            })

            parent.setTarget({
                left: 300,
                right: 350,
                top: 300,
                bottom: 700,
            })
            grandChild.setTarget({
                left: 300,
                right: 400,
                top: 300,
                bottom: 400,
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
                    originPoint: 330,
                    scale: 2,
                    translate: 20,
                },
                y: {
                    origin: 0.5,
                    originPoint: 420,
                    scale: 0.5,
                    translate: -70,
                },
            },
        ])
    })

    test("Only fires onProjectionUpdate when projection has updated", () => {
        const target = {
            left: 300,
            right: 400,
            top: 300,
            bottom: 400,
        }

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
                left: 100,
                right: 200,
                top: 100,
                bottom: 300,
            })

            grandChild.setLayout({
                left: 110,
                right: 210,
                top: 110,
                bottom: 210,
            })

            parent.setTarget({
                left: 300,
                right: 350,
                top: 300,
                bottom: 700,
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
