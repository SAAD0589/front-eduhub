import React from 'react'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function SideBar() {
    
  return (

    <div class="sidebar">
    <div class="side-header">
        <Link to="/" className="logo">
            <img src={logo} width="162" height="50" alt="EduHub logo" />
        </Link>
    </div>

    <div class="side-content">
        <div class="profile">
            <h4 className='text-capitalize'>{localStorage.getItem('PrenomUser')} {localStorage.getItem('NameUser')} </h4>
        </div>

        <div class="side-menu">
        <ul>
            <li>
               <Link to="/" class="active">
                    <span class="las la-home"></span>
                    <small>Accueil</small>
                </Link>
            </li>
            <li>
               <Link to="/AffichageEtudiant">
                    <span class="las la-user-alt"></span>
                    <small>Étudiants</small>
                </Link>
            </li>
            <li>
               <Link to="/AffichageFormations">
                    <span class="las la-envelope"></span>
                    <small>Formations</small>
                </Link>
            </li>
            <li>
               <Link to="/AfficherUniversites">
                    <span class="las la-clipboard-list"></span>
                    <small>Universites</small>
                </Link>
            </li>
        </ul>
    </div>
    </div>
</div>

  )
}
