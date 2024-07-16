import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CampusPopUp from './campusPopUps';
import blog_bg from '../assets/images/blog-bg.svg';
import blog_shape from '../assets/images/blog-shape.png';
import Loader from './Loader';

export default function Campus() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [campusCourses, setCampusCourses] = useState([]);
  const [error, setError] = useState(null);
  const coursesPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/api/getFormationsPresentielWithSessions');
        setCampusCourses(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchCourses();
  }, []);

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

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <Loader />;
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
                    <img src={course.session_formation.image} width="370" height="370" loading="lazy" alt={course.session_formation.nom} className="img-cover" />
                    <div className="abs-badge">
                      <span className="span">{course.session_formation.duree}</span>
                    </div>
                  </figure>
                  <div className="card-content">
                    <a onClick={() => openPopup(course)} className="card-btn" aria-label="read more">
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                    <span className="badge">Présentiel</span>
                    <h3 className="h3">
                      <a href="#" className="card-title">{course.session_formation.nom}</a>
                    </h3>
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(course.session_formation.dateDebut).toLocaleDateString()}</span>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
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
