// Rotas
import { Link } from 'react-router-dom'
// Componentes
import Header from './components/Header/header'
import CardDevHome from './components/CardHome/cardDevHome'
import CardFotografiaHome from './components/CardHome/cardFotografiaHome'
import ConstSobreHome from './constants/sobreHome/constSobreHome'
// Estilo
import './App.css'
// Imagens
import Rafael from './assets/images/rafaelPerfil.png'

function App() {

  const sobre = ConstSobreHome()

  return (
    <>
      <Header/>
      <div className="container-sobre">
         <div className="caracteristicas">
          <div className="caracteristicas-individuais">
            <h2>{sobre[0].titulo}</h2>
            <p>{sobre[0].texto}</p>
          </div>
          <h2>{sobre[2].titulo}</h2>
          <p>{sobre[2].texto}</p>
         </div>
        <img srcSet= {Rafael} />
        <div className="caracteristicas">
          <h2>{sobre[1].titulo}</h2>
          <p>{sobre[1].texto}</p>
          <h2>{sobre[3].titulo}</h2>
          <p>{sobre[3].texto}</p>
        </div>
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
