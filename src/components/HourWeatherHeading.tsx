import { Button, HStack, Text } from "@chakra-ui/react";

interface Props {
  isCelsius: boolean;
    onCelsiusChange: (isCelsius: boolean) => void;
}

function HourWeatherHeading({ onCelsiusChange, isCelsius }: Props) {

  return (
    <HStack justifyContent="space-between">
      <Text fontSize="1.5rem" fontWeight="600">
        Today
      </Text>
      <HStack>
        <Button
          onClick={() => {
            onCelsiusChange(true);
          }}
          borderRadius="full"
          border=""
          color="white"
          backgroundColor={isCelsius ? "#875FF7" : "#BAA3FA"}
          _hover={{ backgroundColor: "#875FF7" }}
          _active={{ backgroundColor: "#875FF7" }}
        >
          °C
        </Button>
        <Button
          onClick={() => {
            onCelsiusChange(false);
          }}
          borderRadius="full"
          border=""
          color="white"
          backgroundColor={isCelsius ? "#BAA3FA" : "#875FF7"}
          _hover={{ backgroundColor: "#875FF7" }}
          _active={{ backgroundColor: "#875FF7" }}
        >
          °F
        </Button>
      </HStack>
    </HStack>
  );
}

export default HourWeatherHeading;
