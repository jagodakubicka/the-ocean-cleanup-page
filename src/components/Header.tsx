import videoBg from '../assets/video/headerVideoBg.mp4'



export const Header = () => {

 
 return(
  <div className='header'>
    <div className="header_overlay"></div>
    <video src={videoBg} autoPlay loop muted/>
    <div className="header_content">
      <h1>Let's Clean</h1>
      <h2>together <span className='header_content--dot'></span></h2>
    </div>
  </div>
 )
}