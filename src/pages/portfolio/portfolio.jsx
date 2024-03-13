import Header from "../../components/header/header";
// Imagens
import Html from "../../assets/icons/linguagens-programacao/html5.svg"
import Css from "../../assets/icons/linguagens-programacao/css3-alt.svg"
import Java from "../../assets/icons/linguagens-programacao/java.svg"
import Js from "../../assets/icons/linguagens-programacao/js.svg"
import Laravel from "../../assets/icons/linguagens-programacao/laravel.svg"
import Node from "../../assets/icons/linguagens-programacao/node.svg"
import React from "../../assets/icons/linguagens-programacao/react.svg"
import GitHub from "../../assets/icons/redes-sociais/github.svg"
// Estilo
import './portfolio.css'

const Portfolio = () => {
    return (
        <>
            <Header/>
            <div className="intro">
                <div className="textosPortfolio">
                    <h2>Programação &lt;&gt;</h2>
                    <p>
                        Confira alguns dos meus últimos trabalhos como desenvolvedor de software.
                    </p>
                </div>
            </div>
            <div className="cardsPortfolio">
                <h2 className="h2Portfolio"></h2>
                <div className="cardPortfolio">
                    <div className="apresentacao">
                        <span className="img">
                            <img src="" alt="" />
                        </span>
                        <p>
                            Projeto desenvolvido na cadeira de desenvolvimento web com o intuito de praticar e trazer conhecimento ao Javascript e ao framework React. 
                        </p>
                    </div>
                    <div className="links">
                        <div className="github">
                            <span><img srcSet={GitHub} alt=""/></span>
                            <button>Github</button>
                        </div>
                        <div className="github">
                            <span><img srcSet={GitHub} alt=""/></span>
                            <button>Ver Projeto</button>
                        </div>
                    </div>
                    <div className="linguages">
                        <span><img srcSet={Html} alt="" /></span>
                        <span><img srcSet={Css} alt="" /></span>
                        <span><img srcSet={React} alt="" /></span>
                        <span><img srcSet={Node} alt="" /></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
