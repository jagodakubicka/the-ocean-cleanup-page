import {Link} from 'react-router-dom';
import { ReactComponent as Forest} from '../assets/images/forest.svg';

export const LandingPage =() => {
 return(
  <>
   <Link to="/about-us">Skip Game</Link>
   <p>landingPage</p>
  <Forest/>
  </>
 )
}