import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import useWeather from "../hooks/useWeather";
import CurrentWeatherCard from "./CurrentWeatherCard";
import HourWeatherCard from "./HourWeatherCard";

interface Props {
  location: string
  onLastUpdatedChange?: (lastUpdated: string) => void;
}

function CurrentWeather({ location, onLastUpdatedChange }: Props) {
  const { weather, error } = useWeather(location);

  useEffect(() => {
    if (!weather) return;
    const last = weather?.current?.last_updated;
    if (last && onLastUpdatedChange) onLastUpdatedChange(last);
  }, [weather, onLastUpdatedChange]);

  return (
    <>
      {error && <Text>{error}</Text>}
      {weather && <CurrentWeatherCard weather={weather} />}
      {weather && (
        <SimpleGrid columns={3} spacing={10}>
          {weather?.forecast?.forecastday.map((day) =>
            day.hour.map((hour) => <HourWeatherCard key={hour.time} hour={hour} />)
          )}
        </SimpleGrid>
      )}
    </>
  )
}

export default CurrentWeather;