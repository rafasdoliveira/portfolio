// Rota
import { Link } from 'react-router-dom'
// Hooks
import { useState } from 'react'
// Componentes
import cardPortfolioDev from '../../constants/cardPortfolioDev/cardPortfolioDev'
import Modal from '../Modal/modal'
// Estilo
import './cardsportfolio.css'

const CardsProgramacao = () => {

    const cardProjeto = cardPortfolioDev()
    const [openModalId, setOpenModalId] = useState(null)

    const handleOpenModal = (id) => {
        setOpenModalId(id)
    }

    return (
    <>
        <div className="cardsPortfolio">
            {cardProjeto.map((item) => (
                <div key={item.id} className="cardPortfolio">
                    <div className="apresentacao">
                        <span className="img">
                            <img src={item.img} alt={item.alt} />
                        </span>
                        <div className="text">
                            <h2 className="h2Portfolio">{item.titulo}</h2>
                            <p className='data'>26/01/2001</p>
                            <p>
                                {item.descricao} 
                            </p>
                        </div>
                    </div>
                    <div className="links">
                        <div className="link">
                            <Link className="to">
                                <span><img srcSet={item.projetoSvg} alt=""/></span>
                                <button onClick={() => handleOpenModal(item.id)}>Detalhes do projeto</button>
                            </Link>
                        </div>
                        {openModalId === item.id && <Modal isOpen={true} setModalOpen={() => setOpenModalId(null)} /> }
                       
                    </div>
                    <div className="linguages">
                        {item.linguagens.map((linguagem, index) => (
                            <img key={index} srcSet={linguagem}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default CardsProgramacao
