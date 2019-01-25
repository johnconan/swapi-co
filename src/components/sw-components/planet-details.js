import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PlanetDetails = ({ selectedId }) => {
  return (
      <SwapiServiceConsumer>
          {
              ({ getImagePlanet, getPlanet }) => {
                  return (
                      <div>
                        <ItemDetails
                            selectedId={selectedId}
                            getData={getPlanet}
                            getImageUrl={getImagePlanet}>

                            <Record field="population" label="Population" />
                            <Record field="diameter" label="Diameter" />
                            <Record field="rotation_period" label="Rotation period" />
                        </ItemDetails>
                      </div>
                  );
              }
          }
      </SwapiServiceConsumer>
  );
};

export default PlanetDetails;
