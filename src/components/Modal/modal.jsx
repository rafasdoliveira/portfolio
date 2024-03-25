import ConstDetalhesDev from '../../constants/detalhesPortfolioDev/constDetalhesDev'
import ReactPlayer from 'react-player'
import './modal.css'

const Modal = ({isOpen, id, setModalOpen}) => {
const detalhes = ConstDetalhesDev()

const filterDetails = detalhes.filter((item) => item.id == id)[0]

  if(isOpen) {
    return (

    <div className="modalComponent">
      <div className="closeModal">
        <button onClick={() => setModalOpen(false)}>X</button>
      </div>
        <div key={filterDetails.id} className="modal">
          <div className="video-projeto">
            <ReactPlayer 
            url={filterDetails.url}
            playing={filterDetails.playing}
            loop={filterDetails.loop}
            controls={filterDetails.controls}
            width={filterDetails.width}
            height={filterDetails.height}
            />
          </div>
          <div className="texto-projeto">
            <h2>{filterDetails.nome}</h2> 
            <p className='data'>{filterDetails.data}</p>
            <p>{filterDetails.descricao}</p>
          </div>
          <div className="botoes">
            <div className="github">
              {/* <img src={filterDetails.githubIcon} alt="" /> */}
              <button>Github</button>
            </div>
            <div className="github">
              {/* <img src={filterDetails.globeIcon} alt="" /> */}
              <button>Projeto</button>
            </div>
          </div>
        </div>

    </div>
    )
  }
  return null
}

export default Modal


