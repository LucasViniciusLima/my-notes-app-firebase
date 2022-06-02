import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../../database/firebaseDb';

export const CardModalEdit = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBodyText, setNoteBodyText] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const Create = () => {
        const myDoc = doc(db, "notes", "newDocument2");//auto change doc
        const docData = {
            "name": "UserName",//change username
            "noteTitle": noteTitle,
            "noteBodyText": noteBodyText,
            "date": new Date(),
            "imgUrl": imgUrl
        };
        setDoc(myDoc, docData)
            .then(() => {
                alert("Gravado com sucesso.");//change to close modal instead
                setName('');
                setNoteTitle('');
                setNoteBodyText('');
                setImgUrl('');
            });
    }

    return (
        <View style={myStyle.container}>
            <View style={myStyle.bloco1}>

            </View>
            <View style={myStyle.bloco2}>
            <Text style={myStyle.myTitle} >Criar nova anotação</Text>
            <TextInput //add a stylesheet for the forms
                style={myStyle.myInput}
                onChangeText={iUrl => setImgUrl(iUrl)}//try change background in same time
                value={imgUrl}
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
        width: "100%"
    },
    bloco1: {
        flex: 1,
        backgroundColor: "#111"
    },
    bloco2: {
        flex: 4,
        padding: 20
    },
    myTitle: {
        fontSize: 22,
        marginBottom: 15,
        fontWeight: 750
    }
});