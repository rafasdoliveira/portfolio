import { useState } from 'react'

const historias = () => {
  
    const [historias] = useState([
        {id: 1, img: "", data: "26/01/2001",texto: "Nascido em São Paulo, capital, em 2001, sou o filho mais novo da família."},
        {id: 2, img: "", data: "01/12/2018",texto: "Formado em Finanças pelo Ensino Médio Técnico, na EEEP José de Barcelos."},
        {id: 4, img: "", data: "08/02/2019",texto: "Primeira experiência profissional no setor comercial da Fortsat, entre 2019 e 2023"},
        {id: 4, img: "", data: "01/02/2022",texto: "Ingresso na faculdade de Análise e Desenvolvimento de Sistemas na UNIFOR, em 2022."},
        {id: 5, img: "", data: "04/12/2023",texto: "Início do estágio no Instituto do Câncer do Ceará, em Dezembro 2023."},
    ])
    return historias
}

export default historias
