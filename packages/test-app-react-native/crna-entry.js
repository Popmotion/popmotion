import App from './App';
import Expo from 'expo';
import React from 'react';

if (typeof global.self === 'undefined') {
  global.self = global;
}

const AwakeInDevApp = props => [
  <App key="app" {...props} />,
  process.env.NODE_ENV === 'development' ? (
    <Expo.KeepAwake key="keep-awake" />
  ) : null
];
Expo.registerRootComponent(AwakeInDevApp);
