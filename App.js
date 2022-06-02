import { StyleSheet, View } from 'react-native';

import { Card } from './src/components/card';
import { CardModalEdit } from './src/components/card-modal-edit';

export default function App() {
  return (
    <View style={styles.container}>
      <CardModalEdit></CardModalEdit>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
