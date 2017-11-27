import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FirstPage from './src/Pages/FirstPage';
import SecondPage from './src/Pages/SecondPage';
import ThirdPage from './src/Pages/ThirdPage';

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <MyApp />
    );
  }
}

const MyApp = TabNavigator({
  First: {
    screen: FirstPage,
  },
  Second: {
    screen: SecondPage,
  },
  Third: {
    screen: ThirdPage,
  },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeBackgroundColor: 'red',
      inactiveBackgroundColor: '#EFEFEF',
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: '#FF4E40'
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    }
  });