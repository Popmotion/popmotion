import { SpringConfig } from '../spring';

function findSpringForDuration(
  duration: number,
  dampingRatio: number
): SpringConfig {
  const initialStiffness = 400;

  const ratio = damping / (2 * Math.sqrt(stiffness));

  // try every spring of a certain stiffness -> ratio and search for spring based on duration
}

findSpringForDuration(2, 0.8);
