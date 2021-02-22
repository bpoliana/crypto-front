import axios from 'axios'

const cryptoApiUrl = 'http://localhost:3000'

export const postLogin = async (email, password) => {
  try {
    return await axios.post(`${cryptoApiUrl}/api/login`, { email: email, password: password }).catch(err => err)
  } catch (err) {
    alert(err)
  }
}

export const getCurrencies = async () => {
  try {
    const header = {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
    const response = await axios.get(`${cryptoApiUrl}/api/crypto/btc`, { headers: header }).catch(err => err)
    localStorage.setItem('token', response.config.headers.Authorization)
    return response.data
  } catch (err) {
    alert(err)
  }
}

export const postCurrency = async (currency, value) => {
  try {
    const header = {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
    const body = {
      currency: currency,
      value: value
    }
    const response = await axios.post(`${cryptoApiUrl}/api/crypto/btc`, body, { headers: header }).catch(err => err)
    localStorage.setItem('token', response.config.headers.Authorization)
    return response.data
  } catch (err) {
    alert(err)
  }
}
