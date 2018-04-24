import React from 'react';
import {API_KEY} from '../helpers/API_KEY';
import Pagination from '../common/Pagination';
import './list.css';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      page: 1,
      totalPages: 0
    }
  }


  componentDidMount() {
    this.fetchMovieData(this.state.page);
  }

  fetchMovieData = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=us&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_date.gte=2018-02-07&release_date.lte=2018-02-07&page=${pageNumber}`)
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
          movies: data.results,
          totalPages: data.total_pages
        });
      })
  }



  render() {
    const {movies, page, totalPages} = this.state;

    return (
      <div>
        <div className="list__container">
          {movies.map((movie) => (
            <div key={movie.id} className="list__image-poster">
              <img src={'http://image.tmdb.org/t/p/w200/' +  movie.poster_path} alt="movie poster"/>
            </div>
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} />

      </div>
    );
  }
}

export default List;
