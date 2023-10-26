import './styles/App.scss'
import {  Routes, Route  } from "react-router-dom";
import {LandingPage}  from './pages/LandingPage'
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';
import { MouseCursor } from './components/MouseCursor';

function App() {




  return (
    <>
     <MouseCursor/>
    <Navigation/>
      <Routes>
        <Route path="/quiz" element={<LandingPage/>} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
 
    </>
  )
}

export default App
