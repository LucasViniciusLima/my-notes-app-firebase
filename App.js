import { StyleSheet, View, FlatList, Modal } from 'react-native';
import { useState } from 'react';

import { Card } from './src/components/card';
import { CardModalEdit } from './src/components/card-modal-edit';
import { CardModalView } from './src/components/card-modal-view';


const note = [
  {
    id: 'myIdfake01',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps",
    noteBodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake02',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps 2",
    noteBodyText: "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake03',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps 3",
    noteBodyText: "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake04',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps 4",
    noteBodyText: "Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake05',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps",
    noteBodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake06',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps 2",
    noteBodyText: "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake07',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps 3",
    noteBodyText: "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'myIdfake08',
    imgUrl: "https://i.imgur.com/v0ae8WM.jpg",
    noteTitle: "React Native apps 4",
    noteBodyText: "Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }];

export default function App() {
  const [modalViewCardVisible, setModalViewCardVisible] = useState(false);//on create new note click
  const [modalEditCardVisible, setModaEditCardVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState({id: '',imgUrl: '', noteTitle: '',noteBodyText: ''});

  const renderCards = ({ item }) => (
    <Card
      note={item}
      openNote={note => setSelectedNote(note)}
      setModalVisible={value => setModalViewCardVisible(value)}
    ></Card>
  );

  return (
    <View style={styles.container}>

      <Modal transparent={true} animationType={"slide"} visible={modalEditCardVisible} >
        <CardModalEdit setModalVisible={value => setModaEditCardVisible(value)} ></CardModalEdit>
      </Modal>

      <Modal transparent={true} animationType={"slide"} visible={modalViewCardVisible} >
        <CardModalView note={selectedNote} setModalVisible={value => setModalViewCardVisible(value)} ></CardModalView>
      </Modal>

      <FlatList
        horizontal={false}
        numColumns={2}
        data={note}
        renderItem={renderCards}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
  //<Card note={note}></Card>
  //<CardModalEdit></CardModalEdit>
  //<CardModalView note={note}></CardModalView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 25
  },
});
