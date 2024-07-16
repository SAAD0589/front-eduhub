import React from 'react';
import logoLight from '../assets/images/logo-light.png';

export default function Footer() {
  return (
    <footer className="footer" style={{backgroundImage: "url('./assets/images/footer-bg.png')"}}>
      <div className="footer-top section">
        <div className="container grid-list">

          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logoLight} width="162" height="50" alt="EduWeb logo" className="logo-h"/>
            </a>
            <p className="footer-brand-text">
              EduHub est votre plateforme de référence pour les formations certifiées au Maroc. Nous offrons une large gamme de cours en ligne et sur campus, conçus pour développer vos compétences professionnelles et personnelles.
            </p>
            <div className="wrapper">
              <span className="span">Téléphone :</span>
              <a href="tel:+011234567890" className="footer-link">+212 6 12 34 56 78</a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:info@eduweb.com" className="footer-link">info@eduhub.com</a>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Plateforme en Ligne</p>
            </li>
            <li>
              <a href="#" className="footer-link">Accueil</a>
            </li>
            <li>
              <a href="#" className="footer-link">Infos</a>
            </li>
            <li>
              <a href="#" className="footer-link">E-learning</a>
            </li>
            <li>
              <a href="#" className="footer-link">Campus</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact</a>
            </li>
          </ul>

          <ul className="footer-list"></ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <form action="" className="contact-form">
              <div className="input-container">
                <input type="text" name="name" placeholder="Name" required className="input-field"/>
                <ion-icon name="person-outline" className="input-icon"></ion-icon>
              </div>
              <div className="input-container">
                <input type="email" name="email" placeholder="Email" required className="input-field"/>
                <ion-icon name="mail-outline" className="input-icon"></ion-icon>
              </div>
              <div className="input-container">
                <textarea name="message" placeholder="Message" required className="input-field"></textarea>
              </div>
              <button type="submit" className="btn contact-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
