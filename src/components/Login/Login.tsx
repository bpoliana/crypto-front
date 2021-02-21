import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core'
import { useStyles } from './Login.styles'
import { postLogin } from '../../client/client'

const Login = () => {
  const classes = useStyles()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (email, password) => {
    const response = await postLogin(email, password)
    localStorage.setItem('token', response.data.token)
    history.push('/home')
  }
  return (
    <form className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='Crypto App'/>
        <CardContent className={classes.fieldWrapper}>
          <div>
            <TextField
              fullWidth
              type='email'
              name='email'
              variant='standard'
              placeholder='Email'
              margin='normal'
              onChange={(value) => { setEmail(value.target.value) }}
            />
            <TextField
              fullWidth
              type='password'
              name='password'
              variant='standard'
              placeholder='Senha'
              margin='normal'
              onChange={(value) => { setPassword(value.target.value) }}
            />
          </div>
        </CardContent>
        <CardActions className={classes.buttonWrapper}>
          <Button color='primary' variant='contained' onClick={ async () => { await login(email, password) }}>
            ENTRAR
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

export { Login }
