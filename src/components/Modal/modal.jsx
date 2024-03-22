import ConstDetalhesDev from '../../constants/detalhesPortfolioDev/constDetalhesDev'
import ReactPlayer from 'react-player'
import './modal.css'

const Modal = ({isOpen, setModalOpen}) => {
const detalhes = ConstDetalhesDev()

  if(isOpen) {
    return (
    <div className="modalComponent">
      <div className="closeModal">
        <button onClick={() => setModalOpen(false)}>X</button>
      </div>
      {detalhes.map((item) => (
        <div key={item.id} className="modal">
          <div className="video-projeto">
            <ReactPlayer 
            url={item.url}
            playing={item.playing}
            controls={item.controls}
            width={item.width}
            height={item.height}
            />
          </div>
          <div className="texto-projeto">
            <h2>{item.nome}</h2>
            <p className='data'>{item.data}</p>
            <p>{item.descricao}</p>
          </div>
          <div className="botoes">
            <div className="github">
              <img src={item.githubIcon} alt="" />
              <button>Github</button>
            </div>
            <div className="github">
              <img src={item.globeIcon} alt="" />
              <button>Projeto</button>
            </div>
          </div>
        </div>
      ))}
    </div>)
  }
  return null
}

export default Modal


