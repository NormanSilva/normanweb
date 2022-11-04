import React from 'react'
import './Tecnicas.css'
import Tags from '../Tags/Tags'
import Cards from '../Cards/Cards'
import { TenicasHabilidades } from '../../Helper/TecnicasHabilidades'


const Tecnicas = () => {



  return (
    <div>
      <Tags title="// Técnicas y habilidades"/>
      <div className='titleSection'>
        <p className='title'>Me describo como un diseñador con alta disciplina y disfruto trabajando en equipo o de forma independiente.</p>
      </div>

      <div> 
        {TenicasHabilidades.map((tecnica) => {
          return(
            <Cards key={tecnica.title} icon={tecnica.icon} title={tecnica.title} description={tecnica.description}/>
          )
        }) }
      </div>

    </div>
    
  )
}

export default Tecnicas