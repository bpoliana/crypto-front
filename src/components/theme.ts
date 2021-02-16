import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
      dark: '00675b'
    },
    secondary: {
      light: '#efefef',
      main: '#bdbdbd',
      dark: '#8d8d8d'
    },
  },
})

export { theme }