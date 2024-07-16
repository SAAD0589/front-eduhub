import React, { useState, useEffect } from 'react';
import about_banner from '../assets/images/about-banner.jpg';
import about_shape_3 from '../assets/images/about-shape-3.png';
import about_shape_4 from '../assets/images/about-shape-4.svg';
import video_bg from '../assets/images/video-bg.png';
import video_banner from '../assets/images/video-banner.jpg';
import video_shape_1 from '../assets/images/video-shape-1.png';
import video_shape_2 from '../assets/images/video-shape-2.png';
import category_1 from '../assets/images/category-1.svg';
import category_2 from '../assets/images/category-2.svg';
import category_3 from '../assets/images/category-3.svg';
import category_4 from '../assets/images/category-3.svg';
import Loader from './Loader';

export default function Infos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <section class="section category" aria-label="category">
            <div class="container">
    
              <p class="section-subtitle">Catégories</p>
    
              <h2 class="h2 section-title">
              Découvrez Nos <span class="span">Options</span> de Formation.
              </h2>
    <br/>
              <ul class="grid-list">
    
                <li>
                  <div class="category-card" style={{'--color':' 170, 75%, 41%'}}>
    
                    <div class="card-icon">
                      <img src={category_1} width="40" height="40" loading="lazy"
                        alt="Online Degree Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Formations en Ligne</a>
                    </h3>
    
                    <p class="card-text">
                    Étudiez à votre rythme avec nos cours en ligne. Flexibles et accessibles partout, ces formations vous permettent d'apprendre efficacement.                    
                    </p>
    
                    <span class="card-badge">7 Cours</span>
    
                  </div>
                </li>
    
                <li>
                  <div class="category-card" style={{'--color':' 351, 83%, 61%'}}>
    
                    <div class="card-icon">
                      <img src={category_2} width="40" height="40" loading="lazy"
                        alt="Non-Degree Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Formations sur Campus</a>
                    </h3>
    
                    <p class="card-text">
                    Participez à des cours en présentiel dans un environnement stimulant. Bénéficiez d'une interaction directe avec des experts et des collègues.                    </p>
    
                    <span class="card-badge">4 Cours</span>
    
                  </div>
                </li>
    
                <li>
                  <div class="category-card" style={{'--color': '229, 75%, 58%'}}>
    
                    <div class="card-icon">
                      <img src={category_3} width="40" height="40" loading="lazy"
                        alt="Off-Campus Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Formations Hybrides</a>
                    </h3>
    
                    <p class="card-text">
                    Combinez les avantages de l'apprentissage en ligne et en présentiel. Nos formations hybrides s'adaptent à votre emploi du temps.                    </p>
    
                    <span class="card-badge">8 Cours</span>
    
                  </div>
                </li>
    
                <li>
                  <div class="category-card" style={{'--color':' 42, 94%, 55%'}}>
    
                    <div class="card-icon">
                      <img src={category_4} width="40" height="40" loading="lazy"
                        alt="Hybrid Distance Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Formations Accélérées</a>
                    </h3>
    
                    <p class="card-text">
                    Acquérez des compétences en une journée avec nos cours accélérés. Idéal pour ceux qui souhaitent apprendre rapidement.                    </p>
    
                    <span class="card-badge">8 Cours</span>
    
                  </div>
                </li>
    
              </ul>
    
            </div>
          </section>


      <section class="section about" id="about" aria-label="about">
            <div class="container">
    
              <figure class="about-banner">
    
                <div class="img-holder" style={{'--width':' 520', '--height': '370'}}>
                  <img src={about_banner} width="520" height="370" loading="lazy" alt="about banner"
                    class="img-cover"/>
                </div>
    
                
    
               
    
                <img src={about_shape_3} width="722" height="528" loading="lazy" alt=""
                  class="shape about-shape-3"/>
    
              </figure>
    
              <div class="about-content">
    
                <p class="section-subtitle">À Propos de Nous</p>
    
                <h2 class="h2 section-title">
                Première Plateforme de Formations<span class="span"> Certifiées</span> au Maroc.
                </h2>
    
                <p class="section-text">
                Nous offrons des formations certifiées pour booster vos compétences. Rejoignez-nous pour une expérience d'apprentissage unique.                </p>
    
                <ul class="about-list">
    
                  <li class="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    
                    <span class="span">Formateurs Experts</span>
                  </li>
    
                  <li class="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    
                    <span class="span">Apprentissage Flexible</span>
                  </li>
    
                  <li class="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    
                    <span class="span">Accès Illimité</span>
                  </li>
    
                </ul>
    
                <img src={about_shape_4} width="100" height="100" loading="lazy" alt=""
                  class="shape about-shape-4"/>
    
              </div>
    
            </div>
          </section>
    
          <section class="video has-bg-image" aria-label="video"
            style={{backgroundImage: `url(${video_bg})`}}>
            <div class="container">
    
              <div class="video-card">
    
                <div class="video-banner img-holder has-after" >
                  <img src={video_banner} width="970" height="550" loading="lazy" alt="video banner"
                    class="img-cover"/>
    
                  
                </div>
    
                <img src={video_shape_1} width="1089" height="605" loading="lazy" alt=""
                  class="shape video-shape-1"/>
    
                <img src={video_shape_2} width="158" height="174" loading="lazy" alt=""
                  class="shape video-shape-2"/>
    
              </div>
    
            </div>
          </section>

          
    </div>
  )
}
