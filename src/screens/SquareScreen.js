import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, green: number}
    // action === { colorToChange: 'red' || 'green' || 'blue', amount : 15 || -15 }
    switch (action.colorToChange) {
        case 'red':
            // never going to do: state.red = state.red - 15;
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    // state === { red: 0, green: 0, blue: 0 }
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter color="Red" 
                onIncrease={()=> dispatch({colorToChange: 'red', amount: INCREMENT})} 
                onDecrease={()=> dispatch({colorToChange: 'red', amount: -1 * INCREMENT})}
            />

            <ColorCounter color="Green" 
                onIncrease={()=> dispatch({colorToChange: 'green', amount: INCREMENT})} 
                onDecrease={()=> dispatch({colorToChange: 'green', amount: -1 * INCREMENT})}
            />

            <ColorCounter color="Blue" 
                onIncrease={()=> dispatch({colorToChange: 'blue', amount: INCREMENT})} 
                onDecrease={()=> dispatch({colorToChange: 'blue', amount: -1 * INCREMENT})}
            />

            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;