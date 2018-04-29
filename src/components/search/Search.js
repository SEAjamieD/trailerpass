import React from 'react';
import Backbutton from '../common/Backbutton';
import {withRouter} from 'react-router-dom';
import {API_KEY} from '../helpers/API_KEY';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      results: []
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    console.log(this.searchInput.value)

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchInput.value}&page=1&include_adult=false&region=en-US`)
        .then(response => {
          return response.json()
        .then(json => {
          return response.ok ? json : Promise.reject(json);
          });
        })
        .then((data) => {
          console.log('success');
          console.log(data);

          this.setState({
            loading: false,
            results: data.results
          });

          this.searchForm.reset();
          this.searchInput.blur();
        })
        .catch((error) => {
          console.log(error)
          this.setState({
            loading: false,
          })
        })

  } //

  formatReleaseYear = (year) => {
    if (year) {
      let formatYear = year.slice(0,4)
      return(
        <p className="search__release">{formatYear}</p>
      );
    }
  }


  render() {
    const {results} = this.state;
    const {history} = this.props;

    return(
      <div className="search__container">
        <div className="search__form-container">
          <form
            className="search__form"
            onSubmit={this.handleSubmit}
            ref={(form) => this.searchForm = form}
            >
            <input
              className="search__input"
              ref={(input) => this.searchInput = input}
              placeholder="Search by Movie Title"
              />
          </form>
        </div>

        <div className="search__results-container">
          {results.map((movie) => (
            <div className="search__movie" key={movie.id} onClick={() => history.push(`/movie/${movie.id}`)}>
                <div className="search__image-container">
                  <img className="search__image-poster" src={'https://image.tmdb.org/t/p/w200/' +  movie.poster_path} alt="movie poster"/>
                </div>
                <div className="search__movie-details">
                  <p className="search__title">{movie.title}</p>
                  {this.formatReleaseYear(movie.release_date)}
                </div>
            </div>
          ))}
        </div>


        <Backbutton />
      </div>
    );
  }
}

export default withRouter(Search);
