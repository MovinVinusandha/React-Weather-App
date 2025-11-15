import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  return (
    <HStack marginX="8rem" justifyContent='space-between'>
      <Image src={logo} boxSize="3.875rem" />
      <NavBarLinks />
    </HStack>
  );
};

export default NavBar;
