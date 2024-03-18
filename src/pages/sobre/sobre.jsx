// Componentes
import Header from "../../components/header/header";
// Estilo
import './sobre.css'
// Imagens
import Sangue from "../../assets/icons/sobre/droplet-solid.svg"
import Linguas from "../../assets/icons/sobre/language-solid.svg"
import Run from "../../assets/icons/sobre/person-running-solid.svg"
import World from "../../assets/icons/sobre/earth-americas-solid.svg"
import Book from "../../assets/icons/sobre/book-open-solid.svg"

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
              
                <div className="curiosidades">
                    <h2>Curiosidades Aleatórias</h2>
                    <ol>
                        <li>
                            <span><img srcSet={Sangue} alt=""/></span>
                            <p>
                                Doador de sangue desde 2018, com 12 doações realizadas.
                            </p>
                        </li>
                        <li>
                            <span><img srcSet={Linguas} alt=""/></span>
                            <p>
                                Falo inglês intermediário &#40;C2&#41; e possuo conhecimentos básicos em libras.
                            </p>
                        </li>
                        <li>
                            <span><img srcSet={Run} alt=""/></span>
                            <p>
                                Sou apaixonado por esportes e tenho me dedidcado a corrida de rua e natação em mar aberto, me preparando para o meu primeiro Iron Man.
                            </p>
                        </li>
                        <li>
                            <span><img srcSet={World} alt=""/></span>
                            <p>
                                Gosto de viajar e conhecer novas culturas e pessoas.
                            </p>
                        </li>
                        <li>
                            <span><img srcSet={Book} alt=""/></span>
                            <p>
                               Aderi a leitura como um hábito e tenho lido em média 12 livros por ano.
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="historia">
                    <h2>Minha história</h2>
                    <div className="cardzao">
                        <div className="cardzinho">
                            <img src="" alt="" />     
                        </div>
                        <p>
                            Nascido em São Paulo, capital, em 2001, sou o filho mais novo da família.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sobre;
