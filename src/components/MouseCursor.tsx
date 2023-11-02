import { useState, useRef,useLayoutEffect } from "react";
import gsap from "gsap";

export const MouseCursor = () => {

const cursorRef = useRef<HTMLDivElement>(null)
const followerRef = useRef<HTMLDivElement>(null)
const cursorHoverRef = useRef<HTMLDivElement>(null)

const moveCursor = (e:MouseEvent):void => {
 gsap.to(cursorRef.current, {
  x:e.clientX,
  y: e.clientY,
  duration: 0.2,
 });

  gsap.to(followerRef.current, {
  x:e.clientX,
  y: e.clientY,
    duration: 0.9,
 });
 gsap.to(cursorHoverRef.current, {
  x:e.clientX,
  y: e.clientY,
    duration: 0.9,
 });
}

const moveCursorHover =(e:MouseEvent):void => {
  gsap.to(cursorRef.current, {
   scale: 1
 });

  gsap.to(followerRef.current, {
  scale:1
 });
 gsap.to(cursorHoverRef.current, {
   scale:3
 });
}


const moveCursorNormal =(e:MouseEvent):void => {
  gsap.to(cursorRef.current, {
   scale: 1
 });

  gsap.to(followerRef.current, {
  scale:1
 });
 gsap.to(cursorHoverRef.current, {
   scale:1
 });
}

useLayoutEffect(()=> {
gsap.set(cursorRef,{
  xPercent:100,
  yPercent:100
})
gsap.set(followerRef,{
  xPercent:-20,
  yPercent:-20
})
window.addEventListener("mousemove", moveCursor);

 return ()=> {
  window.removeEventListener("mousemove", moveCursor)
 }
})



  return (
    <>
    <div ref={cursorRef} className='cursor' />
    <div ref={followerRef} className='cursor_follower' />
    {/* <div ref={cursorHoverRef} className="cursorHover"></div> */}
    </>
  )
}