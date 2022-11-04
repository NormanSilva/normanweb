import React from 'react'
import './Cards.css'

const Cards = (props) => {
  const {icon, title, description} = props

  console.log(icon)

  return (
    <>
      <div className='cardsDisplay'>
        <img src={icon} className='cardsIcon' alt='' width="20" height="20"/>
        <div className='cardsTitle'>{title} </div>
        <div className='cardsDescription'>{description}</div>
      </div>
      
    </>
    
  )
}

export default Cards