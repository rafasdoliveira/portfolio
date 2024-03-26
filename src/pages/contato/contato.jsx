// Rota
import { Link } from 'react-router-dom';
// Hook
import { useState, useEffect } from 'react';
// Componente
import NavRedeSocial from '../../constants/navRedeSocial/navRedeSocial';
import Header from '../../components/header/header';
// Estilos
import './contato.css';

const url = 'http://localhost:3000/forms'

const Contato = () => {

    const RedeSocial = NavRedeSocial() 
    const [forms, setForms] = useState([])
    const [assunto, setAssunto] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if(!response) {
                    throw new Error('Erro ao buscar os dados')
                }
                const data = await response.json()
                setForms(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = {
            assunto,
            nome,
            email,
            telefone,
            mensagem
        }
        
        try{
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            if(!response.ok) {
                throw new Error('Erro ao enviar os dados')
            }
        } 
        catch (error) {
                alert(error)
            }
        }

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
                        <input type="text" value={assunto} name="assunto" id="assunto" placeholder='Assunto'onChange={(e) => setAssunto(e.target.value)}/>

                        <input type="text" value={nome} name="nome" id="nome" placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>

                        <input type="email" value={email} name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>

                        <input type="number" value={telefone} name="telefone" id="telefone" placeholder='Telefone' onChange={(e) => setTelefone(e.target.value)}/>
                        </div>
                    <div className="textarea">
                        <textarea value={mensagem} name="mensagem" id="mensagem" placeholder='Mensagem' onChange={(e) => setMensagem(e.target.value)}/>
                        <input type="submit" value="Enviar" onClick={handleSubmit} />
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
