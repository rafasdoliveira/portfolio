import Header from "../../components/header/header";

// Estilo
import './portfolio.css'
import CardsProgramacao from "../../components/CardsPortoflio/CardsProgramacao";

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
