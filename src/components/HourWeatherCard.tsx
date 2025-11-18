import { Card, CardBody, Heading, HStack, VStack, Text, Image, Box, Icon } from "@chakra-ui/react"
import { Hour } from "../interfaces/Forecast"
import { BsThermometerHalf, BsDroplet } from "react-icons/bs";

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
            marginX='1rem'
        >
            <CardBody>
                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack 
                        as='b' 
                        align="start" 
                        spacing={1}
                    >
                        <Heading size="sm">{hour.time}</Heading>
                        <Text fontSize="sm" color="#b5b5b5">
                            {hour.condition.text}
                        </Text>
                        <Text  fontSize={{ base: 'sm', md: 'md' }}>
                            <Box display='inline-flex'>
                                <Icon boxSize='1.5rem' color='#9B79F8' as={BsThermometerHalf} />
                                {hour.temp_c}°C
                            </Box>
                        </Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>
                            <Box display='inline-flex'>
                                <Icon boxSize='1.5rem' color='#9B79F8' as={BsDroplet} />
                                {hour.humidity}%
                            </Box>
                        </Text>
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