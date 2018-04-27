import React from 'react';
import {Link} from 'react-router-dom';
import './backbutton.css';

const Backbutton = () => {
  return (
    <Link to="/">
      <div className="backbutton__container full-flex">
        <div className="arrow left-arrow"></div>
      </div>
    </Link>
  );
}

export default Backbutton;
