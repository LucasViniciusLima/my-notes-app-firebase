import { StyleSheet, View, FlatList, Modal } from 'react-native';
import { useState, useEffect } from 'react';

import { Card } from './src/components/card';
import { CardModalEdit } from './src/components/card-modal-edit';
import { CardModalView } from './src/components/card-modal-view';
import { PlusButton } from './src/components/plus-button';
import { collection, getDocs } from "firebase/firestore";

import { db } from './src/database/firebaseDb';

async function getDBDoc() {
  const querySnapshot = await getDocs(collection(db, "notes"));
  
  let myListNotes = [];

  querySnapshot.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    myListNotes.push(item);
  });

  return myListNotes;
}


export default function App() {
  const [modalViewCardVisible, setModalViewCardVisible] = useState(false);//on create new note click
  const [modalEditCardVisible, setModaEditCardVisible] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [selectedNote, setSelectedNote] = useState({ id: '', imgUrl: '', noteTitle: '', noteBodyText: '' });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setNoteList(await getDBDoc());
  }

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
        data={noteList}
        renderItem={renderCards}
        keyExtractor={(item) => item.id}
      />

      <PlusButton createNewNote={(value) => setModaEditCardVisible(value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 25
  },
});
