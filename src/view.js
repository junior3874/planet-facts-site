import getMenuMobileTemplate from "./templates/menuMobile.js";

const navContent = document.getElementById("planet_options");
const mobileViewPort = window.matchMedia("(max-width: 786px)");
const body = document.querySelector("body");

const planetSourceP = document.getElementById("planet_source_p");
const planetSourceLink = document.getElementById("planet_source_a");
const planetName = document.getElementById("planet_source_name");

const planetRotation = document.getElementById("planet_prop_rotation_time");
const planetRevolution = document.getElementById("planet_prop_revolution_time");
const planetRadius = document.getElementById("planet_prop_radius");
const planetTemperature = document.getElementById("planet_prop_average_temp");

const btnsMenuOptionPlanet = document.querySelectorAll(
  '[class="planet_menu_option"]'
);

export default class View {
  static currentMenu = {};
  static currentPlanet = {};
  static command;

  static loadingPlanets(planets) {
    this.planetNames = planets.map(({ name }) => name);
    const firstPlanet = planets[0];
    View.setPlanetInPage(firstPlanet);
  }

  static setPlanetInPage(planet) {
    this.currentPlanet = planet;

    const initialMenuPlanet = this.currentPlanet.overview;

    View._setMenuPlanet(initialMenuPlanet);
    View._setPlanetName();
    View._setPlanetProp();
  }

  static setCommandForGetPlanet(command) {
    this.command = command;
    return this;
  }

  static _setPlanetName() {
    const planetNameInHtml = this.currentPlanet.name;
    planetName.innerHTML = planetNameInHtml;
  }
  static _setPlanetProp() {
    const { rotation, revolution, radius, temperature } = this.currentPlanet;

    planetRotation.innerHTML = rotation;
    planetRevolution.innerHTML = revolution;
    planetRadius.innerHTML = radius;
    planetTemperature.innerHTML = temperature;
  }

  static _setMenuPlanet(menu) {
    this.currentMenuProxy.data = menu;
  }

  static initializeMonitoringPlanetMenu() {
    this.currentMenuProxy = new Proxy(this.currentMenu, {
      set: function (target, key, value) {
        if (value === View.currentMenu) return true;
        target = value;
        View._onSetMenu(value);
        return true;
      },
    });
  }

  static _onSetMenu(value) {
    this.currentMenu = value;
    View._onSetMenuSource();
    View._onSetMenuImage();
  }

  static _onSetMenuImage() {}

  static _onSetMenuSource() {
    const textOnElementP = this.currentMenu.content;
    planetSourceP.innerHTML = textOnElementP;

    const textOnElementWikipediaLink = this.currentMenu.source;

    planetSourceLink.href = textOnElementWikipediaLink;
  }

  static initializeMobileViewPort() {
    View._monitoringMobileViewPort();
    mobileViewPort.addListener(View._monitoringMobileViewPort);
  }

  static _monitoringMobileViewPort() {
    View._removeOldContentHeader();
    mobileViewPort.matches ? View._setMenuMobile() : View._setMenuDesktop();
  }

  static _removeOldContentHeader() {
    const htmlNavChild = View._getElementFromId({ id: "menu_select_mobile" });
    htmlNavChild ? navContent.removeChild(htmlNavChild) : null;
  }

  static _getElementFromId({ id, baseElement = document }) {
    const existingItem = baseElement.querySelector(`[id="${id}"]`);
    return existingItem;
  }

  static _getElementsFromClass({ className, baseElement = document }) {
    const existingItem = baseElement.querySelectorAll(`[class=${className}]`);
    return existingItem;
  }

  // Menu mobile methods
  static async _setMenuMobile() {
    const htmlTemplateMenuMobile = getMenuMobileTemplate(this.planetNames);

    navContent.innerHTML = `${htmlTemplateMenuMobile}`;
    this.setEventClickFromBtnPlanetOptionMobile();
    this.addEventFromBtnOpenModalListPlanets();
  }
  static addEventFromBtnOpenModalListPlanets() {
    const btnListPlanets = View._getElementFromId({ id: "menu_select_planet" });
    btnListPlanets.addEventListener(
      "click",
      View._eventFromBtnOpenModalListPlanets
    );
  }

  static _removeOrAddScrollFromBody(state) {
    const stateOverFlowBody = state == "active" ? "hidden" : "scroll";
    body.style.overflow = stateOverFlowBody;
  }
  static _eventFromBtnOpenModalListPlanets() {
    const modalListPlanets = View._getElementFromId({ id: "list_planets" });
    modalListPlanets.classList.toggle("active");

    const actualStateFromModalList = modalListPlanets.classList[0];
    View._removeOrAddScrollFromBody(actualStateFromModalList);
  }
  // Menu desktop methods
  static _setMenuDesktop() {
    return;
  }

  //methods

  static setEventClickForBtnMenuPlanetOption() {
    btnsMenuOptionPlanet.forEach((btn) => {
      btn.addEventListener("click", View._setNewMenuFromPlanetPage);
    });
  }

  static _setNewMenuFromPlanetPage(event) {
    const menuProp = event.currentTarget.id;
    const newMenuProp = View.currentPlanet[menuProp];

    View.currentMenuProxy.data = newMenuProp;
  }

  static setEventClickFromBtnPlanetOptionMobile() {
    const btnsPlanetOptionMobile = View._getElementsFromClass({
      className: "planet_option_mobile",
    });

    btnsPlanetOptionMobile.forEach((btn) => {
      btn.addEventListener("click", (args) => {
        View._getPlanetPage(args, View.command);
        return View._eventFromBtnOpenModalListPlanets();
      });
    });
  }
  static _getPlanetPage(e, command) {
    command(e.currentTarget.id);
  }
}
