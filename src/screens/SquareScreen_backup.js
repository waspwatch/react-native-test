import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const setColor = (color, increment) => {
        switch(color) {
            case('red'):
                red + increment < 0 || red + increment > 255 ? null : setRed(red + increment);
                return;
            case('green'):
                green + increment < 0 || green + increment > 255 ? null : setGreen(green + increment);
                return;
            case('blue'):
                blue + increment < 0 || blue + increment > 255 ? null : setBlue(blue + increment);
                return;
        }
    };
    
    return (
        <View>
            <ColorCounter color="Red" onIncrease={()=>setColor('red', INCREMENT)} onDecrease={()=>setColor('red', -1*INCREMENT)} />
            <ColorCounter color="Green" onIncrease={()=>setColor('green', INCREMENT)} onDecrease={()=>setColor('green', -1*INCREMENT)} />
            <ColorCounter color="Blue" onIncrease={()=>setColor('blue', INCREMENT)} onDecrease={()=>setColor('blue', -1*INCREMENT)} />
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;