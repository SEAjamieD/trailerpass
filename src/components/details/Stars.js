import React from 'react';
import Star from './Star';
import StarLine from './StarLine';
import './stars.css';

class Stars extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var rating = Math.round(this.props.rating);
    var stars = []
    for (var i = 0; i < rating; i++) {
      stars.push(<Star key={i + "S"}/>)
    }

    var outlines = 10 - rating;
    var starOutlines = []
    for (var i = 0; i < outlines; i++) {
      stars.push(<StarLine key={i + "SL"}/>)
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
