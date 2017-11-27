import React from 'react';
import { View } from 'react-native';

const Page = (props) => {
    return (
        <View style={{ flex: 1, margin: 10, backgroundColor: '#ddd' }} >
            {props.children}
        </View>
    );
}

export default Page;