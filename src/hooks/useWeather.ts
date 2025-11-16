import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FeatchWeatherResponse } from "../interfaces/WeatherResponse";

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