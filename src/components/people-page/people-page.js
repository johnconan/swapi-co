import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list'
import ItemDetails from '../item-details';
import Record from '../record';
import Row from '../row';


import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedId: 1,
        hasError: false
    }

    onItemSelected = (selectedId) => {
        this.setState({
            selectedId
        })
    }

    render() {

        const { getImagePerson, getPerson, getAllPeople } = this.swapiService;

        const { selectedId } = this.state;

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={getAllPeople}>
            </ItemList>
        );

        const personDetails = (
            <ItemDetails 
                selectedId={selectedId}
                getData={getPerson}
                getImageUrl={getImagePerson}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="birthYear" label="Birth Year" />

            </ItemDetails>
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}