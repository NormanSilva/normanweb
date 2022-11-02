import React from 'react'
import './Hero.css'
import videoHero from '../../Recursos/aherovideo.mp4'




const Hero = () => {
/* <video src={videoBG} autoplay loop className='videoBg' muted></video> */

  return (
    <div className='hero'>
      <video src={videoHero} autoPlay loop className='videoBg' sound/>
      <div className='contenido'>
        <div className='text1'>Ayudo a crear productos digitales</div>
        <div className='text2'>que brinden experiencias significativas</div>
        <div className='text3'>y relevantes para los usuarios.</div> 
      </div>
    </div>
  )
}

export default Hero