import React from 'react';
import { 
  View, 
  Text, 
  Button } from 'react-native';

export class ApiTest extends React.Component {

    state = {
        data: ''
    }

    render() {
        return (
            <View style = {{ justifyContent: "center", alignContent: "center", flex: 1, padding: 16 }}>
                <Text style = {{fontWeight: "bold", fontSize: 18}}>
                    Data from the server { JSON.stringify(this.state.data)}
                </Text>
            </View>
        );
    }

    componentDidMount = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=8d92ebefd46a040576a38424b9ac4c96', {
            method: "GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);

            this.setState({
                data: responseJson
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }       
}