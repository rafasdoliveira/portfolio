// Rotas
import { Link } from 'react-router-dom'
// Componentes
import Header from './components/header/header'
import CardsProgramacao from './components/CardsHome/CardsProgramacao'
// Estilo
import './App.css'
// Imagens
import Rafael from './assets/images/rafaelPerfil.png'
import CardsFotos from './components/CardsHome/CardsFotos'

function App() {

  return (
    <>
      <Header/>
      <div className="container-sobre">
        <img srcSet= {Rafael} />
        <div className='textos'>
          <h1>
            Rafael Oliveira
          </h1>
          <p>
            Fotógrafo e Programador, apaixonado por esportes e pela busca do limite máximo.  
          </p>
        </div>
        <button>
          <Link to='/sobre'>Saiba mais</Link>
        </button>
      </div>
      <div className="container-portfolio">
        <CardsProgramacao h2='Portfólio Programação'/> 
        <CardsFotos h2='Portfólio Fotografia'/>
      </div>
     <div className="teste">aaaa</div>
    </>
  )
}

export default App
