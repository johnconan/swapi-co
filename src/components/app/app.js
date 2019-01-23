import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import {StarshipDetails} from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';
import {PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet/>

              <Route path="/"
                     render={() => <h2 className="welcome">Welcome to StarWars DataBase!</h2>}
                     exact/>

              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route path="/starships/:id"
                     render={({ match }) => {
                        const { id } = match.params;
                        return <StarshipDetails itemId={id}/>
                     }}/>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
