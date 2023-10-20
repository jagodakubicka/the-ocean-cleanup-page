import './styles/App.scss'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {LandingPage}  from './pages/LandingPage'
import { MainPage } from './pages/MainPage';

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
