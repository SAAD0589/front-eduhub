import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Loader from '../../Loader.js'; // Import the Loader component

export default function NavBar() {
  const [myToken, setMyToken] = useState(localStorage.getItem('token'));
  const [myData, setMyData] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loader
  const location = useLocation();

  const getUser = async () => {
    try {
      const myToken = localStorage.getItem('token');

      if (!myToken) {
        console.error('No token found in localStorage');
        return;
      }

      const { data } = await axios.get('http://127.0.0.1:8001/api/user', {
        headers: {
          Authorization: `Bearer ${myToken}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      setMyData(data);
      console.log('====================================');
      console.log(myData);
      localStorage.setItem('user_Auth', myData.id);
      console.log('====================================');
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  console.log('====================================');
  console.log(myData.role);
  console.log('====================================');

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setMyToken(localStorage.getItem('token')); 
  }, []);

  const handleLogoutClick = () => {
    setLoading(true); // Show loader when logout button is clicked
    logout();
  };

  const logout = async () => {
    try {
      await fetch('http://127.0.0.1:8001/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });
      localStorage.setItem('token', '');
      localStorage.setItem('roleUser', '');
      localStorage.setItem('idUser', '');

      setMyToken(null); // Set token state to null upon logout
      window.location.reload(false);
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      setLoading(false); // Hide loader after logout is complete
    }
  }

  useEffect(() => {
    setMyToken(localStorage.getItem('token')); // Refresh token state on component mount
  }, []);

  return (
    
    <header className="header" data-header>
    {loading ? <Loader /> :
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} width="162" height="50" alt="EduHub logo" className="logo-h"/>
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

          {localStorage.getItem('idUser') ?
            <button onClick={handleLogoutClick} className='btnLogout btn-danger rounded'>
              <i class="mdi mdi-logout"></i>  Déconnexion
            </button>
            :
            <Link to="/login" className="btn has-before">
              <span className="btnLogout span fw-bold"><i class="mdi mdi-login"></i>    Connexion</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </Link>
          }

          <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
       }
    </header>
  );
}
