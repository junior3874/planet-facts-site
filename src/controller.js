import Planet from "./entities/planet.js";

export default class Controller {
  constructor({ service, view }) {
    this.service = service;
    this.view = view;
  }
  planets = [];

  static initialize(deps) {
    return new Controller(deps)._initialize();
  }
  _initialize() {
    this._setupViewEvents();
  }

  async _setupViewEvents() {
    const planets = await this.onGetPlanetsFromService();
    await this.view.loadingPlanets(planets);
    this.view.initializeMobileViewPort();
    this.view.setEventClickFromBtnPlanetOptionMobile(this.changePlanetPage());
  }

  onGetPlanetsFromService() {
    return this.service.getPlanets();
  }

  changePlanetPage() {
    return async (planetName) => {
      const planetData = await this.service.getPlanet(planetName);

      const planet = new Planet(...planetData);
      console.log(planet);
    };
  }
}
