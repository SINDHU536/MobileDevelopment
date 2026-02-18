import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { USERS } from '../utils/constants';

const FlatListScreen = () => {

  console.log("FlatList rendering only visible items");

  const renderItem = ({ item }: any) => {
    console.log("Rendering:", item.name);

    return (
      <View style={styles.card}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={USERS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      initialNumToRender={5}
  windowSize={3}
    />
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#a0d2eb',
  },
});
