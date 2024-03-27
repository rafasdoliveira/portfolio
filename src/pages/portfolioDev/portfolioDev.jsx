// Componente
import Header from "../../components/Header/header";
import CardsProgramacao from "../../components/CardDev/cardDev";
// Estilo
import './portfolioDev.css'
import Titulos from "../../components/TitulosPaginas/titulos";

const Portfolio = () => {
    return (
        <>
            <Header/>
            <Titulos titulo="Programação &lt;&gt;" descricao="Confira alguns dos meus últimos trabalhos como desenvolvedor de software."/>
            <div className="container-porfolio-dev">
                <CardsProgramacao/>
            </div>
        </>
    );
};

export default Portfolio;
