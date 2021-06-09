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
  }

  onGetPlanetsFromService() {
    return this.service.getPlanets();
  }
}
