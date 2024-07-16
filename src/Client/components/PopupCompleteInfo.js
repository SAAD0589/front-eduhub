import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PopupCompleteInfo() {
    const [adresse, setAdresse] = useState('');
    const [numTelephone, setNumTelephone] = useState('');
    const [niveauAcademique, setNiveauAcademique] = useState('');
    const [filiereAcademique, setFiliereAcademique] = useState('');
    const [Genre, setGenre] = useState('');
    const [usersCheckCompleteInfo, setUsersCheckCompleteInfo] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCheckusersCompleteInfo = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/usersCompleteInfo', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsersCheckCompleteInfo(response.data);
                
                // Show the modal if there are users without complete information
                if (response.data.length > 0) {
                    setShowModal(true);
                }
                console.log('======setUsersCheckCompleteInfo==============================');
                console.log(usersCheckCompleteInfo);
                console.log('====================================');
            } catch (err) {
                console.error('Error fetching users without complete information:', err);
            }
        };

        fetchCheckusersCompleteInfo();
    }, []); // Empty dependency array to run only once on mount

    const addNewDataInUser = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token'); // Assuming you have stored the token in localStorage

        const response = await fetch('http://127.0.0.1:8001/api/addNewDataInUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                Adresse: adresse,
                NumTelephone: numTelephone,
                niveauAcademique: niveauAcademique,
                filiereAcademique: filiereAcademique,
                Genre: Genre
            })
        });

        const data = await response.json();

        if (response.ok) {
            setShowModal(false); // Hide the modal after successful submission
            // Optionally navigate or refresh data
            // navigate('/some-path'); // Uncomment to navigate
        } else {
        }
    };

    return (
        <div>
            {showModal && (
                <div className="modal fade show" id="UniversiteWork" tabIndex="-1" role="dialog" aria-labelledby="coursePopupLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <h3 className="py-2 fw-bold">Complete Informations</h3>
                            <form onSubmit={addNewDataInUser}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Adresse"
                                        onChange={(e) => setAdresse(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Numero Telephone"
                                        onChange={(e) => setNumTelephone(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Niveau Academique"
                                        onChange={(e) => setNiveauAcademique(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Filiere Academique"
                                        onChange={(e) => setFiliereAcademique(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" onChange={(e) => setGenre(e.target.value)}>
                                        <option>Choisir Genre</option>
                                        <option value="H">Homme</option>
                                        <option value="F">Femme</option>
                                    </select>
                                </div>
                                <div className="modal-footer d-flex justify-content-end">
                                    <button type="submit" className="popbutton">Ajoute</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
