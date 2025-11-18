import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch : (searchText: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}/>
        <Input
          borderRadius="full"
          placeholder="Search City"
          bg="gray.100"
          ref={ref}
          w={{ base: '220px', md: '360px', lg: '480px' }}
        />
      </InputGroup>
    </form>
  )
}

export default SearchBar