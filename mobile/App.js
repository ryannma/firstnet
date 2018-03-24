import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Animated, Easing } from 'react-native';

import Home from './app/screens/Home/Home';

const RootStack = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#002F68'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 1000,
        timing: Animated.timing,
        easing: Easing.step0
      }
    })
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack/>;
  }
}
