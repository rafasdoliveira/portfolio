import { useState } from "react"
// Imagens
import Sangue from "../../assets/icons/sobre/droplet-solid.svg"
import Linguas from "../../assets/icons/sobre/language-solid.svg"
import Corrida from "../../assets/icons/sobre/person-running-solid.svg"
import Americas from "../../assets/icons/sobre/earth-americas-solid.svg"
import Livro from "../../assets/icons/sobre/book-open-solid.svg"

const constCuriosidades = () => {

    const [curiosidades] = useState([
        {id: 1, img: Sangue,   texto: "Doador de sangue desde 2018, com 12 doações realizadas."},
        {id: 2, img: Linguas,  texto: "Falo inglês intermediário (C2) e possuo conhecimentos básicos em libras."},
        {id: 3, img: Corrida,  texto: "Sou apaixonado por esportes e tenho me dedidcado a corrida de rua e natação em mar aberto, me preparando para o meu primeiro Iron Man."},
        {id: 4, img: Americas, texto: "Gosto de viajar e conhecer novas culturas e pessoas."},
        {id: 5, img: Livro,    texto: "Aderi a leitura como um hábito e tenho lido em média 12 livros por ano."},
    ])

    return curiosidades
}

export default constCuriosidades
