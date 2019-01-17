import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';


import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
      </div>
    );
  }

};

export default App;