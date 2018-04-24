import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const Pagination = (props) => {
  const {page, totalPages} = props;
  return (
    <div className="pagination__container full-flex">
      <div className="pagination__container-inner full-flex">
        <div className='arrow left-arrow full-flex'></div>
        <p className="pagination__numbers full-flex">{page} of {totalPages}</p>
        <div className='arrow right-arrow full-flex'></div>
      </div>
    </div>
  );
}

export default Pagination;
