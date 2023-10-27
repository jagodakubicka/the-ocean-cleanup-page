
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const NavigationMenu = ({menuVisible}:any) => {

 
 return(
  <>
      {menuVisible && 
       <div className='navbar__links'> 
        <Link className='navbar__link' to="/">Home</Link>
        <Link className='navbar__link' to="/quiz">Quiz</Link>
        <Link className='navbar__link' to="/">Join us</Link>
      </div>
      }
  </>
 )
}