import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import SearchBar from './SearchBar'

interface Props {
  lastUpdated?: string | null;
  onSearch : (searchText: string) => void;
}

function SearchBarArea({ lastUpdated, onSearch }: Props) {
  return (
    <Flex 
        marginTop='1rem'
        align="center" 
        justify="space-between" 
        gap={{ base: 4, md: 8 }}
        >
          <VStack alignItems={'left'}>
        <Text fontSize='2rem' fontWeight="700" whiteSpace='nowrap'>Weather Forecast</Text>
        <Text color='#5E5E5E' fontSize='1rem'>{lastUpdated}</Text>
      </VStack>

      <Box>
        <SearchBar onSearch={onSearch}/>
      </Box>
    </Flex>
  )
}

export default SearchBarArea