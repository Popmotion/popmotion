import { speedPerFrame, smooth } from './calc';

export function appyAcceleration(props, { elapsed }) {
  props.velocity += speedPerFrame(props.acceleration, elapsed);
}

export function applyFriction(props, { elapsed }) {
  props.velocity *= (1 - props.friction) ** (elapsed / 100);
}

export function applySpring(props, { elapsed }) {
  props.velocity += (props.to - props.current) * speedPerFrame(props.spring, elapsed);
}

export function applyVelocity(props, { elapsed }) {
  props.current += speedPerFrame(props.velocity, elapsed);
}

export function applyBounce(props, { elapsed }) {
  if ((props.min !== undefined && props.current < props.min) || (props.max !== undefined && props.current > props.max)) {
    props.velocity *= -props.bounce;
  }
}

export function applyOffset(props, inputProps) {
  props.current = props.from + (inputProps.current - inputProps.from);
}

export function applySmoothing(props, { elapsed }) {
  if (props.smooth) {
    props.current = smooth(props.current, props.previous, elapsed, props.smooth);
  }
}

