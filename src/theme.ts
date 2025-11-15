import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans'
import '@fontsource/raleway'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})

export default theme