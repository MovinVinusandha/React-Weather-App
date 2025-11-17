import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  return (
    <HStack paddingX={{ base: "1rem", md: "5rem", lg: "8rem" }} justifyContent='space-between' paddingY='1rem'>
      <Image src={logo} boxSize="3.875rem" />
      <NavBarLinks />
    </HStack>
  );
};

export default NavBar;
