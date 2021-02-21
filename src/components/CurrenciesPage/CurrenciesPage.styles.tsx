import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      alignItems: 'center'
    },
    card: {
      marginTop: theme.spacing(10),
      minWidth: 300,
      alignItems: 'center',
      padding: theme.spacing(2)
    },
    grid: {
      display: 'grid'
    }
  })
)
