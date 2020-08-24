import onNextFrame from "./on-next-frame"
import createStep from "./create-render-step"
import { Process, StepId, SyncApi, FrameData } from "./types"

const maxElapsed = 40
let defaultElapsed = (1 / 60) * 1000
let useDefaultElapsed = true
let willRunNextFrame = false
let isProcessing = false

const frame = {
    delta: 0,
    timestamp: 0,
}

const stepsOrder: StepId[] = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
]

const setWillRunNextFrame = (willRun: boolean) => (willRunNextFrame = willRun)

const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createStep(setWillRunNextFrame)
    return acc
}, {} as SyncApi["steps"])

const sync = stepsOrder.reduce((acc, key) => {
    const step = steps[key]
    acc[key] = (process: Process, keepAlive = false, immediate = false) => {
        if (!willRunNextFrame) startLoop()
        step.schedule(process, keepAlive, immediate)
        return process
    }
    return acc
}, {} as SyncApi["sync"])

const cancelSync = stepsOrder.reduce((acc, key) => {
    acc[key] = steps[key].cancel
    return acc
}, {} as SyncApi["cancelSync"])

const processStep = (stepId: StepId) => steps[stepId].process(frame)

const processFrame = (timestamp: number) => {
    willRunNextFrame = false

    frame.delta = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1)

    // Set this elapsed as default elapsed
    // Maybe move this to a moving average for a more precise value
    if (!useDefaultElapsed) defaultElapsed = frame.delta

    frame.timestamp = timestamp

    isProcessing = true
    stepsOrder.forEach(processStep)
    isProcessing = false

    if (willRunNextFrame) {
        useDefaultElapsed = false
        onNextFrame(processFrame)
    }
}

const startLoop = () => {
    willRunNextFrame = true
    useDefaultElapsed = true

    if (!isProcessing) onNextFrame(processFrame)
}

const getFrameData = () => frame

export default sync
export { cancelSync, getFrameData, FrameData, Process }
