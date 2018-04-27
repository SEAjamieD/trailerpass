import React from 'react';
import './stars.css';

const Stars = (props) => {
  const {stars} = props;
    return (
      <div>
        <p>Stars: {stars}/10</p>
      </div>
    );
  }

export default Stars;
