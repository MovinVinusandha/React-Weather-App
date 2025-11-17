import { VStack, Image, Text, HStack, Icon } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import NavBarLinks from "./NavBarLinks";
import { FiGithub, FiLinkedin, FiInstagram  } from "react-icons/fi";

function Footer() {
  return (
    <VStack>
        <Image src={logo} boxSize="6.5rem" marginTop='2.5rem' />
        <NavBarLinks />
        <HStack gap='2.5rem' marginBottom='1.5rem' marginTop='0.5rem'>
            <Icon color='#9B79F8' as={FiLinkedin} boxSize="1.5rem"/>
            <Icon color='#9B79F8' as={FiGithub} boxSize="1.5rem"/>
            <Icon color='#9B79F8' as={FiInstagram} boxSize="1.5rem"/>
        </HStack>
        <Text marginBottom='2.5rem'>copyright © 2024 Weather App</Text>
    </VStack>
  )
}

export default Footer