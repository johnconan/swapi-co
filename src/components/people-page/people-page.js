import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list'
import ItemDetails from '../item-details'
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPersonId: 5,
        hasError: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPersonId: id
        })
    }

    render() {

        const { getImagePerson, getPerson, getAllPeople } = this.swapiService;

        const { selectedPersonId } = this.state;

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={getAllPeople}
            >
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails selectedPersonId={selectedPersonId}
                             getData={getPerson}
                             getImageUrl={getImagePerson}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}