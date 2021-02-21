import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card, Container, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './CurrenciesPage.styles'

const CurrenciesPage = () => {
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
            <ListItemText primary='BTC' secondary='1'/>
          </ListItem>
          <ListItem>
            <ListItemText primary='USD' secondary='6,000'/>
          </ListItem>
          <ListItem>
            <ListItemText primary='BRL' secondary='6,000'/>
          </ListItem>
          <ListItem>
            <ListItemText primary='EUR' secondary='6,000'/>
          </ListItem>
          <ListItem>
            <ListItemText primary='CAD' secondary='6,000'/>
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
