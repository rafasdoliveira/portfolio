import Curiosidades from "../../constants/curiosidades/constCuriosidades"

const CardCuriosidade = () => {
  
    const curiosidades = Curiosidades()

    return (
    <>
        <div className="curiosidades">
            <h2>Curiosidades Aleatórias</h2>
            <ol>
                {curiosidades.map((curiosidade) => (
                    <li key={curiosidade.id}>
                        <span><img srcSet={curiosidade.img} alt=""/></span>
                        <p>{curiosidade.texto}</p>
                    </li>
                ))}
            </ol>
        </div>
    </>
    )
}

export default CardCuriosidade
