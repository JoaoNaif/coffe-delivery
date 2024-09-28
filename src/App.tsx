import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { OrdersContextProvider } from './context/OrdersContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrdersContextProvider>
          <Router />
        </OrdersContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
