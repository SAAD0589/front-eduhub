import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import axios from 'axios';
import AllformationsDistances from './AllformationsDistances';
import AllformationsPresentiel from './AllformationsPresentiel';
import NavBar from '../components/NavBar';
export default function AffichageFormation() {
    const [error, setError] = useState(null);
    const [formationsDistances, setFormationsDistances] = useState([]);
    const [formationsPresentiel, setFormationsPresentiel] = useState([]);

    useEffect(() => {
        const fetchFormationDistances = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8001/api/getFormationDistancesWithSessions');
            setFormationsDistances(response.data);
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
          } catch (err) {
            setError(err);
          }
        };
        const fetchFormationsPresentiel = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8001/api/getFormationsPresentielWithSessions');
              setFormationsPresentiel(response.data);
              console.log('====================================');
              console.log(response.data);
              console.log('====================================');
            } catch (err) {
              setError(err);
            }
          };
          fetchFormationDistances();
          fetchFormationsPresentiel();
      }, []);
    return (
        <div className=''>
            <input type="checkbox" id="menu-toggle" />
            <SideBar />
            <div class="main-content">
                <NavBar/>
                <main>

                <div class="page-header">
                    <h1>Formations </h1>
                    <small>Accueil / Formations</small>
                </div>
                </main>

                <div class="page-header">
                <h1>E-learning</h1>
                <AllformationsDistances formationsDistances={formationsDistances} />
                <h1>Campus</h1>

                <AllformationsPresentiel formationsPresentiel={formationsPresentiel}/>
                </div>
            </div>
        </div>
    )
}
