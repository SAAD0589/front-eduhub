import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Admin/Home';
import NavBar from './Client/components/NavBar';
import Footer from './Client/components/Footer';
import Accueil from './Client/components/Accueil';
import Loader from './Loader';

export default function CheckingUser() {
    const [myData, setMyData] = useState(null); // Start with null to indicate data is not yet fetched
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const myToken = localStorage.getItem('token');
                if (!myToken) {
                    console.error('No token found in localStorage');
                    setLoading(false); // Set loading to false immediately
                    return;
                }

                const { data } = await axios.get('http://127.0.0.1:8001/api/user', {
                    headers: {
                        Authorization: `Bearer ${myToken}`,
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
                
                setMyData(data);
                localStorage.setItem('idUser', data.id);
                localStorage.setItem('roleUser', data.role);
                localStorage.setItem('NomUser', data.nom);
                localStorage.setItem('PrenomUser', data.prenom);


                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching user:', error);
                setLoading(false); // Handle loading state in case of error
            }
        };

        getUser();
    }, []);

    if (loading) {
        return <div><Loader/></div>; // Render a loading indicator while fetching data
    }

    return (
        <div className="page-container">
            {localStorage.getItem('roleUser') == 1 ? (
                <Home />
            ) : (
                <div>
                    <NavBar />
                    <Accueil />
                    <Footer />
                </div>
            )}
        </div>
    );
}
