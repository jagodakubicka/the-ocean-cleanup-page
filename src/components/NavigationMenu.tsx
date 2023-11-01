
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const NavigationMenu = ({handleMenuVisible, menuVisible}:any) => {

 
 return(
  <>
      {menuVisible && 
       <div className='navbar__links'> 
        <Link onClick={()=> handleMenuVisible()} className='navbar__link' to="/">Home</Link>
        <Link onClick={()=> handleMenuVisible()} className='navbar__link' to="/quiz">Quiz</Link>
        <Link onClick={()=> handleMenuVisible()} className='navbar__link' to="/">Join us</Link>
      </div>
      }
  </>
 )
}