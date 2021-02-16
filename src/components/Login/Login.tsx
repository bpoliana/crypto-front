import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core'
import { useStyles } from './Login.styles'

const Login = () => {
  const classes = useStyles()

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
            />
            <TextField
              fullWidth
              type='password'
              name='password'
              variant='standard'
              placeholder='Password'
              margin='normal'
            />
          </div>
        </CardContent>
        <CardActions className={classes.buttonWrapper}>
          <Button color='primary' variant='contained'>
            ENTRAR
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

export { Login }
