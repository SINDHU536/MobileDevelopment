import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchBar = ({ city, setCity, onSearch }: any) => {
  return (
    <View>
      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
