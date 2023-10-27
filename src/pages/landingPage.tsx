import {Link} from 'react-router-dom';
//import { ReactComponent as Forest} from '../assets/images/forest.svg';
import Ocean from '../assets/images/ocean.jpg';

export const LandingPage =() => {
 return(
  <>
   <div className='game_link'> 
    <Link className='game_link--skip' to="/">Skip Game</Link>
    </div>
   <img width="100%" src={Ocean} alt="" />
  </>
 )
}