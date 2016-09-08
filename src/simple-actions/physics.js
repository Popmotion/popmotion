import Action from './Action';
import { speedPerFrame } from '../inc/calc';

class Physics extends Action {
  onUpdate({ elapsed }) {
    let { velocity } = this.props;

    // Apply acceleration
    velocity += speedPerFrame(this.acceleration, elapsed);

    // Apply friction
    velocity *= (1 - this.friction) ** (elapsed / 100);

    // Apply latest velocity
    this.current += speedPerFrame(velocity, elapsed);
  }
}

class Spring extends Action {
  onUpdate({ elapsed }) {
    const distanceToTarget = this.to - this.current;
    velocity += distanceToTarget * speedPerFrame(this.spring, elapsed);
  }
}

Physics.valueProps = [
  'velocity',
  'current'
];

Physics.defaultProps = {
  acceleration: 0,
  spring: 0,
  to: 0
};

export default function physics(props) {
  return new Physics(props);
};
