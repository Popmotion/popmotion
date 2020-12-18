type Resolve = () => void

let isReady = false

const awaitingReady: Resolve[] = []

export async function whenWorkletReady() {
    if (!isReady) {
        return new Promise<void>((resolve) => {
            awaitingReady.push(resolve)
        })
    }
}

function flushAwaiting() {
    awaitingReady.forEach((resolve) => resolve())
}

export function workletReady() {
    isReady = true
    flushAwaiting()
}
