import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack mx="8rem">
      <Image src={logo} boxSize="3.875rem" />
      <Text>Weather App</Text>
    </HStack>
  );
};

export default NavBar;
