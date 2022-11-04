import React from 'react'
import './Cards.css'

const Cards = (props) => {
  const {icon, title, description} = props

  console.log(icon)

  return (
    <>
      <div className='displayContent'>
        <div className='cardsDisplay'>
          <img src={icon} className='cardsIcon' alt='' width="50" height="50"/>
          <div className='cardsTitle'>{title} </div>
          <div className='cardsDescription'>{description}</div>
        </div>
      </div> 
    </>
    
  )
}

export default Cards