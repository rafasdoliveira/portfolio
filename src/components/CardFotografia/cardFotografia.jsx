// Rota
import { Link } from 'react-router-dom'
// Hooks
import { useState } from 'react'
// Componentes
import Modal from '../Modal/modal'
// Estilo
import './cardFotografia.css'
// Imagem
import Carro from "../../assets/images/carro.jpg"
import Local from "../../assets/icons/cardFotos/location-dot-solid.svg"
import Calendario from "../../assets/icons/cardFotos/calendar-regular.svg"
import Equipamento from "../../assets/icons/cardFotos/camera-solid.svg"


const CardFotografia = () => {

    const [detalhesEnsaios] = useState([
        {id: 1, titulo: 'Autodromo Eusebio', img: Carro, localsvg: Local, local: 'Fortaleza, Ceará', datasvg: Calendario, data: '13 de setembro de 2023', equipamentosvg: Equipamento, equipamento: 'Canon, EOS Rebel SL3'}
    ])

    return (
    <>
        {detalhesEnsaios.map((item) => (
             <div key={item.id} className="cardFotografia">
             <div className='capa'>
                 <img className='imagem' src= {item.img} alt="" />
             </div>
                <div className="titulo">
                    <h2>{item.titulo}</h2>
                </div>
             <div className="detalhes">
                 <div className="info">
                     <span>
                         <img className='icon' src={item.localsvg} alt="" />
                     </span>
                     <span className="texto">Fortaleza, Ceará</span>
                 </div>
                 <div className="info">
                     <span className='icone'>
                         <img className='icon' src={Calendario} alt="" />
                     </span>
                     <span className="texto">13 de setembro de 2023</span>
                 </div>
                 <div className="info">
                     <span>
                         <img className='icon' src={Equipamento} alt="" />
                     </span>
                     <span className="texto">Canon, EOS Rebel SL#</span>
                 </div>
                 <button className='ensaio-btn'>Ver Ensaio</button>
             </div>
         </div>
        ))}
        
    </>
  )
}

export default CardFotografia
