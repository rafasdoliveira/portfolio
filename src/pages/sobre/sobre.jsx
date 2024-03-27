// Componentes
import Header from "../../components/Header/header";
import Titulos from "../../components/TitulosPaginas/titulos";
import CardHistoria from "../../components/CardHistoria/CardHistoria";
import CardCuriosidade from "../../components/CardCuriosidade/CardCuriosidade";
// Estilo
import './sobre.css'

const Sobre = () => {
    
    return (
        <>
            <Header/>
            <Titulos titulo="Sobre &copy;" descricao="Apaixonado por tecnologia, fotografia, livros e esportes. Motivado a entender o funcionamento das coisas e obstinado a buscar meu potencial máximo através do esporte."/>
            <CardCuriosidade/>
            <CardHistoria/>
        </>
    );
};

export default Sobre;
