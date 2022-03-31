import React from 'react'
import ReactDOM from 'react-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { AuthProvider } from './state/auth'

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
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)