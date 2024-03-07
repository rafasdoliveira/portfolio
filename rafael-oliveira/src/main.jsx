import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Páginas
import App from './App.jsx'
import Blog from './pages/blog/blog.jsx'
import Contato from './pages/contato/contato.jsx'
import Portfolio from './pages/portfolio/portfolio.jsx'
import Sobre from './pages/sobre/sobre.jsx'

// Estilo
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
          </Routes>
      </React.StrictMode>
    </BrowserRouter>
)
