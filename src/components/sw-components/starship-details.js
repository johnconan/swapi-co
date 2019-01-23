import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const StarshipDetails = ({ itemId }) => {
  return (
      <SwapiServiceConsumer>
          {
              ({ getStarship, getImageStarship }) => {
                  return (
                      <ItemDetails
                          selectedId={itemId}
                          getData={getStarship}
                          getImageUrl={getImageStarship}>

                          <Record field="length" label="Length" />
                          <Record field="manufacturer" label="Manufacturer" />
                          <Record field="cost_in_credits" label="Cost in credits" />
                          <Record field="crew" label="Crew" />
                          <Record field="passengers" label="Passengers" />
                          <Record field="cargo_capacity" label="Cargo capacity" />
                      </ItemDetails>
                  );
              }
          }
      </SwapiServiceConsumer>
  );
};

export default StarshipDetails;