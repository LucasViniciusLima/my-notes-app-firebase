import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const PlusButton = (props)=> {
    const { createNewNote } = props;

    return (
        <TouchableOpacity onPress={() => createNewNote(true)}>
            <View style={myStyle.plusButtonBody}>
                <Text style={myStyle.plusButtonText}>+</Text>
            </View>
        </TouchableOpacity>
    );
}

const myStyle = StyleSheet.create({
    plusButtonBody:{
        backgroundColor: '#22CAEE',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 999,
        position: 'absolute', right: -195, bottom: 0
    },
    plusButtonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: '600'
    }
});
