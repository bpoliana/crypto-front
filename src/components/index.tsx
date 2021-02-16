import React from 'react'
import { Button, ThemeProvider } from '@material-ui/core'
import { theme } from './theme'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <Button>Login</Button>
    </ThemeProvider>
  )
}

export default App