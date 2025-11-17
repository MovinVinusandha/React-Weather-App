import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import SearchBar from './SearchBar'

interface Props {
  lastUpdated?: string | null;
}

function SearchBarArea({ lastUpdated }: Props) {
  return (
    <Flex 
        align="center" 
        justify="space-between" 
        gap={{ base: 4, md: 8 }}
        >
          <VStack alignItems={'left'}>
        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="700" whiteSpace='nowrap'>Weather Forecast</Text>
        <Text color='#5E5E5E'>{lastUpdated}</Text>
      </VStack>

      <Box>
        <SearchBar />
      </Box>
    </Flex>
  )
}

export default SearchBarArea