import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Weather Charts Learning App</Text>
      <Text style={styles.subtitle}>
        Explore Line, Bar & Pie Charts using real weather data.
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { marginTop: 10, textAlign: "center", paddingHorizontal: 20 },
});