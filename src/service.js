export default class Service {
  constructor({ url }) {
    this.url = url;
  }

  getPlanets() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((result) => result);
  }
}
