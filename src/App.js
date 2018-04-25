import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/movies/List';
import Details from './components/details/Details';
import NotFound from './components/common/NotFound';
import PoweredBy from './components/common/PoweredBy';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/movie/:id" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

        <PoweredBy />
      </div>
    );
  }
}

export default App;
