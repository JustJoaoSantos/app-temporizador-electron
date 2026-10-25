//import { useState } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

import Navbar from './components/Navbar.tsx'
import Home  from './pages/Home.tsx'
import Timer from './pages/Timer.tsx'

function App() {

  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Timer" element={<Timer />} />
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
