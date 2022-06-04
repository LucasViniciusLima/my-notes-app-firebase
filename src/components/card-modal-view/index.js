import React from 'react';

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export const CardModalView = (props) => {
    const { note } = props;
    const {setModalVisible} = props;

    return (
        <View style={myStyle.container}>
            <View style={myStyle.bloco1}>
                <ImageBackground source={{ uri: note.imgUrl }} style={myStyle.imgBlock}>
                    <Text style={[myStyle.textWhite, myStyle.myTitle]}>{note.noteTitle}</Text>
                </ImageBackground>
            </View>
            <View style={myStyle.bloco2}>
                <Text style={myStyle.myTitle} >{note.noteTitle}</Text>
                <Text>{note.noteBodyText}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={myStyle.btnCancelar}>
                    <Text style={[myStyle.textWhite, myStyle.btnCancelarText]}>VOLTAR</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF'
    },
    bloco1: {
        flex: 1.5,
        backgroundColor: "#111"
    },
    bloco2: {
        flex: 4,
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    myTitle: {
        fontSize: 22,
        marginBottom: 15,
        fontWeight: "bold"
    },
    textWhite: {
        color: "#FFFFFF"
    },
    imgBlock: {
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: 125,
        paddingHorizontal: 20
    },
    btnCancelar: {
        alignItems: 'center',
        backgroundColor: '#EE6655',
        paddingVertical: 10,
        marginTop: 10
    },
    btnCancelarText: {
        fontWeight: '600'
    }
});