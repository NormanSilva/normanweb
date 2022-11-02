import React from 'react'
import './Hero.css'
import videoBG from '../../Recursos/herovideo.mp4'



const Hero = () => {


  return (
    <div className='hero'>
      <video src={videoBG} autoplay loop className='videoBg' muted></video>
      <div className='contenido'>
        <div className='text1'>Ayudo a crear productos digitales</div>
        <div className='text2'>que brinden experiencias significativas</div>
        <div className='text3'>y relevantes para los usuarios.</div> 
      </div>
    </div>
  )
}

export default Hero