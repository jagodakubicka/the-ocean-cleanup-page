import { useState } from "react";
import { TestimonialsData } from "../types/Types"

interface SliderDataProps  {
 sliderData: TestimonialsData[];
}

export const SliderComponent =({sliderData}:SliderDataProps) => {

 const [slideIndex, setSlideIndex] = useState(0);

 function showPrevSlide(){
  setSlideIndex(index => {
   if (index === sliderData.length -1) return 0
   return index - 1
  })
 }

 function showNextSlide(){
  setSlideIndex(index => {
   if (index === 0) return sliderData.length + 1
   return index + 1
  })
 }

 return(
  <div className="slider" style={{width:'100vw'}}>
   <div style={{width:'100vw', height:'100%', overflow:'hidden', display:'flex'}}>
    {sliderData.map(({text, author}, index)=> {
    return(
     <div key={index} className="slider-slide" aria-hidden={slideIndex !== index} style={{translate:`${-100*slideIndex}%`}}>
      <p>{text}</p>
      <p>{author}</p>
     </div>
    )
   })}
   </div>
   <button className="slider-btn slider-btn__prev" onClick={showPrevSlide}>Prev</button>
   <button className="slider-btn slider-btn__next" onClick={showNextSlide}>Next</button>
  </div>
 )
}