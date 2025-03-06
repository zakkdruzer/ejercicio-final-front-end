import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/appRoutes.jsx'
import NavBar from './components/organisms/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
