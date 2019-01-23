export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

   getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

   getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }
   getResidentPlanet = async (id) => {
    const res = await this.getResource(`https://swapi.co/api/planets/${id}`);
    return res.residents;
  }

   getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

   getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

   getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

   getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

   getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getImagePlanet = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  }

  getImagePerson = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  getImageStarship = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  _extractResidentId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.match(idRegExp)[1];
  }

  _transformResidentPlanet = (resident) => {
    return {
      id: this._extractResidentId(resident)
    }
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotation_period: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      cost_in_credits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargo_capacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birth_year: person.birth_year,
      eye_color: person.eye_color,
      height: person.height,
      mass: person.mass,
      hair_color: person.hair_color
    }
  }
}

