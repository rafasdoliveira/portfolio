import { useState } from 'react'


const ConstSobreHome = () => {
    
    const [sobre] = useState([
    {id: 1, titulo: 'Desenvolvedor', texto: 'Desenvolvimento de sites e aplicativos, utilizando as melhores tecnologias do mercado.'},
    {id: 2, titulo: 'Fotógrafo', texto: 'Fotografia de eventos, ensaios e produtos. Trabalho com edição de imagens e vídeos.'},
    {id: 3, titulo: 'Leitor', texto: 'Desenvolvimento de sites e aplicativos, utilizando as melhores tecnologias do mercado.'},
    {id: 4, titulo: 'Esportista', texto: 'Fotografia de eventos, ensaios e produtos. Trabalho com edição de imagens e vídeos.'}
  ])
    return sobre
}

export default ConstSobreHome
