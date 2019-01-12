

class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} 
            received ${res.status}`);
        }
    
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResourse(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResourse(`/people/${id}`);
    }

    async getPlanets() {
        const res = await this.getResourse(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResourse(`/planets/${id}`);
    }

    async getStarships() {
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }
    getStarship(id) {
        return this.getResourse(`/starships/${id}`);
    }

}

const swapi = new SwapiService();

swapi.getPerson(3).then((people) => {
    console.log(people.name, '----Один Персонаж');
})

swapi.getAllPeople().then((people) => {
    people.forEach(person => {
        console.log(person.name);
    });
})

swapi.getPlanets().then((planets) => {
    planets.forEach((planet) => {
        console.log(planet.name);
    })
})

swapi.getPlanet(2).then((planet) => {
    console.log(planet.name, '----одна планета');
})

swapi.getPlanets().then((starships) => {
    starships.forEach((starship) => {
        console.log(starship.name);
    })
})

swapi.getPlanet(2).then((starship) => {
    console.log(starship.name, '----один Корабль');
})
