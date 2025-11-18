import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CurrentWeather from './components/CurrentWeather'
import Footer from './components/Footer'
import SearchBarArea from './components/SearchBarArea'
import { useState } from "react";
import './App.css'
import useSearch from './hooks/useSearch'

function App() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('colombo');
  
  const { searchResult } = useSearch(searchText);

  return <Grid templateAreas={{
    base: `"nav" "main" "footer"`
      }}>
    <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <GridItem marginX={{ base: "1rem", md: "5rem", lg: "8rem" }} area="main" marginBottom='4rem'>
        <SearchBarArea lastUpdated={lastUpdated} onSearch={setSearchText}/>
        <CurrentWeather location={searchResult} onLastUpdatedChange={setLastUpdated} />
      </GridItem>
    <GridItem area="footer" bg='#E7E4E3'> 
        <Footer />
      </GridItem>
    </Grid>
}

export default App