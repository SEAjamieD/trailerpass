import React from 'react';
import {API_KEY} from '../helpers/API_KEY';
import {withRouter} from 'react-router-dom';
import Loading from '../common/Loading';
import './list.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      popular: [],
      moreMovies: [],
      randomMovie: {},
      page: 1,
      totalPages: 0,
      error: null
    }
  }


  componentDidMount() {
    this.fetchMovieData(this.state.page);
  }

  fetchMovieData = (pageNumber) => {
    this.setState({loading: true})
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&region=us&page=${pageNumber}`)
      .then(response => {
        return response.json()
      .then(json => {
        return response.ok ? json : Promise.reject(json);
        });
      })
      .then((data) => {
        console.log('success');
        console.log(data);
        let randomIndex = Math.floor(Math.random() * 10);
        let popularMovies = data.results.slice(0,10);
        let moreMovies = data.results.slice(11,20);
        let randomMovie = popularMovies[randomIndex];
        let randomMovieBackDrop = 'https://image.tmdb.org/t/p/w500/' + randomMovie.backdrop_path;

        this.setState({
          popular: popularMovies,
          moreMovies: moreMovies,
          randomMovie: randomMovie,
          randomMovieBackDrop: randomMovieBackDrop,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          error: error.status_message,
          loading: false
        })
      })
  }


  render() {
    const {popular, moreMovies, randomMovie} = this.state;
    const {history} = this.props;

    if (this.state.loading === true) {
      return (
        <Loading />
      );
    }

    if (this.state.error) {
      return(
        <div className="list__error-message-container full-flex">
          <p className="list__error-message">Sorry, but we're having some trouble.  It looks like we {this.state.error}</p>
        </div>
      );
    }


    return (
      <div className="list__container">
        <div className="list__random" onClick={() => history.push(`/movie/${randomMovie.id}`)}>
          <h2 className="list__random-title text-shadow">{randomMovie.title}</h2>
          <img className="list__random-image" src={this.state.randomMovieBackDrop} alt="movie backdrop"/>
        </div>
        <h2 className="list__section-title text-shadow">Popular Movies</h2>
        <div className="list__slider-container">
          {popular.map((movie) => (
            <div key={movie.id} className="list__image-poster" onClick={() => history.push(`/movie/${movie.id}`)}>
                <img src={'https://image.tmdb.org/t/p/w200/' +  movie.poster_path} alt="movie poster"/>
            </div>
          ))}
        </div>

        <h2 className="list__section-title text-shadow">Now Playing</h2>
        <div className="list__slider-container">
          {moreMovies.map((movie) => (
            <div key={movie.id} className="list__image-poster" onClick={() => history.push(`/movie/${movie.id}`)}>
                <img src={'https://image.tmdb.org/t/p/w200/' +  movie.poster_path} alt="movie poster"/>
            </div>
          ))}
        </div>

        <div className="search__button"
            onClick={() => history.push(`/search`)}>

        </div>

      </div>
    );
  }
}

export default withRouter(List);
