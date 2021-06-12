import Planet from "./entities/planet.js";

export default class Controller {
  constructor({ service, view }) {
    this.service = service;
    this.view = view;
  }

  static initialize(deps) {
    return new Controller(deps)._initialize();
  }
  _initialize() {
    this._setupViewEvents();
  }

  async _setupViewEvents() {
    const planets = await this.onGetPlanetsFromService();
    this.view.initializeMonitoringPlanetMenu();
    await this.view.loadingPlanets(planets);
    this.view.setCommandForGetPlanet(this.changePlanetPage());
    this.view.initializeMobileViewPort();

    this.view.setEventClickForBtnMenuPlanetOption();
  }

  onGetPlanetsFromService() {
    return this.service.getPlanets();
  }

  changePlanetPage() {
    return async (planetName) => {
      const planetData = await this.service.getPlanet(planetName);

      const planet = new Planet(...planetData);

      return this.view.setPlanetInPage(planet);
    };
  }
}
