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
    console.log(this.searchQuery.value)

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery.value}&page=1&include_adult=false&region=en-US`)
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

          this.searchQuery.reset();
        })
        .catch((error) => {
          console.log(error)
          this.setState({
            loading: false,
          })
        })

  } //


  render() {
    const {results} = this.state;
    const {history} = this.props;

    return(
      <div className="search__container">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search__input"
            ref={(input) => this.searchQuery = input}
            placeholder="Search by Movie Title"
            />
        </form>

        <div className="search__results-container">
          {results.map((movie) => (
            <div className="search__movie" key={movie.id} onClick={() => history.push(`/movie/${movie.id}`)}>
                <div className="search__image-container">
                  <img className="search__image-poster" src={'https://image.tmdb.org/t/p/w200/' +  movie.poster_path} alt="movie poster"/>
                </div>
                <div>
                  <p className="search__title">{movie.title}</p>
                  <p className="search__release">{movie.release_date}</p>
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
