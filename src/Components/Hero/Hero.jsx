import React from 'react'
import './Hero.css'
import videoHero from '../../Recursos/aherovideo.mp4'
import { Player } from 'video-react';





const Hero = () => {

  return (
    <div className='hero'>
      <div className='className="videoBg"'>
        <Player playsInline src={videoHero}/>
      </div>
      
      <div className='contenido'>
        <div className='text1'>Ayudo a crear productos digitales</div>
        <div className='text2'>que brinden experiencias significativas</div>
        <div className='text3'>y relevantes para los usuarios.</div> 
      </div>
    </div>
  )
}

export default Hero