import React, { useState } from 'react';
import blog_bg from '../assets/images/blog-bg.svg';
import blog_shape from '../assets/images/blog-shape.png';
import campusCourses from '../components/campusCourses ';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CampusPopUp from './campusPopUps';


export default function Campus() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const coursesPerPage = 6;

  const offset = currentPage * coursesPerPage;
  const currentCourses = campusCourses.slice(offset, offset + coursesPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const openPopup = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <section className="section blog has-bg-image" id="blog" aria-label="blog" style={{ backgroundImage: `url(${blog_bg})` }}>
        <div className="container">
          <p className="section-subtitle">COURS PRÉSENTIEL</p>
          <h2 className="h2 section-title">Explorez nos formations</h2>
          <ul className="grid-list">
            {currentCourses.map((course) => (
              <li key={course.id} >
                <div className="blog-card">
                  <figure className="card-banner img-holder has-after" style={{ '--width': '370', '--height': '370' }}>
                    <img src={course.image} width="370" height="370" loading="lazy" alt={course.nom} className="img-cover" />
                    <div className="abs-badge">
                      <span className="span">{course.duree}</span>
                    </div>
                  </figure>
                  <div className="card-content">
                    <a onClick={() => openPopup(course)} className="card-btn" aria-label="read more">
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                    <span className="badge">Présentiel</span>
                    <h3 className="h3">
                      <a href="#" className="card-title">{course.nom}</a>
                    </h3>
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(course.date_debut).toLocaleDateString()}</span>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(course.date_fin).toLocaleDateString()}</span>
                      </li>
                    </ul>
                    <p className="card-text">
                      {course.adresse}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ReactPaginate
            previousLabel={<FaArrowLeft />}
            nextLabel={<FaArrowRight />}
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Math.ceil(campusCourses.length / coursesPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
            previousClassName="prev"
            nextClassName="next"
          />
          <img src={blog_shape} width="186" height="186" loading="lazy" alt="" className="shape blog-shape" />
        </div>
      </section>

      
      {selectedCourse && (
        <CampusPopUp course={selectedCourse} closeModal={closePopup} />
      )}
    </div>
  );
}
