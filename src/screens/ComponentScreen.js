import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = <Text style={styles.textStyle2}>My name is Kyle</Text>
    return <View>
        <Text style={styles.textStyle1}>This is the components screen</Text>
        {greeting}
    </View>
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;