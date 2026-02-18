import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <Button
        title="Go to ScrollView Screen"
        onPress={() => navigation.navigate('ScrollView')}
      />

      <Button
        title="Go to FlatList Screen"
        onPress={() => navigation.navigate('FlatList')}
      />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
});
