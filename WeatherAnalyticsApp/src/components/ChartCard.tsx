import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<Props> = ({ title, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default ChartCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
});