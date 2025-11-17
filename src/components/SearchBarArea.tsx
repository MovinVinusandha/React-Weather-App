import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import SearchBar from './SearchBar'

function SearchBarArea() {
  return (
    <Flex
        align="center"
        justify="space-between"
        gap={{ base: 4, md: 8 }}
      >
        <VStack alignItems={'left'}>
          <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="700" whiteSpace='nowrap'>Weather Forecast</Text>
          <Text color='#5E5E5E'>Saturday  27, September 2024</Text>
        </VStack>

        <Box>
          <SearchBar />
        </Box>
      </Flex>
  )
}

export default SearchBarArea