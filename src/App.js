import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Offline, Online } from 'react-detect-offline';

import Header from './components/common/Header';
import List from './components/movies/List';
import Details from './components/details/Details';
import NotFound from './components/common/NotFound';
import PoweredBy from './components/common/PoweredBy';
import AppOffline from './components/common/AppOffline';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Online>
          <Header />

            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/movie/:id" component={Details} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>

            <PoweredBy />
        </Online>

        <Offline>
          <Header />
          <AppOffline />
          <PoweredBy />
        </Offline>
      </div>
    );
  }
}

export default App;
