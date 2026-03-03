import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Dimensions,
} from "react-native";
import axios from "axios";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
} from "react-native-chart-kit";

import WeatherHeader from "../components/WeatherHeader";
import ChartCard from "../components/ChartCard";
import { getHourlyData } from "../utils/weatherHelpers";

const screenWidth = Dimensions.get("window").width;

const WEATHER_API_KEY = "e8c1c448461803c52e947e63f62b9219";

const WeatherScreen = () => {
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    try {
      setError(false);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=12.9716&lon=77.5946&units=metric&appid=${WEATHER_API_KEY}`
      );

      setForecast(response.data);
    } catch (err: any) {
      console.log("API ERROR:", err?.response?.data || err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading Weather...</Text>
      </View>
    );
  }

  if (error || !forecast || !forecast.list) {
    return (
      <View style={styles.center}>
        <Text>Failed to load weather data.</Text>
      </View>
    );
  }

  const { labels, temps, rain, humidity } = getHourlyData(
    forecast.list
  );

  const safeTemp = temps?.[0] ?? 0;
  const safeDescription =
    forecast.list?.[0]?.weather?.[0]?.description ?? "";

  const chartConfig = {
    backgroundGradientFrom: "#4facfe",
    backgroundGradientTo: "#00f2fe",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
    labelColor: () => "#fff",
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#fff",
    },
  };

  return (
    <ScrollView style={styles.container}>
      <WeatherHeader
        city={forecast.city?.name ?? "Unknown"}
        temp={safeTemp}
        description={safeDescription}
      />

      {/* 1️⃣ Bezier Line Chart */}
      <ChartCard title="Bezier Line Chart (Smooth Temperature)">
        <LineChart
          data={{ labels, datasets: [{ data: temps }] }}
          width={screenWidth - 40}
          height={220}
          yAxisSuffix="°C"
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </ChartCard>

      {/* 2️⃣ Normal Line Chart */}
      <ChartCard title="Normal Line Chart (Straight)">
        <LineChart
          data={{ labels, datasets: [{ data: temps }] }}
          width={screenWidth - 40}
          height={220}
          yAxisSuffix="°C"
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </ChartCard>

      {/* 3️⃣ Bar Chart */}
      <ChartCard title="Rain Probability (Bar Chart)">
        
  <BarChart
    data={{
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: [120, 150, 90, 170, 200, 180, 140],
        },
      ],
    }}
    width={screenWidth - 40}
    height={220}
    yAxisSuffix="k"
    fromZero
    showValuesOnTopOfBars
    chartConfig={{
      backgroundGradientFrom: "#6a11cb",
      backgroundGradientTo: "#80c9eb",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
      labelColor: () => "#fff",
      propsForBackgroundLines: {
        stroke: "rgba(228, 161, 161, 0.2)",
      },
    }}
    style={{
      borderRadius: 16,
    }}
  />

      </ChartCard>

      {/* 4️⃣ Stacked Bar Chart */}
      <ChartCard title="Stacked Bar (Temp + Rain)">
       <StackedBarChart
  data={{
    labels,
    legend: ["Temp", "Feels Like"],
    data: temps.map((t, i) => [
      t,
      forecast.list[i]?.main?.feels_like ?? 0,
    ]),
    barColors: ["#ddf1f1", "#ff9800"],
  }}
  width={screenWidth - 40}
  height={220}
  chartConfig={chartConfig}
/>
      </ChartCard>

      {/* 5️⃣ Pie Chart */}
      <ChartCard title="Average Humidity (Pie)">
        <PieChart
          data={[
            {
              name: "Humidity",
              population: humidity,
              color: "#21f344",
              legendFontColor: "#050505",
              legendFontSize: 14,
            },
            {
              name: "Remaining",
              population: 100 - humidity,
              color: "#f8c8c8",
              legendFontColor: "#000",
              legendFontSize: 14,
            },
          ]}
          width={screenWidth - 40}
          height={200}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10"
        />
      </ChartCard>

      {/* 6️⃣ Progress Chart */}
      <ChartCard title="Humidity Progress">
        <ProgressChart
          data={{
            labels: ["Humidity"],
            data: [humidity / 100],
          }}
          width={screenWidth - 40}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </ChartCard>
    </ScrollView>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    borderRadius: 12,
  },
});