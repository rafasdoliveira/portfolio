// Componentes
import Titulos from "../../components/TitulosPaginas/titulos"
import Header from "../../components/Header/header"
// Estilo
import './experienciaProfissional.css'
import { useState } from "react"

const ExperienciaProfissional = () => {

  const [empresas] = useState([
    {id: 1, nome: 'Liv Saúde', cargo: 'Estagiário de Desenvolvimento', data: '06/2018 - Até o momento'},
    {id: 2, nome: 'Fortlog Transporte', cargo: 'Supervisor Comercial', data: '06/2018 - 11/2018'},
    {id: 3, nome: 'Fortlog Transporte', cargo: 'Assistente Comercial', data: '06/2018 - 11/2018'},
    {id: 4, nome: 'Fortsat Comércio e Transporte', cargo: 'Jovem Aprendiz', data: '02/2019 - 04/2020'},
    {id: 5, nome: 'P&P Contabilidade', cargo: 'Estágio em Finanças', data: '06/2018 - 11/2018'},
    
  ])

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
