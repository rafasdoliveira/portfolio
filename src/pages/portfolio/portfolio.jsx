// Componente
import Header from "../../components/header/header";
import CardsProgramacao from "../../components/CardsPortoflio/CardsProgramacao";
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
            <div className="container-porfolio-dev">
                <CardsProgramacao/>
            </div>
            
        </>
    );
};

export default Portfolio;
