const identity = (v: any): any => v

/**
 * Creates an attractor that, given a strength constant, origin and value,
 * will calculate value as attracted to origin.
 */
export const createAttractor = (alterDisplacement: Function = identity) => (
    constant: number,
    origin: number,
    v: number
) => {
    const displacement = origin - v
    const springModifiedDisplacement =
        -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)))
    return displacement <= 0
        ? origin + springModifiedDisplacement
        : origin - springModifiedDisplacement
}

export const attract = createAttractor()
export const attractExpo = createAttractor(Math.sqrt)
