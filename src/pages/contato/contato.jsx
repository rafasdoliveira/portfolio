// Rota
import { Link } from 'react-router-dom';
// Hook
import { useState, useEffect } from 'react';
// Componente
import NavRedeSocial from '../../constants/navRedeSocial/navRedeSocial';
import Header from '../../components/Header/header';
import Titulos from '../../components/TitulosPaginas/titulos.jsx';
import Input from '../../components/Form/Input/input';
import Select from '../../components/Form/Select/select';
import TextArea from '../../components/Form/TextArea/textarea.jsx';
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
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            const data = await response.json();
            setForms(data);
        } catch (error) {
            console.log(error);
        }
    };

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
 
            fetchData()
            setAssunto('')
            setNome('')
            setEmail('')
            setTelefone('')
            setMensagem('')
        } 

        catch (error) {
                alert(error)
            }
        }

        const listAssuntos = {
            '0': 'Selecione o assunto',
            '1': 'Dúvida',
            '2': 'Sugestão',
            '3': 'Reclamação',
            '4': 'Outros'
        }

    return (
        <>
            <Header/>
            <Titulos titulo='me mande uma mensagem!' descricao='Fique à vontade para entrar em contato, seja sobre projetos, oportunidades de trabalho ou apenas para uma conversa.' />
            <form className='form'>
                <div className="input">
                    <Select id="assunto" value={assunto} option={listAssuntos} onChange={(e) => setAssunto(e.target.value)}/>
                    <Input type="text" value={nome} id="nome" placeholder="Nome" required={true} onChange={(e) => setNome(e.target.value)} />
                    <Input type="email" value={email} id="email" placeholder="E-mail" required={true} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="number" value={telefone} id="telefone" placeholder="Telefone" required={true} onChange={(e) => setTelefone(e.target.value)} />
                </div>
                <div className="textarea">
                    <TextArea value={mensagem} id="mensagem" placeholder="Mensagem" onChange={(e) => setMensagem(e.target.value)} />
                    <Input type="submit" value="Enviar" onClick={handleSubmit} />
                </div>
            </form>
            <div className="redes-sociais">
                <div className="textos">
                    <p>Fale nas redes sociais!</p>
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
        </>
    );
};

export default Contato;
