import { Link } from 'react-router-dom'
import  cardPortfolioDev from '../../constants/cardPortfolioDev/cardPortfolioDev'
import './cardsportfolio.css'
const CardsProgramacao = () => {

    const cardProjeto = cardPortfolioDev()

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
                                <Link  className="link" to={item.githubLink}>
                                    <span><img srcSet={item.githubSvg} alt=""/></span>
                                    <button>Github</button>
                                </Link>
                                <Link className="link" to={item.projetoLink}>
                                    <span><img srcSet={item.projetoSvg} alt=""/></span>
                                    <button>Ver Projeto</button>
                                </Link>
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
