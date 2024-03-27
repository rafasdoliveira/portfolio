// Componente
import Header from "../../components/Header/header";
import Titulos from "../../components/TitulosPaginas/titulos";
import CardFotografia from "../../components/CardFotografia/cardFotografia"; 
// Estilo
import './portfolioFotografia.css'

const Portfolio = () => {
    return (
        <>
            <Header/>
            <Titulos titulo="Fotografia &lt;&gt;" descricao="Confira alguns dos meus últimos trabalhos como fotógrafo."/>
            <div className="container-porfolio-foto">
                <CardFotografia/>
            </div>
        </>
    );
};

export default Portfolio;
