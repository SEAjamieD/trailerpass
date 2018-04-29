import React from 'react';
import './stars.css';

class Stars extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      Viewer Rating: {this.props.rating}/10
      </div>
    );
  }
}

export default Stars;
