import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  city: string;
  temp: number;
  description: string;
}

const WeatherHeader: React.FC<Props> = ({ city, temp, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temp}>{Math.round(temp)}°C</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default WeatherHeader;

const styles = StyleSheet.create({
  container: { alignItems: "center", marginVertical: 10 },
  city: { fontSize: 20, fontWeight: "600" },
  temp: { fontSize: 42, fontWeight: "bold" },
  desc: { fontSize: 16, textTransform: "capitalize" },
});