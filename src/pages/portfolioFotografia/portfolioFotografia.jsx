// Componente
import Header from "../../components/header/header";
import CardFotografia from "../../components/CardFotografia/cardFotografia"; 
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
            <div className="container-porfolio-foto">
                <CardFotografia/>
            </div>
        </>
    );
};

export default Portfolio;
