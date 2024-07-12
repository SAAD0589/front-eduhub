import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Client/components/Accueil';
import Infos from './Client/components/Infos';
import Elearning from './Client/components/Elearning';
import Campus from './Client/components/Campus';
import Contact from './Client/components/Contact';
import NavBar from './Client/components/NavBar'
import Footer from './Client/components/Footer'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<div><NavBar/> <Accueil /> <Footer/></div>} />
        <Route path="/about" element={<div><NavBar/> <Infos /> <Footer/></div>} />
        <Route path="/courses" element={<div><NavBar/> <Elearning /> <Footer/></div>} />
        <Route path="/blog" element={<div><NavBar/> <Campus /> <Footer/></div>} />
        <Route path="/contact" element={<div><NavBar/> <Contact /> <Footer/></div>} />
      </Routes>
    </Router>
  )
}
