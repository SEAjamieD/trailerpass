import React from 'react';
import YouTube from 'react-youtube';
import {API_KEY} from '../helpers/API_KEY';
import './details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      video: null
    }
  }

  componentDidMount() {
    const {match} = this.props;

    fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&append_to_response=videos`)
      .then(response => {
        return response.json()
      .then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      console.log('detail success');
      console.log(data);
      if (data.videos.results[0]) {
        this.setState({
          movie: data,
          video: data.videos.results[0].key
        })
      } else {
        this.setState({
          movie: data,
          video: null
        })
      }
    })

  }

  render() {
    const {movie, video} = this.state;

    const opts = {
          height: '300px',
          width: '100%',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        };

    return (
      <div className="details__container">
          <YouTube
            opts={opts}
            videoId={video}
            />
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
