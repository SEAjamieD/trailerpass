import React from 'react';
import MovieDBLogo from './powered-moviedb.svg';
import './powered-by.css';

const PoweredBy = () => {

  return (
    <div className="powered__by-container full-flex">
      <img src={MovieDBLogo} alt="the movie database logo" />
    </div>
  );
}

export default PoweredBy;
