import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import posed from 'react-native-pose';

const Posed = posed.View({
  init: { rotate: '0deg' },
  flipped: {
    rotate: '180deg',
    transition: {
      type: 'spring'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Posed initialPose="init" pose="flipped" style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Posed>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
