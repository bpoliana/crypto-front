import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, Container, Grid, List, ListItem, ListItemText, TextField } from '@material-ui/core'
import { useStyles } from './Currencies.styles'
import { getCurrencies } from '../../client/client'

const Currencies = () => {
  const [btc, setBtc] = useState({ rate: '', rate_float: 0 })
  const [usd, setUsd] = useState({ rate: '', rate_float: 0 })
  const [brl, setBrl] = useState({ rate: '', rate_float: 0 })
  const [eur, setEur] = useState({ rate: '', rate_float: 0 })
  const [cad, setCad] = useState({ rate: '', rate_float: 0 })

  useEffect(() => {
    async function setApiCurrencies (): Promise<void> {
      const currencies = await getCurrencies()
      if (currencies?.status === 200) {
        setBtc({ rate: currencies.data.bpi.BTC.rate, rate_float: currencies.data.bpi.BTC.rate_float })
        setUsd({ rate: currencies.data.bpi.USD.rate, rate_float: currencies.data.bpi.USD.rate_float })
        setBrl({ rate: currencies.data.bpi.BRL.rate, rate_float: currencies.data.bpi.BRL.rate_float })
        setEur({ rate: currencies.data.bpi.EUR.rate, rate_float: currencies.data.bpi.EUR.rate_float })
        setCad({ rate: currencies.data.bpi.CAD.rate, rate_float: currencies.data.bpi.CAD.rate_float })
      } else {
        redirect('/')
        alert(currencies.data.message ? currencies.data.message : 'Houve um erro na sua requisição')
      }
    }
    setApiCurrencies()
  }, [])

  const classes = useStyles()
  const history = useHistory()

  const redirect = (routeParam: string) => {
    history.push(routeParam)
  }

  const updateCurrencyValues = (event) => {
    const newBTC = event.target.value
    const newBRL = newBTC * brl.rate_float
    const newCAD = newBTC * cad.rate_float
    const newUSD = newBTC * usd.rate_float
    const newEUR = newBTC * eur.rate_float

    setBtc({ rate: newBTC.toString(), rate_float: newBTC })
    setBrl({ ...brl, rate: newBRL.toString() })
    setCad({ ...cad, rate: newCAD.toString() })
    setUsd({ ...usd, rate: newUSD.toString() })
    setEur({ ...eur, rate: newEUR.toString() })
  }

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <List>
          <ListItem>
          { btc.rate && <TextField id="outlined-basic" label="BTC" type="number" onChange={updateCurrencyValues} defaultValue={ btc.rate } /> }

          </ListItem>
          <ListItem>
            <ListItemText primary='USD' secondary={usd.rate} />
          </ListItem>
          <ListItem>
            <ListItemText primary='BRL' secondary={brl.rate} />
          </ListItem>
          <ListItem>
            <ListItemText primary='EUR' secondary={eur.rate} />
          </ListItem>
          <ListItem>
            <ListItemText primary='CAD' secondary={cad.rate} />
          </ListItem>
        </List>
        <Grid className={classes.grid}>
          <Button color='primary' variant='contained' onClick={() => { redirect('/update') } } title=''>
            Adicionar valor monetário
          </Button>
        </Grid>
      </Card>
    </Container>
  )
}

export { Currencies }
