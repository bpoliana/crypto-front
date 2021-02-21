import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core'
import { appTheme } from './theme'
import { Login } from './Login/Login'
import { CurrenciesPage } from './CurrenciesPage/CurrenciesPage'
import UpdateCurrency from './UpdateCurrency/UpdateCurrency'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { apiResponse: '' }
  }

  callAPI () {
    const cryptoApiUrl = 'http://localhost:3000/'
    try {
      axios.get(cryptoApiUrl)
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err)
    } catch (err) {
      alert(err)
    }
  }

  componentDidMount () {
    this.callAPI()
  }

  render () {
    return (
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={CurrenciesPage} />
          <Route exact path="/update" component={UpdateCurrency} />
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App
