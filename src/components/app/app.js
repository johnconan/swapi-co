import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import Record from '../record';
import Row from '../row';

import SwapiService from '../../services/swapi-service';


import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  render() {

    const starshipDetails = (
      <ItemDetails 
          getData={this.swapiService.getStarship}
          getImageUrl={this.swapiService.getImageStarship}
          selectedId={9}>

          <Record field="model" label="Model" />
          <Record field="crew" label="Crew" />
          <Record field="length" label="Length" />

      </ItemDetails>
    );

    const itemPlanets = (
      <ItemList
          onItemSelected={5}
          getData={this.swapiService.getAllPlanets}>
      </ItemList>
    );

    const itemStarships = (
      <ItemList
          onItemSelected={3}
          getData={this.swapiService.getAllStarships}>
      </ItemList>
    );

    const planetDetails = (
      <ItemDetails 
          getData={this.swapiService.getPlanet}
          getImageUrl={this.swapiService.getImagePlanet}
          selectedId={7}>

          <Record field="population" label="Population" />
          <Record field="rotation_period" label="Rotation Period" />
          <Record field="diameter" label="Diameter" />

      </ItemDetails>
    );

    return (
      <div>
        <Header />
        <RandomPlanet getData={this.swapiService.getPlanet}
                      getImageUrl={this.swapiService.getImagePlanet} />
        <PeoplePage />
        
        <Row left={itemStarships} right={starshipDetails} />
        <Row left={itemPlanets} right={planetDetails} />
      </div>
    );
  }

};

export default App;