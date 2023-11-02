import './styles/App.scss'
import {  Routes, Route  } from "react-router-dom";
import {LandingPage}  from './pages/LandingPage'
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';
import { MouseCursor } from './components/MouseCursor';
import { NavigationMenu } from './components/NavigationMenu';
import { useState } from 'react';

function App() {

const [menuVisible, setMenuVisible] = useState(false);

const handleMenuVisible = () => {
  setMenuVisible(!menuVisible)
}
  return (
    <>
     {/* <MouseCursor/> */}
    <Navigation handleMenuVisible ={handleMenuVisible} menuVisible={menuVisible}/>
    <NavigationMenu handleMenuVisible ={handleMenuVisible} menuVisible={menuVisible}/>
      <Routes>
        <Route path="/quiz" element={<LandingPage/>} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
 
    </>
  )
}

export default App
