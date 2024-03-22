// Hook
import { useState } from "react"
// Componente
import ConstDetalhesDev from "../detalhesPortfolioDev/constDetalhesDev"
// Imagens
import Html from "../../assets/icons/linguagens-programacao/html5.svg"
import Css from "../../assets/icons/linguagens-programacao/css3-alt.svg"
import Java from "../../assets/icons/linguagens-programacao/java.svg"
import Js from "../../assets/icons/linguagens-programacao/js.svg"
import Laravel from "../../assets/icons/linguagens-programacao/laravel.svg"
import Node from "../../assets/icons/linguagens-programacao/node.svg"
import React from "../../assets/icons/linguagens-programacao/react.svg"



const cardPortfolioDev = () => {

    const [cardProjeto] = useState([
        {
            id: 1, 
            img: "", 
            alt: "",
            titulo: "Anamnese",
            descricao: "Projeto desenvolvido na cadeira de Estrutura de Dados com o intuito de praticar e trazer conhecimento a estrutura árvore de decisão", 
            // detalhe: "portfolio/1",
            linguagens: [Html, Css, Js] 
        },
        {
            id: 2, 
            img: "", 
            alt: "",
            titulo: "Formulário de Registro",
            descricao: "Projeto desenvolvido em desafio do FreeCodeCamp, para prática de HTML e CSS", 
            // detalhe: "portfolio/2",
            linguagens: [Html, Css] 
        },
        {
            id: 3, 
            img: "", 
            alt: "",
            titulo: "Spotify",
            descricao: "Projeto desenvolvido na cadeira de Desenvolvimento Web, para aprendizado e prática de aplicação FullStack", 
            // detalhe: "portfolio/3",
            linguagens: [React, Node] 
        },
        {
            id: 4, 
            img: "", 
            alt: "",
            titulo: "Fortlog Transportes",
            descricao: "Projeto desenvolvido ", 
            // detalhe: "portfolio/4",
            linguagens: [React, Node] 
        },
    ])

    return cardProjeto;
}

export default cardPortfolioDev
