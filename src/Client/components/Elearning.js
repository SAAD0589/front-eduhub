import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ElearningPopUp from './elearningPopUps'; // Import the popup component
import Loader from './Loader';

export default function Elearning() {
  const [searchQuery, setSearchQuery] = useState('');
  const [formationDistances, setFormationDistances] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null); // New state for selected course
  const [error, setError] = useState(null);
  const coursesPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/api/getFormationDistancesWithSessions');
        setFormationDistances(response.data);
        setFilteredCourses(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchCourses();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0); // Reset to the first page when search query changes
  };

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCourses(formationDistances);
    } else {
      setFilteredCourses(
        formationDistances.filter(course =>
          course.session_formation.nom.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, formationDistances]);

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

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <Loader />;
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
                    <img src={course.session_formation.image} width="370" height="220" loading="lazy" alt={course.session_formation.nom} className="img-cover" />
                  </figure>
                  <div className="abs-badge">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">{course.session_formation.duree}</span>
                  </div>
                  <div className="card-content">
                    <span className="badge">En ligne</span>
                    <h3 className="h3">
                      <a href="#" className="card-title">{course.session_formation.nom}</a>
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
                        <span className="span">{new Date(course.session_formation.dateDebut).toLocaleDateString()}</span>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(course.session_formation.dateFin).toLocaleDateString()}</span>
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
