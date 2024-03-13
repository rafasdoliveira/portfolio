import { useState } from 'react'
import './cards.css'

const CardsFotos = ({h2}) => {
  
    const [portfolioFoto] = useState([
        {id: 1, src: '', alt: ''},
        {id: 2, src: '', alt: ''},
        {id: 3, src: '', alt: ''},
        {id: 4, src: '', alt: ''},
        {id: 5, src: '', alt: ''},
        {id: 6, src: '', alt: ''},
        {id: 7, src: '', alt: ''},
    ])

    return (
    <>
        <h2 className='h2Cards'>{h2}</h2>
        <div className="cards">
            {portfolioFoto.slice(-4).map((item) => (
                <div key={item.id} className="card">
                    <span>
                        <img srcSet={item.src} alt={item.alt} />
                    </span>
                    <button>Ver mais</button>
                </div>
            ))}
        </div>
    </>
  )
}

export default CardsFotos
