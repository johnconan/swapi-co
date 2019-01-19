import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
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
    const { selectedPersonId, getData, getImageUrl } = this.props;
    if (!selectedPersonId) {
      return;
    }

    getData(selectedPersonId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        });
      });
  }
  

  render() {

    const { item, image } = this.state;

    if (!item) {
      return <span>Выберите персонажа из списка</span>;
    }

    const {name, gender, birthYear, eyeColor } = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}
          alt="character" />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}