import { Card, CardBody, Heading, HStack, VStack, Text, Image, Box } from "@chakra-ui/react"
import { Hour } from "../interfaces/Forecast"

interface Props {
    hour: Hour
}

function HourWeatherCard({ hour }: Props) {
  return (
    <Card
            borderRadius="1.25rem"
            borderColor='#BAA3FA'
            borderWidth='3px'
            backgroundSize="cover"
            role="group"
            overflow="hidden"
        >
            <CardBody>
                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack align="start" spacing={1}>
                        <Heading size="sm">{hour.time}</Heading>
                        <Text fontSize="sm" color="#b5b5b5">
                            {hour.condition.text}
                        </Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>temp: {hour.temp_c}</Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>humidity: {hour.humidity} kph</Text>
                    </VStack>

                    <VStack align="end" spacing={2}>
                        <Image src={hour.condition.icon} />
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
  )
}

export default HourWeatherCard