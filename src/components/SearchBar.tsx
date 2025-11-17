import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
      <Input
        borderRadius="full"
        placeholder="Search City"
        bg="gray.100"
        w={{ base: '220px', md: '360px', lg: '480px' }}
      />
    </InputGroup>
  )
}

export default SearchBar