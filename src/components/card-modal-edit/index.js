import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../../database/firebaseDb';

export const CardModalEdit = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBodyText, setNoteBodyText] = useState('');
    const [imgUrl, setImgUrl] = useState('https://i.pinimg.com/originals/27/1d/18/271d1863de5a7e0a88b5c8023c61dc01.jpg');

    const Create = () => {
        const myDoc = doc(db, "notes", Math.floor(Date.now() * Math.random()).toString(36) );
        const docData = {
            "noteTitle": noteTitle,
            "noteBodyText": noteBodyText,
            "date": new Date(),
            "imgUrl": imgUrl
        };
        setDoc(myDoc, docData)
            .then(() => {
                alert("Gravado com sucesso.");//change to close modal instead
                setNoteTitle('');
                setNoteBodyText('');
            })
            .catch((error) => {
                alert("erro ao gravar");
            });
    }

    return (
        <View style={myStyle.container}>
            <View style={myStyle.bloco1}>
                <ImageBackground source={{uri: imgUrl}} style={myStyle.imgBlock}>
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
                    style={myStyle.myInput}
                    onChangeText={bText => setNoteBodyText(bText)}
                    value={noteBodyText}
                    placeholder={"Corpo da anotação.."}
                    multiline
                    numberOfLines={4}>
                </TextInput>
                <Button onPress={Create} title="Salvar Anotação"></Button>
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
    container:{
        flex: 1,
        alignSelf: 'stretch',
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
    }
});