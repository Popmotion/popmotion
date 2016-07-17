import Action from './Action';
import { speedPerFrame } from '../inc/calc';

class Physics extends Action {
  onUpdate({ elapsed }) {
    let { velocity } = this;

    // Apply acceleration
    velocity += speedPerFrame(this.acceleration, elapsed);

    // Apply friction
    velocity *= (1 - this.friction) ** (elapsed / 100);

    // Apply spring
    if (this.spring) {
      const distanceToTarget = this.to - this.current;
      velocity += distanceToTarget * speedPerFrame(this.spring, elapsed);
    }

    // Apply latest velocity
    this.current += speedPerFrame(velocity, elapsed);
  }
}

Physics.defaultProps = {
  acceleration: 0,
  spring: 0
};

function (Component) {
  return class Spring extends Action {
    onUpdate() {
      Component.onUpdate();
      const distanceToTarget = this.to - this.current;
      velocity += distanceToTarget * speedPerFrame(this.spring, elapsed); 
    }
  }
}

export default function physics(props) {
  return new Physics(props);
};
