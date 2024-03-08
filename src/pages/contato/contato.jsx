// Componente
import NavRedeSocial from '../../constants/navRedeSocial/navRedeSocial';
// Rota
import { Link } from 'react-router-dom';
// Estilos
import './contato.css';

const Contato = () => {

    const RedeSocial = NavRedeSocial() 

    return (
        <>
            <div className="contatoPage">
                
                <div className="form">
                    <form>
                        <h1 className='textos'>Me envie um e-mail</h1>
                        <input type="text" name="assunto" id="assunto" placeholder='Assunto'/>
                        <input type="text" name="nome" id="nome" placeholder='Nome'/>
                        <input type="email" name="email" id="email" placeholder='E-mail'/>
                        <textarea name="mensagem" id="mensagem" placeholder='Mensagem'/>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
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
