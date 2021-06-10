import Planet from "./entities/planet.js";

export default class Service {
  constructor({ url }) {
    this.url = url;
  }

  getPlanets() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((result) => result);
  }
  getPlanet(planetName) {
    return fetch(this.url)
      .then((response) => response.json())
      .then((result) =>
        result.filter((planet = new Planet()) => planet.name == planetName)
      );
  }
}
