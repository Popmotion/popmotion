import React from 'react';
import ReactDOM from 'react-dom';
import SplitText from 'react-pose-text';
import './styles.css';

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const wordPoses = {
  draggable: true
};

const charPoses = {
  dragging: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      velocity: 100 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 1000
    }
  }
};

function App() {
  return (
    <div className="container">
      <SplitText wordPoses={wordPoses} charPoses={charPoses}>
        React Pose Text
      </SplitText>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
