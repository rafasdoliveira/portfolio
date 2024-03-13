// Hook
import { useState } from "react"
// Imagens
import Html from "../../assets/icons/linguagens-programacao/html5.svg"
import Css from "../../assets/icons/linguagens-programacao/css3-alt.svg"
import Java from "../../assets/icons/linguagens-programacao/java.svg"
import Js from "../../assets/icons/linguagens-programacao/js.svg"
import Laravel from "../../assets/icons/linguagens-programacao/laravel.svg"
import Node from "../../assets/icons/linguagens-programacao/node.svg"
import React from "../../assets/icons/linguagens-programacao/react.svg"
import GitHub from "../../assets/icons/redes-sociais/github.svg"
import Globe from "../../assets/icons/redes-sociais/globe-solid.svg"


const cardPortfolioDev = () => {

    const [cardProjeto] = useState([
        {
            id: 1, 
            img: "", 
            alt: "",
            titulo: "Anamnese",
            descricao: "Projeto desenvolvido na cadeira de Estrutura de Dados com o intuito de praticar e trazer conhecimento a estrutura árvore de decisão", 
            githubSvg: GitHub,
            githubLink: "https://github.com/rafasdoliveira/anamnese",
            projetoSvg: Globe,
            projetoLink: "https://anamnese-topaz.vercel.app/",
            linguagens: [Html, Css, Js] 
        },
        {
            id: 2, 
            img: "", 
            alt: "",
            titulo: "Formulário de Registro",
            descricao: "Projeto desenvolvido em desafio do FreeCodeCamp, para prática de HTML e CSS", 
            githubSvg: GitHub,
            githubLink: "https://github.com/rafasdoliveira/registration-form",
            projetoSvg: Globe,
            projetoLink: "https://registration-form-ruddy.vercel.app/",
            linguagens: [Html, Css] 
            },
    ])

  return cardProjeto

}

export default cardPortfolioDev
