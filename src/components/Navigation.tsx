import {Link} from 'react-router-dom'


export const Navigation = ({change}:any) => {


   return( 
    <>
    <div className='navbar'>
      <Link className='navbar__logo' to="/">
         <div className="navbar__logo--cube"></div>
         <h3 className='navbar__logo--Logotext'>Together</h3>
      </Link>
      <button onClick={()=> change()} className='navbar__btn'>
         <div className='navbar__btn--bar'></div>
         <div className='navbar__btn--bar'></div>
         <div className='navbar__btn--bar'></div>
      </button>
    </div>
    </>
   
  
 )
  
}