import React from 'react'
import './About.css'
import Tags from '../Tags/Tags'
import fotoNorman from '../../Recursos/fotoNorman.png'

const About = () => {

  return (
    <div>
        <Tags title="// Sobre mí"/>
        

        <div className='displayAbout1'>
            <img src={fotoNorman} alt="" />

            <div className='containerTitle'>
                <div className='displayAbout2'>
                    <div className='hola'>Hola!, soy </div>
                    <div className='norman' >Norman</div> 
                </div>
                <div className='diseñadorUi'>Diseñador de Interfaz de Usuario (Ui) </div>  
            </div>    
        </div>

        <div className='descriptionsDisplay'>
            <div className='descrip1'>2 años de experiencia, convirtiendo ideas en proyectos increíbles a través del mundo de las ideas y el diseño creativo e interactivo.</div>
            <div className='descrip2'>Soy Diseñador Ui con conocimientos  en lenguaje de desarrollo web y programación. Ayudo a las marcas aterrizar los proyectos en productos digitales utilizando el diseño centrado en las personas (Human Centered Design).</div>
            <div className='descrip3'>Mis 10 años de experiencia como director de arte y diseñador gráfico me ha llevado a conocer distintos rubros de mercado, lo cual me hace comprender las necesidades de las personas y los objetivos que tienen cada negocio.</div>
        </div>
       
        
    </div>
    

    
  )
}

export default About