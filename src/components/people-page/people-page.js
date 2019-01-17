import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorLoad from '../error-indicator'
import Row from '../row';

import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPersonId: 5,
        hasError: false
    }

    onItemSelected = (selectedPersonId) => {
        this.setState({
            selectedPersonId
        })
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorLoad />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}
            />
        );

        const personDetails = (
            <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}