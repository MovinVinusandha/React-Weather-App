import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CurrentWeather from './components/CurrentWeather'
import Footer from './components/Footer'
import SearchBarArea from './components/SearchBarArea'
import { useState } from "react";

function App() {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  return <Grid templateAreas={{
    base: `"nav" "main" "footer"`
      }}>
    <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <GridItem area="main" bg='blue.300' >
        <SearchBarArea lastUpdated={lastUpdated} />
        <CurrentWeather location='colombo' onLastUpdatedChange={setLastUpdated} />
      </GridItem>
    <GridItem area="footer" bg='green.300' >
        <Footer />
      </GridItem>
    </Grid>
}

export default App