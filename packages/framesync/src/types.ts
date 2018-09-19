export type FrameData = {
  delta: number;
  timestamp: number;
};

export type ProcessMethod = (data: FrameData) => void;

export type ProcessSteps = { [key in StepId]?: ProcessMethod };

export type Process = ProcessSteps & {
  keepAlive?: boolean;
  immediate?: boolean;
  isCancelled?: boolean;
};

export type ProcessOptions = {
  immediate: boolean;
  single: boolean;
};

export interface Step {
  schedule: (process: Process) => void;
  cancel: (process: Process) => void;
  process: (frame: FrameData) => void;
}

export enum StepId {
  Update = 'update',
  PreRender = 'preRender',
  Render = 'render',
  PostRender = 'postRender'
}

export type StepMap = { [key in StepId]: Step };
