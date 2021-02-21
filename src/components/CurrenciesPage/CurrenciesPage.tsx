import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, Container, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './CurrenciesPage.styles'
import { getCurrencies } from '../../client/client'

const CurrenciesPage = () => {
  const [btc, setBtc] = useState('')
  const [usd, setUsd] = useState('')
  const [brl, setBrl] = useState('')
  const [eur, setEur] = useState('')
  const [cad, setCad] = useState('')

  useEffect( () => {
    async function setApiCurrencies () {
      const currencies = await getCurrencies()
      setBtc(currencies.bpi.BTC.rate)
      setUsd(currencies.bpi.USD.rate)
      setBrl(currencies.bpi.BRL.rate)
      setEur(currencies.bpi.EUR.rate)
      setCad(currencies.bpi.CAD.rate)
    }
    setApiCurrencies()
  }, [])

  const classes = useStyles()
  const history = useHistory()

  const redirect = () => {
    history.push('/update')
  }

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <List>
          <ListItem>
            <ListItemText primary='BTC' secondary={btc} />
          </ListItem>
          <ListItem>
            <ListItemText primary='USD' secondary={usd} />
          </ListItem>
          <ListItem>
            <ListItemText primary='BRL' secondary={brl} />
          </ListItem>
          <ListItem>
            <ListItemText primary='EUR' secondary={eur} />
          </ListItem>
          <ListItem>
            <ListItemText primary='CAD' secondary={cad} />
          </ListItem>
        </List>
        <Grid className={classes.grid}>
          <Button color='primary' variant='contained' onClick={redirect} title=''>
            Adicionar valor monetário
          </Button>
        </Grid>
      </Card>
    </Container>
  )
}

export { CurrenciesPage }
