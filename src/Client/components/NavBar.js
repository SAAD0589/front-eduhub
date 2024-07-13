import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} width="162" height="50" alt="EduHub logo" />
        </Link>

        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <Link to="/" className="logo">
              <img src={logo} width="162" height="50" alt="EduWeb logo" />
            </Link>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link" data-nav-link>Accueil</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link" data-nav-link>Infos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/courses" className="navbar-link" data-nav-link>E-learning</Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link" data-nav-link>Campus</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="header-action-btn" aria-label="toggle search" title="Search">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>

          <button className="header-action-btn" aria-label="cart" title="Cart">
            <span className="btn-badge"><FontAwesomeIcon icon={faUser} /></span>
          </button>

          <Link to="/login" className="btn has-before">
            <span className="span">Connexion</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </Link>

          <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}
