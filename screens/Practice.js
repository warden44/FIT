import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function Practice(props) {
    return (
        <View style={{flex: 1, backgroundColor: 'orange'}}>
            <View><Text>{["hello", "my", "name", "is", "evan"]}</Text></View>
        </View>
    );
}

export default Practice;