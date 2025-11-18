import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CurrentWeather from './components/CurrentWeather'
import Footer from './components/Footer'
import SearchBarArea from './components/SearchBarArea'
import { useState } from "react";
import './App.css'

const search_location_id = 2842281  // colombo - sri lanka

function App() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [searchLocationId, setSearchLocationId] = useState<number>(search_location_id);
  return <Grid templateAreas={{
    base: `"nav" "main" "footer"`
      }}>
    <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <GridItem marginX={{ base: "1rem", md: "5rem", lg: "8rem" }} area="main" marginBottom='4rem'>
        <SearchBarArea lastUpdated={lastUpdated} onSearch={setSearchLocationId}/>
        <CurrentWeather locationId={searchLocationId} onLastUpdatedChange={setLastUpdated} />
      </GridItem>
    <GridItem area="footer" bg='#E7E4E3'> 
        <Footer />
      </GridItem>
    </Grid>
}

export default App