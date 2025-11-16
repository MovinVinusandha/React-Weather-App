import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CurrentWeather from './components/CurrentWeather'
import Footer from './components/footer'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main" "footer"`
  }}>
    <GridItem area="nav" >
      <NavBar />
    </GridItem>
    <GridItem area="main" bg='blue.300' >
      <CurrentWeather location='colombo' />
    </GridItem>
    <GridItem area="footer" bg='green.300' >
      <Footer />
    </GridItem>
  </Grid>
}

export default App