import React, { useState } from 'react';
import axios from 'axios';

export default function CampusPopUp({ course, closeModal }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (idFormation) => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.post(
        `http://127.0.0.1:8001/api/AddParticiper/${idFormation}`,
        {
          idFormation,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
  
      const content = response.data;
      console.log('Content:', content);
      localStorage.setItem('content', JSON.stringify(content));

      // Set subscribed state to true to show success message
      setIsSubscribed(true);

      // Reset subscribed state and close modal after 2 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      // Handle error state if needed
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title">{course.session_formation.nom}</h5>
          <button type="button" className="close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img src={course.session_formation.image} alt={course.session_formation.nom} className="img-fluid" />
          <p className="description">{course.session_formation.description}</p>
          <p className="dates">
            du {new Date(course.session_formation.dateDebut).toLocaleDateString()} au {new Date(course.session_formation.dateFin).toLocaleDateString()}
          </p>
          <p className="adresse">Adresse : {course.adresse}</p>
        </div>
        <div className="modal-footer">
          {isSubscribed ? (
            <p className="success-message">Inscription réussie !</p>
          ) : (
            <button type="button" className="btn" onClick={() => handleSubscribe(course.id)}>
              S'inscrire
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
