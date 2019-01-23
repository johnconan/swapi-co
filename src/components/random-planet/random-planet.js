import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './random-planet.css';

import Spinner from '../spinner';
import ErrorLoad from '../error-indicator';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  static defaultProps = {
    secondsUpdate: 4000
  }

  static propTypes = {
    secondsUpdate: PropTypes.number
  }

  state = {
    planet: {},
    loading: true,
    error: false,
    image: null
  }

  componentDidMount() {
    const { secondsUpdate } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, secondsUpdate);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    const { getImagePlanet } = this.swapiService;
    this.setState({
      planet: planet,
      loading: false,
      image: getImagePlanet(planet)
    });
  };

  onErrorLoading = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 10) + 2;
    const { getPlanet } = this.swapiService;
      getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onErrorLoading);
  }

  render() {

    const { planet, loading, error, image } = this.state;

    const hasData = !(loading || error);

    const err = error ? <ErrorLoad /> : null;

    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView 
                                  getImage={image}
                                  planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {err}
        {spinner}
        {content}
      </div>
    );
  }
}

class PlanetView extends Component {

  render() {
    const { name, population, rotationPeriod, diameter } = this.props.planet;
    const { getImage } = this.props;

    return (
      <React.Fragment>
        <img className="planet-image"
          src={ getImage } alt="planet" />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }

}