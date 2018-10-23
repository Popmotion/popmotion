import { CurrentPose } from '../components/PoseElement/types';

// Check if pose has changed. Pose can either be an array or string
// This is duplicated from react-pose-core - that version has a unit test.
// If anyone reading this knows of an easy way to share modules in a .ts monorepo
// without publishing to npm, get in touch.
export const hasChanged = (prev: CurrentPose, next: CurrentPose): boolean => {
  // Immediate return if these are literally the same poses (ie same string or same array reference)
  if (prev === next) return false;

  const prevIsArray = Array.isArray(prev);
  const nextIsArray = Array.isArray(next);

  // If one is a string and the other is array, they've changed
  // Or if they're both strings, they would have returned false earlier (if the same)
  if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
    return true;

    // Or if they're both arrays, do a shallow equivalency check
    // For the purposes of speed and simplicity of code we
    // make the assumption they're in the same order
  } else if (prevIsArray && nextIsArray) {
    const numPrev = prev.length;
    const numNext = next.length;

    if (numPrev !== numNext) return true;

    for (let i = 0; i < numPrev; i++) {
      if (prev[i] !== next[i]) return true;
    }
  }

  return false;
};
