import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
      alignContent: 'center',
      flexDirection: 'column'
    },
    fieldWrapper: {
      alignContent: 'center',
      component: 'div',
      flexDirection: 'column'
    },
    buttonWrapper: {
      justifyContent: 'center',
      component: 'div',
      margin: theme.spacing(2)
    },
    card: {
      marginTop: theme.spacing(10)
    },
    header: {
      textAlign: 'center',
      background: '#00675b',
      color: '#fff'
    }
  })
)
