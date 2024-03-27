import { Link } from 'react-router-dom'
import { useState } from 'react'
import './cardHome.css'

const CardFotografiaHome = ({h2}) => {
  
    const [portfolioFoto] = useState([
        {id: 1, src: '', alt: '', link:''},
        {id: 2, src: '', alt: '', link:''},
        {id: 3, src: '', alt: '', link:''},
        {id: 4, src: '', alt: '', link:''},
        {id: 5, src: '', alt: '', link:''},
        {id: 6, src: '', alt: '', link:''},
        {id: 7, src: '', alt: '', link:''},
    ])

    return (
    <>
        <h2 className='h2Cards'>{h2}</h2>
        <div className="cards">
            {portfolioFoto.slice(-2).map((item) => (
                <div key={item.id} className="card">
                    <span>
                        <img srcSet={item.src} alt={item.alt} />
                    </span>
                    <button>
                        <Link to={item.link}>Ver mais</Link>
                    </button>
                </div>
            ))}
        </div>
    </>
  )
}

export default CardFotografiaHome
