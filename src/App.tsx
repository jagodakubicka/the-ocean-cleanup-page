import './styles/App.scss'
import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {LandingPage}  from './pages/landingPage';
import { MainPage } from './pages/mainPage';




function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about-us" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
