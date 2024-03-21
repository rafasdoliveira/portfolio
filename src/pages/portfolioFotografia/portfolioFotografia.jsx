// Componente
import Header from "../../components/header/header";
// Estilo
import './portfolioFotografia.css'

const Portfolio = () => {
    return (
        <>
            <Header/>
            <div className="intro">
                <div className="textosPortfolio">
                    <h2>Fotografia &lt;&gt;</h2>
                    <p>
                        Confira alguns dos meus últimos trabalhos como fotógrafo.
                    </p>
                </div>
            </div>
            
        </>
    );
};

export default Portfolio;
