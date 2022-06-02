import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { doc, setDoc } from 'firebase/firestore'

import { db } from '../../database/firebaseDb';

export const CardModalEdit = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBodyText, setNoteBodyText] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const Create = () => {
        const myDoc = doc(db, "notes", "newDocument");//auto change doc
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
            })
            .catch((error) => { alert("Erro ao gravar.") });
    }

    return (
        <View>
            <Text>Nova nota!</Text>
            <TextInput //add a stylesheet for the forms
                onChangeText={iUrl => setImgUrl(iUrl)}//try change background in same time
                value={imgUrl}
                placeholder={"Url da foto (background)"}>
            </TextInput>
            <TextInput
                onChangeText={noteT => setNoteTitle(noteT)}
                value={noteTitle}
                placeholder={"Titulo da anotação"}>
            </TextInput>
            <TextInput
                onChangeText={bText => setNoteBodyText(bText)}
                value={noteBodyText}
                placeholder={"Corpo da anotação.."}
                multiline
                numberOfLines={4}>
            </TextInput>
            <Button onPress={Create} title="Salvar Anotação"></Button>
        </View>
    );
}