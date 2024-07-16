import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Client/components/Accueil';
import Infos from './Client/components/Infos';
import Elearning from './Client/components/Elearning';
import Campus from './Client/components/Campus';
import Contact from './Client/components/Contact';
import NavBar from './Client/components/NavBar'
import Footer from './Client/components/Footer'
import Login from './Login';
import CheckingUser from './CheckingUser';
import AffichageEtudiant from './Admin/Etudiants/AffichageEtudiant'
import Register from './Register';
import AffichageFormation from './Admin/Formations/AffichageFormation';
import AfficherUniversites from './Admin/Universites/AffichageUniversite';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><CheckingUser /></div>} />
        <Route path="/about" element={<div><NavBar/> <Infos /> <Footer/></div>} />
        <Route path="/courses" element={<div><NavBar/> <Elearning /> <Footer/></div>} />
        <Route path="/blog" element={<div><NavBar/> <Campus /> <Footer/></div>} />
        <Route path="/contact" element={<div><NavBar/> <Contact /> <Footer/></div>} />
        <Route path="/login" element={<div><NavBar/> <Login /> <Footer/></div>} />
        <Route path="/register" element={<div><NavBar/><Register/><Footer/></div>} />

        <Route path="/AffichageEtudiant" element={<div><AffichageEtudiant/></div>} />
        <Route path="/AffichageFormations" element={<div><AffichageFormation/></div>} />
        <Route path="/AfficherUniversites" element={<div><AfficherUniversites/></div>} />

      </Routes>
    </Router>
  )
}