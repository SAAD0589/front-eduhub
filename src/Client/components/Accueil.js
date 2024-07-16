import React, { useState, useEffect } from 'react';
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
import partner9 from '../assets/images/estSale.JPG';
import partner10 from '../assets/images/encgKenitra.PNG';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Accueil() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>   
      <main>
        <article>
          <section className="section hero has-bg-image" id="home" aria-label="home"
            style={{backgroundImage: `url(${hero_bg})`}}>
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title">
                 La Plateforme <span className="span">EduHub</span> pour les Formations Supérieures 
                </h1>
                <p className="hero-text">
                Découvrez une gamme de cours en présentiel et en ligne pour booster vos compétences et votre carrière.
                </p>
                <Link to="/courses" className="btn has-before">
                  <span className="span">Explorez les options</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
              <figure className="hero-banner">
                <div className="img-holder one" style={{'--width': '270px','--height': '300px'}}>
                  <img src={hero_banner_1} width="270" height="300" alt="hero banner" className="img-cover"/>
                </div>
                <div className="img-holder two" style={{'--width': '240px', '--height': '370px'}}>
                  <img src={hero_banner_2} width="240" height="370" alt="hero banner" className="img-cover"/>
                </div>
                <img src={hero_shape_2} width="622" height="551" alt="" className="shape hero-shape-2"/>
              </figure>
            </div>
          </section>

          <section className="section stats" aria-label="stats">
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div className="stats-card" style={{'--color': '170, 75%, 41%'}}>
                    <h3 className="card-title">15.3k</h3>
                    <p className="card-text">Étudiants inscrits</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card" style={{'--color': '351, 83%, 61%'}}>
                    <h3 className="card-title">5.4K</h3>
                    <p className="card-text">Formations achevées</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card" style={{'--color': '260, 100%, 67%'}}>
                    <h3 className="card-title">100%</h3>
                    <p className="card-text">Taux de satisfaction</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card" style={{'--color': '42, 94%, 55%'}}>
                    <h3 className="card-title">150+</h3>
                    <p className="card-text">Formateurs d'élite</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section partners" aria-label="partners">
            <div className="container">
              <h2 className="h2 section-title">NOS PARTENAIRES</h2>
              <Swiper
                spaceBetween={5}  
                slidesPerView="auto"  
                centeredSlides={false}  
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 5,  
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 5,  
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 5,  
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 5,  
                  },
                }}
              >
                <SwiperSlide><img src={partner1} alt="Partner 1" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner2} alt="Partner 2" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner3} alt="Partner 3" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner4} alt="Partner 4" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner5} alt="Partner 5" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner6} alt="Partner 6" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner7} alt="Partner 7" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner8} alt="Partner 8" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner9} alt="Partner 9" className="partner-logo"/></SwiperSlide>
                <SwiperSlide><img src={partner10} alt="Partner 10" className="partner-logo"/></SwiperSlide>
              </Swiper>
            </div>
          </section>
        </article>
      </main>
    
      <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>

      <script src="./assets/js/script.js" defer></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}
