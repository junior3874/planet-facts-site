import getMenuMobileTemplate from "./templates/menuMobile.js";

const navContent = document.getElementById("planet_options");
const mobileViewPort = window.matchMedia("(max-width: 786px)");
const body = document.querySelector("body");

export default class View {
  static loadingPlanets(planets) {
    this.planetNames = planets.map(({ name }) => name);
    this.planets = planets;
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
    navContent.innerHTML = "";
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
    const htmlTemplateMenuDesktop = getMenuMobileTemplate(this.planetNames);
    navContent.innerHTML = `${htmlTemplateMenuDesktop}`;

    this.addEventFromBtnListPlanets();
  }
  static addEventFromBtnListPlanets() {
    const btnListPlanets = View._getElementFromId({ id: "menu_select_planet" });
    btnListPlanets.addEventListener("click", View._eventFromBtnListPlanets);
  }

  static _removeScrollFromBody() {
    body.style.overflow = "hidden";
  }
  static _eventFromBtnListPlanets() {
    const modalListPlanets = View._getElementFromId({ id: "list_planets" });

    modalListPlanets.classList.toggle("active");

    // View.removeScrollFromBody();
  }
  // Menu desktop methods
  static _setMenuDesktop() {
    return;
    f;
  }

  //methods

  static setEventClickFromBtnPlanetOptionMobile(command) {
    const btnsPlanetOptionMobile = View._getElementsFromClass({
      className: "planet_option_mobile",
    });

    btnsPlanetOptionMobile.forEach((btn) => {
      btn.addEventListener("click", (args) =>
        View._eventClickFromBtnPlanetOptionMobile(args, command)
      );
    });
  }
  static _eventClickFromBtnPlanetOptionMobile(e, command) {
    command(e.currentTarget.id);
  }
}
