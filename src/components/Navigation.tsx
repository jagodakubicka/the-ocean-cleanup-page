import {Link} from 'react-router-dom'


export const Navigation = () => {

   return( 
    <>
    <div className='navbar'>
      <Link className='navbar__logo' to="/">
         <div className="navbar__logo--cube"></div>
         <h3 className='navbar__logo--Logotext'>Together</h3>
      </Link>
    <div> 
     <Link className='navbar_link' to="/">Home</Link>
     <Link className='navbar_link' to="/quiz">Quiz</Link>
     <Link className='navbar_link' to="/">Join us</Link></div>
    </div>
    </>
   
  
 )
  
}