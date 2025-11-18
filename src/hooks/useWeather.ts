import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FeatchWeatherResponse } from "../interfaces/WeatherResponse";

const useWeather = ( locationId: number ) => {
  const [weather, setWeather] = useState<FeatchWeatherResponse>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FeatchWeatherResponse>(`/forecast.json?q=id:${locationId}`, { signal: controller.signal })
      .then((res) => setWeather(res.data))
      .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      });

      return () => controller.abort();
  }, [locationId]);

  return { weather, error };
};

export default useWeather;