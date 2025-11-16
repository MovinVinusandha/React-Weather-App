import { SimpleGrid, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";
import CurrentWeatherCard from "./CurrentWeatherCard";
import HourWeatherCard from "./HourWeatherCard";

interface Props {
  location: string
}

function CurrentWeather({ location }: Props) {
  const { weather, error } = useWeather(location);

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