import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const [myToken, setMyToken] = useState(localStorage.getItem('token'));

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
      }
    }
    useEffect(() => {
        setMyToken(localStorage.getItem('token')); // Refresh token state on component mount
      }, []);
  return (
    <header className='w-100'>
    <div class="header-content">
        <label for="menu-toggle">
            <span class="las la-bars"></span>
        </label>
        <div class="header-menu w-100">
            <label for="">
                <span class="las la-search"></span>
            </label>
            <div class="user ">
                <div class="bg-img" style={{ backgroundImage: "url('img/1.jpeg')" }}></div>

                <span class="las la-power-off"></span>
                <Link onClick={logout} to="/" >
                    <span className='fw-bold btnLogout btn-danger rounded '>Logout</span>
                </Link>
            </div>
        </div>
    </div>
</header>
  )
}
