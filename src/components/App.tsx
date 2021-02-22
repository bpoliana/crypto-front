import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { appTheme } from './theme'
import { Login } from './Login/Login'
import { Currencies } from './Currencies/Currencies'
import UpdateCurrency from './UpdateCurrency/UpdateCurrency'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Currencies} />
          <Route exact path="/update" component={UpdateCurrency} />
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App
