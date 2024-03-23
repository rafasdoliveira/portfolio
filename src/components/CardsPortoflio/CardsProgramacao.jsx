// Rota
import { Link } from 'react-router-dom'
// Hooks
import { useState } from 'react'
// Componentes
import constPortfolioDev from '../../constants/cardPortfolioDev/constPortfolioDev'
import ConstDetalhesDev from '../../constants/detalhesPortfolioDev/constDetalhesDev'
import Modal from '../Modal/modal'
// Estilo
import './cardsportfolio.css'

const CardsProgramacao = () => {

    const cardProjeto = constPortfolioDev()
    const detalhes = ConstDetalhesDev()
    const [openModalId, setOpenModalId] = useState(null)

    const handleOpenModal = (id) => {
        setOpenModalId(id)
    }

    const teste = (id) => { 
        console.log(id)
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
                            <p>
                                {item.descricao} 
                            </p>
                        </div>
                    </div>
                    <div className="links">
                        <div className="link">
                            <button onClick={() => setOpenModalId(item.id)}>Detalhes do projeto</button>
                        </div>
                    </div>
                    <div className="linguages">
                        {item.linguagens.map((linguagem, index) => (
                            <img key={index} srcSet={linguagem}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <Modal isOpen={!!openModalId} id={openModalId} setModalOpen={() => setOpenModalId(null)} />
    </>
  )
}

export default CardsProgramacao
