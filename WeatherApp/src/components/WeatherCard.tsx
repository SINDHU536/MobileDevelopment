import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const WeatherCard = ({ weather }: any) => {
  const icon = weather.weather[0].icon;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather.name}</Text>

      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        }}
        style={styles.icon}
      />

      <Text style={styles.temp}>
        {weather.main.temp}°C
      </Text>

      <Text>
        Humidity: {weather.main.humidity}%
      </Text>

      <Text>
        {weather.weather[0].description}
      </Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  city: {
    fontSize: 22,
    fontWeight: "bold",
  },
  temp: {
    fontSize: 40,
  },
  icon: {
    width: 100,
    height: 100,
  },
});
