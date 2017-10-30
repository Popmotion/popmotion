export interface WhatWGEventListenerArgs {
  capture?: boolean;
}

export interface WhatWGAddEventListenerArgs extends WhatWGEventListenerArgs {
  passive?: boolean;
  once?: boolean;
}

export type WhatWGAddEventListener = (
  type: string,
  listener: (event: Event) => void,
  options?: WhatWGAddEventListenerArgs
) => void;