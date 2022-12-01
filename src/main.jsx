import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import { ThemeProvider } from 'styled-components'
import {theme}from './theme/theme'
import {GlobalStyles}from './theme/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<ThemeProvider theme={theme}>
  <App />
  <GlobalStyles/>
</ThemeProvider>


  </React.StrictMode>
)
