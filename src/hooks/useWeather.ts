import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Condition {
    text: string
    icon: string
}

interface Current {
  temp_c: number
  wind_kph: number
  humidity: number
  feelslike_c: number
  condition: Condition
}

interface Location {
  name: string
  country: string
}

export interface FeatchWeatherResponse {
  location: Location,
  current: Current
}

const useWeather = ( location: string ) => {
  const [weather, setWeather] = useState<FeatchWeatherResponse>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FeatchWeatherResponse>(`/current.json?q=${location}`, { signal: controller.signal })
      .then((res) => setWeather(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
    });

      return () => controller.abort();
  }, [location]);

  return { weather, error };
};

export default useWeather;