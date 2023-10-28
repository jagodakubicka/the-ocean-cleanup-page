import testImg from '../assets/images/homePage/garbage-path.jpg'

export const AboutUsSection = () => {
 return (
  <>
   <section className="about-us">
    <h1 className="about-us">About Us</h1>
    <p className="about-us__subtitle">We are a Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa dolore temporibus ea error modi, quo possimus maiores fugit omnis.</p>
    <div className="about-us__container">
     <div className='about-us__section about-us__section--first'>
       <p className="about-us__text">Together is a company that helps to clean our Planet from garbage.</p>
       <p className="about-us__text">We currently have <span>10</span> offices. </p>
      </div>
     <div className='about-us__section about-us__section--middle'>
      <img src={testImg} alt="" />
      <div className='about-us__section--img'>
        <img src={testImg} alt="" />
        <img src={testImg} alt="" />
      </div>
      <img src={testImg} alt="" />
     </div>
     <div className='about-us__section about-us__section--last'>
      <p className="about-us__text">There are <span>1209</span> registered volunteers.</p>
       <p className="about-us__text">We have collected <span>100304kg</span> of waste. </p>
     </div>
    </div>
   </section>
  </>
 )
}