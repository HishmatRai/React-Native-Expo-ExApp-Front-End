import * as React from 'react';
import { Text, View, StyleSheet, Animated,Image } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function CounterDown() {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors="#1BF915"
        onComplete={() => {
          console.log('ON_COMPLETE BEFORE RETURN')
          return [true, 0]
        }}
      >
        {/* {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
       
          </Animated.Text>
        )} */}
             <Image
            source={require("./../../images/logo.png")}
            style={styles._logo}
          />
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
  _logo: {
    width: 139,
    height: 100,
    marginTop: -10,
  },
});
