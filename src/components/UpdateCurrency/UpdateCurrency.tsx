import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import { Button, Card, Container, Grid, TextField } from '@material-ui/core'
import { useStyles } from './UpdateCurrency.styles'
import { getCurrencies, postCurrency } from '../../client/client'

export default function NativeSelects () {
  const classes = useStyles()
  const history = useHistory()

  const [currencySelected, setCurrencySelected] = useState('BRL')
  const [currencyValue, setCurrencyValue] = useState(0)

  const [currencies, setCurrencies] = useState({
    BRL: '0',
    CAD: '0',
    EUR: '0'
  })


  useEffect(() => {
    async function setApiCurrencies () {
      const currenciesResponse = await getCurrencies()
      setCurrencies({
        BRL: currenciesResponse.bpi.BRL.rate,
        CAD: currenciesResponse.bpi.CAD.rate,
        EUR: currenciesResponse.bpi.EUR.rate
      })
    }
    setApiCurrencies()
  }, [])

  const redirect = () => {
    history.push('/home')
  }

  const submit = async () => {
    await postCurrency(currencySelected, currencyValue)
    const currenciesResponse = await getCurrencies()
    setCurrencies({
      BRL: currenciesResponse.bpi.BRL.rate,
      CAD: currenciesResponse.bpi.CAD.rate,
      EUR: currenciesResponse.bpi.EUR.rate
    })
  }

  const getSelectedCurrencyValue = () => {
    switch (currencySelected) {
      case 'BRL':
        return currencies.BRL
      case 'EUR':
        return currencies.EUR
      case 'CAD':
        return currencies.CAD
      default:
        return 0
    }
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
              value={currencySelected}
              onChange={(e) => { setCurrencySelected(e.target.value) }}
              inputProps={{
                name: 'currency',
                id: 'currency-native-label-placeholder'
              }}
            >
              <option value={'BRL'}>BRL</option>
              <option value={'EUR'}>EUR</option>
              <option value={'CAD'}>CAD</option>
            </NativeSelect>
            <FormHelperText className={classes.formHelperText}>Valor atual: {getSelectedCurrencyValue()} </FormHelperText>
            <TextField required id="outlined-basic" variant="outlined" label="Novo Valor" type="number" onChange={(e) => { setCurrencyValue(parseInt(e.target.value)) }} defaultValue="" />
            <Button className={classes.buttonWrapper} color='primary' variant='contained' onClick={ async () => { submit() }} > Atualizar </Button>
          </FormControl>
        </Card>
      </form>
    </Container>
  )
}
