let prefersReducedMotion = false;
const setReducedMotion = (prefers: boolean) => (prefersReducedMotion = prefers);

if (typeof window !== 'undefined') {
  const motionMediaQuery = window.matchMedia('(prefers-reduced-motion)');

  const setReducedMotionPreferences = () =>
    motionMediaQuery.media === 'not all'
      ? setReducedMotion(false)
      : motionMediaQuery.matches
        ? setReducedMotion(true)
        : setReducedMotion(false);

  motionMediaQuery.addListener(setReducedMotionPreferences);
  setReducedMotionPreferences();
}

export { setReducedMotion };
export const isReducedMotion = () => prefersReducedMotion;
