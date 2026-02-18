import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { USERS } from '../utils/constants';

const ScrollViewScreen = () => {

  console.log("ScrollView rendering all items");

  return (
    <ScrollView style={styles.container}>

      {USERS.map((user) => {
        console.log("Rendering:", user.name);

        return (
          <View key={user.id} style={styles.card}>
            <Text>{user.name}</Text>
          </View>
        );
      })}

    </ScrollView>
  );
};

export default ScrollViewScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#ddd',
  },
});
