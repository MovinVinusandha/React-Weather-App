import { Box, Card, CardBody, Heading, HStack, VStack, Text, Image } from "@chakra-ui/react"
import { FeatchWeatherResponse } from "../hooks/useWeather"
import image from '../assets/current_weather_background.png'

interface Props {
    weather: FeatchWeatherResponse
}

function CurrentWeatherCard({ weather }: Props) {
  return (
    <Card
            borderRadius="1.25rem"
            backgroundImage={image}
            backgroundSize="cover"
            color={'white'}
            role="group"
            overflow="hidden"
        >
            <CardBody>
                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    py={{ base: 6, md: 12 }}
                    px={{ base: 6, md: 24 }}
                    spacing={{ base: 6, md: 8 }}
                >
                    <VStack align="start" spacing={1}>
                        <Heading size="lg">{weather.location.name}</Heading>
                        <Text fontSize="sm" color="#b5b5b5">
                            {weather.location.country}
                        </Text>
                        <Heading size="2xl">{Math.round(weather.current.temp_c)}°C</Heading>
                    </VStack>

                    <VStack align="end" spacing={2}>
                        <Image src={weather.current.condition.icon} />
                        <Text fontSize={{ base: 'sm', md: 'md' }}>{weather.current.condition.text}</Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>Wind: {weather.current.wind_kph} kph</Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>Humidity: {weather.current.humidity}%</Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>Feels like: {Math.round(weather.current.feelslike_c)}°C</Text>
                    </VStack>
                </HStack>
            </CardBody>
            <Box
                as="span"
                position="absolute"
                inset={0}
                bgGradient="linear(to-b, rgba(0,0,0,0.15), rgba(0,0,0,0.45))"
                zIndex={0}
                aria-hidden
            />
        </Card>
  )
}

export default CurrentWeatherCard