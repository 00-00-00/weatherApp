import React from 'react';
import { 
  View, 
  Text, 
  Button } from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{flex: 0.2}}/> 
        <Button 
          title="About"
          onPress={() => this.props.navigation.navigate('About')}/>
          <View style={{flex: 0.2}}/>
        <Button 
          title="ApiTest"
          onPress={() => this.props.navigation.navigate('ApiTest')}/>
      </View>
    );
  }
}