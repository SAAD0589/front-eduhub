import React from 'react';
import '../assets/css/LoaderStyle.css';

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
            </div>
        </div>
    );
}
