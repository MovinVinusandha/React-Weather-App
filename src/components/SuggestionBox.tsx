import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { FeatchSearchResponse } from "../interfaces/SearchResponse";

interface Props {
  searchResult: FeatchSearchResponse | undefined;
  onSearch : (searchId: number) => void;
}

function SuggestionBox({ searchResult, onSearch }: Props) {
  return (
    <Box
      position="absolute"
      mt={2}
      right={0}
      left={0}
      zIndex={10}
      bg="white"
      boxShadow="dark-lg"
      borderRadius="md"
      overflow="hidden"
    >
      <List spacing={0} role="listbox">
        {searchResult?.map((location) => (
          <ListItem
            key={location.id}
            px={3}
            py={2}
            cursor="pointer"
            _hover={{ backgroundColor: "gray.100" }}
            onClick={() => {
              onSearch(location.id);
            }}
          >
            <HStack justifyContent="space-between">
              <Text fontWeight="600">{location.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {location.country}
              </Text>
            </HStack>
          </ListItem>
        ))}
        {searchResult?.length === 0 && (
          <ListItem px={3} py={2}>
            <Text color="gray.500">No results</Text>
          </ListItem>
        )}
      </List>
    </Box>
  );
}

export default SuggestionBox;
