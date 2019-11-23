import React from 'react';
import { 
    View,
    Text,
    Button } from 'react-native';

export class Counter extends React.Component {

    state = {
        counter: 0
    }

    onAddClicked() {
        this.setState((state) => ({
                counter: state.counter + 1
        }));
    }

    onSubtractClicked() {
        this.setState((currentStateSnapshot) =>  {
            if (currentStateSnapshot.counter == 0) 
            return {
                counter: 0
            }
            else return {
                counter: currentStateSnapshot.counter - 1 }
        });
    }

    render() {
        return ( 
            <View style={{flex: 1, justifyContent: 'center'}}>
               <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Button title="-" onPress={this.onSubtractClicked.bind(this)}/>
                    <Text style={{justifyContent: 'center'}}>
                        {this.state.counter}
                    </Text>
                    <Button title="+" onPress={this.onAddClicked.bind(this)}/>
               </View>
            </View>
        );
    }


}