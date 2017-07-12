import Action from './';
import { applyOffset } from '../inc/transformers';

class TrackOffset extends Action {
  onStart() {
    const { action } = this.props;
    this.applyOffset = applyOffset(action.get(), this.current);
  }

  update() {
    const { action } = this.props;
    return this.applyOffset(action.get());
  }
}

export default (action, props) => new TrackOffset({ action, ...props });
