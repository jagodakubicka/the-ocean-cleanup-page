import {Link} from 'react-router-dom';
//import { ReactComponent as Forest} from '../assets/images/forest.svg';
import Ocean from '../assets/images/ocean.jpg';

export const LandingPage =() => {
 return(
  <>
   <Link to="/about-us">Skip Game</Link>
   <p>landingPage</p>
  <img width="100%" src={Ocean} alt="" />
  </>
 )
}