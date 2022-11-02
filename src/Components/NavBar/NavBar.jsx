import React from 'react'
import './NavBar.css'

const NavBar = () => {



  return (
    <header>

        <div className='logoDisplay'>
           <div className='normanHeader'>NORMAN</div>
           <div className='silvaHeader'>SILVA</div> 
        </div>

        <nav>
            
               <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/norman-silva-5abb29180/'>Linkedin</a> 
               <a target="_blank" rel="noreferrer" href='https://www.behance.net/nsilvazetab35e'>Behance</a>
               <a target="_blank" rel="noreferrer" href='https://dribbble.com/Norman777'>Dribble</a>  
            
        </nav>   

    </header>
    
  )
}

export default NavBar