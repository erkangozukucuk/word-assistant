import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Header from '../Components/Common/Header';

class ThirdPage extends React.Component {
    static navigationOptions = {
        tabBarLabel: '3',
    };

    render() {
        return (
            <View>
                <Header headerText="Üçüncü Sayfa" />
            </View>
        );
    }
}


export default ThirdPage;


