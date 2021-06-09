export default class Controller {
  constructor({ service, view }) {
    this.service = service;
    this.view = view;
  }

  static initialize(deps) {
    return new Controller(deps)._initialize();
  }
  _initialize() {
    this.view.initializeMobileViewPort();
  }
}
