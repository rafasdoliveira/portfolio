// Rotas
import { Link } from 'react-router-dom'
// Componentes
import Header from './components/Header/header'
import CardDevHome from './components/CardHome/cardDevHome'
import CardFotografiaHome from './components/CardHome/cardFotografiaHome'
// Estilo
import './App.css'
// Imagens
import Rafael from './assets/images/rafaelPerfil.png'

function App() {

  return (
    <>
      <Header/>
      <div className="container-sobre">
        <img srcSet= {Rafael} />
        <div className='textosHome'>
          <h1>
            Rafael Oliveira
          </h1>
          <p>
            Desenvolvedor e fotógrafo, entusiasta de esportes, sempre em busca do próximo desafio.  
          </p>
        </div>
        <button>
          <Link to='/sobre'>Saiba mais</Link>
        </button>
      </div>
      <div className="container-portfolio">
        <CardDevHome h2='Portóflio Programação'/>
        <CardFotografiaHome h2='Portóflio Fotografia'/>
      </div>
    </>
  )
}

export default App
