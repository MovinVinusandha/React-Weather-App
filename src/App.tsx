import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main" "footer"`
  }}>
    <GridItem area="nav" bg='gold' >Nav</GridItem>
    <GridItem area="main" bg='blue.300' >Main</GridItem>
    <GridItem area="footer" bg='green.300' >Footer</GridItem>
  </Grid>
}

export default App