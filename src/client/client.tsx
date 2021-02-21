import axios from 'axios'

const cryptoApiUrl = 'http://localhost:3000'

export const getHome = async () => {
  try {
    await axios.get(`${cryptoApiUrl}/`)
      .catch(err => err)
  } catch (err) {
    alert(err)
  }
}

export const postLogin = async (email, password) => {
  try {
    return await axios.post(`${cryptoApiUrl}/api/login`, { email: email, password: password }).catch(err => err)
  } catch (err) {
    alert(err)
  }
}
