import React, { Component } from 'react';
import Header from './components/common/Header';
import List from './components/movies/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
