import React from 'react';
import ReactDOM from 'react-dom';
import SplitText from 'react-pose-text';
import './styles.css';

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const wordPoses = {
  draggable: true
};

function App() {
  return (
    <div className="container">
      <SplitText wordPoses={wordPoses}>React Pose Text</SplitText>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
