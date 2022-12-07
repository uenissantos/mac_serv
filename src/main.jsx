import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import { ThemeProvider } from 'styled-components'
import {theme}from './theme/theme'
import {GlobalStyles}from './theme/globalStyles'
import{BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<ThemeProvider theme={theme}>
<BrowserRouter>
  <App />

</BrowserRouter>

  <GlobalStyles/>
</ThemeProvider>


  </React.StrictMode>
)
