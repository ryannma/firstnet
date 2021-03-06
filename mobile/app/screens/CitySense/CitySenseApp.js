import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Animated, Easing } from 'react-native';

import Home from '../Home/Home';
import ChatScreenContainer from '../ChatScreen/Container';
import ContactContainer from '../Contact/Container';

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    ChatScreen: {screen: ChatScreenContainer},
    Contact: {screen: ContactContainer}
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#002F68',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
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

export default class CitySenseApp extends Component<Props> {
  render() {
    return <RootStack/>;
  }
}
