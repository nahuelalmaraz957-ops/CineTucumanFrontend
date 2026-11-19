import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import CatalogoProvider from './components/catalogo/CatalogoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CatalogoProvider>
        <App />
      </CatalogoProvider>
    </BrowserRouter>
  </StrictMode>,
)
