let prefersReducedMotion = false;

if (typeof window !== 'undefined') {
  const motionMediaQuery = window.matchMedia('(prefers-reduced-motion)');

  const setReducedMotionPreferences = () => {
    prefersReducedMotion =
      motionMediaQuery.media === 'not all'
        ? false
        : motionMediaQuery.matches ? true : false;
  };

  motionMediaQuery.addListener(setReducedMotionPreferences);
  setReducedMotionPreferences();
}

export const isReducedMotion = () => prefersReducedMotion;
