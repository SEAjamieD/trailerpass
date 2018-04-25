import React from 'react';
import {API_KEY} from '../helpers/API_KEY';
import './details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      video: []
    }
  }

  componentDidMount() {
    const {match} = this.props;

    fetch(`http://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&append_to_response=videos`)
      .then(response => {
        return response.json()
      .then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      console.log('detail success');
      console.log(data);
      this.setState({
        movie: data,
        video: data.videos.results
      })
    })

  }


  render() {
    const {movie} = this.state;
    return (
      <div className="details__container">
        <div className="details__youtube full-flex">
          trailer coming soon
        </div>
        <div className="details__lower-info">
          <h1 className="details__title">{movie.original_title}</h1>
          <p className="details__release-date">Released: {movie.release_date}</p>
          <p className="details__overview">{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default Details;
