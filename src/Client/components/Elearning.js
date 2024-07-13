import React, { useState, useEffect } from 'react';
import elearningCourses from '../components/elearningCourses';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ElearningPopUp from './elearningPopUps'; // Import the popup component


export default function Elearning() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(elearningCourses);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null); // New state for selected course
  const coursesPerPage = 6;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0); // Reset to the first page when search query changes
  };

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCourses(elearningCourses);
    } else {
      setFilteredCourses(
        elearningCourses.filter(course =>
          course.nom.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const offset = currentPage * coursesPerPage;
  const currentCourses = filteredCourses.slice(offset, offset + coursesPerPage);

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
      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          <p className="section-subtitle">COURS EN LIGNE</p>
          <h2 className="h2 section-title">Explorez nos formations</h2>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Rechercher par nom de cours"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-bar"
              style={{ direction: 'ltr' }} 
            />
          </div>
          <ul className="grid-list">
            {currentCourses.map((course) => (
              <li key={course.id} onClick={() => openPopup(course)}>
                <div className="course-card">
                  <figure className="card-banner img-holder" style={{ '--width': '370', '--height': '220' }}>
                    <img src={course.image} width="370" height="220" loading="lazy" alt={course.nom} className="img-cover" />
                  </figure>
                  <div className="abs-badge">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">{course.duree}</span>
                  </div>
                  <div className="card-content">
                    <span className="badge">En ligne</span>
                    <h3 className="h3">
                      <a href="#" className="card-title">{course.nom}</a>
                    </h3>
                    <div className="wrapper">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>
                    </div>
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(course.date_debut).toLocaleDateString()}</span>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(course.date_fin).toLocaleDateString()}</span>
                      </li>
                    </ul>
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
            pageCount={Math.ceil(filteredCourses.length / coursesPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
            previousClassName="prev"
            nextClassName="next"
          />
        </div>
      </section>

      {/* Popup component */}
      {selectedCourse && (
        <ElearningPopUp course={selectedCourse} closeModal={closePopup} />
      )}
    </div>
  );
}
