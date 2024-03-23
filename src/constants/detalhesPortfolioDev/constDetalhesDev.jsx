// Hook
import { useState } from "react"
// Imagens
import githubIcon from "../../assets/icons/redes-sociais/github.svg"
import globeIcon from "../../assets/icons/redes-sociais/globe-solid.svg"

const ConstDetalhesDev = () => {
  
    const [detalhesDev] = useState([
        {
            id: 1,
            url: 'https://www.youtube.com/watch?v=7f8xcMlC-G4&list=RDEMgHMf-d_LVQHvXo5AePBsaw&index=6',
            playing: false,
            controls: true,
            width: '100%',
            height: '100%',
            nome: 'um',
            data: '21/03/2024',
            descricao: 'Lorem Ipsum...',
            githubIcon: githubIcon,
            githubLink: '',
            projetoIcon: globeIcon,
            projetoLink: '',
        },
            {
                id: 2,
                url: 'https://www.youtube.com/watch?v=7f8xcMlC-G4&list=RDEMgHMf-d_LVQHvXo5AePBsaw&index=6',
                playing: false,
                controls: true,
                width: '100%',
                height: '100%',
                nome: 'dois',
                data: '21/03/2024',
                descricao: 'Lorem',
                githubIcon: githubIcon,
                githubLink: '',
                projetoIcon: globeIcon,
                projetoLink: '',
            }
    ])

    return detalhesDev
;}

export default ConstDetalhesDev
