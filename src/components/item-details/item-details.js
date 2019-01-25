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
    if (this.props.selectedId !== prevProps.selectedId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { selectedId, getData, getImageUrl } = this.props;
    
    if (!selectedId) {
      return;
    }

    getData(selectedId)
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
      return <span>Выберите персонажа из списка</span>
    }

    const { name } = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}
          alt="character" />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}