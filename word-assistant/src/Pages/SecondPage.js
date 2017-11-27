import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Header from '../Components/Common/Header';

class SecondPage extends React.Component {
    static navigationOptions = {
        tabBarLabel: '2',
    };

    render() {
        return (
            <View>
                <Header headerText="İkinci Sayfa" />
            </View>
        );
    }
}

export default SecondPage;