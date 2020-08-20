import { syncDriver } from "./utils"
import { inertia } from "../inertia"
import { InertiaOptions } from "../types"

async function testInertia(
    options: InertiaOptions,
    expectation: number[],
    resolve: () => void
) {
    const output = []

    inertia({
        driver: syncDriver(200),
        ...options,
        onUpdate: v => output.push(Math.round(v)),
        onComplete: () => {
            expect(output).toEqual(expectation)
            resolve()
        },
    })
}

describe("inertia", () => {
    test("Stays still without velocity", async resolve => {
        await testInertia({ from: 50 }, [50], resolve)
    })

    test("Decays upwards with positive velocity", async resolve => {
        await testInertia(
            { from: 50, velocity: 100 },
            [
                50,
                69,
                83,
                94,
                102,
                109,
                114,
                118,
                121,
                123,
                124,
                126,
                127,
                128,
                128,
                129,
                129,
                130,
            ],
            resolve
        )
    })

    test("Decays downwards with negative velocity", async resolve => {
        await testInertia(
            { from: 50, velocity: -100 },
            [
                50,
                31,
                17,
                6,
                -2,
                -9,
                -14,
                -18,
                -21,
                -23,
                -24,
                -26,
                -27,
                -28,
                -28,
                -29,
                -29,
                -30,
            ],
            resolve
        )
    })

    test("Springs towards min if encountered", async resolve => {
        await testInertia(
            { from: 50, min: 0, velocity: -100 },
            [50, 31, 17, 6, -2, -2, 1, 0],
            resolve
        )
    })

    test("Springs towards max if encountered", async resolve => {
        await testInertia(
            { from: 50, max: 100, velocity: 100 },
            [50, 69, 83, 94, 102, 102, 99, 100],
            resolve
        )
    })

    test("Springs towards min if starts outside of boundary", async resolve => {
        await testInertia(
            {
                from: -100,
                bounceStiffness: 200,
                min: 0,
            },
            [-100, 26, -3, -1, 1, 0],
            resolve
        )
    })

    test("Springs towards max if starts outside of boundary", async resolve => {
        await testInertia(
            {
                from: 200,
                bounceStiffness: 200,
                max: 100,
            },
            [200, 74, 103, 101, 99, 100],
            resolve
        )
    })

    test("Decays towards target returned from modifyTarget", async resolve => {
        await testInertia(
            { from: 50, velocity: 100, modifyTarget: () => 100 },
            [50, 62, 71, 78, 83, 87, 90, 92, 94, 95, 97, 97, 98, 98, 99, 100],
            resolve
        )
    })
})
