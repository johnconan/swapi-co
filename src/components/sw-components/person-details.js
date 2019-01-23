import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => {
  return (
      <SwapiServiceConsumer>
          {
            ({ getPerson, getImagePerson }) => {
                return (
                    <ItemDetails
                        selectedId={itemId}
                        getData={getPerson}
                        getImageUrl={getImagePerson}>

                        <Record field="gender" label="Gender" />
                        <Record field="eye_color" label="Eye Color" />
                        <Record field="birth_year" label="Birth Year" />
                        <Record field="height" label="Height" />
                        <Record field="mass" label="Mass" />
                        <Record field="hair_color" label="Hair Color" />
                        
                    </ItemDetails>
                );
            }
          }
      </SwapiServiceConsumer>
  );
};

export default PersonDetails;