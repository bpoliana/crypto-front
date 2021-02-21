import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      height: '200',
      margin: `${theme.spacing(0)} auto`,
      alignContent: 'center',
      flexDirection: 'column'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      display: 'flex'
    },
    formHelperText: {
      margin: theme.spacing(2)
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    card: {
      marginTop: theme.spacing(10),
      minWidth: 300,
      alignItems: 'center',
      padding: theme.spacing(2)
    },
    buttonWrapper: {
      justifyContent: 'center',
      component: 'div',
      margin: theme.spacing(4)
    },
    form: {
      alignItems: 'center'
    },
    goBackButton: {
      maxWidth: '10px',
      marginBottom: theme.spacing(8)
    }
  })
)
