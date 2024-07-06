import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './assets/css/style.css'
import hero_bg from './assets/images/hero-bg.svg'
import hero_banner_1 from './assets/images/hero-banner-1.jpg'
import hero_banner_2 from './assets/images/hero-banner-2.jpg'
import hero_shape_1 from './assets/images/hero-shape-1.svg'
import hero_shape_2 from './assets/images/hero-shape-2.png'
import category_1 from './assets/images/category-1.svg'
import category_2 from './assets/images/category-2.svg'
import category_3 from './assets/images/category-3.svg'
import category_4 from './assets/images/category-3.svg'
import about_banner from './assets/images/about-banner.jpg'
import about_shape_1 from './assets/images/about-shape-1.svg'
import about_shape_2 from './assets/images/about-shape-2.svg'
import about_shape_3 from './assets/images/about-shape-3.png'
import about_shape_4 from './assets/images/about-shape-4.svg'
import course_1 from './assets/images/course-1.jpg'
import course_2 from './assets/images/course-2.jpg'
import course_3 from './assets/images/course-3.jpg'
import video_bg from './assets/images/video-bg.png'
import video_banner from './assets/images/video-banner.jpg'
import video_shape_1 from './assets/images/video-shape-1.png'
import video_shape_2 from './assets/images/video-shape-2.png'
import blog_bg from './assets/images/blog-bg.svg'
import blog_1 from './assets/images/blog-1.jpg'
import blog_2 from './assets/images/blog-2.jpg'
import blog_3 from './assets/images/blog-3.jpg'
import blog_shape from './assets/images/blog-shape.png'
export default function Home() {
  return (
    <div>   
  <NavBar/> 
      <main>
        <article>
          <section class="section hero has-bg-image" id="home" aria-label="home"
            style={{backgroundImage: `url(${hero_bg})`}}>
            <div class="container">
    
              <div class="hero-content">
    
                <h1 class="h1 section-title">
                  The Best Program to <span class="span">Enroll</span> for Exchange
                </h1>
    
                <p class="hero-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                </p>
    
                <a href="#" class="btn has-before">
                  <span class="span">Find courses</span>
    
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
    
              </div>
    
              <figure class="hero-banner">
    
                <div class="img-holder one" style={{'--width': '270px','--height': '300px',}}>
                  <img src={hero_banner_1} width="270" height="300" alt="hero banner" class="img-cover"/>
                </div>
    
                <div class="img-holder two" style={{'--width': '240', '--height': '370'}}>
                  <img src={hero_banner_2} width="240" height="370" alt="hero banner" class="img-cover"/>
                </div>
    
                <img src={hero_shape_1} width="380" height="190" alt="" class="shape hero-shape-1"/>
    
                <img src={hero_shape_2} width="622" height="551" alt="" class="shape hero-shape-2"/>
    
              </figure>
    
            </div>
          </section>
    
    
    
    
          <section class="section category" aria-label="category">
            <div class="container">
    
              <p class="section-subtitle">Categories</p>
    
              <h2 class="h2 section-title">
                Online <span class="span">Classes</span> For Remote Learning.
              </h2>
    
              <p class="section-text">
                Consectetur adipiscing elit sed do eiusmod tempor.
              </p>
    
              <ul class="grid-list">
    
                <li>
                  <div class="category-card" style={{'--color':' 170, 75%, 41%'}}>
    
                    <div class="card-icon">
                      <img src={category_1} width="40" height="40" loading="lazy"
                        alt="Online Degree Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Online Degree Programs</a>
                    </h3>
    
                    <p class="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
    
                    <span class="card-badge">7 Courses</span>
    
                  </div>
                </li>
    
                <li>
                  <div class="category-card" style={{'--color':' 351, 83%, 61%'}}>
    
                    <div class="card-icon">
                      <img src={category_2} width="40" height="40" loading="lazy"
                        alt="Non-Degree Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Non-Degree Programs</a>
                    </h3>
    
                    <p class="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
    
                    <span class="card-badge">4 Courses</span>
    
                  </div>
                </li>
    
                <li>
                  <div class="category-card" style={{'--color': '229, 75%, 58%'}}>
    
                    <div class="card-icon">
                      <img src={category_3} width="40" height="40" loading="lazy"
                        alt="Off-Campus Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Off-Campus Programs</a>
                    </h3>
    
                    <p class="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
    
                    <span class="card-badge">8 Courses</span>
    
                  </div>
                </li>
    
                <li>
                  <div class="category-card" style={{'--color':' 42, 94%, 55%'}}>
    
                    <div class="card-icon">
                      <img src={category_4} width="40" height="40" loading="lazy"
                        alt="Hybrid Distance Programs" class="img"/>
                    </div>
    
                    <h3 class="h3">
                      <a href="#" class="card-title">Hybrid Distance Programs</a>
                    </h3>
    
                    <p class="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
    
                    <span class="card-badge">8 Courses</span>
    
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
    
                <img src={about_shape_1} width="360" height="420" loading="lazy" alt=""
                  class="shape about-shape-1"/>
    
                <img src={about_shape_2} width="371" height="220" loading="lazy" alt=""
                  class="shape about-shape-2"/>
    
                <img src={about_shape_3} width="722" height="528" loading="lazy" alt=""
                  class="shape about-shape-3"/>
    
              </figure>
    
              <div class="about-content">
    
                <p class="section-subtitle">About Us</p>
    
                <h2 class="h2 section-title">
                  Over 10 Years in <span class="span">Distant learning</span> for Skill Development
                </h2>
    
                <p class="section-text">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
                  aliquaenim ad
                  minim.
                </p>
    
                <ul class="about-list">
    
                  <li class="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    
                    <span class="span">Expert Trainers</span>
                  </li>
    
                  <li class="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    
                    <span class="span">Online Remote Learning</span>
                  </li>
    
                  <li class="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    
                    <span class="span">Lifetime Access</span>
                  </li>
    
                </ul>
    
                <img src={about_shape_4} width="100" height="100" loading="lazy" alt=""
                  class="shape about-shape-4"/>
    
              </div>
    
            </div>
          </section>
    
    

    
          <section class="section course" id="courses" aria-label="course">
            <div class="container">
    
              <p class="section-subtitle">Popular Courses</p>
    
              <h2 class="h2 section-title">Pick A Course To Get Started</h2>
    
              <ul class="grid-list">
    
                <li>
                  <div class="course-card">
    
                    <figure class="card-banner img-holder" style={{'--width': '370',' --height': '220'}}>
                      <img src={course_1} width="370" height="220" loading="lazy"
                        alt="Build Responsive Real- World Websites with HTML and CSS" class="img-cover"/>
                    </figure>
    
                    <div class="abs-badge">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                      <span class="span">3 Weeks</span>
                    </div>
    
                    <div class="card-content">
    
                      <span class="badge">Beginner</span>
    
                      <h3 class="h3">
                        <a href="#" class="card-title">Build Responsive Real- World Websites with HTML and CSS</a>
                      </h3>
    
                      <div class="wrapper">
    
                        <div class="rating-wrapper">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
    
                        <p class="rating-text">(5.0/7 Rating)</p>
    
                      </div>
    
                      <data class="price" value="29">$29.00</data>
    
                      <ul class="card-meta-list">
    
                        <li class="card-meta-item">
                          <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">8 Lessons</span>
                        </li>
    
                        <li class="card-meta-item">
                          <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">20 Students</span>
                        </li>
    
                      </ul>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="course-card">
    
                    <figure class="card-banner img-holder" style={{'--width':' 370',' --height':' 220'}}>
                      <img src={course_2} width="370" height="220" loading="lazy"
                        alt="Java Programming Masterclass for Software Developers" class="img-cover"/>
                    </figure>
    
                    <div class="abs-badge">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                      <span class="span">8 Weeks</span>
                    </div>
    
                    <div class="card-content">
    
                      <span class="badge">Advanced</span>
    
                      <h3 class="h3">
                        <a href="#" class="card-title">Java Programming Masterclass for Software Developers</a>
                      </h3>
    
                      <div class="wrapper">
    
                        <div class="rating-wrapper">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
    
                        <p class="rating-text">(4.5 /9 Rating)</p>
    
                      </div>
    
                      <data class="price" value="49">$49.00</data>
    
                      <ul class="card-meta-list">
    
                        <li class="card-meta-item">
                          <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">15 Lessons</span>
                        </li>
    
                        <li class="card-meta-item">
                          <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">35 Students</span>
                        </li>
    
                      </ul>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="course-card">
    
                    <figure class="card-banner img-holder" style={{'--width':' 370',' --height':' 220'}}>
                      <img src={course_3} width="370" height="220" loading="lazy"
                        alt="The Complete Camtasia Course for Content Creators" class="img-cover"/>
                    </figure>
    
                    <div class="abs-badge">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                      <span class="span">3 Weeks</span>
                    </div>
    
                    <div class="card-content">
    
                      <span class="badge">Intermediate</span>
    
                      <h3 class="h3">
                        <a href="#" class="card-title">The Complete Camtasia Course for Content Creators</a>
                      </h3>
    
                      <div class="wrapper">
    
                        <div class="rating-wrapper">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
    
                        <p class="rating-text">(4.9 /7 Rating)</p>
    
                      </div>
    
                      <data class="price" value="35">$35.00</data>
    
                      <ul class="card-meta-list">
    
                        <li class="card-meta-item">
                          <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">13 Lessons</span>
                        </li>
    
                        <li class="card-meta-item">
                          <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">18 Students</span>
                        </li>
    
                      </ul>
    
                    </div>
    
                  </div>
                </li>
    
              </ul>
    
              <a href="#" class="btn has-before">
                <span class="span">Browse more courses</span>
    
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
    
            </div>
          </section>
    
    
          <section class="video has-bg-image" aria-label="video"
            style={{backgroundImage: `url(${video_bg})`}}>
            <div class="container">
    
              <div class="video-card">
    
                <div class="video-banner img-holder has-after" >
                  <img src={video_banner} width="970" height="550" loading="lazy" alt="video banner"
                    class="img-cover"/>
    
                  <button class="play-btn" aria-label="play video">
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                  </button>
                </div>
    
                <img src={video_shape_1} width="1089" height="605" loading="lazy" alt=""
                  class="shape video-shape-1"/>
    
                <img src={video_shape_2} width="158" height="174" loading="lazy" alt=""
                  class="shape video-shape-2"/>
    
              </div>
    
            </div>
          </section>
    
    
    
          <section class="section stats" aria-label="stats">
            <div class="container">
    
              <ul class="grid-list">
    
                <li>
                  <div class="stats-card" style={{'--color': '170, 75%, 41%'}}>
                    <h3 class="card-title">29.3k</h3>
    
                    <p class="card-text">Student Enrolled</p>
                  </div>
                </li>
    
                <li>
                  <div class="stats-card" style={{'--color': '351, 83%, 61%'}}>
                    <h3 class="card-title">32.4K</h3>
    
                    <p class="card-text">Class Completed</p>
                  </div>
                </li>
    
                <li>
                  <div class="stats-card" style={{'--color': '260, 100%, 67%'}}>
                    <h3 class="card-title">100%</h3>
    
                    <p class="card-text">Satisfaction Rate</p>
                  </div>
                </li>
    
                <li>
                  <div class="stats-card" style={{'--color': '42, 94%, 55%'}}>
                    <h3 class="card-title">354+</h3>
    
                    <p class="card-text">Top Instructors</p>
                  </div>
                </li>
    
              </ul>
    
            </div>
          </section>
    
    

          <section class="section blog has-bg-image" id="blog" aria-label="blog"
            style={{backgroundImage: `url(${blog_bg})`}}>
            <div class="container">
    
              <p class="section-subtitle">Latest Articles</p>
    
              <h2 class="h2 section-title">Get News With Eduweb</h2>
    
              <ul class="grid-list">
    
                <li>
                  <div class="blog-card">
    
                    <figure class="card-banner img-holder has-after" style={{'--width': '370', '--height': '370'}}>
                      <img src={blog_1} width="370" height="370" loading="lazy"
                        alt="Become A Better Blogger: Content Planning" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <a href="#" class="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </a>
    
                      <a href="#" class="card-subtitle">Online</a>
    
                      <h3 class="h3">
                        <a href="#" class="card-title">Become A Better Blogger: Content Planning</a>
                      </h3>
    
                      <ul class="card-meta-list">
    
                        <li class="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">Oct 10, 2021</span>
                        </li>
    
                        <li class="card-meta-item">
                          <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">Com 09</span>
                        </li>
    
                      </ul>
    
                      <p class="card-text">
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="blog-card">
    
                    <figure class="card-banner img-holder has-after" style={{'--width': '370', '--height': '370'}}>
                      <img src={blog_2} width="370" height="370" loading="lazy"
                        alt="Become A Better Blogger: Content Planning" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <a href="#" class="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </a>
    
                      <a href="#" class="card-subtitle">Online</a>
    
                      <h3 class="h3">
                        <a href="#" class="card-title">Become A Better Blogger: Content Planning</a>
                      </h3>
    
                      <ul class="card-meta-list">
    
                        <li class="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">Oct 10, 2021</span>
                        </li>
    
                        <li class="card-meta-item">
                          <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">Com 09</span>
                        </li>
    
                      </ul>
    
                      <p class="card-text">
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="blog-card">
    
                    <figure class="card-banner img-holder has-after" style={{'--width': '370', '--height': '370'}}>
                      <img src={blog_3} width="370" height="370" loading="lazy"
                        alt="Become A Better Blogger: Content Planning" class="img-cover"/>
                    </figure>
    
                    <div class="card-content">
    
                      <a href="#" class="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </a>
    
                      <a href="#" class="card-subtitle">Online</a>
    
                      <h3 class="h3">
                        <a href="#" class="card-title">Become A Better Blogger: Content Planning</a>
                      </h3>
    
                      <ul class="card-meta-list">
    
                        <li class="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">Oct 10, 2021</span>
                        </li>
    
                        <li class="card-meta-item">
                          <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
    
                          <span class="span">Com 09</span>
                        </li>
    
                      </ul>
    
                      <p class="card-text">
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
    
                    </div>
    
                  </div>
                </li>
    
              </ul>
    
              <img src={blog_shape} width="186" height="186" loading="lazy" alt=""
                class="shape blog-shape"/>
    
            </div>
          </section>
    
        </article>
      </main>
    
    <Footer/>
   
    
      <a href="#top" class="back-top-btn" aria-label="back top top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    
    
    
    
    
    
      <script src="./assets/js/script.js" defer></script>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    

    </div>
  )
}
