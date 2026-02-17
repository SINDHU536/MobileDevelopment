import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../utils/api";

const HomeScreen = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    console.log("Searching city:", city);
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const data = await fetchWeather(city);
      console.log("Weather Data received:", data);
      setWeather(data);
    } catch (err: any) {
        console.log("Error received:", error);
      setError(err);
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {loading && <ActivityIndicator size="large" />}

      {error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}

      {weather && (
        <WeatherCard weather={weather} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
