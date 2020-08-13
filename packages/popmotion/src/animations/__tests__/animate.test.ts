import { animate } from ".."
import { linear } from "../.."
import { Animatable, AnimationOptions } from "../types"

const syncDriver = (interval = 10) => update => {
    let isRunning = true
    return {
        start: () => {
            update(0)
            while (isRunning) update(interval)
        },
        stop: () => (isRunning = false),
    }
}

function testAnimate<V extends Animatable>(
    options: AnimationOptions<V>,
    expected: V[]
) {
    const output = []
    animate({
        driver: syncDriver(20),
        duration: 100,
        ease: linear,
        onUpdate: v => output.push(v),
        onComplete: () => expect(output).toEqual(expected),
        ...options,
    })
}

describe("animate", () => {
    test("Correctly performs an animation with default settings", () => {
        testAnimate({ to: 100 }, [0, 20, 40, 60, 80, 100])
    })

    test("Performs a keyframes animations when to is an array", () => {
        testAnimate({ to: [0, 50, -20], duration: 200 }, [
            0,
            10,
            20,
            30,
            40,
            50,
            36,
            22,
            8,
            -6,
            -20,
        ])
    })

    test("Performs a keyframes animations when to is an array of strings", () => {
        testAnimate({ to: ["#f00", "#0f0", "#00f"] }, [
            "rgba(255, 0, 0, 1)",
            "rgba(198, 161, 0, 1)",
            "rgba(114, 228, 0, 1)",
            "rgba(0, 228, 114, 1)",
            "rgba(0, 161, 198, 1)",
            "rgba(0, 0, 255, 1)",
        ])
    })

    test("Correctly animates from/to with a keyframes animation by default", () => {
        testAnimate({ from: 50, to: 150 }, [50, 70, 90, 110, 130, 150])
    })

    test("Correctly animates from/to strings with a keyframes animation by default", () => {
        testAnimate({ from: "#f00", to: "#00f" }, [
            "rgba(255, 0, 0, 1)",
            "rgba(228, 0, 114, 1)",
            "rgba(198, 0, 161, 1)",
            "rgba(161, 0, 198, 1)",
            "rgba(114, 0, 228, 1)",
            "rgba(0, 0, 255, 1)",
        ])
    })

    test("Accepts a negative elapsed as delay", () => {
        testAnimate({ to: 100, elapsed: -100 }, [
            0,
            0,
            0,
            0,
            0,
            0,
            20,
            40,
            60,
            80,
            100,
        ])
    })

    test("Correctly repeats", () => {
        testAnimate({ to: 100, repeat: 1 }, [
            0,
            20,
            40,
            60,
            80,
            100,
            20,
            40,
            60,
            80,
            100,
        ])
    })

    test("Correctly applies repeat type", () => {
        testAnimate({ to: 100, repeat: 1, repeatType: "reverse" }, [
            0,
            20,
            40,
            60,
            80,
            100,
            80,
            60,
            40,
            20,
            0,
        ])
    })

    test("Correctly applies repeat delay", () => {
        testAnimate({ to: 100, repeat: 1, repeatDelay: 100 }, [
            0,
            20,
            40,
            60,
            80,
            100,
            0,
            0,
            0,
            0,
            0,
            20,
            40,
            60,
            80,
            100,
        ])
    })

    test("Runs animations as an underdamped spring", () => {
        const output = []
        const expected = [
            100,
            371,
            884,
            1259,
            1343,
            1204,
            1006,
            883,
            873,
            937,
            1011,
            1050,
            1046,
            1018,
            991,
            980,
            984,
            996,
            1005,
            1008,
            1005,
            1001,
            998,
            997,
            998,
            1000,
        ]
        animate({
            from: 100,
            to: 1000,
            stiffness: 300,
            driver: syncDriver(50),
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () => expect(output).toEqual(expected),
        })
    })

    test("Runs animations as an overdamped spring", () => {
        const output = []
        const expected = [
            100,
            571,
            802,
            909,
            958,
            981,
            991,
            996,
            998,
            999,
            1000,
        ]
        animate({
            from: 100,
            to: 1000,
            stiffness: 300,
            damping: 100,
            driver: syncDriver(250),
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () => expect(output).toEqual(expected),
        })
    })

    test("Runs animations as a critically damped spring", () => {
        const output = []
        const expected = [
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            1000,
        ]
        animate({
            from: 100,
            to: 1000,
            stiffness: 100,
            damping: 20,
            driver: syncDriver(10),
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () => expect(output).toEqual(expected),
        })
    })

    test("Runs spring animations on strings", () => {
        const output = []
        const expected = [
            "rgba(255, 0, 0, 1)",
            "rgba(213, 0, 140, 1)",
            "rgba(92, 0, 238, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(92, 0, 238, 1)",
            "rgba(96, 0, 236, 1)",
            "rgba(67, 0, 246, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(25, 0, 254, 1)",
            "rgba(38, 0, 252, 1)",
            "rgba(34, 0, 253, 1)",
            "rgba(0, 0, 255, 1)",
        ]
        animate({
            from: "#f00",
            to: "#00f",
            stiffness: 300,
            driver: syncDriver(50),
            onUpdate: v => output.push(v),
            onComplete: () => expect(output).toEqual(expected),
        })
    })

    test("Repeats springs", () => {
        const output = []
        const expected = [
            371,
            884,
            1259,
            1343,
            1204,
            1006,
            883,
            873,
            937,
            1011,
            1050,
            1046,
            1018,
            991,
            980,
            984,
            996,
            1005,
            1008,
            1005,
            1001,
            998,
            997,
            998,
            1000,
        ]
        animate({
            from: 100,
            to: 1000,
            stiffness: 300,
            driver: syncDriver(50),
            repeat: 1,
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () =>
                expect(output).toEqual([100, ...expected, ...expected]),
        })
    })

    test("Runs animations as a decay", () => {
        const output = []
        const expected = [100, 135, 154, 166, 172, 175, 177, 179, 179, 180]
        animate({
            from: 100,
            velocity: 100,
            power: 0.8,
            driver: syncDriver(200),
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () => expect(output).toEqual(expected),
        })
    })

    test("Runs animations as a decay with modifyTarget", () => {
        const output = []
        const expected = [
            100,
            213,
            277,
            313,
            334,
            345,
            352,
            355,
            357,
            358,
            359,
            360,
        ]
        animate({
            from: 100,
            velocity: 100,
            power: 0.8,
            modifyTarget: v => v * 2,
            driver: syncDriver(200),
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () => expect(output).toEqual(expected),
        })
    })

    test("Repeats decay", () => {
        const output = []
        const expected = [135, 154, 166, 172, 175, 177, 179, 179, 180]
        animate({
            from: 100,
            velocity: 100,
            power: 0.8,
            repeat: 1,
            driver: syncDriver(200),
            onUpdate: v => output.push(Math.round(v)),
            onComplete: () =>
                expect(output).toEqual([100, ...expected, ...expected]),
        })
    })
})
