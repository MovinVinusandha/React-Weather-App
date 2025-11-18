import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import SuggestionBox from './SuggestionBox';
import useSearch from '../hooks/useSearch';

interface Props {
  onSearch : (searchId: number) => void;
}

function SearchBar({ onSearch }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const { searchResult } = useSearch(searchText);

  return (
    <Box position='relative'>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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
      <SuggestionBox onSearch={onSearch} searchResult={searchResult}/>
    </Box>
  )
}

export default SearchBar