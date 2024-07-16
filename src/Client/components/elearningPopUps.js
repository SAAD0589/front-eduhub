import React, { useState } from 'react';

export default function ElearningPopUp({ course, closeModal }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => {
      closeModal();
      setIsSubscribed(false);
    }, 2000);
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
