import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { selectedPersonId } = this.props;
    if (!selectedPersonId) {
      return;
    }

    this.swapiService
      .getPerson(selectedPersonId)
      .then((person) => {
        this.setState({ person });
      });
  }

  render() {

    const { person } = this.state;

    if (!person) {
      return <span>Выберите персонажа из списка</span>;
    }

    const { person: { id, name, gender,
      birthYear, eyeColor } } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}