import React from 'react'
import { useHistory } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import { Button, Card, Container, Grid, TextField } from '@material-ui/core'
import { useStyles } from './UpdateCurrency.styles'

export default function NativeSelects () {
  const classes = useStyles()
  const [state, setState] = React.useState<{ value: string | number, currency: string }>({
    value: '',
    currency: 'hai'
  })

  const handleChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
    const name = event.target.name as keyof typeof state
    setState({
      ...state,
      [name]: event.target.value
    })
  }
  const history = useHistory()

  const redirect = () => {
    history.push('/home')
  }

  return (
    <Container className={classes.root}>

      <form className={classes.root}>

        <Card className={classes.card}>
          <Grid className={classes.goBackButton}>
            <Button color='secondary' variant='contained' onClick={redirect}> Voltar </Button>
          </Grid>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="currency-native-label-placeholder">
              Moeda
            </InputLabel>
            <NativeSelect
              value={state.currency}
              onChange={handleChange}
              inputProps={{
                name: 'currency',
                id: 'currency-native-label-placeholder'
              }}
            >
              <option value={'BRL'}>BRL</option>
              <option value={'EUR'}>EUR</option>
              <option value={'CAD'}>CAD</option>
            </NativeSelect>
            <FormHelperText className={classes.formHelperText}>Valor atual: R$5,40</FormHelperText>
            <TextField required id="outlined-basic" variant="outlined" label="Novo Valor" defaultValue="" />
            <Button className={classes.buttonWrapper} color='primary' variant='contained'> Atualizar </Button>
          </FormControl>
        </Card>
      </form>
    </Container>
  )
}
