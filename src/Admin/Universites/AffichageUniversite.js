import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import axios from 'axios';
import AllUniversites from './AllUniversites';
import NavBar from '../components/NavBar';
export default function AfficherUniversites() {
    const [error, setError] = useState(null);
    const [universites, setUniversites] = useState([]);

    useEffect(() => {
        const fetchUniversite = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8001/api/getUniversites');
            setUniversites(response.data);
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
          } catch (err) {
            setError(err);
          }
        };
       
        fetchUniversite();
      }, []);
    return (
        <div className=''>
            <input type="checkbox" id="menu-toggle" />
            <SideBar />
            <div class="main-content">
                <NavBar/>
                <main>

                <div class="page-header">
                    <h1> Universites</h1>
                    <small>Accueil /  Universites</small>
                </div>
                </main>

                <AllUniversites universites={universites}/>
            </div>
        </div>
    )
}
