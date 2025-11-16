import { Text } from "@chakra-ui/react"
import useWeather from "../hooks/useWeather";
import CurrentWeatherCard from "./CurrentWeatherCard";

interface Props {
  location: string
}

function CurrentWeather({ location }: Props) {
  const { weather, error } = useWeather(location);

  return (
    <>
      {error && <Text>{error}</Text>}
      {weather && <CurrentWeatherCard weather={weather} />}
    </>
  )
}

export default CurrentWeather