import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { About } from './src/screens/about/About';
import { ApiTest } from './src/screens/apiTest/ApiTest'
import { Counter } from './src/screens/counter/Counter';


const AppNavigationStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: About,
    ApiTest: ApiTest,
    Counter: Counter
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigationStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
