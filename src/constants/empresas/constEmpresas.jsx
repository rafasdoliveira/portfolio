import { useState } from "react"

const ConstEmpresas = () => {
    
    const [empresas] = useState([
        {id: 1, nome: 'Liv Saúde', cargo: 'Estagiário de Desenvolvimento', data: '06/2018 - Até o momento'},
        {id: 2, nome: 'Fortlog Transporte', cargo: 'Supervisor Comercial', data: '06/2018 - 11/2018'},
        {id: 3, nome: 'Fortlog Transporte', cargo: 'Assistente Comercial', data: '06/2018 - 11/2018'},
        {id: 4, nome: 'Fortsat Comércio e Transporte', cargo: 'Jovem Aprendiz', data: '02/2019 - 04/2020'},
        {id: 5, nome: 'P&P Contabilidade', cargo: 'Estágio em Finanças', data: '06/2018 - 11/2018'},   
      ])  

      return empresas
}

export default ConstEmpresas
