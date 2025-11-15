import { HStack, Text } from '@chakra-ui/react'

function NavBarLinks() {
  return (
    <HStack justifyContent='space-between' padding='0.63rem' gap='3.5rem'>
        <Text>Home</Text>
        <Text>news</Text>
        <Text>about</Text>
    </HStack>
  )
}

export default NavBarLinks