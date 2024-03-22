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
    const [openModal, setOpenModal] = useState(false)

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
                                <button onClick={() => setOpenModal(true)}>Detalhes do projeto</button>
                            </Link>
                        </div>
                       <Modal isOpen={openModal} setModalOpen={setOpenModal}/>
                       
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
