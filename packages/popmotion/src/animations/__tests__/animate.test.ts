import { animate } from ".."
import { linear } from "../.."

const syncDriver = (interval = 10) => update => {
    let isRunning = true
    return {
        start: () => {
            while (isRunning) update(interval)
        },
        stop: () => (isRunning = false),
    }
}

describe("animate", () => {
    test("Correctly performs an animation with default settings", () => {
        const output = []
        animate({
            to: 100,
            duration: 100,
            ease: linear,
            driver: syncDriver(20),
            onUpdate: v => output.push(v),
            onComplete: () => expect(output).toEqual([20, 40, 60, 80, 100]),
        })
    })
})
