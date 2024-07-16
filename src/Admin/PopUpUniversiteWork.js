import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PopUpUniversiteWork() {
    const [universites, setUniversites] = useState([]);
    const [selectuniversite, setSelectuniversite] = useState('');
    const [usersWithoutUniversite, setUsersWithoutUniversite] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch universities and users without universities
        const fetchUniversites = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/getUniversites', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUniversites(response.data);
            } catch (err) {
                console.error('Error fetching universities:', err);
            }
        };

        const fetchUsersWithoutUniversite = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/usersWithoutUniversite', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsersWithoutUniversite(response.data);
                // Show the modal if there are users without university
                if (response.data.length > 0) {
                    setShowModal(true);
                }
            } catch (err) {
                console.error('Error fetching users without university:', err);
            }
        };

        fetchUniversites();
        fetchUsersWithoutUniversite();
    }, []); // Empty dependency array to run only once on mount

    const handleButtonClick = async () => {
        if (selectuniversite) {
            await ChoisireUniversite();
            setShowModal(false); // Hide the modal after the button click
        }
    };

    const ChoisireUniversite = async () => {
        try {
            const response = await axios.post(`http://127.0.0.1:8001/api/ChoisirUniversite/${selectuniversite}`, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            navigate("/"); // Navigate to '/' after successful request
        } catch (error) {
            console.error('Error choosing university:', error);
        }
    };

    const handleSelectChange = (event) => {
        setSelectuniversite(event.target.value);
    };

    return (
        <div>
            {showModal && universites.length > 0 && (
                <div className="modal fade show" id="UniversiteWork" tabIndex="-1" role="dialog" aria-labelledby="coursePopupLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <p className='py-2 fw-bold'>Universite Work</p>
                            <select className="form-select" onChange={handleSelectChange} aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                {universites.map(universite => (
                                    <option value={universite.id} key={universite.id}>{universite.nom}</option>
                                ))}
                            </select>
                            <div className="modal-footer d-flex justify-content-end">
                                <button type="button" className="popbutton" onClick={handleButtonClick} data-bs-dismiss="modal">Ajoute</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
