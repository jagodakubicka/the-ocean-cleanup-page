import {Link} from 'react-router-dom'


export const Navigation = () => {

   return( 
    <>
    <div className='navbar'>
     <div className='navbar__logo'>
      <div className="navbar__logo--cube"></div>
      <h3 className='navbar__logo--Logotext'>Logo</h3>
     </div>
    <div> 
     <Link to="/">Game</Link>
     <Link to="/about-us">Home</Link>
     <Link to="/">Join us</Link></div>
    </div>
    </>
   
  
 )
  
}