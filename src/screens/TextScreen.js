import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [text, setText] = useState('');

    return (
        <View>
            <Text>Enter Password : </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrent={false}
                onChangeText={(input)=>setText(input)}
                value={text}
            />
            {text.length <= 5 ? <Text>Password must be longer than 5 characters</Text> : <Text>Good!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;