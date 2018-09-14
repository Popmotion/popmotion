import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import posed from 'react-native-pose';

const Box = posed.View({
  init: { x: 0 },
  flipped: {
    x: 0,
    transition: ({ toValue }) => ({
      type: 'keyframes',
      duration: 2000,
      values: [0, 150, 0, -150, toValue],
      loop: Infinity
    })
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Box initialPose="init" pose="flipped" style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#ED00BB',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
