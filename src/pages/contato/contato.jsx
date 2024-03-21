// Rota
import { Link } from 'react-router-dom';
// Componente
import NavRedeSocial from '../../constants/navRedeSocial/navRedeSocial';
import Header from '../../components/header/header';
// Estilos
import './contato.css';

const Contato = () => {

    const RedeSocial = NavRedeSocial() 

    return (
        <>
            <Header/>
            <div className="contatoPage">
                <div className="intro">
                <div className="textosPortfolio">
                    <h2>Me mande uma mensagem!</h2>
                    <p>
                        Fique à vontade para entrar em contato, seja sobre projetos, oportunidades de trabalho ou apenas para uma conversa.
                    </p>
                </div>
                </div>
                <form className='form'>
                    <div className="input">
                        <input type="text" name="assunto" id="assunto" placeholder='Assunto'/>
                        <input type="text" name="nome" id="nome" placeholder='Nome'/>
                        <input type="email" name="email" id="email" placeholder='E-mail'/>
                        </div>
                    <div className="textarea">
                        <textarea name="mensagem" id="mensagem" placeholder='Mensagem'/>
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
                <div className="redes-sociais">
                    <div className="textos">
                        <p>Fale nas redes sociais ou por e-mail!</p>
                    </div>
                    <div className="icons">
                        <ul className='ul-icons'>
                            {RedeSocial.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.url}>
                                        <img src={item.src} alt={item.alt}/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>   
                </div>
            </div>
        </>
    );
};

export default Contato;
