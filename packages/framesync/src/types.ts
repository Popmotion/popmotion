export type FrameData = {
    delta: number
    timestamp: number
}

export type Process = (data: FrameData) => void

export interface Step {
    schedule: (
        process: Process,
        keepAlive?: boolean,
        immediate?: boolean
    ) => void
    cancel: (process: Process) => void
    process: (frame: FrameData) => void
}

export type StepId = "read" | "update" | "preRender" | "render" | "postRender"

export type SyncApi = {
    steps: { [key in StepId]: Step }
    sync: {
        [key in StepId]: (
            process: Process,
            keepAlive?: boolean,
            immediate?: boolean
        ) => Process
    }
    cancelSync: { [key in StepId]: (process: Process) => void }
}
