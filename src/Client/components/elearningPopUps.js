import React, { useState } from 'react';

export default function ElearningPopUp({ course, closeModal }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`http://127.0.0.1:8001/api/AddParticiper/${course.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ idFormation: course.id })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      const content = await response.json();
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
          <p>{course.session_formation.description}</p>
          <p>
            du {new Date(course.session_formation.dateDebut).toLocaleDateString()} au {new Date(course.session_formation.dateFin).toLocaleDateString()}
          </p>
        </div>
        <div className="modal-footer">
          {isSubscribed ? (
            <p className="success-message">Inscription réussie !</p>
          ) : (
            <button type="button" className="btn" onClick={handleSubscribe}>
              S'inscrire
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
