import React from 'react';
// import {API_KEY} from '../helpers/API_KEY';
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



    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&region=us&page=${pageNumber}`)
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


  handlePagination = (direction) => {
    let newPage = this.state.page;
    if (direction === 'next') {
      newPage += 1;
      this.setState({page: newPage}, () => this.fetchMovieData(this.state.page));
    } else if (direction === 'back') {
      newPage -= 1;
      this.setState({page: newPage}, () => this.fetchMovieData(this.state.page));
    }
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

        <Pagination page={page} totalPages={totalPages} handlePagination={this.handlePagination} />

      </div>
    );
  }
}

export default List;
