import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Text } from "@chakra-ui/react"

interface Current {
  temp_c: number
}

interface Location {
  name: string
}

interface FeatchWeatherResponse {
  location: Location,
  current: Current
}

interface Props {
  location: string
}

function CurrentWeather({ location }: Props) {
  const [weather, setWeather] = useState<FeatchWeatherResponse>()
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient.get<FeatchWeatherResponse>(`/current.json?q=${location}`)
    .then(res => setWeather(res.data))
    .catch(err => setError(err.message))
  }, [location])
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <Text>{weather && `${weather?.location.name} : ${weather?.current.temp_c}°C`}</Text>
    </>
  )
}

export default CurrentWeather