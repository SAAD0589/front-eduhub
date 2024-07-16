import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import AllEtudiants from './AllEtudiants';
import axios from 'axios';
import NavBar from '../components/NavBar';

export default function AffichageEtudiant() {
    const [error, setError] = useState(null);
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        const fetchEtudiants = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8001/api/getEtudiants');
            setEtudiants(response.data);
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
          } catch (err) {
            setError(err);
          }
        };
        fetchEtudiants();
      }, []);
    return (
        <div className=''>
            <input type="checkbox" id="menu-toggle" />
            <SideBar />
            <div class="main-content">
                <NavBar/>
                <main>

                <div class="page-header">
                    <h1>Etudiants</h1>
                    <small>Accueil /  Etudiants</small>
                </div>
                </main>
                <AllEtudiants etudiants={etudiants}/>
            </div>
        </div>
    )
}
