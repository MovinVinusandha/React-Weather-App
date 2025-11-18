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
          if (searchResult && searchResult.length > 0) {
            onSearch(searchResult[0].id);
            setSearchText('');
          }
        }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />}/>
          <Input
            borderRadius="full"
            placeholder="Search City"
            bg="gray.100"
            ref={ref}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            w={{ base: '220px', md: '360px', lg: '480px' }}
          />
        </InputGroup>
      </form>
      <SuggestionBox
        onSearch={(id: number) => {
          onSearch(id);
          setSearchText("");
        }}
        searchResult={searchResult}
        query={searchText}
      />
    </Box>
  )
}

export default SearchBar