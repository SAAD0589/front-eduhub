import React from 'react';
import hero_bg from '../assets/images/hero-bg.svg';
import hero_banner_1 from '../assets/images/hero-banner-1.jpg';
import hero_banner_2 from '../assets/images/hero-banner-2.jpg';
import hero_shape_2 from '../assets/images/hero-shape-2.png';
import partner1 from '../assets/images/ensamRabat.JPG'; 
import partner2 from '../assets/images/emi.PNG';
import partner3 from '../assets/images/emsiRabat.JPG';
import partner4 from '../assets/images/ensaKenitra.PNG';
import partner5 from '../assets/images/ensias.JPG';
import partner6 from '../assets/images/uir.PNG';
import partner7 from '../assets/images/um5Rabat.PNG';
import partner8 from '../assets/images/ibntofail.PNG';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

export default function Accueil() {
  return (
    <div>   
      <main>
        <article>
          <section class="section hero has-bg-image" id="home" aria-label="home"
            style={{backgroundImage: `url(${hero_bg})`}}>
            <div class="container">
              <div class="hero-content">
                <h1 class="h1 section-title">
                 La Plateforme <span class="span">EduHub</span> pour les Formations Supérieures 
                </h1>
                <p class="hero-text">
                Découvrez une gamme de cours en présentiel et en ligne pour booster vos compétences et votre carrière.
                </p>
                <Link to="/courses" class="btn has-before">
                  <span class="span">Explorez les options</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
              <figure class="hero-banner">
                <div class="img-holder one" style={{'--width': '270px','--height': '300px',}}>
                  <img src={hero_banner_1} width="270" height="300" alt="hero banner" class="img-cover"/>
                </div>
                <div class="img-holder two" style={{'--width': '240', '--height': '370'}}>
                  <img src={hero_banner_2} width="240" height="370" alt="hero banner" class="img-cover"/>
                </div>
                <img src={hero_shape_2} width="622" height="551" alt="" class="shape hero-shape-2"/>
              </figure>
            </div>
          </section>

          <section class="section stats" aria-label="stats">
            <div class="container">
              <ul class="grid-list">
                <li>
                  <div class="stats-card" style={{'--color': '170, 75%, 41%'}}>
                    <h3 class="card-title">15.3k</h3>
                    <p class="card-text">Étudiants inscrits</p>
                  </div>
                </li>
                <li>
                  <div class="stats-card" style={{'--color': '351, 83%, 61%'}}>
                    <h3 class="card-title">5.4K</h3>
                    <p class="card-text">Formations achevées</p>
                  </div>
                </li>
                <li>
                  <div class="stats-card" style={{'--color': '260, 100%, 67%'}}>
                    <h3 class="card-title">100%</h3>
                    <p class="card-text">Taux de satisfaction</p>
                  </div>
                </li>
                <li>
                  <div class="stats-card" style={{'--color': '42, 94%, 55%'}}>
                    <h3 class="card-title">150+</h3>
                    <p class="card-text">Formateurs d'élite</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="section partners" aria-label="partners">
            <div class="container">
              <h2 class="h2 section-title">Notre Partenaires </h2>
              <ul class="partner-list">
                <li><img src={partner1} alt="Partner 1" class="partner-logo"/></li>
                <li><img src={partner2} alt="Partner 2" class="partner-logo"/></li>
                <li><img src={partner3} alt="Partner 3" class="partner-logo"/></li>
                <li><img src={partner4} alt="Partner 4" class="partner-logo"/></li>
                <li><img src={partner5} alt="Partner 5" class="partner-logo"/></li>
                <li><img src={partner6} alt="Partner 6" class="partner-logo"/></li>
                <li><img src={partner7} alt="Partner 7" class="partner-logo"/></li>
                <li><img src={partner8} alt="Partner 8" class="partner-logo"/></li>
              </ul>
            </div>
          </section>

        </article>
      </main>
    
      <a href="#top" class="back-top-btn" aria-label="back top top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>

      <script src="./assets/js/script.js" defer></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}
