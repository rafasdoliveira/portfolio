// Componentes
import Header from "../../components/Header/header"
import Titulos from "../../components/TitulosPaginas/titulos"
import ConstEmpresas from "../../constants/empresas/constEmpresas"
// Estilo
import './experienciaProfissional.css'

const ExperienciaProfissional = () => {

  const empresas = ConstEmpresas()

  return (
    <>
      <Header/> 
      <Titulos titulo='Experiência Profissional' descricao='Veja minhas experiências profissionais, de vendedor à desenvolvedor de software.'/>
      <div className="box-empresas">
        {empresas.map((empresa) => (
          <div key={empresa.id} className="empresa">
            <h2>{empresa.nome}</h2>
            <p>{empresa.cargo}</p>
            <p>{empresa.data}</p>
            <button>Detalhes</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default ExperienciaProfissional
