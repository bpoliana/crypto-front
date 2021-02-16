import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { appTheme } from './theme'
import { Login } from './Login/Login'

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Login />
    </ThemeProvider>
  )
}

export default App
