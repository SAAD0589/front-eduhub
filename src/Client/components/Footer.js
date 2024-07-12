import React from 'react'
import logoLight from '../assets/images/logo-light.svg';

export default function Footer() {
  return (
    <footer class="footer" style={{backgroundImage: "url('./assets/images/footer-bg.png')"}}>
    
    <div class="footer-top section">
      <div class="container grid-list">

        <div class="footer-brand">

          <a href="#" class="logo">
            <img src={logoLight} width="162" height="50" alt="EduWeb logo"/>
          </a>

          <p class="footer-brand-text">
          EduHub est votre plateforme de référence pour les formations certifiées au Maroc. Nous offrons une large gamme de cours en ligne et sur campus, conçus pour développer vos compétences professionnelles et personnelles.          </p>

          

          <div class="wrapper">
            <span class="span">Téléphone :</span>

            <a href="tel:+011234567890" class="footer-link">+212 6 12 34 56 78</a>
          </div>

          <div class="wrapper">
            <span class="span">Email:</span>

            <a href="mailto:info@eduweb.com" class="footer-link">info@eduhub.com</a>
          </div>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Plateforme en Ligne</p>
          </li>

          <li>
            <a href="#" class="footer-link">Accueil</a>
          </li>

          <li>
            <a href="#" class="footer-link">Infos</a>
          </li>

          <li>
            <a href="#" class="footer-link">E-learning</a>
          </li>

          <li>
            <a href="#" class="footer-link">Campus</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact</a>
          </li>

         

        </ul>

        <ul class="footer-list">

          
        </ul>

        <div class="footer-list">

          <p class="footer-list-title">Contacts</p>

          <p class="footer-list-text">
            Enter your email address to register to our newsletter subscription
          </p>

          <form action="" class="newsletter-form">
            <input type="email" name="email_address" placeholder="Votre email" 
            required class="input-field"/>

            <button type="submit" class="btn has-before">
              <span class="span">Subscribe</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </button>
          </form>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>
  </footer>

  )
}
