import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';


import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <div>
        <Header />
        <RandomPlanet getData={this.swapiService.getPlanet}
                      getImageUrl={this.swapiService.getImagePlanet} />
        <PeoplePage />
      </div>
    );
  }

};

export default App;