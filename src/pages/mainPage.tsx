
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Header } from '../components/Header'

export const MainPage = () => {

   return( 
    <>
    <div>
     
     <Link to="/"><FontAwesomeIcon icon={faArrowLeft} />Go back to collect some more</Link>
     <Header/>
    </div>
    </>
   
  
 )
  
}