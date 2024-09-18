import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00b289',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#f2faff',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />  
    </ThemeProvider>
  </StrictMode>,
)
