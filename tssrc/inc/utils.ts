const HAS_PERFORMANCE_NOW = (typeof performance !== 'undefined' && performance.now);

export const currentTime = HAS_PERFORMANCE_NOW ? () => performance.now() : () => new Date().getTime();
