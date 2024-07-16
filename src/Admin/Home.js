import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import './assets/css/StyleDashbordAdmin.css';
import TableUsers from './components/TableUsers';
import PopUpUniversiteWork from './PopUpUniversiteWork';
import axios from 'axios';
import AllEtudiants from './Etudiants/AllEtudiants';
import AllformationsPresentiel from './Formations/AllformationsPresentiel';
import NavBar from './components/NavBar';

export default function Home() {
    const [error, setError] = useState(null);
    const [etudiants, setEtudiants] = useState([]);
    const [formationsPresentiel, setFormationsPresentiel] = useState([]);


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
  
      useEffect(() => {
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
            fetchFormationsPresentiel();
        }, []);
    return (
        <div className=''>
        <PopUpUniversiteWork/>
            <input type="checkbox" id="menu-toggle" />
            <SideBar/>
            <div class="main-content">
              <NavBar/>
                <main>

                    <div class="page-header">
                        <h1>Accueil</h1>
                        <small>Accueil / Accueil</small>
                    </div>

                    <div class="page-content">

                        <div class="analytics">

                            <div class="card">
                                <div class="card-head">
                                    <h2>107,00 </h2>
                                    <span class="las la-user-friends"></span>
                                </div>
                                <div class="card-progress">
                                    <small>Étudiants inscrits</small>
                                    <div class="card-indicator">
                                        <div class="indicator one" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-head">
                                    <h2>340,00</h2>
                                    <span class="las la-eye"></span>
                                </div>
                                <div class="card-progress">
                                    <small>Pages Consultées</small>
                                    <div class="card-indicator">
                                        <div class="indicator two" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-head">
                                    <h2>150 +</h2>
                                    <span class="las la-shopping-cart"></span>
                                </div>
                                <div class="card-progress">
                                    <small>Formateurs d'élite</small>
                                    <div class="card-indicator">
                                        <div class="indicator three" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-head">
                                    <h2>47,00</h2>
                                    <span class="las la-envelope"></span>
                                </div>
                                <div class="card-progress">
                                    <small>Formations achevées</small>
                                    <div class="card-indicator">
                                        <div class="indicator four" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-6'><AllEtudiants etudiants={etudiants}/></div>
                            <div className='col-6'><AllformationsPresentiel formationsPresentiel={formationsPresentiel}/>
                            </div>

                        </div>


                    </div>

                </main>

            </div>
        </div>
    )
}
