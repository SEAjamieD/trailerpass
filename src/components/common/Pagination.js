import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const Pagination = (props) => {
  const {page, totalPages, handlePagination} = props;
  return (
    <div className="pagination__container full-flex">
      <div className="pagination__container-inner full-flex">
        <div className='arrow left-arrow full-flex' onClick={() => handlePagination('back')}></div>
        <p className="pagination__numbers full-flex">{page} of {totalPages}</p>
        <div className='arrow right-arrow full-flex' onClick={() => handlePagination('next')}></div>
      </div>
    </div>
  );
}

export default Pagination;
