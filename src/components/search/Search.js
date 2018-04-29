import React from 'react';
import Backbutton from '../common/Backbutton';
import {API_KEY} from '../helpers/API_KEY';
import './search.css';

class Search extends React.Component {
  constructor() {
    super();

  }

  handleSubmit = (event) => {
    event.preventDefault();
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

          });
        })
        .catch((error) => {
          console.log(error)
          this.setState({

          })
        })

  } //

  render() {
    return(
      <div className="search__container">
        <form onSubmit={this.handleSubmit}>
          <input ref={(input) => this.searchQuery = input}/>
          <button>Search</button>
        </form>


        <Backbutton />
      </div>
    );
  }
}

export default Search;
