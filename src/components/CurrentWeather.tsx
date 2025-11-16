import { Text } from "@chakra-ui/react"
import useWeather from "../hooks/useWeather";

interface Props {
  location: string
}

function CurrentWeather({ location }: Props) {
  const { weather, error } = useWeather(location);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Text>{weather && `${weather?.location.name} : ${weather?.current.temp_c}°C`}</Text>
    </>
  )
}

export default CurrentWeather