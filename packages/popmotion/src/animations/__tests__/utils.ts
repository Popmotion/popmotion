export const syncDriver = (interval = 10) => (update: (v: number) => void) => {
    let isRunning = true
    return {
        start: () => {
            setTimeout(() => {
                update(0)
                while (isRunning) update(interval)
            }, 0)
        },
        stop: () => (isRunning = false),
    }
}
