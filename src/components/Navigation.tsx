import {Link} from 'react-router-dom'


export const Navigation = ({handleMenuVisible, menuVisible}:any) => {


   return( 
    <>
    <div className='navbar'>
      <Link className='navbar__logo' to="/">
         <div className="navbar__logo--cube"></div>
         <h3 className='navbar__logo--Logotext'>Together</h3>
      </Link>
      <button onClick={()=> handleMenuVisible()} className='navbar__btn'>
         {menuVisible ? 
         <div className='navbar__btn--cross'>
            <div className='navbar__btn--bar left-bar'></div>
            <div className='navbar__btn--bar right-bar'></div>
         </div> : 
         <div>
            <div className='navbar__btn--bar'></div>
            <div className='navbar__btn--bar'></div>
            <div className='navbar__btn--bar'></div>
         </div>}
      </button>
    </div>
    </>
   
  
 )
  
}