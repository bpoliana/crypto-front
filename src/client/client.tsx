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
    return await axios.get(`${cryptoApiUrl}/api/crypto/btc`, { headers: header }).then(res => res.data).catch(err => err)
  } catch (err) {
    alert(err)
  }
}
