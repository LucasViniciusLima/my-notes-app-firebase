import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';


export const Card = (props) => {
    const note = props.note;
    const {openNote} = props;
    const {setModalVisible} = props;

    return (
        <TouchableOpacity style={myStyle.containerCard} onPress={() => { openNote(note), setModalVisible(true) }}>
            <Image style={myStyle.imageCard} source={{ uri: note.imgUrl }} />
            <View style={myStyle.bodyTextView}>
                <Text style={myStyle.titleCard}>{note.noteTitle.substring(0, 23)}</Text>
                <Text style={myStyle.bodyCardText}>{note.noteBodyText.substring(0, 26)}..</Text>
            </View>
        </TouchableOpacity>
    ); 

}

const win = Dimensions.get('window');
const ratio = win.width / 1100;

const myStyle = StyleSheet.create({
    imageCard: {
        width: win.width / 2.125,
        height: 362 * ratio,
    },
    containerCard: {
        backgroundColor: "transparent",
        overflow: 'hidden',
        width: win.width / 2.1,
        height: 600 * ratio,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EEE',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 10,
        marginHorizontal:3
    },
    titleCard: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 5
    },
    bodyCardText: {
        fontSize: 14,
    },
    bodyTextView: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 15,
    }
});