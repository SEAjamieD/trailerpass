import React from 'react';
import Star from './Star';
import StarLine from './StarLine';
import './stars.css';

class Stars extends React.Component {

  render() {
    var rating = Math.round(this.props.rating);
    var stars = []
    for (var i = 0; i < rating; i++) {
      stars.push(<Star key={i + "S"}/>)
    }

    var outlines = 10 - rating;
    var starOutlines = []
    for (var j = 0; j < outlines; j++) {
      stars.push(<StarLine key={j + "SL"}/>)
    }

    return (
      <div className="stars__container">
        <div className="stars__row">
        {stars}
        {starOutlines}
        </div>
      </div>
    );
  }
}

export default Stars;
