import { findSpring, minDamping, minDuration } from "../find-spring"

test("findSpring", () => {
    // let time = performance.now()
    let searchedSprings = 0
    const ratioResolution = 0.05
    const ratioIterations = 49
    const durationResolution = 50
    const durationIterations = 199
    const output = []
    for (let ratioIndex = 0; ratioIndex < ratioIterations; ratioIndex++) {
        for (
            let durationIndex = 0;
            durationIndex < durationIterations;
            durationIndex++
        ) {
            searchedSprings += 1

            const settings = findSpring({
                duration: minDuration + durationIndex * durationResolution,
                bounce: 1 - minDamping + ratioIndex * ratioResolution,
            })
            expect(settings.stiffness).not.toBe(100)
            expect(settings.damping).not.toBe(10)

            output.push(settings)
        }
    }

    // console.log(
    //     `Finding ${searchedSprings} springs took ${Math.round(
    //         performance.now() - time
    //     )}ms`
    // )

    // console.log(output[2])

    // let average = (array: number[]) =>
    //     array.reduce((a, b) => a + b) / array.length
    // console.log(average(output.map((o) => o.stiffness)))
})
// 150 / 2.4
// avg 7041
