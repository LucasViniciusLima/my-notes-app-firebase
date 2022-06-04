import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../../database/firebaseDb';

export const CardModalEdit = (props) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBodyText, setNoteBodyText] = useState('');
    const [imgUrl, setImgUrl] = useState('https://i.pinimg.com/originals/27/1d/18/271d1863de5a7e0a88b5c8023c61dc01.jpg');
    const { setModalVisible } = props;

    const Create = () => {
        const myDoc = doc(db, "notes", Math.floor(Date.now() * Math.random()).toString(36));
        const docData = {
            "noteTitle": noteTitle,
            "noteBodyText": noteBodyText,
            "date": new Date(),
            "imgUrl": imgUrl
        };
        setDoc(myDoc, docData)
            .then(() => {                
                setNoteTitle('');
                setNoteBodyText(''); 
                setModalVisible(false);               
            })
            .catch((error) => {
                console.log("Error ",error);
            });
    }

    return (
        <View style={myStyle.container}>
            <View style={myStyle.bloco1}>
                <ImageBackground source={{ uri: imgUrl }} style={myStyle.imgBlock}>
                    <Text style={[myStyle.textWhite, myStyle.myTitle]}>{noteTitle}</Text>
                </ImageBackground>
            </View>
            <View style={myStyle.bloco2}>
                <Text style={myStyle.myTitle} >Criar nova anotação</Text>
                <TextInput
                    style={myStyle.myInput}
                    onChangeText={iUrl => setImgUrl(iUrl)}
                    placeholder={"Url da foto (background)"}>
                </TextInput>
                <TextInput
                    style={myStyle.myInput}
                    onChangeText={noteT => setNoteTitle(noteT)}
                    value={noteTitle}
                    placeholder={"Titulo da anotação"}>
                </TextInput>
                <TextInput
                    style={[myStyle.myInput, {marginBottom: 50}]}
                    onChangeText={bText => setNoteBodyText(bText)}
                    value={noteBodyText}
                    placeholder={"Corpo da anotação.."}
                    multiline
                    numberOfLines={4}>
                </TextInput>
                <Button onPress={Create} title="Salvar Anotação"></Button>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <View style={myStyle.btnCancelar}>
                        <Text style={[myStyle.textWhite, myStyle.btnCancelarText]}>CANCELAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const myStyle = StyleSheet.create({
    myInput: {
        borderColor: "#AAAA",
        borderWidth: 0.5,
        paddingVertical: 7,
        paddingHorizontal: 4,
        borderRadius: 9,
        marginBottom: 8
    },
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