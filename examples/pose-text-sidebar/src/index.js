import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import './styles.css';

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const Sidebar = posed.div({
  exit: {
    x: '-100%'
  },
  enter: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 50
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

function App() {
  return (
    <div className="container">
      <Sidebar class="sidebar" initialPose="exit" pose="enter">
        <h1>
          <SplitText charPoses={charPoses}>Contents</SplitText>
        </h1>
      </Sidebar>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
