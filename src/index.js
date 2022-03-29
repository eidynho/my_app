import React from 'react'
import ReactDOM from 'react-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#f57c00',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)