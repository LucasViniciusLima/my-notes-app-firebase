import { StyleSheet, View } from 'react-native';

import { Card } from './src/components/card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card></Card>
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
