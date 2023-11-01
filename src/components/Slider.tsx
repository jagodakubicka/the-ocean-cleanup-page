import { SliderComponent } from "../hooks/SliderComponent"

 const testimonials = [{text:'I love them!', author: 'John Smith'}, {text:'Great company with great purpose', author: 'Emilia Blue'},{text:'We have cleaned so much and will do much more together', author: 'Jan Kowalsky'}]

export const Slider = () => {

 return(
  <div style={{maxWidth:'90vw', width:'100%', height:'500px', margin:'0 auto'}}>
  <SliderComponent sliderData = {testimonials} />
  </div>
 )
}