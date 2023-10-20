import {  useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import {Text } from './Text';

export const Header = () => {

  const app = useRef();

 const animateText = ()=> {
  let ctx = gsap.context(()=> {
     gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
      
      gsap.to("[data-animate='move']", {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
      
      gsap.set(".dont-animate", {
        backgroundColor: 'red'
      });
  }, app);
  return () => ctx.revert()
 }

 useLayoutEffect(() => {
   animateText()
  }, [])
 return(
  <>
   <div className="app" ref={app}>
      <Text anim="rotate">Box</Text>
      <Text className="dont-animate">Don't Animate Me</Text>
      <Text anim="move">Box</Text>
    </div>
  </>
 )
}