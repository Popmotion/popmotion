type NumIdent = (num: number) => number;

const epsilon = 0.001;

// Newton's method
function approximateRoot(
  func: NumIdent,
  derivative: NumIdent,
  initialGuess: number,
  times: number = 12
): number {
  let result = initialGuess;
  for (
    let i = 1, end = times, asc = 1 <= end;
    asc ? i < end : i > end;
    asc ? i++ : i--
  ) {
    result = result - func(result) / derivative(result);
  }
  return result;
}

function angularFrequency(
  undampedFrequency: number,
  dampingRatio: number
): number {
  return undampedFrequency * Math.sqrt(1 - Math.pow(dampingRatio, 2));
}

interface DurationConfig {
  dampingRatio: number;
  mass: number;
  duration: number;
  initialVelocity: number;
}

export function deriveConfigFromDuration({
  dampingRatio,
  mass,
  duration,
  initialVelocity
}: DurationConfig) {
  let derivative: NumIdent;
  let envelope: NumIdent;
  duration = duration / 1000;

  if (dampingRatio < 1) {
    envelope = undampedFrequency => {
      const exponentialDecay = undampedFrequency * dampingRatio;
      const currentDisplacement = exponentialDecay * duration;
      const a = exponentialDecay - initialVelocity;
      const b = angularFrequency(undampedFrequency, dampingRatio);
      const c = Math.exp(-currentDisplacement);
      return epsilon - (a / b) * c;
    };

    derivative = undampedFrequency => {
      const exponentialDecay = undampedFrequency * dampingRatio;
      const currentDisplacement = exponentialDecay * duration;
      const d = currentDisplacement * initialVelocity + initialVelocity;
      const e =
        Math.pow(dampingRatio, 2) * Math.pow(undampedFrequency, 2) * duration;
      const f = Math.exp(-currentDisplacement);
      const g = angularFrequency(Math.pow(undampedFrequency, 2), dampingRatio);
      const factor = -envelope(undampedFrequency) + epsilon > 0 ? -1 : 1;
      return (factor * ((d - e) * f)) / g;
    };
  } else {
    envelope = undampedFrequency => {
      const a = Math.exp(-undampedFrequency * duration);
      const b = (undampedFrequency - initialVelocity) * duration + 1;
      return -epsilon + a * b;
    };

    derivative = undampedFrequency => {
      const a = Math.exp(-undampedFrequency * duration);
      const b = (initialVelocity - undampedFrequency) * Math.pow(duration, 2);
      return a * b;
    };
  }

  const initialGuess = 5 / duration;
  const angularFreq = approximateRoot(envelope, derivative, initialGuess);

  const config = { stiffness: 100, damping: 10 };
  if (!isNaN(angularFreq)) {
    config.stiffness = Math.pow(angularFreq, 2) * mass;
    config.damping = dampingRatio * 2 * Math.sqrt(mass * config.stiffness);
  }

  return config;
}
