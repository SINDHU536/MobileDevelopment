import axios from "axios";
import Config from "react-native-config";

export const fetchWeather = async (city: string) => {
  try {
    console.log("API Request City:", city);
    const response = await axios.get(
      `${Config.BASE_URL}/weather`,
      {
        params: {
          q: city,
          appid: Config.API_KEY,
          units: "metric",
        },
      }
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch (error: any) {
     console.log("API Error:", error.response?.data);
    throw error.response?.data?.message || "Failed to fetch weather";
  }
};
