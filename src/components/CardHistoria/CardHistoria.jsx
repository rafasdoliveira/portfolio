import Historias from "../../constants/historias/constHistorias"

const CardHistoria = () => {

    const historias = Historias()

    return (
      <>
        <div className="historia">
            <h2>Minha história</h2>
            {historias.map((historia) => (
                <div key={historia.id} className="cardzao">
                    <div className="cardzinho">
                        <img src="" alt="" />     
                    </div>
                    <div className="textosHistoria">
                        <h2>{historia.data}</h2>
                        <p>{historia.texto}</p>
                    </div>
                </div>
            ))}
        </div>
      </>
    )
}

export default CardHistoria
