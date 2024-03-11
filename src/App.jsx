// Componentes
import Header from './components/header/header'
// Estilo
import './App.css'
// Imagens
import Rafael from './assets/images/rafaelPerfil.png'

function App() {

  return (
    <>
      <Header/>
      <div className="container-sobre">
        <img src= {Rafael}/>
        <div className='textos'>
          <h1>
            Rafael Oliveira
          </h1>
          <p>
            Fotógrafo e Programador, apaixonado por esportes e pela busca do limite máximo.  
          </p>
        </div>
        <button>Saiba mais</button>
      </div>
      <div className="container-portfolio">
        <h2>Portfólio Programação</h2>
        <div className="cards-programacao">
          <div className="card">
            <span>
              <img src="" alt="" srcset="" />
            </span>
            <button>Ver mais</button>
          </div>
          <div className="card">
            <span>
              <img src="" alt="" srcset="" />
            </span>
            <button>Ver mais</button>
          </div>
        </div>
        <h2>Portfólio Fotografia</h2>
        <div className="cards-programacao">
          <div className="card">
            <span>
              <img src="" alt="" srcset="" />
            </span>
            <button>Ver mais</button>
          </div>
          <div className="card">
            <span>
              <img src="" alt="" srcset="" />
            </span>
            <button>Ver mais</button>
          </div>
        </div>
      </div>
      <div className="teste">
        teste
      </div>
    </>
  )
}

export default App
