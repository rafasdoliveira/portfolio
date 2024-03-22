import ReactPlayer from 'react-player'
import './modal.css'

const Modal = ({isOpen, setModalOpen}) => {

  if(isOpen) {
    return (
    <div className="modalComponent">
      <div className="closeModal">
        <button onClick={() => setModalOpen(false)}>X</button>
      </div>
      <div className="modal">
        <div className="video-projeto">
          {/* Consumir do youtube */}
          <ReactPlayer 
          url='https://www.youtube.com/watch?v=7f8xcMlC-G4&list=RDEMgHMf-d_LVQHvXo5AePBsaw&index=6'
          playing={false}
          controls={true}
          width={'100%'}
          height={'100%'}
          />
        </div>
        <div className="texto-projeto">
          <h2>Nome do projeto</h2>
          <p className='data'>21/03/2024</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="botoes">
          <button>Github</button>
          <button>Projeto</button>
          <button>LinkedIn</button>
        </div>
      </div>
    </div>)
  }
  return null
}

export default Modal


