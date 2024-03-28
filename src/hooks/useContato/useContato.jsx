import { useState, useEffect } from "react"

const useContato = (url) => {

    const [forms, setForms] = useState([])
    const [assunto, setAssunto] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')

    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados')
            }
            const data = await response.json()
            setForms(data)
        } catch (error) {
            console.log(error)
        }
    }

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
        '4': 'Outros',
        '5': 'Trabalhe conosco'
    }
    
    return {
        forms,
        assunto,
        setAssunto,
        nome,
        setNome,
        email,
        setEmail,
        telefone,
        setTelefone,
        mensagem,
        setMensagem,
        handleSubmit,
        listAssuntos
    }
}

export default useContato;

