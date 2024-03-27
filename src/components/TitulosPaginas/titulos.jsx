import './titulos.css'

const Titulos = ({titulo, descricao}) => {
  return (
    <>
      <div className="intro">
        <div className="textosPortfolio">
          <h2>{titulo}</h2>
          <p>
              {descricao}
          </p>
        </div>
      </div>
    </>
  )
}

export default Titulos
