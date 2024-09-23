import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00b289',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#00ffc4',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />  
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
