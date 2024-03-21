// Componentes
import Header from "../../components/header/header";
import CardHistoria from "../../components/CardHistoria/CardHistoria";
// Estilo
import './sobre.css'
import CardCuriosidade from "../../components/CardCuriosidade/CardCuriosidade";


const Sobre = () => {
    

    return (
        <>
            <Header/>
            <div className="introSobre">
                <div className="textosPortfolio">
                    <h2>Sobre &copy;</h2>
                    <p>Apaixonado por tecnologia, fotografia, livros e esportes.</p>
                    <p>Motivado a entender o funcionamento das coisas e obstinado a buscar meu potencial máximo através do esporte.</p>
                </div>
              
                <CardCuriosidade/>
                <CardHistoria/>
            </div>
        </>
    );
};

export default Sobre;
