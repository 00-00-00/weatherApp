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
        <Button 
          title="About"
          onPress={() => this.props.navigation.navigate('About')}/>
      </View>
    );
  }
}