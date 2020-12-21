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
            const child = layoutNode({}, parent)
            const grandChild = layoutNode(
                {
                    onProjectionUpdate: () => {
                        resolve([parent.projection, grandChild.projection])
                    },
                },
                child
            )

            parent.setLayout({
                x: { min: 100, max: 200 },
                y: { min: 100, max: 300 },
            })

            child.setLayout({
                x: { min: 110, max: 190 },
                y: { min: 110, max: 260 },
            })

            grandChild.setLayout({
                x: { min: 110, max: 190 },
                y: { min: 110, max: 210 },
            })

            parent.setTarget({
                x: { min: 300, max: 400 },
                y: { min: 300, max: 500 },
            })

            child.setTarget({
                x: { min: 300, max: 400 },
                y: { min: 300, max: 300 },
            })

            grandChild.setTarget({
                x: { min: 300, max: 400 },
                y: { min: 300, max: 300 },
            })
        })

        return expect(promise).resolves.toEqual([
            {
                x: {},
                y: {},
            },
            {
                x: {},
                y: {},
            },
        ])
    })
})
