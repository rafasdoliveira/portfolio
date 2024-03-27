import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Páginas
import App from './App.jsx'
import Contato from './pages/contato/contato.jsx'
import ExperienciaProfissional from './pages/experienciaProfissional/experienciaProfissional.jsx'
import PortfolioDev from './pages/portfolioDev/portfolioDev.jsx'
import PortfolioFotografia from './pages/portfolioFotografia/portfolioFotografia.jsx'
import Sobre from './pages/sobre/sobre.jsx'

// Estilo
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/experienciaprofissional' element={<ExperienciaProfissional/>}/>
            <Route path='/portfoliodev' element={<PortfolioDev/>}/>
            <Route path='/portfoliofotografia' element={<PortfolioFotografia/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
          </Routes>
      </React.StrictMode>
    </BrowserRouter>
)
