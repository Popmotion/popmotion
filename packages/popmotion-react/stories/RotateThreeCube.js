import React from 'react';
import { physics } from 'popmotion';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { MotionValue } from '../src';

export default () => (
  <React3
    mainCamera="camera"
    width={400}
    height={300}
  >
    <scene>
      <perspectiveCamera
        name="camera"
        fov={50}
        aspect={400/300}
        near={0.1}
        far={1000}
        position={new THREE.Vector3(0, 0, 5)}
      />
      <MotionValue
        initialState="spin"
        onStateChange={{
          spin: ({value}) => {
            physics({
              from: value.get(),
              velocity: 1,
              onUpdate: value
            }).start();
          }
        }}
      >
        {({ v }) => (
          <mesh rotation={new THREE.Euler(v, v, 0)}>
            <boxGeometry
              width={1}
              height={1}
              depth={1}
            />
            <meshBasicMaterial color={0x00ff00} />
          </mesh>
        )}
      </MotionValue>
    </scene>
  </React3>
);
