import React from 'react';
import { Box } from '../inc';
import pose from '../../packages/popmotion-pose/lib';

export class PoseDOM extends React.Component {
  setRef = (ref) => {
    if (ref) {
      this.poser = pose(ref, {
        open: {
          backgroundColor: 'rgba(0, 0, 0, 1)'
        }
      });

      this.poser.set('open')

    } else if (this.poser) {
      this.poser.destroy();
    }
  };

  render() {
    return <Box innerRef={this.setRef} />
  }
}

