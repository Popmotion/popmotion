import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import posed, { Transition } from 'react-native-pose';

const Box = posed.View({
  exit: {
    x: ({ delta }) => delta * 100 + 'vw',
    transition: { duration: 3000 }
  },
  preEnter: { x: ({ delta }) => -delta * 100 + 'vw' },
  enter: { rotate: '45deg', x: 0, transition: { duration: 3000 } }
});

export default class App extends React.Component {
  state = { show: false };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          show: !this.state.show
        }),
      2000
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Transition delta={-1}>
          {this.state.show ? (
            <Box key="a" style={styles.box1} />
          ) : (
            <Box key="b" style={styles.box2} />
          )}
        </Transition>
      </View>
    );
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const styles = StyleSheet.create({
  box1: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#ff0'
  },
  box2: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#f0f'
  },
  box3: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#0ff'
  },
  box4: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
